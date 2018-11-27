({
	incrementProdut : function(component, event, helper) {
       // alert(component.get('v.prodQty'));
	},
    get_Products: function(component, event, helper) {
    		 var action = component.get("c.getProducts");
        action.setCallback(this, function(response) {
          
            var state = response.getState();
      	//    alert(state);
            if (state === "SUCCESS") {
                    component.set('v.AllProducts',response.getReturnValue());
       
					console.log('products ',response.getReturnValue());
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
    
    }
})