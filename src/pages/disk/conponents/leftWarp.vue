<template>
  <div id="leftWarp">
    <div class="silder">
      <div class="header-logo-wrapper"></div>
      <div class="new-button-wrap">
        <Dropdown trigger="click">
          <Button type="primary" class="create-or-upload-btn">
            <i class="icon icon-icon-add-dark"></i>
            <span class="title">新建/上传</span>
          </Button>
          <DropdownMenu slot="list">
            <DropdownItem>
              <div class="dropdown-list" title="新建文件夹">
                <i class="new-create-folder"></i>
                <div class="item_name">新建文件夹</div>
              </div>
            </DropdownItem>
            <DropdownItem divided>
              <!-- <div class="menu-item-hd">
                <p class="menu-item-hd-tit">上传</p>
              </div>-->
              <div class="dropdown-list" title="上传文件">
                <i class="new-file"></i>
                <div class="item_name">上传文件</div>
              </div>
            </DropdownItem>
            <DropdownItem>
              <div class="dropdown-list" title="上传文件夹">
                <i class="new-folder"></i>
                <div class="item_name">上传文件夹</div>
              </div>
            </DropdownItem>
            <DropdownItem divided>
              <div class="menu-item-hd">
                <p class="menu-item-hd-tit">Office文档</p>
              </div>
              <div class="dropdown-list" title="新建表格">
                <i class="new-xls"></i>
                <div class="item_name">新建表格</div>
              </div>
            </DropdownItem>
            <DropdownItem>
              <div class="dropdown-list" title="新建文档">
                <i class="new-doc"></i>
                <div class="item_name">新建文档</div>
              </div>
            </DropdownItem>
            <DropdownItem>
              <div class="dropdown-list" title="PPT 幻灯片">
                <i class="new-ppt"></i>
                <div class="item_name">PPT 幻灯片</div>
              </div>
            </DropdownItem>
            <DropdownItem divided>
              <div class="dropdown-list" title="离线下载">
                <i class="new-offline-down"></i>
                <div class="item_name">离线下载</div>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div class="drives">
        <div class="tree-wrapper scrollbar-y">
          <div class="silder-tree-parent-wrapper">
            <div
              class="tree-node-container tree-node-container-root tree-node-container-root-selected"
            >
              <span class="tree-node-switcher tree-node-switcher-open">
                <i class="icon icon-icon-trig-xs"></i>
              </span>
              <a href="/desktop/mydoc">
                <i class="icon icon-icon-doc-act"></i>
                <span class="tree-node-title-sel">我的文档</span>
              </a>
            </div>
            <div style="display: block;">
              <ul class="tree-wrapper tree-wrapper-child">
                <li class="silder-tree-parent-wrapper">
                  <span>
                    <div class="tree-node-container">
                      <span class="tree-node-switcher tree-node-switcher-none"></span>
                      <span class="tree-node-switcher tree-node-switcher-none"></span>
                      <span class="tree-node-switcher tree-node-switcher-open">
                        <i class="icon icon-icon-trig-xs"></i>
                      </span>
                      <a href="/desktop/mydoc/folder/fRno_100008">
                        <i class="new-folder"></i>
                        <span class="tree-node-title">8</span>
                      </a>
                    </div>
                  </span>
                  <div style="display: block;">
                    <ul class="tree-wrapper tree-wrapper-child">
                      <li class="silder-tree-parent-wrapper">
                        <span>
                          <div class="tree-node-container tree-node-container-selected">
                            <span class="tree-node-switcher tree-node-switcher-none"></span>
                            <span class="tree-node-switcher tree-node-switcher-none"></span>
                            <span class="tree-node-switcher tree-node-switcher-none"></span>
                            <span class="tree-node-switcher tree-node-switcher-open">
                              <i class="icon icon-icon-trig-xs"></i>
                            </span>
                            <a href="/desktop/mydoc/folder/fRno_100022">
                              <i class="new-folder"></i>
                              <span class="tree-node-title">1</span>
                            </a>
                          </div>
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <li class="slider-hor-line"></li>
          <li title="最近浏览" class="slider-li slider-li-sel">
            <a href="/desktop/recent">
              <span class="icon-common icon-recent">
                <svg width="16" height="16" viewBox="0 0 16 16" title>
                  <g fill="none" fill-rule="evenodd">
                    <path
                      stroke="#5C5C5C"
                      stroke-width="1.5"
                      d="M1.5 7.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0z"
                    ></path>
                    <path fill="#5C5C5C" d="M7 9h.875V5H7z"></path>
                    <path fill="#5C5C5C" d="M7 9h4V8H7z"></path>
                  </g>
                </svg>
              </span>最近浏览
            </a>
          </li>
          <li title="与我共享" class="slider-li">
            <a href="/desktop/shared">
              <span class="icon-common icon-shared">
                <svg width="16" height="16" viewBox="0 0 16 16" title>
                  <g fill="none" fill-rule="evenodd" stroke="#5C5C5C" stroke-width="1.5">
                    <path
                      d="M2.75 15.565zm.013-.358a3294.278 3294.278 0 0 1 6.526.001l2.422.001 2.437-.001c-.643-4.265-2.498-6.266-5.648-6.266-3.667 0-5.548 2.277-5.737 6.265z"
                    ></path>
                    <circle cx="8.469" cy="4.234" r="2.484"></circle>
                  </g>
                </svg>
              </span>与我共享
            </a>
          </li>
          <li title="星标文档" class="slider-li">
            <a href="/desktop/stared">
              <span class="icon-common icon-stared">
                <svg width="18" height="18" viewBox="0 0 18 18" title>
                  <path
                    fill="none"
                    fill-rule="evenodd"
                    stroke="#5C5C5C"
                    stroke-width="1.5"
                    d="M9.5 13.199l-4.056 2.114.775-4.478-3.282-3.17 4.535-.654L9.5 2.937l2.028 4.074 4.534.653-3.28 3.171.774 4.477z"
                  ></path>
                </svg>
              </span>星标文档
            </a>
          </li>
          <li class="slider-hor-line"></li>
          <li title="回收站" class="slider-li">
            <a href="/desktop/trash">
              <span class="icon-common icon-trash">
                <svg width="16" height="16" viewBox="0 0 16 16" title>
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#5C5C5C" d="M2 3h12v1.5H2zM7 1h2l1 2H6z"></path>
                    <path stroke="#5C5C5C" stroke-width="1.5" d="M3.75 3.75v10.566h8.5V3.75h-8.5z"></path>
                    <path fill="#5C5C5C" d="M6.031 10.945V8h.938v2.945zM9.031 11V8.055h.938V11z"></path>
                  </g>
                </svg>
              </span>回收站
            </a>
          </li>

          
          <li title="回收站" class="slider-li">
            <a href="/desktop/trash">
              <span class="icon-common icon-trash">
                <svg width="16" height="16" viewBox="0 0 16 16" title>
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#5C5C5C" d="M2 3h12v1.5H2zM7 1h2l1 2H6z"></path>
                    <path stroke="#5C5C5C" stroke-width="1.5" d="M3.75 3.75v10.566h8.5V3.75h-8.5z"></path>
                    <path fill="#5C5C5C" d="M6.031 10.945V8h.938v2.945zM9.031 11V8.055h.938V11z"></path>
                  </g>
                </svg>
              </span>回收站
            </a>
          </li>
          <li title="回收站" class="slider-li">
            <a href="/desktop/trash">
              <span class="icon-common icon-trash">
                <svg width="16" height="16" viewBox="0 0 16 16" title>
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#5C5C5C" d="M2 3h12v1.5H2zM7 1h2l1 2H6z"></path>
                    <path stroke="#5C5C5C" stroke-width="1.5" d="M3.75 3.75v10.566h8.5V3.75h-8.5z"></path>
                    <path fill="#5C5C5C" d="M6.031 10.945V8h.938v2.945zM9.031 11V8.055h.938V11z"></path>
                  </g>
                </svg>
              </span>回收站
            </a>
          </li>
          <li title="回收站" class="slider-li">
            <a href="/desktop/trash">
              <span class="icon-common icon-trash">
                <svg width="16" height="16" viewBox="0 0 16 16" title>
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#5C5C5C" d="M2 3h12v1.5H2zM7 1h2l1 2H6z"></path>
                    <path stroke="#5C5C5C" stroke-width="1.5" d="M3.75 3.75v10.566h8.5V3.75h-8.5z"></path>
                    <path fill="#5C5C5C" d="M6.031 10.945V8h.938v2.945zM9.031 11V8.055h.938V11z"></path>
                  </g>
                </svg>
              </span>回收站
            </a>
          </li>
          <li title="回收站" class="slider-li">
            <a href="/desktop/trash">
              <span class="icon-common icon-trash">
                <svg width="16" height="16" viewBox="0 0 16 16" title>
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#5C5C5C" d="M2 3h12v1.5H2zM7 1h2l1 2H6z"></path>
                    <path stroke="#5C5C5C" stroke-width="1.5" d="M3.75 3.75v10.566h8.5V3.75h-8.5z"></path>
                    <path fill="#5C5C5C" d="M6.031 10.945V8h.938v2.945zM9.031 11V8.055h.938V11z"></path>
                  </g>
                </svg>
              </span>回收站
            </a>
          </li>
          <li title="回收站" class="slider-li">
            <a href="/desktop/trash">
              <span class="icon-common icon-trash">
                <svg width="16" height="16" viewBox="0 0 16 16" title>
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#5C5C5C" d="M2 3h12v1.5H2zM7 1h2l1 2H6z"></path>
                    <path stroke="#5C5C5C" stroke-width="1.5" d="M3.75 3.75v10.566h8.5V3.75h-8.5z"></path>
                    <path fill="#5C5C5C" d="M6.031 10.945V8h.938v2.945zM9.031 11V8.055h.938V11z"></path>
                  </g>
                </svg>
              </span>回收站
            </a>
          </li>
          <li title="回收站" class="slider-li">
            <a href="/desktop/trash">
              <span class="icon-common icon-trash">
                <svg width="16" height="16" viewBox="0 0 16 16" title>
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#5C5C5C" d="M2 3h12v1.5H2zM7 1h2l1 2H6z"></path>
                    <path stroke="#5C5C5C" stroke-width="1.5" d="M3.75 3.75v10.566h8.5V3.75h-8.5z"></path>
                    <path fill="#5C5C5C" d="M6.031 10.945V8h.938v2.945zM9.031 11V8.055h.938V11z"></path>
                  </g>
                </svg>
              </span>回收站
            </a>
          </li>
          <li title="回收站" class="slider-li">
            <a href="/desktop/trash">
              <span class="icon-common icon-trash">
                <svg width="16" height="16" viewBox="0 0 16 16" title>
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#5C5C5C" d="M2 3h12v1.5H2zM7 1h2l1 2H6z"></path>
                    <path stroke="#5C5C5C" stroke-width="1.5" d="M3.75 3.75v10.566h8.5V3.75h-8.5z"></path>
                    <path fill="#5C5C5C" d="M6.031 10.945V8h.938v2.945zM9.031 11V8.055h.938V11z"></path>
                  </g>
                </svg>
              </span>回收站
            </a>
          </li>
          <li title="回收站" class="slider-li">
            <a href="/desktop/trash">
              <span class="icon-common icon-trash">
                <svg width="16" height="16" viewBox="0 0 16 16" title>
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#5C5C5C" d="M2 3h12v1.5H2zM7 1h2l1 2H6z"></path>
                    <path stroke="#5C5C5C" stroke-width="1.5" d="M3.75 3.75v10.566h8.5V3.75h-8.5z"></path>
                    <path fill="#5C5C5C" d="M6.031 10.945V8h.938v2.945zM9.031 11V8.055h.938V11z"></path>
                  </g>
                </svg>
              </span>回收站
            </a>
          </li>
          <li title="回收站" class="slider-li">
            <a href="/desktop/trash">
              <span class="icon-common icon-trash">
                <svg width="16" height="16" viewBox="0 0 16 16" title>
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#5C5C5C" d="M2 3h12v1.5H2zM7 1h2l1 2H6z"></path>
                    <path stroke="#5C5C5C" stroke-width="1.5" d="M3.75 3.75v10.566h8.5V3.75h-8.5z"></path>
                    <path fill="#5C5C5C" d="M6.031 10.945V8h.938v2.945zM9.031 11V8.055h.938V11z"></path>
                  </g>
                </svg>
              </span>回收站
            </a>
          </li>
          <li title="回收站" class="slider-li">
            <a href="/desktop/trash">
              <span class="icon-common icon-trash">
                <svg width="16" height="16" viewBox="0 0 16 16" title>
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#5C5C5C" d="M2 3h12v1.5H2zM7 1h2l1 2H6z"></path>
                    <path stroke="#5C5C5C" stroke-width="1.5" d="M3.75 3.75v10.566h8.5V3.75h-8.5z"></path>
                    <path fill="#5C5C5C" d="M6.031 10.945V8h.938v2.945zM9.031 11V8.055h.938V11z"></path>
                  </g>
                </svg>
              </span>回收站
            </a>
          </li>
          <li title="回收站" class="slider-li">
            <a href="/desktop/trash">
              <span class="icon-common icon-trash">
                <svg width="16" height="16" viewBox="0 0 16 16" title>
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#5C5C5C" d="M2 3h12v1.5H2zM7 1h2l1 2H6z"></path>
                    <path stroke="#5C5C5C" stroke-width="1.5" d="M3.75 3.75v10.566h8.5V3.75h-8.5z"></path>
                    <path fill="#5C5C5C" d="M6.031 10.945V8h.938v2.945zM9.031 11V8.055h.938V11z"></path>
                  </g>
                </svg>
              </span>回收站
            </a>
          </li>
        </div>

        <div class="storage-use">
          <div class="mod-progress-info" :class="{warn:parseInt($store.state.memory.rate) >= 80 }">
            <div class="progress-info-bd">
              <div class="progress-info-detail">
                <div class="info-detail-hd">
                  <p class="tit">
                    <span class="info-txt">已用</span>
                    <span class="info-used">{{ $store.state.memory.used }}/{{ $store.state.memory.total }}</span>
                  </p>
                  <div class="hd-act">
                    <a href="javascript:void(0)" class="act-link">扩容</a>
                    <span class="mod-arrow"></span>
                  </div>
                </div>
                <div class="info-detail-bd">
                  <div class="info-bar">
                    <div class="info-bar-cur" :style="{width: parseInt($store.state.memory.rate) == 0 ? 1 + '%' : $store.state.memory.rate + '%'}"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
};
</script>

