<template>
  <div
    class="Uploader file-upload-wrap"
    :class="fileList.length >= 0 ?'show':''"
    :style="{width:panelHideList?'50px': '735px'}"
  >
    <div
      :files="files"
      :file-list="fileList"
      :started="started"
    >
      <div
        class="file-upload-view show-upload-view"
        :style="{backgroundColor: panelHideList ? 'transparent' : '#fff',border: panelHideList ? 'none' : '1px solid #f0f0f0', boxShadow: panelHideList ? 'none' : '-4px -4px 13px 0 rgba(213, 217, 220, 0.33)'}"
      >
        <div class="progress-wrapper" v-show="panelHideList" @click="panelHideList=!panelHideList">
          <b class="progress">
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 36 36"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <circle
                id="Combined-Shape"
                :stroke="UploadedSize == AllFileSize && AllFileSize != 0 ? '#01BD88' : '#00A4FF'"
                fill="transparent"
                stroke-width="2"
                cx="18"
                cy="18"
                r="17"
                :style="{
                        strokeDashoffset:1000 - (AllFileSize == 0 ? 0 : (106 / 100) * (UploadedSize / AllFileSize) * 100)

                        }"
              ></circle>
            </svg>
          </b>
          <button
            class="btn btn-icon"
          >{{ UploadedSize == AllFileSize ? '完成' : Math.floor(UploadedSize / AllFileSize * 100 )+'%' }}</button>
        </div>
        <div v-show="!panelHideList">
          <div class="upload-view-header dp-f">
            <div class="head-completed dp-f">
              <div class="success">
                <i
                  class="ivu-icon ivu-icon-ios-checkmark-outline"
                  style="font-size: 20px; color: rgb(79, 189, 18);"
                ></i>
                <span>上传成功1个</span>
              </div>
            </div>
            <div class="upload-close dp-f">
              <div class="min">
                <i class="icon-window-fold" @click="panelHideList=!panelHideList"></i>
              </div>
              <div class="close">
                <i class="icon-all-close"></i>
              </div>
            </div>
          </div>
          <div class="upload-view-title">
            <div class="title-file-name">文件(夹)名</div>
            <div class="title-file-size">大小</div>
            <div class="title-target-dir">上传目录</div>
            <div class="title-upload-status" style="width: 138px;">状态</div>
            <div class="title-upload-status" style="padding-left: 10px;">操作</div>
          </div>
          <div class="upload-view-body">
            <div class="uploader-list">
              <slot :file-list="fileList">
                <ul>
                  <li class="upload-file-item dp-f" v-for="file in fileList" :key="file.id">
                    <uploader-file :file="file" :list="true"></uploader-file>
                  </li>
                </ul>
              </slot>
            </div>
            <!--<uploader-list></uploader-list>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UploaderFile from "./uploaderFile";
import SparkMD5 from "spark-md5";
import uploader from "./Uploader.vue";
import { formatSize, getNotUploadFile, extType } from "@/assets/js/utils";
import Uploader from "./common/uploader";
import { kebabCase } from "./common/utils";

const FILE_ADDED_EVENT = "fileAdded";
const FILES_ADDED_EVENT = "filesAdded";
const UPLOAD_START_EVENT = "uploadStart";

