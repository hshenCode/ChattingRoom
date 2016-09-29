/**
 * Created by hshen on 9/29/16.
 */

const Singleton = (function () {
    let instance;

    function createInstance() {
        const io = require('socket.io-client')
        const socket = io.connect();
        return socket;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

export default Singleton;