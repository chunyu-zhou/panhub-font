<template>
  <div id="right-header">
    <div class="header-search">
      <div class="header-search-wrap">
        <button class="search-button" aria-label="搜索在线文档" role="button">
          <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" title>
            <title>搜索icon</title>
            <desc>Created with Sketch.</desc>
            <g id="搜索icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g>
                <rect id="矩形" fill="#D8D8D8" opacity="0" x="0" y="0" width="16" height="16"></rect>
                <path
                  d="M11.5815273,10.8744205 L14.9497475,14.2426407 L14.2426407,14.9497475 L10.8744205,11.5815273 C9.82907934,12.4664216 8.47685163,13 7,13 C3.6862915,13 1,10.3137085 1,7 C1,3.6862915 3.6862915,1 7,1 C10.3137085,1 13,3.6862915 13,7 C13,8.47685163 12.4664216,9.82907934 11.5815273,10.8744205 Z M7,12 C9.76142375,12 12,9.76142375 12,7 C12,4.23857625 9.76142375,2 7,2 C4.23857625,2 2,4.23857625 2,7 C2,9.76142375 4.23857625,12 7,12 Z"
                  id="合并形状"
                  fill="#000000"
                  opacity="0.400000006"
                ></path>
              </g>
            </g>
          </svg>
        </button>
        <!-- <label class="placeholder">搜索标题/正文/创建人</label> -->
        <div class="search-input">
          <input placeholder="输入文件名搜索">
        </div>
        <button class="search-close-button" aria-label="清除搜索" role="button">
          <svg
            class="icon-close"
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            version="1.1"
            title
          >
            <title>清除X</title>
            <desc>Created with Sketch.</desc>
            <g id="清除X" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g fill="#000000">
                <rect id="矩形-copy" opacity="0" x="0" y="0" width="16" height="16"></rect>
                <path
                  d="M8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 C12.418278,0 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 Z M8.75424723,8 L11.7712362,4.98301107 L11.0169889,4.22876383 L8,7.24575277 L4.98301107,4.22876383 L4.22876383,4.98301107 L7.24575277,8 L4.22876383,11.0169889 L4.98301107,11.7712362 L8,8.75424723 L11.0169889,11.7712362 L11.7712362,11.0169889 L8.75424723,8 Z"
                  id="Combined-Shape"
                  opacity="0.237820876"
                ></path>
              </g>
            </g>
          </svg>
        </button>
        <div class style="display: none; z-index: 999; pointer-events: visible;">
          <div
            class="search-result-list"
            style="box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px 0px; z-index: 999;"
          >
            <ul class="file-list">
              <div class="file-list-title">你可能需要</div>
              <li class title="在线文档">
                <svg
                  class="icon-doc"
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                  version="1.1"
                  title
                >
                  <title>word</title>
                  <desc>Created with Sketch.</desc>
                  <g id="word" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="16word">
                      <rect id="矩形" fill="#D8D8D8" opacity="0" x="0" y="0" width="16" height="16"></rect>
                      <g id="Group" transform="translate(1.000000, 0.000000)" fill-rule="nonzero">
                        <polygon
                          id="Rectangle"
                          fill="#0188FB"
                          points="0 0 10.0625 2.27373675e-13 14 4.00141907 14 16 0 16"
                        ></polygon>
                        <polygon id="Rectangle" fill="#FFFFFF" points="3 8 11 8 11 9.5 3 9.5"></polygon>
                        <polygon
                          id="Rectangle-Copy-28"
                          fill="#FFFFFF"
                          points="3 8 11 8 11 9.5 3 9.5"
                        ></polygon>
                        <rect
                          id="Rectangle-Copy-27"
                          fill="#FFFFFF"
                          x="3"
                          y="11.5"
                          width="8"
                          height="1.5"
                        ></rect>
                        <polygon
                          id="Rectangle"
                          fill="#03D6FF"
                          points="10.0625 0 14 4 10.0625 4.00141907"
                        ></polygon>
                      </g>
                    </g>
                  </g>
                </svg>
                <div class="item_name">在线文档</div>
              </li>
              <li class title="在线表格">
                <svg
                  class="icon-excel"
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                  version="1.1"
                  title
                >
                  <title>excel</title>
                  <desc>Created with Sketch.</desc>
                  <g id="excel" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="16excel">
                      <rect id="矩形" fill="#D8D8D8" opacity="0" x="0" y="0" width="16" height="16"></rect>
                      <g id="Group" transform="translate(1.000000, 0.000000)" fill-rule="nonzero">
                        <polygon
                          id="Rectangle"
                          fill="#1DCA5F"
                          points="0 0 10.0625 0 14 4.00141907 14 16 0 16"
                        ></polygon>
                        <polygon id="Rectangle-Copy-28" fill="#FFFFFF" points="3 8 6 8 6 9.5 3 9.5"></polygon>
                        <polygon
                          id="Rectangle-Copy-29"
                          fill="#FFFFFF"
                          points="8 8 11 8 11 9.5 8 9.5"
                        ></polygon>
                        <rect
                          id="Rectangle-Copy-33"
                          fill="#FFFFFF"
                          x="3"
                          y="11.5"
                          width="3"
                          height="1.5"
                        ></rect>
                        <rect
                          id="Rectangle-Copy-32"
                          fill="#FFFFFF"
                          x="8"
                          y="11.5"
                          width="3"
                          height="1.5"
                        ></rect>
                        <polygon id="Rectangle" fill="#56FD9B" points="10.0625 0 14 4 10.0625 4"></polygon>
                      </g>
                    </g>
                  </g>
                </svg>
                <div class="item_name">在线表格</div>
              </li>
              <li class title="在线收集表">
                <svg
                  class="icon-form"
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                  version="1.1"
                  title
                >
                  <title>form</title>
                  <desc>Created with Sketch.</desc>
                  <g id="form" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="分组">
                      <rect id="矩形" fill="#D8D8D8" opacity="0" x="0" y="0" width="16" height="16"></rect>
                      <g id="Group-2" transform="translate(1.000000, 0.000000)" fill-rule="nonzero">
                        <g id="Group">
                          <polygon
                            id="Rectangle"
                            fill="#FF7500"
                            points="0 0 10.0625 0 14 4.00141907 14 16 0 16"
                          ></polygon>
                          <polygon
                            id="Rectangle"
                            fill="#FFCB92"
                            points="10.0625 0 14 4 10.0625 4.00141907"
                          ></polygon>
                        </g>
                        <polygon
                          id="Path-4"
                          fill="#FFFFFF"
                          transform="translate(7.041026, 9.030136) rotate(-45.000000) translate(-7.041026, -9.030136) "
                          points="10.0820521 9.72693837 10.0820521 11.0602717 4 11.0602717 4 7 5.33333333 7 5.33333333 9.72693837"
                        ></polygon>
                      </g>
                    </g>
                  </g>
                </svg>
                <div class="item_name">在线收集表</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="header-button-list">
      <button class="btn btn-import-file">导入</button>
      <div style="display: inline-block;">
        <div style="display: inline-block;">
          <Dropdown trigger="click" placement="bottom-end" class="menu-btn">
            <a class="header-menu-button">
              <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" title>
                <desc>Created with Sketch.</desc>
                <g
                  id="菜单icon"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  opacity="0.639999986"
                >
                  <g>
                    <rect id="矩形" fill="#D8D8D8" opacity="0" x="0" y="0" width="16" height="16"></rect>
                    <polygon
                      id="Rectangle-Copy-9"
                      fill="#000000"
                      points="2 12 14 12 14 13.5 2 13.5"
                    ></polygon>
                    <rect id="Rectangle-Copy-10" fill="#000000" x="2" y="7" width="12" height="1.5"></rect>
                    <rect id="Rectangle-Copy-11" fill="#000000" x="2" y="2" width="12" height="1.5"></rect>
                  </g>
                </g>
              </svg>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem disabled>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div style="display: inline-block; position: relative;">
          <a class="header-bell-button">
            <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" title>
              <desc>Created with Sketch.</desc>
              <g id="通知icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect id="矩形" fill="#D8D8D8" opacity="0" x="0" y="0" width="16" height="16"></rect>
                <g opacity="0.639999986" transform="translate(1.000000, 0.000000)">
                  <polygon
                    id="Combined-Shape"
                    fill="#000000"
                    points="6.39488462e-14 11.5 13 11.5 13 13 -4.04364042e-15 13"
                  ></polygon>
                  <path
                    d="M6.5,0.848537769 L2.87242855,2.76816775 L1.91304832,12.25 L11.0869517,12.25 L10.1275714,2.76816775 L6.5,0.848537769 Z"
                    id="Path-2"
                    stroke="#000000"
                    stroke-width="1.5"
                  ></path>
                  <polygon
                    id="Path-3"
                    fill="#000000"
                    points="4.33333333 13 5.41666667 15.1666667 7.58333333 15.1666667 8.66666667 13"
                  ></polygon>
                </g>
              </g>
            </svg>
          </a>
        </div>
        <Dropdown trigger="click" placement="bottom-end" class="user-warp">
          <div class="user-info-container">
            <div>
              <div
                class="user-avatar"
                style="background-image: url(//thirdqq.qlogo.cn/g?b=oidb&k=zcg8CARnEegphf0PHwTMkw&s=0);"
              ></div>
            </div>
          </div>
          <DropdownMenu slot="list">
            <DropdownItem>帐号管理</DropdownItem>
            <DropdownItem>切换帐号</DropdownItem>
            <DropdownItem>退出帐号</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
