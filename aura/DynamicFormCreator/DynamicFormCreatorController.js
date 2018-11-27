({
    init: function(component, event, helper) {
        var formFields = component.get('v.fieldList');//['Name','Industry','OwnerId','Site','AccountSource'];
        var sObjectNameIs = component.get('v.sObjecNameIs');//'Account';
        
        var foemFieldComponents = [];
        for(var  i=0;i<formFields.length;i++){
            
            var eachField = ["lightning:inputField", { "aura:id":formFields[i],fieldName: formFields[i]}];
            foemFieldComponents.push(eachField);
        }
        var htmlField = [ "aura:html",
     { 
         tag: "br",
         HTMLAttributes:{"id": "Temp","class": "class name here"}
     }];
        foemFieldComponents.push(htmlField);
        var buttonField = ["lightning:button", { type:"submit",name:"submit",label:"submit",variant:"brand"}];
        foemFieldComponents.push(buttonField);
        // First, create children
        /* [
            ["lightning:inputField", { fieldName: "Name"}],
            ["lightning:inputField", { fieldName: "Industry" }],
            ["lightning:inputField", { fieldName: "OwnerId" }],
            ["lightning:inputField", { fieldName: "Site" }],
            ["lightning:inputField", { fieldName: "AccountSource" }]
        ]*/
        $A.createComponents(foemFieldComponents, (components, status, errors) => {
            // Then parent, specifying body of lightning:inputFields
            $A.createComponents(
            [["lightning:recordEditForm", { "aura:id":"recordViewForm",objectApiName: sObjectNameIs, body: components,onsuccess: component.getReference("c.handleOnSuccess"),onerror:component.getReference("c.handleOnerror"),onsubmit:component.getReference("c.handleSubmit") }]], 
                            (components, status, errors) => {
                                component.set("v.recordEdit", components);
                            });
        });
    },
            handleOnSuccess:function(component,event,helper){
                
              //  alert();
                var payload = event.getParams().response;
//alert(payload.id);
                var navEvt = $A.get("e.force:navigateToSObject");
    navEvt.setParams({
      "recordId": payload.id
    });
    navEvt.fire();
            },
            handleOnerror:function(component,event,helper){
                alert('error occured');
                var err = event.getParams('error');
                console.log(JSON.parse(JSON.stringify(err)));
            },
            handleSubmit : function(component, event, helper) {
            //    alert(component.get('v.componentDetails'));
		  event.preventDefault(); 
         var eventFields = event.getParam("fields");
          var action = component.get('c.doFormValidate');
  action.setParams({
  'formData':eventFields,
  'sObjectName':component.get('v.sObjecNameIs'),
  'TemplateValidationRuleId':component.get('v.componentDetails')
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
                  alert(response.getReturnValue().ErrorLocation);
                  var cmpInstance = component.find(response.getReturnValue().ErrorLocation);
              console.log('cmpInstance ',cmpInstance);
                      $A.util.addClass(cmpInstance,'slds-has-error');
                     //set("v.errors", [{message:response.getReturnValue().ErrorMessages}]);
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