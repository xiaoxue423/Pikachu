const string = `
.skin * {
    box-sizing:border-box;
    margin: 0;
    padding: 0;
}
.skin *::before,*::after{
    box-sizing:border-box;
}
.skin {
    background: #ffe600;
    min-height: 60vh;
    position: relative;
}
@media(max-width:500px){
    .skin {
        min-height: 60vh;
    }
}
.node {
    position: relative;
    width: 0px;
    height: 0px;
    border: 20px solid black;
    border-top-color: black;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
    left: 50%;
    top: 150px;
    margin-left: -20px;  
}
@keyframes wave {
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.node:hover {
    /* 左右方向以正中心为准   上下方向以最下面为准 */
    transform-origin: 50% 100%;
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
}
.yuanhu {
    position: absolute;
    width: 40px;
    height: 10px;
    border: 1px solid black;
    top: -30px;
    left: -20px;
    border-radius: 10px 10px 0 0;
    background: black;
}
.eye {
    position: absolute;
    border: 1px soid red;
    width: 64px;
    height: 64px;
    left: 50%;
    top: 95px;
    background: #2e2e2e;
    margin-left: -32px;
    border-radius: 50%;
}
@media(max-width:500px){
    .eye {
        width: 55px;
        height: 55px;
    }
}
.eye::before{
    content: '';
    display: block;
    width: 32px;
    height: 32px;
    border: 3px solid #000;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 4px;
}
@media(max-width:500px){
    .eye::before {
        width: 27.5px;
        height: 27.5px;
    }
}
.eye.left {
    transform: translateX(-130px);
}
@media(max-width:500px){
    .eye.left {
        transform: translateX(-100px);
    }
}
.eye.right {
    transform: translateX(130px);
}
@media(max-width:500px){
    .eye.right {
        transform: translateX(100px);
    }
}
.mouth {
    position: absolute;
    /* border: 1px solid red; */
    width: 200px;
    height: 200px;
    left: 50%;
    top: 180px;
    margin-left: -100px;
}
@media(max-width:500px){
    .mouth {
        /* border: 1px solid green; */
        width: 100px;
        height: 100px;
    }
}
.mouth .up {
    position: relative;
    z-index: 100;
    top: 20px;
}
.mouth .up .lip {
    border: 4px solid black;
    width: 150px;
    height: 35px;
    border-top: transparent;
    background: #ffe600;
}
@media(max-width:500px){
    .mouth .up .lip {
        width: 100px;
        height: 21.5px;
    }
}
.mouth .up .lip.left {
    border-radius: 0 0 0 30px;
    border-right: transparent;
    transform: rotate(-26deg);
    position: absolute;
    left: 50%;
    margin-left: -150px;
}
@media(max-width:500px){
    .mouth .up .lip.left {
        margin-left: -45px;
    }
}
.mouth .up .lip.right {
    border-radius: 0 0 30px 0;
    border-left: transparent;
    transform: rotate(26deg);
    position: absolute;
    left: 50%;
    margin-left: -6px;
}
@media(max-width:500px){
    .mouth .up .lip.right {
        margin-left: 50px;
    }
}
.mouth .down {
    /* border: 1px solid red; */
    width: 250px;
    height: 180px;
    position: relative;
    left: -30px;
    top: 20px;
    overflow: hidden;
}
@media(max-width:500px){
    .mouth .down {
        width: 150px;
        height: 160px;
        position: relative;
        left: 25px;
        top: 28px;  
    }
}
.mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 800px;
    position: absolute;
    bottom:0;
    left: 50%;
    /* top: 10px; */
    margin-left: -73px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
    /* border: 1px solid green; */
    background: #ff485f;
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -160px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}
.face {
    position: absolute;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 250px;
    left:50%;
    margin-left: -44px;
    z-index: 3;
    background: #ff0000;
    border-radius: 50%;
}
@media(max-width:500px){
    .face {
        width: 66px;
        height: 66px;
    }
}
.face.left {
    transform: translateX(-200px);
}
@media(max-width:500px){
    .face.left {
        transform: translateX(-120px);
    }
}
.face.right {
    transform: translateX(200px);
}
@media(max-width:500px){
    .face.right {
        transform: translateX(140px);
    }
}
.face > img {
    border:1px solid red;
    position: absolute;
    top: 50%;
    left: 50%;
}
.face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
}`
// 这就是一个播放器   面向对象的逻辑
const player = {
    // 计时器  id就是⏰号码
    id:undefined,
    time:0,
    ui:{
        demo:document.querySelector('#demo'),
        demo2 :document.querySelector('#demo2')
    },
    //事件
    events:{
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    n:1,
    init:()=>{
        //demo写文本  demo2写CSS
        player.ui.demo.innerText = string.substring(0,player.n)
        player.ui.demo2.innerHTML = string.substring(0,player.n)
        player.bindEvents()
        player.play()  
    },
    //绑定事件
    bindEvents:() => {
        // const hashTable = {
        //     // 砸掉闹钟
        //     '#btnPause': player.pause,
        //     // 再买一个闹钟
        //     '#btnPlay': player.play,
        //     '#btnSlow': player.slow,
        //     '#btnNormal': player.normal,
        //     '#btnFast': player.fast
        // }
        // player.events.toString()
        // player.events.valueOf()
        for(let key in player.events){
            // 检查是不是自身属性
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key] //pause play slow normal fast
                document.querySelector(key).onclick = player[value]
                document.querySelector(key).touchstart = player[value]
            }   
        }
    },
    run:() => {
        player.n +=1
        if(player.n > string.length){
            window.clearInterval(player.id)
            return
        }
        console.log(player.n + ':' + string.substring(0,player.n));
        player.ui.demo.innerText = string.substring(0,player.n)
        player.ui.demo2.innerHTML = string.substring(0,player.n)
        // demo.scrollTop = 999999
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: ()=>{
        player.id = setInterval(player.run,player.time)
    },
    pause: ()=>{
        window.clearInterval(player.id)
    },
    slow:()=>{
        player.pause()
        player.time = 300
        player.play()
    },
    normal:()=>{
        player.pause()
        player.time = 100
        player.play()
    },
    fast:()=>{
        player.pause()
        player.time = 0
        player.play()
    }
}
player.init()


