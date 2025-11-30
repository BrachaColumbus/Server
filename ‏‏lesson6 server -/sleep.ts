import { promises } from "dns";

function sleep(time: number): Promise<string>  {
if(time < 0){
    return Promise.reject("Time cannot be negative");
}
    return new Promise<string>(function (resolve, reject) {
        setTimeout(function () {
            resolve("after sleep");
        }, time);
    })};


function runSleepTest() {
    console.log("before sleep");
    
    sleep(-2000)
      .then((result) => {
          console.log(result); 
      })
      
      .catch((error) => {
          console.error("Error during sleep:", error);
      });
}
runSleepTest();
