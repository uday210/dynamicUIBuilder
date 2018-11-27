({
	handleSubmit : function(component, event, helper) {
		  event.preventDefault(); 
         var eventFields = event.getParam("fields");
          var action = component.get('c.doFormValidate');
  action.setParams({
  'formData':eventFields,
  'sObjectName':'Account',
  'TemplateValidationRuleId':'123'
  });
        action.setCallback(this, function(response) {
            var state = response.getState();
           // alert(state);
			console.log( response.getReturnValue());
            if (state === "SUCCESS") {
               
              if(response.getReturnValue().isSuccess){
                   alert(state);
              component.find('recordViewForm').submit(eventFields);
              }else{
                  
                  
                  alert(response.getReturnValue().ErrorMessages);
              }
    
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });

     
        $A.enqueueAction(action);
        
        
	}
})