var fs = require('fs-extra');
var md5 = require('md5')
function leagal_loli(name) {
    return Object.prototype.toString.call(name) === "[object String]"
}
function name_loli(k) {
    return __dirname + '/' + md5('lolistorage' + k).substr(0,2) + '.lo'
}
module.exports = {
    init:async function(){
        var dir = __dirname +'/.lolis'
        await fs.ensureDir(dir);
        return Promise.resolve(this)
    },
    setkv:async function(k,v){
        if( !leagal_loli(k)){
            return Promise.reject('key must be a string')
        }
        var fn = name_loli(k)
        if(!await fs.exists(fn)){
            var muufmuuf = {}
            muufmuuf[k] = v
            var res = await fs.writeJson(fn, muufmuuf )
            return Promise.resolve(true)
        }else{
            var muufmuuf = await fs.readJson(fn)
            muufmuuf[k] = v
            await fs.writeJson(fn, muufmuuf )
            return Promise.resolve(true)
        }

    },
    getkv:async function(k){
        if( !leagal_loli(k)){
            return Promise.reject('key must be a string')
        }
        var fn = name_loli(k)

        if(!await fs.exists(fn)){
            return Promise.resolve(undefined)
        }
        try{
            var muufmuuf = await fs.readJson(fn)
            return Promise.resolve(muufmuuf[k])
        }catch (e){
            return Promise.resolve(undefined)
        }
    }
}