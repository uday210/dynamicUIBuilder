({
	handleChange: function (cmp, event, helper) {
        //Do something with the change handler
        alert(cmp.find("InputSelectSingle").get("v.value"));
        cmp.set('v.recordTypeIs',cmp.find("InputSelectSingle").get("v.value"));
    }
})