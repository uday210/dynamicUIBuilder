({
    doinit:function(component, event, helper){
       
    },
	myAction : function(component, event, helper) {
        var labelNameis = 'New_Opportunity';
         var labelIs = $A.get("$Label.c."+labelNameis);//!$Label.c.New_Opportunity}
        var h = {
            'Opportunity Details':labelIs
        };
        component.set('v.headerNames',h);
        component.set('v.optyName',labelIs);
      
		var recTypeid = localStorage.getItem("RecordType");
       
	},
    moveNextClick :function(component, event, helper) {
        var oppIs =component.get('v.opp');
        console.log('oppIs ',oppIs.Name);
        var paths = component.get("v.dealregPaths");
        component.set('v.currentStep',paths[component.get("v.currentStep_position")+1]);
        component.set("v.currentStep_position",component.get("v.currentStep_position")+1);
       
        
    },
    movePreviousClick:function(component, event, helper) {
        var paths = component.get("v.dealregPaths");
        component.set('v.currentStep',paths[component.get("v.currentStep_position")-1]);
        component.set("v.currentStep_position",component.get("v.currentStep_position")-1);
   
    
    },
    save_addProducts:function(component, event, helper) {
//       alert();
        var oppIs = component.get('v.opp'); 
         var action = component.get("c.save_opty");
        action.setParams({ "Opp" :oppIs });
      action.setCallback(this, function(response) {
          
            var state = response.getState();
      	//    alert(state);
            if (state === "SUCCESS") {
                 component.set('v.ShowAddProducts',true);
                // Alert the user with the value returned 
                // from the server
                alert("From server: " + response.getReturnValue());
                    component.set('v.optyId',response.getReturnValue());
      

                // You would typically fire a event here to trigger 
                // client-side notification that the server-side 
                // action is complete
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " , 
                                 errors[0].message);
                        
                           var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            mode: 'sticky',
            message: errors[0].message,
            type : 'error'
        });
        toastEvent.fire();
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });

        $A.enqueueAction(action);
        
        
       
       
    },
    addProducts:function(component, event, helper) {
        
        // alert();
         var action = component.get("c.save_products");
        action.setParams({ "OppId" :component.get('v.optyId') });
      action.setCallback(this, function(response) {
          
            var state = response.getState();
      	//    alert(state);
            if (state === "SUCCESS") {
                // component.set('v.ShowAddProducts',true);
                // Alert the user with the value returned 
                // from the server
             //   window.open('https://ap4.salesforce.com/'+component.get('v.optyId'),'_self');
      component.set('v.showRedirect',true);

                // You would typically fire a event here to trigger 
                // client-side notification that the server-side 
                // action is complete
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
        
        
        
      
    },
    save_andredirect :function(component,event,helper){
        var oppIs = component.get('v.opp'); 
         var action = component.get("c.save_opty");
        action.setParams({ "Opp" :oppIs });
      action.setCallback(this, function(response) {
          
            var state = response.getState();
      	//    alert(state);
            if (state === "SUCCESS") {
                 component.set('v.ShowAddProducts',true);
                // Alert the user with the value returned 
                // from the server
             //   alert("From server: " + response.getReturnValue());
                    component.set('v.optyId',response.getReturnValue());
             	  //window.open('https://ap4.salesforce.com/'+component.get('v.optyId'),'_self');
      			component.set('v.showRedirect',true);

                // You would typically fire a event here to trigger 
                // client-side notification that the server-side 
                // action is complete
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
        
        
    },
    movePreviousProductClick:function(component,event,helper){
        component.set('v.productcurrentStep','Select Price book');
        
    },
     moveNextProductClick:function(component,event,helper){
        component.set('v.productcurrentStep','Add Products');
        
    },
    moveBack:function(component,event,helper){
        var oppIs = component.get('v.opp');
       // alert();
      // window.history.back();
        window.open('https://ap4.salesforce.com/006/e?retURL=%2F006%3Ffcf%3D00B6F00000EITDa&_CONFIRMATIONTOKEN=VmpFPSxNakF4T0Mwd09DMHhObFF3T1Rvek16bzFNeTR3TVRkYSxZV0JzdTgtZGRUYXdidVJzRUZFLWx3LE0yUTJPVFJs&common.udd.actions.ActionsUtilORIG_URI=%2F006%2Fe&RecordType=0126F000001gKZ3&ent=Opportunity&opp11='+oppIs.StageName+'&opp3='+oppIs.Name,'_self');
    },
})