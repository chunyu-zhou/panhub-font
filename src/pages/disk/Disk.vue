<template>
  <div
    id="disk-page"
    @keydown.ctrl.stop="selectAll($event)"
    @keydown.meta.stop="selectAll($event)"
    @dragleave="hideDrag"
    @dragover="hideDrag"
    @dragenter="showDrag"
    @drop='$store.state.Uploader.UploaderDrag=false'
  >
    <div class="_dnd" id="_dnd" :class="$store.state.Uploader.UploaderDrag?'ui-dnd':''">
      <div
        style="top: 50%; left: 50%; margin-left: -50px; margin-top: -50px; font-size: 24px; opacity: 1; position: absolute;"
      >文件拖放到此处</div>
    </div>
    <div id="disk" @contextmenu.prevent.stop>
      <network></network>
      <leftWarp/>
      <rightWarp ref="rightWarp"/>
    </div>
    <Uploader ref="Uploader" :opts="options" :is="isInitUploader"/>
  </div>
</template>
<script>
import Network from "@/components/network.vue";
import leftWarp from "./conponents/leftWarp.vue";
import rightWarp from "./conponents/rightWarp.vue";
import Uploader from "@/components/Uploader/Uploader.vue";
export default {
  components: {
    Network,
    leftWarp,
    rightWarp,
    Uploader
  },
  data() {
    return {
      isInitUploader: false,
      options: {
        target: "api/Upload",
        chunkSize: 1 * 1024 * 1024,
        simultaneousUploads: 3,
        headers: {
          // Authorization: Ticket.get() && "Bearer " + Ticket.get().access_token
        },
        query() {},
        uploadConfig: {}
      }
    };
  },
  created() {
    var that = this;
    document.onkeydown = function(e) {
      var key = event.keyCode;
      if (e.ctrlKey && key == 65) {
        // ctrl + a
        that.selectAll(e);
      }
      if (e.ctrlKey && key == 83) {
        // ctrl + s
        that.ctrl_s(e);
      }
      if (e.ctrlKey && key == 88) {
        // ctrl + x
        that.ctrl_x(e);
      }
      if (e.ctrlKey && key == 86) {
        // ctrl + v
        that.ctrl_v(e);
      }
      if (e.ctrlKey && key == 67) {
        // ctrl + c
        that.ctrl_c(e);
      }
    };
    this.getUploadConfig();
  },
  methods: {
    getUploadConfig() {
      this.isInitUploader = Uploader;
      /*this.$ajax.get(ApiUrl.UploadApiUrl.getConfig, {}, {}).then(function (ret) {
          let dataS = ret.data;
          let data = dataS.data;
          if (dataS.code == 200) {
              this.options.target = data.upload_url;
              this.options.max = data.max;
              this.options.thread = data.max_upload;
              this.options.chunkSize = data.chunkSize;
              this.isInitUploader = Uploader;
              this.options.uploadConfig = data;
          } else {

          }
      }.bind(this));*/
    },
    hideDrag(e) {
      this.$store.state.Uploader.UploaderDrag =
        (e.clientX > 0 && e.clientY > 0) === true ? true : false;
    },
    showDrag(e) {
      this.$store.state.Uploader.UploaderDrag = true;
    },
    ctrl_x($event) {
      if ($event.stopPropagation) {
        $event.stopPropagation();
      }
      if ($event.preventDefault) {
        $event.preventDefault();
      }
      if (this.noSelect() == false) {
        return false;
      }

      this.$refs.rightWarp.$refs.fileList.openFileActionModel("移动到");
    },
    ctrl_v($event) {
      if ($event.stopPropagation) {
        $event.stopPropagation();
      }
      if ($event.preventDefault) {
        $event.preventDefault();
      }
      return false;
      // this.$refs.rightWarp.$refs.fileList.openFileActionModel('复制到')
    },
    ctrl_c($event) {
      if ($event.stopPropagation) {
        $event.stopPropagation();
      }
      if ($event.preventDefault) {
        $event.preventDefault();
      }
      if (this.noSelect() == false) {
        return false;
      }
      this.$refs.rightWarp.$refs.fileList.openFileActionModel("复制到");
    },
    ctrl_s($event) {
      if ($event.stopPropagation) {
        $event.stopPropagation();
      }
      if ($event.preventDefault) {
        $event.preventDefault();
      }
      // this.$Message.info('This is a info tip');
      return false;
    },
    selectAll($event) {
      if ($event.stopPropagation) {
        $event.stopPropagation();
      }
      if ($event.preventDefault) {
        $event.preventDefault();
      }
      $event.preventDefault();
      this.$refs.rightWarp.$refs.fileList.selectAll();
      return false;
    },
    noSelect() {
      let dirs = this.$store.state.selectedItems.dirs;
      let files = this.$store.state.selectedItems.files;
      if (dirs.length == 0 && files.length == 0) {
        this.$Message.warning("当前没有选中文件");
        return false;
      }
    }
  }
};
</script>

<style scoped lang="less">
</style>
