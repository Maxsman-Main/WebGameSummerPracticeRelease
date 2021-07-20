class Logger {

    static debug(obj, message) {
        console.log(`${obj.constructor.name}: ${message}`);
    }

}