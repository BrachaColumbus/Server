
import { logGame } from "../middlewares/Logmiddelware";
export class GameService{
    min: number = 1;
    max: number = 100;
    winnumber: number = 0;
    name: string = "bracha";
    password: number = 215803453;

    constructor() {
        this.randnum();
    }


    getminandmax (minnum:number,maxnum:number){
       this.min=minnum;
       this.max=maxnum;
       this.randnum();
       logGame(`min and max updated: min=${this.min}, max=${this.max}`);

    }

chekguess(num: number | string): string {
    const guessNumber = Number(num);

    if (isNaN(guessNumber)) 
        return "num is not a valid number — check your request";

    const winNumber = Number(this.winnumber); 

    console.log("NUM RECEIVED:", guessNumber, "WIN NUMBER:", winNumber);

    let result: string;

    if (guessNumber === winNumber) {
        result = "you did it!!!! well done!!";
        this.randnum(); 
    } else if (guessNumber < winNumber) {
        result = "the number is too low";
    } else {
        result = "the number is too high";
    }

    logGame(`Guess received: ${guessNumber}, Result: ${result}`);
    return result;
}
     randnum (){
        this.winnumber= Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        
        return this.winnumber;
    }

}
    export const game = new GameService();


