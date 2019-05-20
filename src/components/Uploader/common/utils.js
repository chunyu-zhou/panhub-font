var oproto = Object.prototype
var aproto = Array.prototype
var serialize = oproto.toString

var isFunction = function (fn) {
  return serialize.call(fn) === '[object Function]'
}

var isArray = Array.isArray || /* istanbul ignore next */ function (ary) {
  return serialize.call(ary) === '[object Array]'
}

var isPlainObject = function (obj) {
  return serialize.call(obj) === '[object Object]' && Object.getPrototypeOf(obj) === oproto
}

var i = 0
var utils = {
  uid: function () {
    return ++i
  },
  noop: function () {},
  bind: function (fn, context) {
    return function () {
      return fn.apply(context, arguments)
    }
  },
  preventEvent: function (evt) {
    evt.preventDefault()
  },
  stop: function (evt) {
    evt.preventDefault()
    evt.stopPropagation()
  },
  nextTick: function (fn, context) {
    setTimeout(utils.bind(fn, context), 0)
  },
  toArray: function (ary, start, end) {
    if (start === undefined) start = 0
    if (end === undefined) end = ary.length
    return aproto.slice.call(ary, start, end)
  },

  isPlainObject: isPlainObject,
  isFunction: isFunction,
  isArray: isArray,
  isObject: function (obj) {
    return Object(obj) === obj
  },
  isString: function (s) {
    return typeof s === 'string'
  },
  isUndefined: function (a) {
    return typeof a === 'undefined'
  },
  isDefined: function (a) {
    return typeof a !== 'undefined'
  },

  each: function (ary, func, context) {
    if (utils.isDefined(ary.length)) {
      for (var i = 0, len = ary.length; i < len; i++) {
        if (func.call(context, ary[i], i, ary) === false) {
          break
        }
      }
    } else {
      for (var k in ary) {
        if (func.call(context, ary[k], k, ary) === false) {
          break
        }
      }
    }
  },

  /**
   * If option is a function, evaluate it with given params
   * @param {*} data
   * @param {...} args arguments of a callback
   * @returns {*}
   */
  evalOpts: function (data, args) {
    if (utils.isFunction(data)) {
      // `arguments` is an object, not array, in FF, so:
      args = utils.toArray(arguments)
      data = data.apply(null, args.slice(1))
    }
    return data
  },

  extend: function () {
    var options
    var name
    var src
    var copy
    var copyIsArray
    var clone
    var target = arguments[0] || {}
    var i = 1
    var length = arguments.length
    var force = false

    // 如果第一个参数为布尔,判定是否深拷贝
    if (typeof target === 'boolean') {
      force = target
      target = arguments[1] || {}
      i++
    }

    // 确保接受方为一个复杂的数据类型
    if (typeof target !== 'object' && !isFunction(target)) {
      target = {}
    }

    // 如果只有一个参数，那么新成员添加于 extend 所在的对象上
    if (i === length) {
      target = this
      i--
    }

    for (; i < length; i++) {
      // 只处理非空参数
      if ((options = arguments[i]) != null) {
        for (name in options) {
          src = target[name]
          copy = options[name]

          // 防止环引用
          if (target === copy) {
            continue
          }
          if (force && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false
              clone = src && isArray(src) ? src : []
            } else {
              clone = src && isPlainObject(src) ? src : {}
            }
            target[name] = utils.extend(force, clone, copy)
          } else if (copy !== undefined) {
            target[name] = copy
          }
        }
      }
    }
    return target
  },

  formatSize: function (size) {
    if (size < 1024) {
      return size.toFixed(0) + ' bytes'
    } else if (size < 1024 * 1024) {
      return (size / 1024.0).toFixed(0) + ' KB'
    } else if (size < 1024 * 1024 * 1024) {
      return (size / 1024.0 / 1024.0).toFixed(1) + ' MB'
    } else {
      return (size / 1024.0 / 1024.0 / 1024.0).toFixed(1) + ' GB'
    }
  },

  defineNonEnumerable: function (target, key, value) {
    Object.defineProperty(target, key, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    })
  }
}

