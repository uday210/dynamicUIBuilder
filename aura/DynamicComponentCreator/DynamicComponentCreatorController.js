({
	doInit : function(cmp, event, helper) {
      //  alert();
        var layoutType = cmp.get('v.selectedLayout');
        if(layoutType!='null'){
			helper.helperDoinit(cmp, event, helper);
        }else{
              var action = cmp.get("c.getUiDetails");
        action.setParams({ uiElementName : cmp.get("v.templateName") });

        action.setCallback(this, function(response) {
                console.log("From server:>>>>>> " , response.getReturnValue());
            
            cmp.set('v.selectedLayout',"c:"+response.getReturnValue().Grid_Structure__c);
        });
             $A.enqueueAction(action);
            //get layout type from system 
        }
	},
    renderLayout:function(cmp, event, helper) {
            $A.createComponent(cmp.get('v.selectedLayout'),{"aura:id":"grid","isDesigner":cmp.get('v.isFromDesigner')},
            
             function(components, status, errorMessage){
                if (status === "SUCCESS") {
                   var body = cmp.get("v.body");
                   body.push(components);
                   cmp.set("v.body", body);
                   cmp.find('MainContainer').set("v.body", components);
                    //alert(1);
                 	helper.helperDoinit(cmp, event, helper);
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                    // Show error message
                }
            }
        );
		
	},
})