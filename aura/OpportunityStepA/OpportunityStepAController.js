({
	doinit : function(component, event, helper) {
          var createRecordEvent = $A.get('e.force:createRecord');
        if ( createRecordEvent ) {
            createRecordEvent.setParams({
                'entityApiName': 'Opportunity',
                 'recordTypeId': component.get('v.recordTypeIs')
              
            });
            createRecordEvent.fire();
        }
        /************
          var action = component.get("c.get_opty_schema");
     
      action.setCallback(this, function(response) {
          
            var state = response.getState();
      	    if (state === "SUCCESS") {
                component.set('v.stageNameValues',response.getReturnValue());
                console.log("From server: " , response.getReturnValue());
                
            }
            else if (state === "INCOMPLETE") {
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
        ***************/
		
	},
    valueChanged:function(component,event,helper){
    //    alert( event.getSource().get("v.value"));
    component.set('v.showAcc',!component.get('v.showAcc'));
        
    },
    handleSubmit:function(component,event,helper){
         event.preventDefault(); // Prevent default submit
     
        alert('submitted');
        var eventFields = event.getParam("fields");
        console.log('eventFields>> ',eventFields, eventFields["Name"],JSON.stringify(eventFields));
        component.set('v.opp',JSON.parse(JSON.stringify(eventFields)));
       alert('currentStep');
        component.set('v.currentStep','Details 2');
          component.set("v.currentStep_position",component.get("v.currentStep_position")+1);
      
    },
    handleSuccess:function(component,event,helper){
    },
    doSubmitForm:function(component,event,helper){
        var eventFields = event.getParam("fields");
        console.log('eventFields>> ',eventFields, eventFields["Name"],JSON.stringify(eventFields));
        
         component.find('recordViewForm').submit(); // Submit form
    }
})