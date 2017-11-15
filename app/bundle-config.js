if (global.TNS_WEBPACK) {
    //registers tns-core-modules UI framework modules
    require("bundle-entry-points");

    //register application modules
    global.registerModule("master/master", function() {
        return require("./master/master");
    });
    global.registerModule("detail/detail", function() {
        return require("./detail/detail");
    });
}
