// Os Module
const os = require("os")

const totalMemory = os.totalmem()
const freememory = os.freemem()
const priority =os.getPriority()
const hostname = os.hostname()

console.log(priority, hostname);

console.log(`
Total Memory : ${totalMemory}
Free Memory : ${freememory}
`)
