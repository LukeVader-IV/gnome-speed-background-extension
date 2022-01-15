'use strict';
const Gio = imports.gi.Gio;
const St = imports.gi.St;

const background = imports.ui.background;
const init_opacity = background.ANIMATION_OPACITY_STEP_INCREMENT 
const init_wakeup = background.ANIMATION_MIN_WAKEUP_INTERVAL
const settings = imports.misc.extensionUtils.getSettings('org.gnome.shell.extensions.speedbackground');

class Extension{
	constructor(){
	}
	
	enable(){
		background.ANIMATION_OPACITY_STEP_INCREMENT = OPACITY_STEP.get();
		background.ANIMATION_MIN_WAKEUP_INTERVAL = WAKEUP_INTERVAL.get();
	}
	
	disable(){
		background.ANIMATION_OPACITY_STEP_INCREMENT = init_opacity;
		background.ANIMATION_MIN_WAKEUP_INTERVAL = init_wakeup;
	}
}


function init() {
	return new Extension();
}

//get from schemas
this.OPACITY_STEP = {
    key: 'opacity-step',
    get: function () {
        return settings.get_double(this.key);
    }
};
this.WAKEUP_INTERVAL = {
    key: 'wakeup-interval',
    get: function () {
        return settings.get_double(this.key);
    }
};