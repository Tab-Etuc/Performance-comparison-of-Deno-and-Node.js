const fs = require('fs').promises;
console.time();
(async ()=>{
    for (let i =0; i<1000; i++){
   await fs.readFile('data.txt', 'utf-8').then(async (data)=>{await fs.writeFile('data.txt', `${parseInt(data)+1}`)})
}
console.timeEnd()
})()



