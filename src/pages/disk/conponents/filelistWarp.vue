<template>
  <div id="file-list-warp" @keydown.ctrl.65.stop="selectAll($event)" @keydown.meta.65.stop="selectAll($event)">
    <div class="content">
      <div class="file-list-content">
        <div class="content-top-position">
          <div class="snack-loading-warpper" v-show="ajaxLoad">
            <div class="snack-loading-container">
              <div class="loading-circle-spin" style="width:20px;height:20px">
                <div
                  class="loading-circle-spin-container snack-loading-circle-spin-container"
                  style="transform:translate(-38%,-45%) scale(.21);position:static"
                >
                  <span class="loading-circle-spin-item"></span>
                  <span class="loading-circle-spin-item"></span>
                  <span class="loading-circle-spin-item"></span>
                  <span class="loading-circle-spin-item"></span>
                </div>
              </div>
              <div class="snack-loading-text">正在加载数据...</div>
            </div>
          </div>

          <div class="content-top-wrap">
            <div class="breadcrumbs-wrapper">
              <Breadcrumb>
                <span v-for="(item, index) in breadcrumb">
                  <a v-if="index < breadcrumb.length -1" @click.stop="pathTo(item.path)">
                    <BreadcrumbItem>{{ item.title }}</BreadcrumbItem>
                  </a>
                  <BreadcrumbItem v-if="index == breadcrumb.length -1">{{ item.title }}</BreadcrumbItem>
                </span>
              </Breadcrumb>
              <div
                class="mod-action-wrap mod-action-wrap-c mod-action-wrap-d mod-action-wrap-mode clearfix"
              >
                <div
                  class="action-item"
                  :class="{act:showType=='filelist'}"
                  @click="setShowType('filelist')"
                >
                  <div class="action-item-con">
                    <i class="icon icon-mode-list"></i>
                    <span class="act-txt">列表</span>
                  </div>
                </div>
                <div
                  class="action-item"
                  :class="{act:showType=='thumb'}"
                  @click="setShowType('thumb')"
                >
                  <div class="action-item-con">
                    <i class="icon icon-mode-thumb"></i>
                    <span class="act-txt">缩略图</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content-wrapper">
          <div class="list-header">
            <div class="list-group-hd">
              <div class="mod-list-group">
                <div class="list-group-tit name up" :class="{checked: selected.length > 0}">
                  <span
                    class="mod-check"
                    @click="selectAll"
                    :class="{act: selected.length == allItems.length}"
                  >
                    <i class="icon icon-check-s"></i>
                    <span
                      class="check-info"
                      :style="{display: selected.length > 0 ? 'block' : 'none'}"
                    >
                      已选择
                      <b class="check-info-num">{{ selected.length }}</b>项
                    </span>
                  </span>
                  <span class="tit-con">
                    名称
                    <i class="icon"></i>
                  </span>
                </div>
                <div class="list-group-tit time cur up">
                  <span class="tit-con">
                    上次修改时间
                    <i class="icon icon-sort"></i>
                  </span>
                </div>
                <div class="list-group-tit size dis">
                  <span class="tit-con">
                    大小
                    <i class="icon"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="scrollbar-y file-warp-container"
            ref="vsel"
            :class="{'list-group-wrapper': showType == 'filelist','mod-list-group-thumb': showType == 'thumb'}"
            v-selectable="{ selectedGetter: selectedGetter, selectedSetter: selectedSetter, selectingSetter: selectingSetter}"
            data-constraint=".file-warp-container"
          >
            <div class="selection"></div>

            <div
              :class="{'list-group': showType == 'filelist','list-group-bd': showType == 'thumb' }"
            >
              <ul class="list-group" v-show="showType == 'filelist'">
                <li
                  class="list-group-item checked selectable"
                  v-for="(item, index) in allItems"
                  :key="item.fid"
                  :data-id="item.fid"
                  :class="{ act: isSelect(item.fid)}"
                  @contextmenu.prevent.stop="$refs.FileListCtx.open($event, item)"
                  @click.stop="pathTo(item.path + item.name)"
                  @mousedown.stop
                >
                  <div class="item-inner">
                    <div class="item-tit">
                      <div class="label">
                        <i class="icon icon-check-s icon-checkbox" @mousedown.stop 
                      @click.stop="isSet(item.fid)"></i>
                      </div>
                      <div class="thumb">
                        <i class="icon icon-m icon-file-m" v-if="item.type == 'dir'"></i>
                        <i class="icon icon-m" v-if="item.type == 'file' && getItemIcon(item.ext) != 'pic'" :class="getItemIcon(item.ext, 'm')"></i>
                        <img v-if="item.type == 'file' && getItemIcon(item.ext) == 'pic'" :alt="item.name" class="is-img is-loaded" data-lazy-image="true" :src="picPreview(item.path+item.name)">
                      </div>
                      <div class="info">
                        <a
                          href="javascript:void(0)"
                          :title="item.name"
                          class="tit"
                        >{{ item.name }}</a>
                      </div>
                    </div>
                    <div class="item-info">
                      <span class="item-info-list">
                        <span class="txt txt-time">{{ item.date }}</span>
                      </span>
                      <span class="item-info-list">
                        <span class="txt txt-size">{{ item.size }}</span>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <div class="mod-item-list" v-show="showType == 'thumb'">
                <ul class="item-list clearfix">
                  <li
                    class="item selectable"
                    style="width: 113.714px;"
                    v-for="(item, index) in allItems"
                    :data-id="item.fid"
                    :key="item.fid"
                    v-if="item.type == 'dir'"
                    :class="{ 'act': isSelect(item.fid)}"
                    @contextmenu.prevent.stop="$refs.FileListCtx.open($event, item)"
                    @click.stop="pathTo(item.path + item.name)"
                    @mousedown.stop
                  >
                    <div class="inner">
                      <i class="icon-wrapper">
                        <i class="icon icon-file-l"></i>
                      </i>
                      <span :title="item.name" class="txt">{{ item.name }}</span>
                    </div>
                    <i
                      class="icon icon-check-s icon-checkbox"
                      @mousedown.stop
                      @click.stop="isSet(item.fid)"
                    ></i>
                  </li>
                </ul>
              </div>
              <div class="mod-figure-list" v-show="showType == 'thumb'">
                <div class="figure-box clearfix">
                  <ul class="figures-list clearfix">
                    <li
                      class="figure-list-item selectable"
                      style="width: 143.727px;"
                      v-for="(item, index) in allItems"
                      :data-id="item.fid"
                      :key="item.fid"
                      v-if="item.type == 'file'"
                      :class="{ 'act': isSelect(item.fid)}"
                      @contextmenu.prevent.stop="$refs.FileListCtx.open($event, item)"
                    >
                      <div class="figure-list-item-inner">
                        <i
                          class="icon icon-check-s icon-checkbox"
                          @mousedown.stop
                          @click.stop="isSet(item.fid)"
                        ></i>
                        <div class="figure-list-item-pic">
                          <div class="img-wrapper">
                            <i
                              class="icon icon-l"
                              :class="getItemIcon(item.ext)"
                              v-if="item.type == 'file' && getItemIcon(item.ext) != 'pic'" 
                              :style="{backgroundImage: getItemIcon(item.ext) == 'pic' ? 'url('+picPreview(item.path+item.name)+')' : '',width: getItemIcon(item.ext) == 'pic' ? '125px' : '',backgroundRepeat: 'no-repeat'}"
                            ></i>
                            <img v-if="item.type == 'file' && getItemIcon(item.ext) == 'pic'" :alt="item.name" class="is-img is-loaded" data-lazy-image="true" :src="picPreview(item.path+item.name)">
                          </div>
                        </div>
                        <div class="figure-list-item-txt">
                          <p class="tit">
                            <span :title="item.name" class="txt">{{ item.name }}</span>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="mod-status" v-show="!ajaxLoad && isEmptyData">
              <div class="empty-box">
                <div class="status-inner">
                  <i class="icon icon-nofile"></i>
                  <h2 class="title">暂无文件</h2>
                  <p class="txt">请点击左上角的“上传”按钮添加</p>
                </div>
              </div>
            </div>
            <div class="loadmore" v-show="ajaxLoad">
              <i class="icon icon-load-bullet-left"></i>
              <i class="icon icon-load-bullet"></i>
              <i class="icon icon-load-bullet-right"></i>
            </div>
            <div class="list-group-info" v-show="allItems.length > 0 && !ajaxLoad">
              <p class="info-con">
                共
                <b class="count">{{ total }}</b>项
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <context-menu
      id="file-list-ctx"
      ref="FileListCtx"
      @ctx-open="onFileListPageCtxOpen"
      @mousedown.stop.prevent
    >
      <li class="ctx-item">
        <i class="icon refresh"></i> 下载
      </li>
      <li class="ctx-item" @click.stop="openFileActionModel('分享')">
        <i class="icon new-file"></i> 分享
      </li>
      <li class="ctx-item" @click.stop="openFileActionModel('移动到')">
        <i class="icon new-folder"></i> 移动到
      </li>
      <li class="ctx-item" @click.stop="openFileActionModel('复制到')">
        <i class="icon new-create-folder"></i> 复制到
      </li>
      <li class="ctx-item">
        <i class="icon new-create-folder"></i> 重命名
      </li>
      <li class="ctx-item" @click.stop="openFileActionModel('移入到保险箱')">
        <i class="icon new-create-folder"></i> 移入到保险箱
      </li>
      <div class="spliter"></div>
      <li class="ctx-item">
        <i class="icon new-create-folder"></i> 删除
      </li>
    </context-menu>
    <Modal v-model="fileActionModel" :title="fileActionModelTitle" class="fileActionModel">
      <div class="dirbox-tree scrollbar-y" style="position: relative;">
        <ul class="dirbox-tree-body">
          <li>
            <a
              @click="$store.state.fileToIds=[],$store.state.fileToIds.push('/')"
              :class="{expand:fileActionModelInfo.showThisToLastIcon && fileActionModelInfo.showChildren,selected: '/' == $store.state.fileToIds[0]}"
              style="padding-left: 0px;"
            >
              <span class="ui-text">
                <i @click.stop="fileActionModelInfo.showChildren=!fileActionModelInfo.showChildren"></i>
                全部
              </span>
            </a>
          </li>
          <fileActionModelList
            v-show="fileActionModelInfo.showChildren && modelActionDirList.length > 0"
            :datas="modelActionDirList"
            treeLave="1"
            ref="fileActionListModel"
          />
        </ul>
        <div v-show="modelActionDirList.length == 0"></div>
        <div class="snack-loading-warpper" v-show="$store.state.ajaxLoadMessage.loding">
          <div class="snack-loading-container">
            <div class="loading-circle-spin" style="width:20px;height:20px">
              <div
                class="loading-circle-spin-container snack-loading-circle-spin-container"
                style="transform:translate(-38%,-45%) scale(.21);position:static"
              >
                <span class="loading-circle-spin-item"></span>
                <span class="loading-circle-spin-item"></span>
                <span class="loading-circle-spin-item"></span>
                <span class="loading-circle-spin-item"></span>
              </div>
            </div>
            <div class="snack-loading-text">{{ $store.state.ajaxLoadMessage.title }}</div>
          </div>
        </div>
      </div>

      <div slot="footer">
        <Button
          type="default"
          @click="fileActionModel=false,$store.state.fileToIds=[],$store.state.ajaxLoadMessage.loding=false,$store.state.ajaxLoadMessage.title=''"
        >取 消</Button>
        <Button
          type="primary"
          icon="md-done-all"
          :disabled="$store.state.ajaxLoadMessage.loding || $store.state.fileToIds.length == 0"
          :loading="fileToLoding"
          @click="fileMove"
        >确 定</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import selectable from "@/assets/js/v-selectable";
