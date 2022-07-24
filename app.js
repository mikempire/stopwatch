const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const msecondsEl = document.querySelector('.mseconds');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const newBtn = document.querySelector('.new');
const resultsList = document.querySelector('.results-list');
const btns = document.querySelectorAll('.btn');


let hours = 00,
    minutes = 00,
    seconds = 00,
    mseconds = 00,
    interval,
    disabled = true;


let result = 0;
function startTimer() {
    mseconds++;
    if (mseconds < 9) {
        msecondsEl.innerText = `0${mseconds}`
    }

    if (mseconds > 9) {
        msecondsEl.innerText = `${mseconds}`
    }

    if (mseconds > 99) {
        seconds++;
        secondsEl.innerText = seconds;
        mseconds = 0;
        msecondsEl.innerText = `0${mseconds}`
    }

    // seconds
    if (seconds < 10) {
        secondsEl.innerText = `0${seconds}`
    }

    if (seconds > 9) {
        secondsEl.innerText = `${seconds}`
    }

    if (seconds > 59) {
        minutes++;
        minutesEl.innerText = minutes;
        seconds = 0;
        secondsEl.innerText = `0${seconds}`
    }

    // minutes
    if (minutes < 10) {
        minutesEl.innerText = `0${minutes}`
    }

    if (minutes > 9) {
        minutesEl.innerText = `${minutes}`
    }

    if (minutes > 59) {
        hours++;
        hoursEl.innerText = hours;
        minutes = 0;
        minutesEl.innerText = `0${minutes}`
    }

    // hours
    if (hours < 10) {
        hoursEl.innerText = `0${hours}`
    }

    if (hours > 9) {
        hoursEl.innerText = `${hours}`
    }

    // if (hours > 24) {
    //     hours++;
    //     hoursEl.innerText = hours;
    //     minutes = 0;
    //     minutesEl.innerText = `0${minutes}`
    // }
}


startBtn.addEventListener('click', function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    removeBorder();
    newBtn.removeAttribute('disabled');
    newBtn.classList.remove('disabled');

});

pauseBtn.addEventListener('click', function () {
    clearInterval(interval)
    removeBorder();
    this.classList.add('border');
});

stopBtn.addEventListener('click', function () {
    clearInterval(interval);
    clearFields();
    disabledBtn();
    removeBorder();
    // result = 0;
})

newBtn.addEventListener('click', function () {
    result++;
    clearInterval(interval);
    let time = `${hoursEl.innerText}: ${minutesEl.innerText} : ${secondsEl.innerText} : ${msecondsEl.innerText}`;
    resultsList.innerHTML += `<li><p>result ${result}</p> ${time}<br></li>`;
    clearFields();
    interval = setInterval(startTimer, 10);
    btns.forEach((el) => {
        el.classList.remove('border');
    });
})

function clearFields() {
    hours = 00;
    minutes = 00;
    seconds = 00;
    mseconds = 00;
    msecondsEl.innerText = `0${mseconds}`;
    secondsEl.innerText = `0${seconds}`;
    minutesEl.innerText = `0${minutes}`
    hoursEl.innerText = `0${hours}`;
}

function btnsClean() {
    btns.forEach((el) => {
        el.classList.remove('border');
    });
    this.classList.remove('border');
}

function disabledBtn() {
    if (disabled) {
        newBtn.disabled = true;
        newBtn.classList.add('disabled');
    }
}

function removeBorder() {
    btns.forEach((el) => {
        el.classList.remove('border');
    });
}

// disabledBtn();