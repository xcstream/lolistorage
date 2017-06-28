var fs = require('fs-extra');
var md5 = require('md5')
function leagal_loli(name) {
    return Object.prototype.toString.call(name) === "[object String]"
}
function name_loli(k) {
    return global['_lolistorage_dir'] + '/' + md5('lolistorage' + k).substr(0,2) + '.lo'
}
module.exports = {
    init:async function(path){
        var dir = path || '.lolis'
        global['_lolistorage_dir'] = dir
        await fs.ensureDir(dir);
        await fs.ensureFile(dir + '/index.loli')
        try{
            var res = await fs.readJson(dir + '/index.loli')
        }catch (e){
            var res = await fs.writeJson(dir + '/index.loli' , { keys:'default' })
        }
        return Promise.resolve(this)
    },
    setkv:async function(k,v){
        if( !leagal_loli(k)){
            return Promise.reject('key must be a string')
        }
        var fn = name_loli(k)
        await fs.ensureFile(fn)
        try{
            var muufmuuf = await fs.readJson(fn)
            muufmuuf[k] = v
            var res = await fs.writeJson(fn, muufmuuf )
        }catch (e){
            var muufmuuf = {}
            muufmuuf[k] = v
            var res = await fs.writeJson(fn, muufmuuf )
            if(!res) {
                Promise.reject(e)
            }
        }
        return Promise.resolve(true)
    },
    getkv:async function(k){
        if( !leagal_loli(k)){
            return Promise.reject('key must be a string')
        }
        var fn = name_loli(k)
        await fs.ensureFile(fn)
        try{
            var muufmuuf = await fs.readJson(fn)
            return Promise.resolve(muufmuuf[k])
        }catch (e){
            return Promise.resolve(undefined)
        }
    }
}