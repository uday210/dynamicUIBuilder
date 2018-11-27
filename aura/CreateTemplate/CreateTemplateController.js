({
	handleSubmit : function(component, event, helper) {
       // component.set('v.renderCreatedTemplate',false);
      event.preventDefault(); // stop form submission
  	  var eventFields = event.getParam("fields");
  component.set('v.createdTemplateName',eventFields['Name']);
        component.set("v.selectedLayout",'c:'+eventFields['Grid_Structure__c']);
         component.find('recordViewForm').submit(eventFields);
		
	},
     handleSuccess:function(component,event,helper){
        var payloadSuccess = event.getParams().response;
        var successData = JSON.parse(JSON.stringify(payloadSuccess));
       
      component.set('v.createdTemplateId',successData.id);
        

       
         component.set('v.closeCreateTemplate',false);
           	//	 "recordId": successData.id
    }
})