<template>
    <div class="uploader-file-item-curr" :status="status">
        <slot
                :file="file"
                :list="list"
                :status="status"
                :paused="paused"
                :error="error"
                :average-speed="averageSpeed"
                :formated-average-speed="formatedAverageSpeed"
                :current-speed="currentSpeed"
                :is-complete="isComplete"
                :is-uploading="isUploading"
                :size="size"
                :formated-size="formatedSize"
                :uploaded-size="uploadedSize"
                :progress="progress"
                :progress-style="progressStyle"
                :progressing-class="progressingClass"
                :time-remaining="timeRemaining"
                :formated-time-remaining="formatedTimeRemaining"
                :type="type"
                :extension="extension"
        >
            <div class="process" :style="{width: error==false?progress*100+'%':'0%'}"></div>
            <div class="info">
                <div class="file-icon">
                    <img style="width: 32px;height: 32px;" :src="getFilePreview(file)">
                </div>
                <div class="file-name css-ellipsis">{{ file.name }}</div>
                <div class="file-size">{{ formatedFileSize }} / {{formatedSize}}</div>
                <div class="upload-dir css-ellipsis">asdasd</div>
                <div class="upload-status" style="width: 135px;">
                    <span>
                        <span v-if="status === 'error'">
                            <i class="icon icon-task-fail"></i>
                        </span>
                        <span v-if="status === 'success'">
                            <i class="icon icon-task-succ"></i>
                        </span>
                    </span>

                    <span>
                        <span v-if="status=='pending'">等待上传</span>
                        <span v-else-if="file.isGetMd5">效验中 {{ file.reckon_md5_num }}%</span>
                        <span v-else-if="status === 'uploading'"> {{ formatedCurrentSpeed }} </span>
                        <span v-else-if="status === 'success'">
                            <span v-if="file.statusCode == 20001" >秒传</span>
                            <span v-else >上传成功</span>
                        </span>
                        <span v-else>
                            <span v-if="file.statusCode == 411">{{ file.statusStrTitle }}</span>
                            <span v-else>{{ statusText }}</span>
                        </span>
                    </span>
                </div>
                <div class="upload-cancel">
                    <span v-show="paused===false&&file.reckon_md5_num==100&&status != 'success'&&status != 'error'" @click="pause">
                        <i class="icon icon-pause"></i>
                    </span>
                    <span v-show="paused===true&&file.reckon_md5_num==100&&status != 'success'&&status != 'error'" @click="resume">
                        <i class="icon icon-start"></i>
                    </span>

                    <span v-if="file.statusCode == 411"><a-button size="small" type="danger" style="font-size:12px;">点我解决</a-button></span>
                    <span v-else v-show="status != 'success'&&status != 'error'" @click="remove" :style="{marginLeft:file.is_reckon_md5==true?'8px':'0px'}">
                        <i class="icon icon-trash"></i>
                    </span>

                    <span v-show="status == 'success'">
                        <i @click="toDir(file.file_path)" class="icon icon-task-godir"></i>
                    </span>
                </div>
            </div>

        </slot>
    </div>
</template>

