const EventEmitter = require("events")
// const emitter = new EventEmitter()

const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
     log(message){
        // Send an Http request
        console.log(message);
    
        // // Raise an event 
        // emitter.emit('messageLogged')
        // Raise an event 
        this.emit('messageLogged', {id : 1 , url})
    }

}

// export default log;
module.exports = Logger;