<style scoped lang="less">
#leftWarp {
  width: 268px;
  position: fixed;
  display: inline-block;
  height: 100%;
  background: #fff;
  border-right:.5px solid rgba(0, 0, 0, 0.08);

  .header-logo-wrapper {
    height: 26px;
    margin-left: 30px;
    margin-top: 20px;
    background-image: url("//qzonestyle.gtimg.cn/qz-proj/wy-pc-v3/static/img/svg/logo-v2.svg");
  }
  .header-logo-wrapper,
  .header-logo-wrapper-ipad {
    width: 120px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .new-button-wrap {
    display: block;
    position: relative;
    margin-left: 30px;
    margin-top: 48px;
  }
  .drives {
    margin-top: 40px;
    overflow-y: auto;
    height: calc(100% - 185px);

    .tree-wrapper {
      width: 100%;
      overflow-x: hidden;
    height: calc(100vh - 240px);
      .slider-hor-line {
        margin: 13px 0 13px 30px;
        height: 1px;
        width: 208px;
        padding-left: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        background-color: rgba(0, 0, 0, 0.08);
      }
      .slider-li {
        list-style: none;
        .icon-common {
          min-width: 16px;
          margin: 3px 10px 0 0;
          display: inline-block;
          vertical-align: middle;
          background-repeat: no-repeat;
        }
      }
      .slider-li:not(.slider-tree) {
        width: 100%;
        height: 42px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.88);
        line-height: 42px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-left: 30px;
        cursor: pointer;
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          color: rgba(0, 0, 0, 0.88);
        }
      }
      .slider-li-sel:not(.slider-tree) {
        color: rgba(0, 0, 0, 0.88);
        background-color: rgba(0, 0, 0, 0.04);
      }
      .slider-li:not(.slider-tree):hover {
        background-color: rgba(0, 0, 0, 0.02);
      }
      .slider-li-sel:not(.slider-tree):hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
      .silder-tree-parent-wrapper .tree-node-container-root {
        height: 42px;
        line-height: 42px;
        padding-left: 11px;
      }
      .tree-node-container-root-selected {
        background-color: rgba(0, 0, 0, 0.04);
      }
      .silder-tree-parent-wrapper .tree-node-container,
      .silder-tree-parent-wrapper .tree-node-container .tree-node-switcher {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        display: -webkit-flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .tree-node-switcher .icon {
        font-size: 10px;
        color: #000000;
        opacity: 0.404854911;
      }
      .silder-tree-parent-wrapper .tree-node-container .tree-node-switcher {
        width: 14px;
        height: 30px;
        line-height: 30px;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        border: 0 none;
        cursor: pointer;
        outline: none;
        text-align: center;
        -webkit-transform: rotate(270deg);
        -ms-transform: rotate(27deg);
        transform: rotate(27deg);
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .silder-tree-parent-wrapper
        .tree-node-container
        .tree-node-switcher-open {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
      }
      .silder-tree-parent-wrapper
        .tree-node-container
        .tree-node-switcher-close,
      .silder-tree-parent-wrapper
        .tree-node-container
        .tree-node-switcher-open {
        -webkit-transition: -webkit-transform 0.1s ease-in;
        transition: -webkit-transform 0.1s ease-in;
        transition: transform 0.1s ease-in;
        transition: transform 0.1s ease-in, -webkit-transform 0.1s ease-in;
      }
      .silder-tree-parent-wrapper .tree-node-container-root a {
        width: 100%;
        height: 100%;
      }
      .tree-node-switcher-close {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      .silder-tree-parent-wrapper .tree-node-container-root a span {
        display: inline-block;
      }
      .silder-tree-parent-wrapper
        .tree-node-container-root.tree-node-container-root-selected
        a
        .tree-node-title-sel {
        color: rgba(0, 0, 0, 0.88);
        font-size: 14px;
      }
      .silder-tree-parent-wrapper .tree-node-container-root a .icon-mydoc {
        min-width: 16px;
        margin: -3px 10px 0 6px;
        display: inline-block;
        vertical-align: middle;
      }
      .silder-tree-parent-wrapper
        .tree-node-container:not(.tree-node-container-root)
        a {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        overflow: hidden;
      }
      .silder-tree-parent-wrapper
        .tree-node-container:not(.tree-node-container-root):hover {
        background-color: rgba(0, 0, 0, 0.02);
      }
      .tree-node-container {
        a {
          .new-folder {
            width: 16px;
            height: 16px;
            position: relative;
            display: inline-block;
            background-repeat: no-repeat;
            /* font-size: 0; */
            /* overflow: hidden; */
            /* -webkit-text-size-adjust: none; */
            vertical-align: middle;
            /* margin: 0 16px 0 -10px; */
            margin-left: 4px;
            margin-right: 8px;
            background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlPmljb24tZmlsZS1zPC90aXRsZT48ZGVmcz48cGF0aCBkPSJNOSAxLjI4aDhhMSAxIDAgMCAxIDEgMVYxNWExIDEgMCAwIDEtMSAxSDFhMSAxIDAgMCAxLTEtMVYxYTEgMSAwIDAgMSAxLTFoNi4zMDFhMSAxIDAgMCAxIC43MDYuMjkxTDkgMS4yOHoiIGlkPSJhIi8+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMSkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHVzZSBmaWxsPSIjNkFBQkZGIiB4bGluazpocmVmPSIjYSIvPjxwYXRoIGZpbGw9IiM0Qzk0RjAiIG1hc2s9InVybCgjYikiIGQ9Ik0wIDBoMTh2NEgweiIvPjwvZz48L3N2Zz4=");
          }
        }
      }
      .tree-wrapper {
        width: 100%;
        overflow-y: hidden;
        overflow-x: hidden;
      }
      .tree-wrapper-child {
        -webkit-transition: height 0.3s ease-out 0.1s;
        transition: height 0.3s ease-out 0.1s;
        height: auto;
      }
      .silder-tree-parent-wrapper
        .tree-node-container:not(.tree-node-container-root) {
        height: 30px;
        padding-left: 13px;
      }
      .silder-tree-parent-wrapper
        .tree-node-container:not(.tree-node-container-root)
        a
        .tree-node-title,
      .silder-tree-parent-wrapper
        .tree-node-container:not(.tree-node-container-root)
        a
        .tree-node-title-sel {
        display: block;
        -webkit-box-flex: 1;
        flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        margin: 0;
        cursor: pointer;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.88);
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        position: relative;
        line-height: 30px;
        white-space: nowrap;
        overflow: hidden;
        font-size: 13px;
        text-overflow: ellipsis;
      }
      .silder-tree-parent-wrapper
        .tree-node-container:not(.tree-node-container-root).tree-node-container-selected,
      .silder-tree-parent-wrapper
        .tree-node-container:not(.tree-node-container-root).tree-node-container-selected:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }

    .storage-use {
      height: 60px;
      cursor: pointer;
      position: absolute;
      left: 0;
      width: 100%;
      bottom: 0;
      .mod-progress-info {
        padding-left: 20px;
        padding-right: 20px;
        .progress-info-detail {
          margin: 10px 0 0;
        }
        .info-detail-hd,
        a {
          position: relative;
          font-size: 12px;
          color: #777;
        }
        .info-detail-hd {
          .info-used {
            margin: 0 3px 0 0;
          }
          .hd-act {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            .mod-arrow {
              margin: 0 3px 0 0;
              position: relative;
              top: -1px;
              border: solid #687176;
              border-width: 0 1px 1px 0;
              display: inline-block;
              padding: 3px;
              transform: rotate(-45deg);
              -webkit-transform: rotate(-45deg);
            }
          }
        }
        .info-bar {
          position: relative;
          margin: 5px 0 0;
          height: 4px;
          background: #e4e4e4;
        }
        .info-bar-cur {
          height: 100%;
          background: #2980ff;
        }
      }
      .mod-progress-info.warn .info-bar-cur {
        background: #ef4545;
      }
      .mod-progress-info.warn .info-detail-hd {
        color: #ef4545;
      }
    }
    .storage-use:hover {
      background: #eaeaea;
    }
  }
}
</style>
<style lang="less">
#leftWarp {
  .new-button-wrap {
    .ivu-dropdown {
      width: 208px;
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
    .ivu-dropdown-item-divided:before {
      margin: 0;
    }
    .ivu-dropdown-item {
      padding: 0;
    }
    .ivu-dropdown-item:hover {
      background: none;
    }
    .dropdown-list:hover {
      background: #f4f4f4;
    }
    .menu-item-hd {
      height: 18px;
      line-height: 18px;
    }
    .menu-item-hd-tit {
      font-size: 12px;
      color: #9b9b9b;
      padding: 0 0 0 22px;
    }
    .dropdown-list {
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
      i {
        width: 24px;
        height: 24px;
        position: relative;
        display: inline-block;
        background-repeat: no-repeat;
        font-size: 0;
        overflow: hidden;
        -webkit-text-size-adjust: none;
        vertical-align: middle;
        margin: 0 16px 0 -10px;
      }
    }

    .create-or-upload-btn {
      width: 208px;
      line-height: 28px;
      height: 44px;
      font-size: 16px;
      -webkit-border-radius: 2px;
      border-radius: 2px;
      background-color: #0188fb;
      color: #fff;
      opacity: 1;
      span {
        font-weight: 400;
      }
      i {
        vertical-align: middle;
        font-size: 24px;
      }
      .title {
        vertical-align: middle;
      }
    }
  }
}
</style>
