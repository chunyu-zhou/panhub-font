import File from './file'
export function _parseFile(files, ppdir) {
    ppdir = ppdir || '';
    var filePaths = ppdir;
    let retFiles = [];
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let relativePath = file.webkitRelativePath || file.relativePath || '';
        if(relativePath !== '') {
            var ppaths = parsePaths(relativePath);
            var folderFile = filePaths[ppdir];
            retFiles.files.push(file);
        } else {
            retFiles.push((new File(file, this.maxRetries)));
        }

        // this.files.push(new File(file, this.maxRetries))
    }
    console.log(retFiles);




    /*let relativePath = file.webkitRelativePath || file.relativePath || '';
    var ppaths = parsePaths(relativePath)
    if (ppaths !== '') {
        var filePaths = '/'
        this.each(files, function (path, i) {
            console.log(path, i);
            var folderFile = filePaths[path]
            if (!folderFile) {
                folderFile = new File(this.uploader, path, this.parent)
                filePaths[path] = folderFile
                this._updateParentFileList(folderFile)
            }
            this.parent = folderFile
            folderFile.files.push(this)
            if (!ppaths[i + 1]) {
                folderFile.fileList.push(this)
            }
        }, this)
    } else {
        this._updateParentFileList()
    }*/
}
export function _updateParentFileList(file) {
    if (!file) {
        file = this
    }
    var p = this.parent
    if (p) {
        p.uploadList.push(file)
    }
}

export function each(ary, func, context) {
    if (typeof ary.length !== 'undefined') {
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
}

function parsePaths (path) {
    var ret = []
    var paths = path.split('/')
    var len = paths.length
    var i = 1
    paths.splice(len - 1, 1)
    len--
    if (paths.length) {
        while (i <= len) {
            ret.push(paths.slice(0, i++).join('/'))
        }
    }
    return ret
}