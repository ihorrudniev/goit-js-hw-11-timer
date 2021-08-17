class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      // timer: document.querySelector('#timer-1'),
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      mins: document.querySelector('span[data-value="mins"]'),
      secs: document.querySelector('span[data-value="secs"]'),
    };
    this.intervalId = null;
  }

  start() {
    const startTime = this.targetDate.getTime();
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      if (deltaTime <= 0) {
        clearInterval(this.intervalId);
      }
      this.getTimeComponents(deltaTime);
    }, 1000);
  }

  // Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.updateTimer(days, hours, mins, secs);
  }

  // метод принимает число приводит к строке и добавляет к нему знаки, в начало 0 если число меньше 2 - х знаков
  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateTimer(days, hours, mins, secs) {
    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  }
}

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 15, 2021'),
});

timer.start();

// // console.log(refs);
// // console.log(refs.days.dataset.value);
// // console.log(refs.hours.dataset.value);
// // console.log(refs.mins.dataset.value);
// // console.log(refs.secs.dataset.value);

// // const targetDate = Date.now();
// // console.log(targetDate);
// function logger() {
//   console.log('logTime');
// }
// let id = null;

// function timeStart() {
//   id = setInterval(logger, 1000);
//   start = Date.now();

//   console.log('counter');
// }
// function timeStop() {
//   clearInterval(id);
// }
