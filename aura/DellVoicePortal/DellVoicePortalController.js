({
    triggerSoundEvent : function(component, event, helper) {
        component.set('v.playSound',true);      
        setTimeout(function() {
            component.set('v.playSound',false);
        }, 2500);
    }
})