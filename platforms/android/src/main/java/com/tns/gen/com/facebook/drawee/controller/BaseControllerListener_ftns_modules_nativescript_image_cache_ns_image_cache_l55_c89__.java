package com.tns.gen.com.facebook.drawee.controller;

public class BaseControllerListener_ftns_modules_nativescript_image_cache_ns_image_cache_l55_c89__ extends com.facebook.drawee.controller.BaseControllerListener implements com.tns.NativeScriptHashCodeProvider {
	public BaseControllerListener_ftns_modules_nativescript_image_cache_ns_image_cache_l55_c89__(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public void onFinalImageSet(java.lang.String param_0, java.lang.Object param_1, android.graphics.drawable.Animatable param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onFinalImageSet", void.class, args);
	}

	public void onIntermediateImageSet(java.lang.String param_0, java.lang.Object param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onIntermediateImageSet", void.class, args);
	}

	public void onFailure(java.lang.String param_0, java.lang.Throwable param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onFailure", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