#right-header {
  padding-left: 268px;
  height: 70px;
  min-width: 800px;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  padding: 30px 50px 0;
  background: #fff;
  position: relative;
  input {
    width: 100%;
    height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    border: none;
    outline: none;
    background: transparent;
    -webkit-font-variant-ligatures: none;
    font-variant-ligatures: none;
    color: #000;
  }
  .header-search {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 0;
    .header-search-wrap {
      position: relative;
      min-width: 318px;
      max-width: 572px;
      width: 70%;
      margin-right: auto;
      margin-right: 0;
      margin-left: auto;
      margin-left: 0;
      -webkit-border-radius: 4px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.06);
    }
    .header-search-wrap:hover {
      background: rgba(0, 0, 0, 0.04);
    }
    .header-search-wrap.active {
      background: rgba(0, 0, 0, 0.06);
    }
    .search-button {
      position: absolute;
      top: 50%;
      left: 14px;
      height: 18px;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      border: none;
      background-color: transparent;
    }
    .placeholder {
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      left: 39px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.4);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      cursor: text;
    }
    .search-input {
      padding: 0 38px;
    }
    .header-search-wrap.active input {
      color: rgba(0, 0, 0, 0.88);
    }
    .search-close-button {
      position: absolute;
      top: 50%;
      right: 14px;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      height: 16px;
      border: none;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      background-color: transparent;
      .icon-close {
        // display: none;
        width: 16px;
        height: 16px;
      }
    }
    .search-result-list {
      position: absolute;
      width: 100%;
      background: #fff;
      .file-list {
        .file-list-title {
          position: relative;
          font-size: 12px;
          color: hsla(0, 0%, 53%, 0.7);
          line-height: 26px;
          padding-left: 20px;
          padding-top: 8px;
          padding-bottom: 4px;
        }
        li {
          position: relative;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.88);
          height: 40px;
          line-height: 36px;
          padding-left: 24px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding-right: 10px;
          cursor: pointer;
        }
        .icon-doc,
        .icon-excel,
        .icon-form,
        .icon-slide {
          width: 16px;
          height: 16px;
          display: inline-block;
          vertical-align: middle;
          margin-right: 12px;
        }
        .item_name {
          display: inline-block;
          position: absolute;
          left: 54px;
          right: 50px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          top: 1px;
        }
      }
    }
  }
  .header-button-list {
    height: 37px;
    margin-top: 3px;
    .btn-import-file {
      margin: 0 12px;
      border: 1px solid #d9d9d9;
      color: #000;
      background-color: transparent;
      -webkit-border-radius: 2px;
      border-radius: 2px;
      width: 76px;
      line-height: 28px;
      height: 30px;
      font-size: 14px;
      cursor: pointer;
      vertical-align: middle;
    }
    .btn-import-file:hover {
      background-color: #f2f2f2;
    }
    .header-menu-button {
      width: 22px;
      height: 22px;
      display: inline-block;
      position: relative;
      margin-left: 6px;
      margin-right: 11px;
      vertical-align: middle;
      -webkit-border-radius: 1px;
      border-radius: 1px;
      cursor: pointer;
      background-color: transparent;
      border: none;
      svg {
        width: 16px;
        height: 16px;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    }
    .header-menu-button:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
    .header-menu-button.menu-activated,
    .header-menu-button:active {
      background-color: rgba(0, 0, 0, 0.08);
    }
    .header-bell-button {
      width: 22px;
      height: 22px;
      display: inline-block;
      position: relative;
      margin-left: 3px;
      margin-right: 4px;
      vertical-align: middle;
      -webkit-border-radius: 1px;
      border-radius: 1px;
      cursor: pointer;
      background-color: transparent;
      border: none;
      svg {
        position: absolute;
        width: 16px;
        height: 16px;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    }
    .header-bell-button:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
    .user-info-container {
      z-index: 10000;
      margin-left: 12px;
      display: inline-block;
      cursor: pointer;
      vertical-align: middle;
      -webkit-border-radius: 2px;
      border-radius: 2px;
      div {
        width: 34px;
        height: 34px;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        position: relative;
        -webkit-transform: translateX(2px);
        -ms-transform: translateX(2px);
        transform: translateX(2px);
        .user-avatar {
          display: inline-block;
          -webkit-border-radius: 50%;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          -webkit-background-size: contain;
          background-size: contain;
          position: relative;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
      }
      div:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
<style lang="less">
.menu-btn,.user-warp {
  li.ivu-dropdown-item {
    width: 180px;
    position: relative;
    display: block;
    height: 33px;
    padding: 0 24px;
    font-size: 14px !important;
    line-height: 33px;
    cursor: pointer;
    text-align: left;
    color: rgba(0, 0, 0, 0.88);
  }
  .ivu-dropdown-item:hover {
    background: rgba(0, 0, 0, 0.02);
  }
}
</style>