// 事件進入點  按下鍵盤 keyup 跟 keydown兩種 keydown通常用在按著不放
// 需要做的有兩件事 一件事是改style 另一件事是播音樂
window.addEventListener('keydown', playHandler)

// 處理鍵盤輸入
// 輸入 : e事件
function playHandler(e) {
    // 鍵盤的話 分為key跟keycode
    // console.log(e);

    // 第一件事 play music
    // 運用樣板字串抓取對應的DOM職
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    if(audio){
        // renew音樂
        audio.currentTime = 0;
        audio.play();
    }


    // 第二件事 改style
    const dom = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (dom){
        dom.classList.add('playing')
    }

    // 改完後 dom要還原
    document.querySelectorAll('.key').forEach(index => index.addEventListener('transitionend' , transitionendHandler))

    function transitionendHandler(e){
        console.log(e);
        if(e.propertyName == 'transform'){
            e.currentTarget.classList.remove('playing')
        }
            
    }
}