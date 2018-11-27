({
	  doInit: function(component, event, helper) {
          alert(118);
        // Prepare a new record from template
        component.find("OpportunityRecordCreator").getNewRecord(
            "Opportunity", // sObject type (objectApiName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                alert();
                var rec = component.get("v.newOpportunity");
                var error = component.get("v.newOpportunityError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                    return;
                }
                console.log("Record template initialized: " + rec.sobjectType);
            })
        );
    },
    handleSaveOpportunity: function(component, event, helper) {
		
	},
})