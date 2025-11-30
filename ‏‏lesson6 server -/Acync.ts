import { readFile } from 'fs/promises';
async function print_file() {
    for(let i=1; i<=4; i++) {
      const fileName = `files/${i}.txt`;
      try {
     const data= await readFile(`files/${i}.txt`, 'utf8')
      console.log(data.toString());
      } 
      catch (err) {
        console.error(`Error reading file ${fileName}:`, err);
}}}
print_file();
       