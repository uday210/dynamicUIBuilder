({
		getObjectFields:function(component, event, helper,selObject) {
          var action = component.get("c.getAllFields");
            action.setParams({
                objNameIs:selObject
            });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
              
                console.log("All Objects fields" , response.getReturnValue());
                var elements = response.getReturnValue();
                var optionList =[];
                for(var i=0;i<elements.length;i++){
                    optionList.push({ label: elements[i], value:  elements[i] });
                }
                // { label: 'English', value: 'en' }
                component.set('v.allFields',optionList);

            }
            
        });

        $A.enqueueAction(action);
       
    }
})