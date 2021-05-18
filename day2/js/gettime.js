
const second = document.querySelector('.second-hand');
const min = document.querySelector('.min-hand');
const hour = document.querySelector('.hour-hand');

setClock();

// 計時器 setInterval 、 setTimeout 、 requestAnimationFrame
// setInterval(setClock , 1000); //設定間隔 

// setTimeout (timeoutHandler , 1000)//設定延遲 執行一次

window.requestAnimationFrame(animationHandler); //處理畫面更新的setTimeout (會因為瀏覽器 硬體 ... 設定而不同)

// 每次timeout所做的事情
function timeoutHandler(){
    setClock();
    setTimeout (timeoutHandler , 1000); //為了持續執行 會再呼叫一次
}

// 每次requestAnimationFrame所做的事情
function animationHandler(){
    setClock();
    window.requestAnimationFrame(animationHandler); //為了持續執行 會再呼叫一次
}


// 目的 取得時間 並且調整指針位置
function setClock(){
    // Date物件可以直接拿到時間
    let data = new Date();

    let secondDeg = data.getSeconds() * (360 / 60); 
    let minDeg = data.getMinutes() * (360 / 60) + data.getSeconds() * 6 / 60;
    let hourDeg = data.getHours() * (360 / 12) + (data.getMinutes() * 60 / 30);
    
    second.style.transform = `rotate(${secondDeg}deg)`;
    min.style.transform = `rotate(${minDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
}