console.log("First call")

setTimeout(()=>{console.log('This is callback function for 2 seconds ')},2000)

setTimeout(()=>{console.log('This is callback function for 0 seconds ')},0)

console.log("Second call")