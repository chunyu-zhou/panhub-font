<template>
  <div id="disk-right-page" @contextmenu.prevent.stop="$refs.MainPageCtx.open($event)" @mousedown="closeAllCtxPage">
    <div id="disk-main">
      <rightHeader/>
      <router-view ref="fileList"></router-view>
    </div>
    <context-menu
      id="main-ctx"
      ref="MainPageCtx"
      @ctx-open="onMainPageCtxOpen" 
      @mousedown.stop
    >
      <li class="ctx-item" @click.stop="refreshData"><i class="icon refresh"></i> 刷新</li>
      <li class="ctx-item"><i class="icon new-file"></i> 上传文件</li>
      <li class="ctx-item"><i class="icon new-folder"></i> 上传文件夹</li>
      <li class="ctx-item"><i class="icon new-create-folder"></i> 新建文件夹</li>
    </context-menu>
  </div>
</template>
<script>
import rightHeader from "./rightHeader.vue";
import filelistWarp from "./filelistWarp.vue";
import contextMenu  from '@/components/context-menu/index.js'
export default {
  components: {
    rightHeader,
    filelistWarp,
    contextMenu
  },
  data() {
    return {};
  },
  methods: {
    refreshData() {
      this.$refs.MainPageCtx.onclose(false)
      this.$refs.fileList.page = 1;
      this.$refs.fileList.getFileList()
    },
    onMainPageCtxOpen() {
      this.$refs.fileList.$refs.FileListCtx.onclose(false)
    },
    closeAllCtxPage(e) {
      let path = e.path;
      let newPath = [];
      path.forEach(
        function(e) {
          newPath.push(e.className);
        }.bind(this)
      );
      if(newPath.indexOf('ctx-menu-container') == -1) {
        this.$refs.fileList.$refs.FileListCtx.onclose(false)
        this.$refs.MainPageCtx.onclose(false)
      } else {
        
      }
    }
  }
};
</script>

<style scoped lang="less">
#disk-right-page {
    padding-left: 268px;
    height: 100%;
    background: #fff;
    #disk-main {
      height: 100%;
    }
}
</style>
