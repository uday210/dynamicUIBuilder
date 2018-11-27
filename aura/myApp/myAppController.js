({
	doInit : function(component, event, helper) {
        var data ={
            field:'Book_Date__c',
            val:'2018-11-13'
        };
        console.log('data ',data);
        component.set('v.dateField',data);
	},
    handleSubmit:function(component, event, helper) {
        //  event.preventDefault(); // stop form submission
  	  var eventFields = event.getParam("fields");
    console.log('>>>>',JSON.stringify(eventFields));
    }
})