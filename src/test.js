import string from './css.js'

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


