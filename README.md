# lolistorage
a simple persistence kv storage

install

    npm i lolistorage -S

example

    var lolistorage = require('lolistorage');

    async function test() {
        try{
            var loli = await lolistorage.init()
            await loli.setkv('name','niconico')
            await loli.setkv('pants','green')
            await loli.setkv('age','12')
            await loli.setkv('age','13') //change value
            await loli.setkv('pants', undefined) //unset value

            var name = await loli.getkv('name')
            var age = await loli.getkv('age')
            var unknown = await loli.getkv('unknown')
            var pants = await loli.getkv('pants')

            console.log(`I am ${name}, ${age} years old , weight is ${unknown}, pants ${pants}`)
        }catch (e){
            console.log('e1',e)
        }
    }

    test()
