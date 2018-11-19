window.onerror = () => alert('パスフレーズが間違ってます')

let r = new Random((new Date()).getTime())
const RSAK = cryptico.generateRSAKey(location.search.replace(/^\?/, ''), 1024)
for(var k = messages.length - 1; k > 0; k--){
    var j = r.nextInt(0, k);
    var tmp = messages[k];
    messages[k] = messages[j];
    messages[j] = tmp;
}
let data = {"messages" : []}
let i = 0
function add() {
    if(i < messages.length){
        let message = messages[i]
        let left = r.nextInt(0, 800)
        let top = r.nextInt(0, 500)
        let decrypted = decode(cryptico.decrypt(message, RSAK).plaintext)
        setTimeout(function(){
            data.messages.push({
                "message" : decrypted, 
                "style" : {
                    "width": Math.max.apply(null, decrypted.split("\n").filter(b => b).map(b => b.split('').map(c => c.charCodeAt() < 256 ? 1 : 2).reduce((e,f)=>e+f))) / 2 + 5 + 'em',
                    "left": left + 'px',
                    "top": top + 'px'
                }
            })
            add()
        }, r.nextInt(1000 * i, 6000))
    }
    i++
}
let app2 = new Vue({
    el: '#app2',
    data: data,
    methods: {
    }
})
add()
window.onerror = (e) => console.log(e)