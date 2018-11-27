/*createComponentController.js*/
({
    doInit : function(cmp,event,helper) {
            
        
         var action = cmp.get("c.getSingleUiDetailsforHtml");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
              
            //    $A.createComponent('c:ThreeColumnLayout',{"style":"padding:10%;background-color:green","aura:id":"container","class":"test 1234","onclick": cmp.getReference("c.handlePress")},
                $A.createComponent('c:TwoColumnLayout',{"aura:id":"grid","isDesigner":"false"},
            
             function(components, status, errorMessage){
                if (status === "SUCCESS") {
                   var body = cmp.get("v.body");
                   body.push(components);
                   cmp.set("v.body", body);
                   cmp.find('MainContainer').set("v.body", components);
                    //alert(1);
                 	helper.helperDoinit(cmp,event,helper);
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
    
                
            }
        });
          $A.enqueueAction(action);
        
         window.setTimeout($A.getCallback(function() {
       				
    				}), 5000);
      //  helper.helperDoinit(cmp,event,helper);
    },
    handlePress:function(cmp,event,helper){
        
        alert('dynamic ');
        console.log(cmp.find("container"));
    }
})