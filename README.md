#lolistorage
a simple persistence kv storage

example

    var lolistorage = require('lolistorage');
    async function test() {
        try{
            var loli = await lolistorage.init()
            await loli.setkv('name','niconico')
            await loli.setkv('mimi','123')
            await loli.setkv('age','12')
            await loli.setkv('age','13') //change value
            await loli.setkv('mimi', undefined) //unset value

            var name = await loli.getkv('name')
            var age = await loli.getkv('age')
            var unknown = await loli.getkv('unknown')
            var mimi = await loli.getkv('mimi')

            console.log(`I am ${name}, ${age} years old , weight is ${unknown}`)
        }catch (e){
            console.log(e)
        }
    }
    test()