<script>
    import { utils, getFileType, secondsToStr } from './common/utils'
    import { formatSize } from '@/assets/js/utils'
    import events from './common/file-events'

    const COMPONENT_NAME = 'uploader-file'
    export default {
        name: COMPONENT_NAME,
        props: {
            file: {
                type: Object,
                default() {
                    return {}
                }
            },
            list: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                paused: false,
                error: false,
                averageSpeed: 0,
                currentSpeed: 0,
                isComplete: false,
                isUploading: false,
                size: 0,
                formatedSize: '',
                uploadedSize: 0,
                progress: 0,
                timeRemaining: 0,
                type: '',
                extension: '',
                progressingClass: ''
            }
        },
        computed: {
            progressStyle() {
                const progress = Math.floor(this.progress * 100)
                const style = `translateX(${Math.floor(progress - 100)}%)`
                return {
                    progress: `${progress}%`,
                    webkitTransform: style,
                    mozTransform: style,
                    msTransform: style,
                    transform: style
                }
            },
            formatedAverageSpeed() {
                return `${formatSize(this.averageSpeed)} / s`
            },
            formatedFileSize() {
                return `${formatSize(this.uploadedSize)}`
            },
            formatedCurrentSpeed() {
                return `${formatSize(this.currentSpeed)} / s`
            },
            status() {
                const isUploading = this.isUploading
                const isComplete = this.isComplete
                const isError = this.error
                const paused = this.paused
                if (isComplete) {
                    return 'success'
                } else if (isError) {
                    return 'error'
                } else if (isUploading) {
                    return 'uploading'
                } else if (paused) {
                    return 'paused'
                } else {
                    return 'waiting'
                }
            },
            statusText() {
                const status = this.status
                return this.file.uploader.fileStatusText[status] || status
            },
            formatedTimeRemaining() {
                const timeRemaining = this.timeRemaining
                const file = this.file
                if (timeRemaining === Number.POSITIVE_INFINITY || timeRemaining === 0) {
                    return ''
                }
                let parsedTimeRemaining = secondsToStr(timeRemaining)
                const parseTimeRemaining = file.uploader.opts.parseTimeRemaining
                if (parseTimeRemaining) {
                    parsedTimeRemaining = parseTimeRemaining(timeRemaining, parsedTimeRemaining)
                }
                return parsedTimeRemaining
            },
        },
        watch: {
            status(newStatus, oldStatus) {
                if (oldStatus && newStatus === 'uploading' && oldStatus !== 'uploading') {
                    this.tid = setTimeout(() => {
                        this.progressingClass = 'uploader-file-progressing'
                    }, 200)
                } else {
                    clearTimeout(this.tid)
                    this.progressingClass = ''
                }
            },
        },
        methods: {
            getFilePreview(file) {
                let type = getFileType(file.getType());
                let url = '';
                if(file.isfolder) {
                    url = '';
                } else if(type == 'pic') {
                    url = window.URL.createObjectURL(file.file);
                }

                return url;
            },
            toDir(href) {
                let url = '/disk';
                if(href != '/') {
                    url += '/dir/'+href
                }
                this.$router.push(url);
            },
            _actionCheck() {
                this.paused = this.file.paused
                this.error = this.file.error
                this.isUploading = this.file.isUploading()
            },
            pause() {
                this.file.pause()
                this._actionCheck()
                this._fileProgress()
            },
            resume() {
                this.file.resume()
                this._actionCheck()
            },
            remove() {
                this.file.cancel()
            },
            retry() {
                this.file.retry()
                this._actionCheck()
            },
            fileEventsHandler(event, args) {
                const rootFile = args[0]
                const file = args[1]
                const target = this.list ? rootFile : file
                if (this.file === target) {
                    if (this.list && event === 'fileSuccess') {
                        return
                    }
                    this[`_${event}`].apply(this, args)
                }
            },
            _fileProgress() {
                this.progress = this.file.progress()
                this.averageSpeed = this.file.averageSpeed
                this.currentSpeed = this.file.currentSpeed
                this.timeRemaining = this.file.timeRemaining()
                this.uploadedSize = this.file.sizeUploaded()
                this._actionCheck()
            },
            _fileSuccess() {
                this._fileProgress()
                this.error = false
                this.isComplete = true
                this.isUploading = false
            },
            _fileComplete() {
                this._fileSuccess()
            },
            _fileError() {
                this._fileProgress()
                this.error = true
                this.isComplete = false
                this.isUploading = false
            }
        },
        mounted() {
            const staticProps = ['paused', 'error', 'averageSpeed', 'currentSpeed']
            const fnProps = [
                'isComplete',
                'isUploading',
                {
                    key: 'size',
                    fn: 'getSize'
                },
                {
                    key: 'formatedSize',
                    fn: 'getFormatSize'
                },
                {
                    key: 'uploadedSize',
                    fn: 'sizeUploaded'
                },
                'progress',
                'timeRemaining',
                {
                    key: 'type',
                    fn: 'getType'
                },
                {
                    key: 'extension',
                    fn: 'getExtension'
                }
            ]
            staticProps.forEach(prop => {
                this[prop] = this.file[prop]
            })
            fnProps.forEach((fnProp) => {
                if (typeof fnProp === 'string') {
                    this[fnProp] = this.file[fnProp]()
                } else {
                    this[fnProp.key] = this.file[fnProp.fn]()
                }
            })
            const handlers = this._handlers = {}
            const eventHandler = (event) => {
                handlers[event] = (...args) => {
                    this.fileEventsHandler(event, args)
                }
                return handlers[event]
            }
            events.forEach((event) => {
                this.file.uploader.on(event, eventHandler(event))
            })
        },
        destroyed() {
            events.forEach((event) => {
                this.file.uploader.off(event, this._handlers[event])
            })
            this._handlers = null
        }
    }
</script>

<style lang="less">
    .uploader-file-item-curr {
        width: 100%;
        height: 45px;
        .process {
            width: 0;
            position: relative;
            z-index: 0;
            height: 100%;
            *height: 45px;
            left: 0;
            top: 0;
            background: #e2eeff;
            border-bottom: 1px solid #F7F7F7;
        }
        .info {
            top: 0;
            left: 0;
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;
            .file-icon {
                width: 45px;
            }
            .file-name {
                width: 180px;
                height: 45px;
                max-height: 256px;
                overflow: hidden;
            }
            .file-size {
                width: 150px;
            }
            .upload-dir {
                width: 120px;
            }
            .upload-status {
                width: 135px;
            }
            .upload-cancel {
                width: 55px;
                text-align: center;
                color: #107FFC;
                .anticon {
                    font-size: 20px;
                    display: inline-block;
                    margin-right: 10px;
                }
            }
            .my-svg-sprite {
                width: 1em;
                height: 1em;
                vertical-align: middle;
            }
        }
        .info div{
            display: inline-block;
            float: left;
        }
        .file-name {
            position: relative;
            float: left;
            overflow: hidden;
            width: 43%;
            height: 49px;
            white-space: nowrap;
            text-overflow: ellipsis;
            .file-icon {
                position: absolute;
                top: 12px;
                left: 13px;
                width: 24px;
                height: 24px;
            }
            .name-text {
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .file-path {
            float: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 13%;
            height: 49px;
            a {
                color: #5d9cff;
            }
        }

    }
</style>