export default {
  name: "UploaderPlugn",
  components: {
    UploaderFile
  },
  provide() {
    return {
      uploader: this
    };
  },
  props: {
    opts: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      options: {
        target: process.env.VUE_APP_API_URL + "Upload",
        chunkSize: 1 * 1024 * 1024,
        fileParameterName: "file",
        forceChunkSize: true,
        maxChunkRetries: 3,
        simultaneousUploads: 3,
        testChunks: true, //是否开启服务器分片校验
        speedSmoothingFactor: 0.02,
        progressCallbacksInterval: 200,
        method: "octet",
        allowDuplicateUploads: true,
        // 服务器分片校验函数，秒传及断点续传基础
        checkChunkUploadedByResponse: function(chunk, message) {
          message = JSON.parse(message);
          let ret = message.data;
          if (ret.skipUpload) {
            chunk.file.status = "success";
            chunk.file.statusText = "秒传";
            chunk.file.statusCode = 20001;
            chunk.file.file_path = chunk.file.savePath;
            chunk.file.isrun = false;
            chunk.file.run_type = "";
            chunk.file.step = "added";
            chunk.file.is_task = false;
            chunk.file.id = new Date().getTime();
            return true;
          }

          if (chunk.tested === true) {
            return false;
          }
          return (ret.uploaded || []).indexOf(chunk.offset + 1) > -1;
        },
        headers: {
          // Authorization: this.$store.stat.User.UserToken
        },
        query: {}
      },
      started: false,
      fileStatusText: {
        success: "上传成功",
        error: "上传失败",
        uploading: "正在上传",
        paused: "暂停上传",
        waiting: "等待上传"
      },
      files: [],
      fileList: [],
      panelShow: false,
      panelHideList: false,
      uploadConfig: {},
      getConfigLoding: true,
      AllFileSize: 0,
      UploadedSize: 0,
      currTaskNum: 0
    };
  },
  methods: {
    uploadStart() {
      this.started = true;
    },
    fileAdded(file) {
      if (file.ignored) {
        // is ignored, filter it
        return false;
      }
      let dirId =
        typeof this.$route.params.dir_id == "undefined"
          ? "/"
          : this.$route.params.dir_id;
      file.savePath = dirId;
      if (
        typeof this.uploadConfig.max_file_size != "undefined" &&
        this.uploadConfig.max_file_size > 0 &&
        file.size > this.uploadConfig.max_file_size
      ) {
        file.status = "error";
        file.statusCode = 411;
        file.statusStrTitle =
          "超出" + formatSize(this.uploadConfig.max_file_size) + "限制";
        file.error = true;
        file.isrun = false;
        file.run_type = "";
        file.step = "error";
        file.is_task = false;
        return false;
      } else if (
        typeof this.uploadConfig.zone_size != "undefined" &&
        file.size > this.uploadConfig.zone_size
      ) {
        file.status = "error";
        file.statusCode = 411;
        file.statusStrTitle = "空间不足";
        file.error = true;
        file.isrun = false;
        file.run_type = "";
        file.step = "error";
        file.is_task = false;
        return false;
      }
    },
    filesAdded(files, fileList) {
      this.$emit(kebabCase(FILES_ADDED_EVENT), files, fileList);
      if (files.ignored || fileList.ignored) {
        // is ignored, filter it
        return false;
      }
    },
    fileRemoved(file) {
      this.files = this.uploader.files;
      this.fileList = this.uploader.fileList;
    },
    filesSubmitted(files, fileList) {
      this.files = this.uploader.files;
      this.fileList = this.uploader.fileList;
      this.uploader.upload();
    },
    fileSuccess(rootFile, file, response, chunk) {
      let res = JSON.parse(response);
      if (!res.data) {
        this.$message.error(res.message);
        this.setTaskDec();
        return;
      }
      // 如果服务端返回需要合并
      if (res.data.needMerge) {
        file.status = "merge";
        file.statusText = "正在效验";
        this.$ajax
          .post(
            ApiUrl.UploadApiUrl.merge,
            {
              tempName: res.tempName,
              fileName: file.name,
              md5: file.uniqueIdentifier,
              pdir: file.savePath,
              fileSize: file.size,
              save_path: file.relativePath,
              ...this.params
            },
            {}
          )
          .then(
            function(ret) {
              let dataS = ret.data;
              let data = dataS.data;
              if (dataS.code == 200) {
                file.status = "success";
                file.statusText = "上传成功";
                file.file_path = data.file_path;
                this.$store.stat.Batch.zone = data.zone;
                this.$store.stat.Batch.use_zone = data.use_zone;
                file.isrun = false;
                file.run_type = "success";
                file.step = "";
                file.is_task = false;
              } else {
                file.isrun = false;
                file.run_type = "success";
                file.step = "";
                file.is_task = false;
                file.status = "error";
                file.statusText = "上传失败";
              }
              file.id = new Date().getTime();
            }.bind(this)
          );
        return;
        // 不需要合并
      } else {
        file.isrun = false;
        file.run_type = "success";
        file.step = "";
        file.is_task = false;
        file.is_task = false;
        file.id = new Date().getTime();
      }
    },
    fileError(rootFile, file, message, chunk) {},
    fileProgress(rootFile, file, chunk) {},
    fileComplete(rootFile) {},
    fileRetry(rootFile, file, chunk) {},
    fileRemoved(file) {},
    uploadStart() {},
    complete() {},

    allEvent(...args) {
      const name = args[0];
      const EVENTSMAP = {
        [FILE_ADDED_EVENT]: true,
        [FILES_ADDED_EVENT]: true,
        [UPLOAD_START_EVENT]: "uploadStart"
      };
      const handler = EVENTSMAP[name];
      if (handler) {
        if (handler === true) {
          return;
        }
        this[handler].apply(this, args.slice(1));
      }
      args[0] = kebabCase(name);
      this.$emit.apply(this, args);
    },
  },
  created() {
    let opts = this.opts;
    this.options.target = opts.target;
    this.options.chunkSize = opts.chunkSize;
    this.options.simultaneousUploads = opts.simultaneousUploads;
    this.options.max = opts.max;
    if (typeof opts.headers != "undefined" && opts.headers != {}) {
      this.options.headers = Object.assign(this.options.headers, opts.headers);
    }
    this.options.query = Object.assign(this.options.query, opts.query);
    this.uploadConfig = opts.uploadConfig;

    const uploader = new Uploader(this.options);
    this.uploader = uploader;
    uploader.assignDrop(document.getElementsByTagName("body"));
    this.uploader.fileStatusText = this.fileStatusText;
    uploader.on("catchAll", this.allEvent);
    uploader.on(FILE_ADDED_EVENT, this.fileAdded);
    uploader.on(FILES_ADDED_EVENT, this.filesAdded);
    uploader.on("fileRemoved", this.fileRemoved);
    uploader.on("filesSubmitted", this.filesSubmitted);
    uploader.on("fileSuccess", this.fileSuccess);
    uploader.on("fileComplete", this.fileComplete);
    uploader.on("fileProgress", this.fileProgress);
    uploader.on("fileRetry", this.fileRetry);
    uploader.on("fileError", this.fileError);
    uploader.on("uploadStart", this.uploadStart);
    uploader.on("complete", this.complete);
  },
  destroyed() {
    const uploader = this.uploader;
    uploader.off("catchAll", this.allEvent);
    uploader.off(FILE_ADDED_EVENT, this.fileAdded);
    uploader.off(FILES_ADDED_EVENT, this.filesAdded);
    uploader.off("fileRemoved", this.fileRemoved);
    uploader.off("filesSubmitted", this.filesSubmitted);
    this.uploader = null;
  }
};
</script>

<style lang="less">
.Uploader.file-upload-wrap {
  visibility: hidden;
}
.Uploader.file-upload-wrap.show {
  visibility: visible;
}
</style>