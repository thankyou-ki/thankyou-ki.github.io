const RSAK = cryptico.generateRSAKey(location.search.replace(/^\?/, ''), 1024)
messages = messages.sort((a, b) => Math.floor(Math.random() * 2))
let data = {"messages" : []}
let i = 0
let app2
function add(){
    if(i < messages.length){
        let message = messages[i]
        setTimeout(function(){
            let left = Math.random() * 1280 / 1.5
            let top = Math.random() * 1024 / 1.5
            let decrypted = decode(cryptico.decrypt(message, RSAK).plaintext)
            data.messages.push({
                "message" : decrypted, 
                "style" : {
                    "width": Math.max.apply(null, decrypted.split("\n").filter(b => b).map(b => b.split('').map(c => c.charCodeAt() < 256 ? 1 : 2).reduce((e,f)=>e+f))) / 2 + 5 + 'em',
                    "left": left + 'px',
                    "top": top + 'px'
                }
            })
            add()
        }, 2000 + Math.random() * 5000)
    }
    i++
}
app2 = new Vue({
    el: '#app2',
    data: data,
    methods: {
    }
})
add()