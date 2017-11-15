require("./bundle-config");
const app = require("application");
const imageCache = require("nativescript-image-cache");

if (app.android) {
    app.on("launch", () => {
        imageCache.initialize();
    });
}

app.start({ moduleName: "master/master" });
