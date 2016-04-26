function define(name, value) {
    Object.defineProperty(exports, name, {
        value     : value,
        enumerable: true
    });
}

define('NAMESPACE', 'ns:points');
define('SOCKETS', 'ns-points');