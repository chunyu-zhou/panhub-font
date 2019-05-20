<template>
<ul class="dirbox-sub-tree">
    <li v-for="(item, i) in datas" :key="i">
      <a @click="setFileTo(item.dirLoc)" :class="{expand:item.showThisToLastIcon && item.showChildren,selected: item.dirLoc == $store.state.fileToIds[0]}" style="padding-left: 60px;" :style="{paddingLeft: treeLave * 30 + 'px'}">
        <span class="ui-text">
          <i v-show="item.showThisToLastIcon !== false" @click.stop="item.children.length == 0 ? getDirList(item) : item.showChildren == false ? item.showChildren = true : item.showChildren = false"></i>
          {{ item.name }}
        </span>
      </a>
      <fileActionList v-show='item.showChildren' :datas="item.children" :treeLave="parseInt(treeLave) + 1"  ref="fileActionListModel" />
    </li>
  </ul>
</template>
<script>
import fileActionList from "./fileActionModel.vue";
export default {
  name: 'fileActionList',
  components: {
    fileActionList
  },
  props: ['datas', 'treeLave'],
  data() {
    return {
      dirListajaxLoad: false
    };
  },
  methods: {
    setFileTo(dirLoc) {
      this.$store.state.fileToIds = [];
      this.$store.state.fileToIds.push(dirLoc);
      this.fileToIds = parseInt(dirLoc);
    },
    getDirList(item) {
      this.dirListajaxLoad = true
      this.$ajax
        .post("/File/ListFile", {
          action: "dir-list",
          path: item.dirLoc
        })
        .then(
          function(ret) {
            this.dirListajaxLoad = false;
            let lists = ret.result.lists;
            if(lists.length > 0) {
              item.children = lists;
              item.showChildren = true;
            } else {
              item.showThisToLastIcon = false
            }
          }.bind(this)
        );
    }
  },
  watch: {
    dirListajaxLoad(val, oldval) {
      this.$store.state.ajaxLoadMessage = {
        loding: val,
        title: '正在加载内容...'
      };
    }
  }
};
</script>

<style scoped lang="less">
</style>
