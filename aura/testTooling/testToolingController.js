/*createComponentController.js*/
({
    doInit : function(cmp,event,helper) {
        
         var action = cmp.get("c.getResponse");
        action.setParams({ ClassId : '' });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
              
                console.log("From server: " , JSON.parse(response.getReturnValue()));
                var resp =  JSON.parse(response.getReturnValue());
                var SymbolTableIS = resp.SymbolTable;
                console.log('SymbolTableIS ',SymbolTableIS);
                console.log('methods ',SymbolTableIS.methods);
            }
            
        });

        $A.enqueueAction(action);
       
    }
})