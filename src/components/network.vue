<template>
  <div class="container">
    <div id="modaloverlay" style="display: block; opacity: 1;" v-if='!onLine'>
      <div id="modaloverlay-inner"></div>
    </div>
    <div id="mainmodals">
      <div id="connectionbox" class="modaldialog" style="display: block;opacity: 1;" v-if='!onLine'>
        <div class="disconnected tip-toast">
          当前网络异常，请
          <span class="reconnect">检查网络</span>。
        </div>
        <div class="loading-connect tip-toast">正在连接网络，请稍候...</div>
        <div class="connect-fail tip-toast">
          连接失败，点击
          <span class="reconnect">重新连接</span>。
        </div>
      </div>
      <div id="freakout-dialog" class="modaldialog" style="
    /* opacity: 1; */
">
        <div class="disconnected tip-toast" contenteditable="false">
          文档状态有更新，点击
          <span class="refresh">刷新</span>。
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
#modaloverlay {
  z-index: 1001000;
  display: block;
  background-repeat: repeat;
  width: 100vw;
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  overflow: hidden;
}
.modaldialog {
  position: fixed;
  top: 0;
  width: auto;
  display: none;
  z-index: 1001000;
  left: 50%;
  zoom: 1;
  text-align: center;
  font-size: 15px;
  overflow: visible;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  transform: scale(0.8);
}
.disconnected {
  color: #fff;
  background: #000;
  left: -50%;
  position: relative;
  padding: 10px 20px;
}
.reconnect,
.refresh {
  color: #02a7ff !important;
}
.connect-fail,
.loading-connect {
  color: #fff;
  display: none;
  background: #000;
  left: -50%;
  position: relative;
  padding: 10px 20px;
}
</style>
<script>
export default {
  data() {
    return {
      onLine: navigator.onLine
    };
  },
  created() {},
  methods: {
    updateOnlineStatus(e) {
      const { type } = e;
      this.onLine = type === "online";
    }
  },
  mounted() {
    window.addEventListener("online", this.updateOnlineStatus);
    window.addEventListener("offline", this.updateOnlineStatus);
  }
};
</script>
