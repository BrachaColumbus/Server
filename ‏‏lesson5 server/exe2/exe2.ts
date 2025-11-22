import axios from "axios";


function getNumberFact(number: number, callback: (message: string) => void) {
  console.log(`search a fact for number ${number}`);

  axios.get(`http://numbersapi.com/${number}`, { timeout: 5000}) 
    .then(res => {
      callback(`The API returned for number ${number}: "${res.data}"`);
    })
    .catch(err => {
      callback(`ho no---: ${err.message}`);
    });
}


getNumberFact(7, (message) => {
  console.log(message);
});
