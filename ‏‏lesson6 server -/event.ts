import { time } from 'console';
import EventEmitter from 'events';

const RESET_EVENT = 'reset';

export class Time {
  private eventEmitter = new EventEmitter();
  num: number;
  max: number;

  constructor(num: number, max: number) {
    if (num > max) {
      throw new Error("num cannot be greater than the_max_digit");
    }

    this.num = num;
    this.max = max;
  }

  onReset(func: () => void) {
    this.eventEmitter.on(RESET_EVENT, func);
  }

  Tic(): void {
    if (this.num < this.max-1) {
      this.num++;
    } else {
      this.num = 0;
      this.eventEmitter.emit(RESET_EVENT); 
    }
  }
}
const seconds=new Time(0,60);
const minutes=new Time(0,60);
const  hours=new Time(0,24);

seconds.onReset(() => {
    minutes.Tic();
});

minutes.onReset(() => {
    hours.Tic();
}); 
setInterval(() => {
    seconds.Tic();
    process.stdout.write(
  "\r" + 
  String(hours.num).padStart(2, "0") + ":" +
  String(minutes.num).padStart(2, "0") + ":" +
  String(seconds.num).padStart(2, "0")
);

}, 1000);

