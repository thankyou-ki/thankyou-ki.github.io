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
let boxes = [];
let n = 5;
let width = 200;
for(let i = 0; i < n;i++){
    for(let j = 0; j < n;j++){
        boxes.push([i*width,j*width]);
    }
}
boxes = boxes.sort(function() { return Math.random() - 0.5; }).sort(function() { return Math.random() - 0.5; });
function add() {
    if(i < messages.length){
        let message = messages[i].hasOwnProperty("message") ? messages[i]["message"] : messages[i]
        let style = messages[i].hasOwnProperty("style") ? messages[i]["style"] : {}
        let box = boxes.pop();
        let left = r.nextInt(0, 50)+box[0];
        let top = r.nextInt(0, 50)+box[1];
        let decrypted = decode(cryptico.decrypt(message, RSAK).plaintext)
        setTimeout(function(){
            data.messages.push({
                "message" : decrypted, 
                "style" : Object.assign({
                    "width": Math.max.apply(null, decrypted.split("\n").filter(b => b).map(b => b.split('').map(c => c.charCodeAt() < 256 ? 1 : 2).reduce((e,f)=>e+f))) / 2 + 5 + 'em',
                    "left": left + 'px',
                    "top": top + 'px'
                }, style)
            })
            add()
        }, r.nextInt(1000 * i, 6000))
    }
    i++
}
add()
let app2 = new Vue({
    el: '#app2',
    data: data,
    methods: {
    }
})
window.onerror = (e) => console.log(e)
