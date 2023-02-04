console.time()
for (let i=0; i<1000; i++){
const a =  await Deno.readTextFile('data.txt', 'utf-8')
await Deno.writeTextFile('data.txt', `${parseInt(a)+1}`)
}
console.timeEnd()