import { setStore, getStore, oneOf, extIcon } from "@/assets/js/utils";
import contextMenu from "@/components/context-menu/index.js";
import fileActionModelList from "@/pages/disk/conponents/fileActionModel.vue";
export default {
  components: {
    contextMenu,
    fileActionModelList
  },
  data() {
    return {
      fileActionModel: false,
      getDirListajaxLoad: false,
      fileActionModelShowChildren: true,
      fileActionModelTitle: "",
      fileToLoding: false,
      fileActionModelInfo: {
        showThisToLastIcon: true,
        showChildren: true
      },
      selected: [],
      selecting: [],
      allItems: [],
      fileList: [],
      folderList: [],
      modelActionDirList: [],
      items: [],
      page: 1,
      ajaxLoad: false,
      isEmptyData: false,
      path: "/",
      driveType: "",
      breadcrumb: [],
      total: 0,
      showType: "thumb"
    };
  },
  directives: { selectable },
  created() {
    let locShowType = getStore("showType");
    locShowType = locShowType == "filelist" ? "filelist" : "thumb";
    this.setShowType(locShowType);

    let driveType =
      typeof this.$route.query.type == "undefined"
        ? ""
        : this.$route.query.type;
    let path =
      typeof this.$route.query.path == "undefined"
        ? "/"
        : this.$route.query.path;
    this.driveType = driveType;
    this.path = path;
    this.getPageBreadcrumb(path);
    this.getFileList();
  },
  methods: {
    getPageBreadcrumb(path) {
      let pathArr = path.split("/");
      pathArr = pathArr[0] === pathArr[1] ? pathArr.splice(1, 1) : pathArr;
      let pathstr = "";
      let Breadcrumb = [];
      pathArr.forEach(function(path) {
        let title = path;
        pathstr = pathstr + path;
        if (path == "") {
          title = "全部";
          pathstr = "/";
        }

        let item = {
          title: title,
          path: pathstr
        };
        Breadcrumb.push(item);
      });
      this.breadcrumb = Breadcrumb;
    },
    getUserStoreMemory() {
      this.$ajax.get("/Member/Memory", {}).then(
        function(ret) {
          if (typeof ret == "undefined") {
            ret = {
              basic: "0 Mb",
              rate: 0,
              total: "0 Mb",
              used: "0 Mb"
            };
          }
          this.ajaxLoad = false;
          this.$store.state.memory = {
            basic: typeof ret.basic != "undefined" ? ret.basic : "0 Mb",
            rate: typeof ret.rate != "undefined" ? ret.rate : 0,
            total: typeof ret.total != "undefined" ? ret.total : "0 Mb",
            used: typeof ret.used != "undefined" ? ret.used : "0 Mb"
          };

          setStore('memory_basic', this.$store.state.memory.basic);
          setStore('memory_rate', this.$store.state.memory.rate);
          setStore('memory_total', this.$store.state.memory.total);
          setStore('memory_used', this.$store.state.memory.used);

        }.bind(this)
      );
    },
    getFileList() {
      if (this.page == 1) {
        this.allItems = [];
        this.clearData();
      }
      this.ajaxLoad = true;
      this.$ajax
        .post("/File/ListFile", {
          action: "list",
          path: this.path,
          p: this.page
        })
        .then(
          function(ret) {
            this.ajaxLoad = false;
            let result = ret.result;
            this.total = result.total;
            this.allItems = [].concat(result.lists);
            this.isEmptyData = result.lists.length > 0 ? false : true;
            // this.allItems.filter((p, i) => !this.selected[p.fid]).map(p => p.fid );
            let el = document.querySelector(".file-warp-container");
            // let values = Array.prototype.slice.call(el.querySelectorAll('.selectable'))
            // selectable.update(values)
            // this.selecting = this.allItems.filter((p, i) => !this.selected[p.fid]).map(p => p.fid );
          }.bind(this)
        );
        this.getUserStoreMemory();
    },
    setShowType(type) {
      type = type == "filelist" ? "filelist" : "thumb";
      this.showType = type;
      setStore("showType", type);
    },
    selectAll() {
      if (this.allItems.length == this.selected.length) {
        this.selected = [];
      } else {
        this.selected = this.allItems
          .filter((p, i) => !this.selected[p.fid])
          .map(p => p.fid);
      }
    },
    isSelect(fid) {
      return oneOf(fid, this.selected) || oneOf(fid, this.selecting);
    },
    isSet(id) {
      let selected = this.selected;
      let arr = [];
      if (oneOf(id, this.selected) == true) {
        selected.forEach(
          function(e) {
            if (e != id && arr.indexOf(e) == -1) {
              arr.push(e);
            }
          }.bind(this)
        );
        this.selected = arr;
      } else {
        if (this.selected.indexOf(id) == -1) {
          this.selected.push(id);
        }
      }
    },
    getItemIcon(ext, size) {
      size = size || "l";
      let _class = extIcon(ext, size);
      if (_class == "icon-pic-l" || _class == "icon-pic-m") {
        return "pic";
      }
      return _class;
    },
    setSelect(val) {
      val.forEach(
        function(e) {
          if (e != false && this.selected.indexOf(e) == -1) {
            this.selected.push(e);
          }
        }.bind(this)
      );
    },
    picPreview(path) {
      return process.env.VUE_APP_API_URL + "File/Thumb?isImg=true&path=" + path;
    },
    // selectedGetter() { return this.allItems.filter((p, i) => !this.selected[p.fid]).map(p => p.fid ); },
    selectedGetter() {
      return this.selected;
    },
    selectedSetter(v) {
      this.selected = v;
    },
    selectingSetter(v) {
      this.selecting = v;
      if (v.length != 0) {
        this.setSelect(v);
      }
    },
    onFileListPageCtxOpen(item) {
      if (this.isSelect(item.fid)) {
      } else {
        this.selected = [];
        this.selected.push(item.fid);
      }
      this.$parent.$refs.MainPageCtx.onclose(false);
    },
    openFileActionModel(title) {
      this.getDirList();
      this.$refs.FileListCtx.onclose(false);
      this.fileActionModelTitle = title;
      this.fileActionModel = true;
    },
    getDirList() {
      this.getDirListajaxLoad = true;
      this.$ajax
        .post("/File/ListFile", {
          action: "dir-list",
          path: "/"
        })
        .then(
          function(ret) {
            this.getDirListajaxLoad = false;
            let result = ret.result;
            this.modelActionDirList = result.lists;
          }.bind(this)
        );
    },
    pathTo(topath) {
      this.$router.push({
        name: "filelist",
        query: { type: this.driveType, path: topath }
      });
    },
    fileToAction() {},
    fileMove() {
      this.fileToLoding = true;
      this.$store.state.ajaxLoadMessage = {
        loding: true,
        title: "正在移动..."
      };
      this.$ajax
        .post("/File/Move", {
          action: "move",
          dirs: this.$store.state.selectedItems.dirs,
          items: this.$store.state.selectedItems.files,
          newPath: this.$store.state.fileToIds[0]
        })
        .then(
          function(ret) {
            this.fileToLoding = false;
            this.$store.state.ajaxLoadMessage = {
              loding: false,
              title: ""
            };
            let result = ret.data;
            if (typeof result == "undefined") {
              this.$Message.error("移动失败");
            } else {
              let _success = result.success;
              let _error = result.error;

              let msg = _success.length + "项移动成功";
              let type = "success";
              if (_error.length > 0 && _success.length > 0) {
                msg =
                  _success.length +
                  "项移动成功, " +
                  _error.length +
                  "项移动失败";
                this.$Message.warning(msg);
              } else if (_error.length > 0 && _success.length == 0) {
                msg = _error.length + "项移动失败";
                this.$Message.error(msg);
              } else {
                this.$Message.success(msg);
                this.clearData();
              }

              this.getFileList();
              this.fileActionModel = false;
            }
          }.bind(this)
        );
    },
    clearData() {
      this.selected = [];
      this.selecting = [];
      this.selectedItems = [];
      this.$store.state.selectedItems = {
        dirs: [],
        files: []
      };
      this.$store.state.fileToIds = [];
    },
  },
  watch: {
    selecting(val, oldval) {
      this.setSelect(val);
    },
    selected(val, oldval) {
      let dirs = [];
      let files = [];
      val.forEach(
        function(e) {
          if (e.startsWith("f-") && files.indexOf(e) == -1) {
            files.push(e);
          } else if (e.startsWith("d-") && dirs.indexOf(e) == -1) {
            dirs.push(e);
          }
        }.bind(this)
      );

      this.$store.state.selectedItems = {
        dirs: dirs,
        files: files
      };
      // console.log(val);
    },
    getDirListajaxLoad(val) {
      this.$store.state.ajaxLoadMessage = {
        loding: val,
        title: "正在加载内容..."
      };
    },
    driveType(val) {
      this.$store.state.driveType = val;
    },
    $route(val) {
      let driveType =
        typeof val.query.type == "undefined" ? "" : val.query.type;
      let path = typeof val.query.path == "undefined" ? "/" : val.query.path;
      this.driveType = driveType;
      this.path = path;
      this.getPageBreadcrumb(path);
      this.getUserStoreMemory();
      this.getFileList();
    }
  }
};
</script>