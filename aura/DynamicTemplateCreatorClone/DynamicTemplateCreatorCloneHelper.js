({
	getAllTemplates : function(component,event,helper) {
		     var action = component.get("c.getTemplates");
      
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
              
                console.log("templates  " , response.getReturnValue());
                var elements = response.getReturnValue();
              component.set('v.createdComponents',elements);
            }
            
        });

        $A.enqueueAction(action);
       
	}
})