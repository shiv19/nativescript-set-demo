const frameModule = require("ui/frame");
const MasterViewModel = require("./master-view-model");

const masterVm = new MasterViewModel();
let page;

exports.onNavigatingTo = function(args) {
    page = args.object;
    page.bindingContext = masterVm;
};

exports.onItemTap = function(args) {
    const ctx = args.view.bindingContext;
    const container = args.object;
    imageView = page.getViewById(ctx.id + "image");

    frameModule.topmost().navigate({
        moduleName: "./detail/detail",
        animated: false,
        context: {
            data: ctx,
            srcImgSize: {
                height: imageView.height,
                width: imageView.width
            },
            srcImgLoc: imageView.getLocationOnScreen()
        }
    });
};