export default utils;

export function kebabCase (s) {
  return s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)
}

// 根据文件格式获取类型
export const getFileType = (type) => {
  if(type == 'folder') {
    return 'folder';
  }
  var c = [
    {type: ["doc", "docx", "wps", "docm", "dot", "dotx", "dotm", "rtf"],val: 'doc'},
    {type: ["xls", "xlsx", "xlsm", "xltx", "xltm", "xlam", "xlsb", "et"],val: 'xls'},
    {type: ["ppt", "pptx", "dps", "pptm"],val: 'ppt'},
    {type: ["jpg", "jpeg", "tif", "tiff", "png", "gif", "webp", "bmp", "exif", "raw", "image", "heic"],val: 'pic'},
    {type: ["mp4", "mov", "mkv", "mpg", "mpeg", "dat", "f4a", "webm", "mod", "avi", "mpe", "mpeg4", "wmv", "wmf", "asf", "ram", "m1v", "m2v", "mpe", "m4b", "m4p", "m4v", "vob", "divx", "ogm", "ssa", "rmvb", "rm", "3gp", "3g2", "3gp2", "3gpp", "flv"],val: 'video'},
    {type: ["mp3", "wav", "wave", "acc", "aac", "aiff", "amr", "ape", "flac", "m4a", "mid", "midi", "ogg", "rtttl", "wma", "ram", "ra", "au", "xmf"],val: 'audio'},
    {type: ["fla", "swf"],val: 'flv'},
    {type: ["zip", "rar", "tar", "jar", "7z", "z", "7-zip", "ace", "lzh", "arj", "gzip", "bz2", "cab", "compress", "uue", "iso", "dmg"],val: 'zip'},
    {type: ["ini", "css", "js", "java", "as", "py", "php", "c", "cpp", "h", "cs", "plist", "html", "htm", "xml", "ipe", "proto"],val: 'code'},
    {type: ["note"],val: 'note'},
    {type: ["key"],val: 'keynote'},
    {type: ["ipa"],val: 'ipa'},
    {type: ["pdf"],val: 'pdf'},
    {type: ["txt", "text", "rp", "document"],val: 'txt'},
    {type: ["msg", "oft"],val: 'msg'},
    {type: ["apk"],val: 'apk'},
    {type: ["vsd", "vsdx"],val: 'vsd'},
    {type: ["sketch"],val: 'sketch'},
    {type: ["psd", "psb"],val: 'ps'},
    {type: ["ai", "eps", "svg"],val: 'ai'},
    {type: ["numbers"],val: 'numbers'},
    {type: ["ttf", "opt", "fon", "ttc"],val: 'font'},
    {type: ["pages"],val: 'pages'},
    {type: ["unknow", "srt", "ass", "chm", "hlp", "cnt", "asp", "bak", "bat", "exe", "exec", "dll", "xmin", "log", "msi", "old", "tmp"],val: 'nor'},
    {type: ["filebroken"],val: 'damaged'},
    {type: ["torrent"],val: 'bt'},
  ];

  for (var getType of c) {
    if(getType.type.indexOf(type) > -1){
      return getType.val;
    }
  }
  return 'nor';
}

export function secondsToStr (temp) {
  const years = Math.floor(temp / 31536000)
  if (years) {
    return years + ' year' + numberEnding(years)
  }
  const days = Math.floor((temp %= 31536000) / 86400)
  if (days) {
    return days + ' day' + numberEnding(days)
  }
  const hours = Math.floor((temp %= 86400) / 3600)
  if (hours) {
    return hours + ' hour' + numberEnding(hours)
  }
  const minutes = Math.floor((temp %= 3600) / 60)
  if (minutes) {
    return minutes + ' minute' + numberEnding(minutes)
  }
  const seconds = temp % 60
  return seconds + ' second' + numberEnding(seconds)
  function numberEnding (number) {
    return (number > 1) ? 's' : ''
  }
}