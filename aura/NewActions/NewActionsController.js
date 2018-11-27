({
    selectUpdateCaseAction : function( cmp, event, helper) {
        var actionAPI = cmp.find("quickActionAPI");
        var args = { actionName :"Case.UpdateCase" };
        actionAPI.selectAction(args).then(function(result) {
            // Action selected; show data and set field values
        }).catch(function(e) {
            if (e.errors) {
                // If the specified action isn't found on the page, 
                // show an error message in the my component 
            }
        });
    },
    
    updateCaseStatusAction : function( cmp, event, helper ) {
        var actionAPI = cmp.find("quickActionAPI");
        var fields = { Status : { value : "Closed"}, 
                       Subject : { value : "Sets by lightning:quickActionAPI component" }, 
                       accountName : { Id : "accountId" } };
        var args = { actionName : "Case.UpdateCase", 
                     entityName : "Case",
                     targetFields : fields };
        actionAPI.setActionFieldValues(args).then(function() {
            actionAPI.invokeAction(args);
        }).catch(function(e) {
            console.error(e.errors);
        });
    }
})