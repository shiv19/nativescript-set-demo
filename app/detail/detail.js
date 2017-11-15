const enums = require("ui/enums");
const frameModule = require("ui/frame");
const app = require("application");
const platform = require("platform");
let activity;
if (app.android) {
    activity = app.android.foregroundActivity;
}

let page;
let ctx;
let scaleDelta;
let translateDelta;
let details;
let imageView;
let screenHeight;

exports.loaded = function(args) {
    page = args.object;
    ctx = page.navigationContext;
    page.bindingContext = ctx.data;
    details = page.getViewById("details");
    imageView = page.getViewById("imageView");
    screenHeight =
        platform.screen.mainScreen.heightPixels /
        platform.screen.mainScreen.scale;

    animatePageIn().then(() => {
        details.visibility = "visible";
        details.animate({
            opacity: 1,
            translate: { x: 0, y: 0 },
            duration: 380
        });
    });

    if (app.android) {
        activity.onBackPressed = function() {
            exports.onNavBtnTap();
        };
    }
};

exports.unloaded = function() {
    if (app.android) {
        activity.onBackPressed = function() {
            const fm = require("ui/frame");
            fm.topmost().goBack();
        };
    }
};

exports.onNavBtnTap = function() {
    animatePageOut().then(() => {
        frameModule.topmost().goBack();
    });
};

function animatePageIn() {
    return new Promise((resolve, reject) => {
        const destImgSize = {
            height: imageView.height,
            width: imageView.width
        };

        const destImgLoc = imageView.getLocationOnScreen();
        scaleDelta = getScaleDelta(ctx.srcImgSize, destImgSize);

        percentOnScreen = ctx.srcImgLoc.y / screenHeight * 100;

        translateDelta = getTranslateDelta(percentOnScreen);

        imageView
            .animate({
                scale: { x: scaleDelta.x, y: scaleDelta.y },
                translate: { x: translateDelta.x, y: translateDelta.y },
                duration: 1,
                curve: enums.AnimationCurve.easeIn
            })
            .then(() => {
                imageView.visibility = "visible";
                imageView
                    .animate({
                        scale: { x: 1, y: 1 },
                        translate: { x: 0, y: 0 },
                        duration: 1000,
                        curve: enums.AnimationCurve.easeIn
                    })
                    .then(() => {
                        resolve();
                    });
            });
    });
}

function animatePageOut() {
    return new Promise((resolve, reject) => {
        details.animate({
            opacity: 0,
            translate: { x: 0, y: 200 },
            duration: 380
        });
        imageView
            .animate({
                scale: { x: scaleDelta.x, y: scaleDelta.y },
                translate: { x: translateDelta.x, y: translateDelta.y },
                duration: 1000,
                curve: enums.AnimationCurve.easeIn
            })
            .then(() => {
                resolve();
            });
    });
}

function getScaleDelta(src, dest) {
    return {
        x: src.width / dest.width,
        y: src.height / dest.height
    };
}

function getTranslateDelta(percent) {
    slope = (screenHeight - 150) / 100;
    y = -150 + slope * percent;
    return {
        x: -150,
        y: y
    };
}
