import config from '../../assets/js/config'

export const showImg = (url) => {
    return url;
}

/**
 * 存储localStorage
 * @param name
 * @param content
 * @param duration Storage有效时间，单位：小时
 * @param set_time 是否设置时间
 * @returns {boolean}
 */
export const setStore = (name, content, set_time = false, duration = 0) => {
    if (!name) return false
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    if (set_time) {
        let date = new Date
        if (duration > 0) {
            content += '&' + (date.getTime() + duration * 3600 * 1e3)
        } else {
            content += '&0'
        }
        content += '&' + (date.getTime())
    }
    window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 * @param name
 * @param parse // 是否json格式化
 * @returns {boolean}
 */
export const getStore = (name, parse = false) => {
    if (!name) return false
    if (parse) {
        return JSON.parse(window.localStorage.getItem(name))
    }
    return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return false
    window.localStorage.removeItem(name)
}

/**
 * 生成cookie
 * @param name cookie名称
 * @param value cookie值
 * @param duration cookie有效时间，单位：小时
 */
export const addCookie = (name, value, duration) => {
    let n = name + '=' + escape(value) + '; path=/'
    if (duration > 0) {
        let date = new Date
        date.setTime(date.getTime() + duration * 3600 * 1e3)
        n = n + ';expires=' + date.toGMTString()
    }
    document.cookie = n
}

/**
 * 获取cookie
 * @param name cookie名称
 * @returns {null}
 */
export const getCookie = (name) => {
    let t = document.cookie
    let a = t.split('; ')
    for (let n = 0; n < a.length; n++) {
        let r = a[n].split('=')
        if (r[0] === name) {
            return unescape(r[1])
        }
    }
    return null
}

/**
 * 移除cookie
 * @param name cookie名称
 */
export const delCookie = (name) => {
    let t = new Date
    t.setTime(t.getTime() - 1)
    let a = getCookie(name)
    if (a !== null) document.cookie = name + '=' + a + '; path=/;expires=' + t.toGMTString()
}

export const format_date = (data, show = true) => {
        //格式化时间
        let now = new Date(data * 1000);
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        let hour = now.getHours();
        let minute = now.getMinutes();
        // let second = now.getSeconds();
        if (month < 10) {
            month = '0' + month;
        }
        if (date < 10) {
            date = '0' + date;
        }
        if (hour < 10) {
            hour = '0' + hour;
        }
        if (minute < 10) {
            minute = '0' + minute;
        }
        const finally_date = {
            year: year,
            month: month,
            day: date,
            hour: hour,
            minute: minute
        }
        if (show) {
            return year + "-" + month + "-" + date + "   " + hour + ":" + minute;
        } else {
            return finally_date
        }
    }
    /**
     * 转换时间为可阅读格式，传入date的time值
     * @param time
     * @returns {*}
     */
export const prettyTime2Chinese = (time) => {
    if (!time) {
        return '';
    }
    if (isNaN(time)) {
        return '格式不正确';
    }
    var minute = 60 * 1000, //1分钟
        hour = 60 * minute, //1小时
        day = 24 * hour, //1天
        month = 12 * day, //月
        year = 12 * month; //年

    var diff = new Date().getTime() - time;
    var r = 0;
    if (diff > year) {
        r = parseInt(diff / year);
        return r + "年前";
    }
    if (diff > month) {
        r = parseInt(diff / month);
        return r + "个月前";
    }
    if (diff > day) {
        r = parseInt(diff / day);
        if (r == 1) {
            return "昨天";
        }
        return r + "天前";
    }
    if (diff > hour) {
        r = parseInt(diff / hour);
        return r + "个小时前";
    }
    if (diff > minute) {
        r = parseInt(diff / minute);
        return r + "分钟前";
    }
    return "刚刚";
};

/**
 * 数字转英文字母
 * 如：1->A
 * @param num
 * @returns {string}
 */
export const convert = (num) => {
    let result = "";
    while (num) {
        result = String.fromCharCode(--num % 26 + 65) + result;
        num = Math.floor(num / 26)
    }
    return result
}

// 判断参数是否是其中之一
export function oneOf(value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

/**
 * 根据class获取节点
 * @param className
 * @param tag
 * @returns {NodeList}
 */
export const getClassObj = (className, tag) => {
    tag = tag || document
    className = className || '*'
    let findarr = []
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(className)
    }
    let el = document.getElementsByTagName(tag)
    let pattern = new RegExp('(^|\\s)' + className + '(\\s|$)')
    for (let i = 0; i < el.length; i++) {
        if (pattern.test(el[i].className)) {
            findarr.push(el[i])
        }
    }
}

/**
 * 判断某dom是否有滚动条
 * @param el dom对象
 * @param direction 垂直滚动或水平滚动
 * @returns {boolean}
 */
export const hasScrolled = (el, direction = "vertical") => {
    if (!el) {
        return false;
    }
    let overflow = el.currentStyle ? el.currentStyle.overflow :
        window.getComputedStyle(el).getPropertyValue("overflow");
    if (overflow === "hidden") return false;

    if (direction === "vertical") {
        return el.scrollHeight > el.clientHeight;
    } else if (direction === "horizontal") {
        return el.scrollWidth > el.clientWidth;
    }
}

/**
 * 根据 ext 获取文件类型
 * @param ext 文件后缀
 * @returns {string}
 */
export const extType = (ext) => {
    let c = {
        doc: ["doc", "docx", "wps", "docm", "dot", "dotx", "dotm", "rtf"],
        xls: ["xls", "xlsx", "xlsm", "xltx", "xltm", "xlam", "xlsb", "et"],
        ppt: ["ppt", "pptx", "dps", "pptm"],
        pic: ["jpg", "jpeg", "tif", "tiff", "png", "gif", "webp", "bmp", "exif", "raw", "image", "heic"],
        video: ["mp4", "mov", "mkv", "mpg", "mpeg", "dat", "f4a", "webm", "mod", "avi", "mpe", "mpeg4", "wmv", "wmf", "asf", "ram", "m1v", "m2v", "mpe", "m4b", "m4p", "m4v", "vob", "divx", "ogm", "ssa", "rmvb", "rm", "3gp", "3g2", "3gp2", "3gpp", "flv"],
        audio: ["mp3", "wav", "wave", "acc", "aac", "aiff", "amr", "ape", "flac", "m4a", "mid", "midi", "ogg", "rtttl", "wma", "ram", "ra", "au", "xmf"],
        flv: ["fla", "swf"],
        zip: ["zip", "rar", "tar", "jar", "7z", "z", "7-zip", "ace", "lzh", "arj", "gzip", "bz2", "cab", "compress", "uue", "iso", "dmg"],
        code: ["ini", "css", "js", "java", "as", "py", "php", "c", "cpp", "h", "cs", "plist", "html", "htm", "xml", "ipe", "proto"],
        note: ["note"],
        keynote: ["key"],
        ipa: ["ipa"],
        pdf: ["pdf"],
        txt: ["txt", "text", "rp", "document"],
        msg: ["msg", "oft"],
        apk: ["apk"],
        vsd: ["vsd", "vsdx"],
        sketch: ["sketch"],
        ps: ["psd", "psb"],
        ai: ["ai", "eps", "svg"],
        numbers: ["numbers"],
        font: ["ttf", "opt", "fon", "ttc"],
        pages: ["pages"],
        // nor: ["unknow", "srt", "ass", "chm", "hlp", "cnt", "asp", "bak", "bat", "exe", "exec", "dll", "xmin", "log", "msi", "old", "tmp"],
        damaged: ["filebroken"],
        bt: ["torrent"],
        markdown: ["md"]
    };

    for (var p in c) {
        let datas = c[p];
        if (datas.indexOf(ext) > -1) {
            return p;
        }
    }
    return 'nor';
}


/**
 * 根据 ext 获取文件图标
 * @param ext 文件后缀
 * @param size 大小
 * @returns {string}
 */
export const extIcon = (ext, size = 'l') => {
    let type = extType(ext);
    return 'icon-' + type + '-' + size;
}

/**
 * 多数组合并
 * @param arrList
 * @returns {Array}
 */
export const array_merge = (...arrList) => {
    let array = [];
    const middeleArray = arrList.reduce((a, b) => {
        return a.concat(b);
    });
    middeleArray.forEach((arrItem) => {
        if (array.indexOf(arrItem) == -1) {
            array.push(arrItem);
        }
    });
    return array;
}


// 格式化文件大小
export const formatSize = (size) => {
    if (size == 1099511627776000000) {
        return '无限容量';
    } else if (size < 1024) {
        return size.toFixed(0) + ' bytes'
    } else if (size < 1024 * 1024) {
        return (size / 1024.0).toFixed(0) + ' KB'
    } else if (size < 1024 * 1024 * 1024) {
        return (size / 1024.0 / 1024.0).toFixed(1) + ' MB'
    } else if (size < 1024 * 1024 * 1024 * 1024) {
        return (size / 1024.0 / 1024.0 / 1024.0).toFixed(1) + ' GB'
    } else if (size < 1024 * 1024 * 1024 * 1024 * 1024) {
        return (size / 1024.0 / 1024.0 / 1024.0 / 1024.0).toFixed(1) + ' TB'
    } else {
        return (size / 1024.0 / 1024.0 / 1024.0 / 1024.0 / 1024.0).toFixed(1) + ' PB'
    }
}

// 获取没有上传的文件
export const getNotUploadFile = (fileList, max_len) => {
    let ActLen = 0;
    let ActFile = [];
    if (fileList.length < 1) {
        return {
            ActLen: ActLen,
            ActFile: ActFile,
        }
    }
    for (let file of fileList) {
        if (file.isFolder == true) {
            let info = getNotUploadFile(file.fileList, max_len);
            ActLen += info.ActLen;
            ActFile = array_merge(info.ActFile, ActFile);
        } else {
            if (file.isrun == true) {
                ActLen++;
            } else if (file.is_task == true && file.run_type != 'success') {
                if (ActFile.length < max_len) {
                    file.isrun = true;
                    ActFile.push(file);
                }
            }
        }
    }
    return {
        ActLen: ActLen,
        ActFile: ActFile,
    }
}

export const blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;