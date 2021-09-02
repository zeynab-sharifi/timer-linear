let inputBox = document.querySelector('.box-input')
let inputTimer = document.querySelector('#input-timer');
let btnStart = document.querySelector('.btn');
let errorTimer = document.querySelector('.error-massege');
let linearTimer = document.querySelector('.linear');
let linearColor = document.querySelector('.linear-bg-color');
let munTimer = document.querySelector('.munber-progress-linear');
let finishMassege = document.querySelector('.message-timer');

btnStart.addEventListener('click', function(e){
    let sec = parseInt(inputTimer.value)
    if(isNaN(sec)){
        errorTimer.classList.add('active')
        errorTimer.textContent='زمان را به درستی وارد کنید (عدد وارد شود)'
        return;
    }
        errorTimer.classList.remove('active');
        inputBox.style.display = 'none';
        linearTimer.style.display = 'block';
        munTimer.textContent = sec;
        finishMassege.style.display = 'none';

    let oTimer = sec;  
    let lastP = '';  
    let timerId = setInterval(() =>{
        if(sec <= 0){
            clearInterval(timerId);
            errorTimer.classList.add('active');
            inputBox.style.display = 'flex';
            linearTimer.style.display = 'none';
            inputTimer.value = ''
            finishMassege.style.display = 'block';
            return;
        }
        if(lastP) linearColor.classList.remove(lastP)

        sec -=1;
        let pTimer = Math.floor(((oTimer - sec)/oTimer)*100);
        lastP = `linear-color-${pTimer}`;
        linearColor.classList.add(`linear-color-${pTimer}`);
        console.log(pTimer);
        munTimer.textContent = sec;
    },1000);
})