({
	goBack : function(component, event, helper) {
		      	  window.open('https://ap4.salesforce.com/'+component.get('v.optyId'),'_self');
      
	},
    newdesign : function(component, event, helper) {
				  window.open('/dealreg/s/detail/'+component.get('v.optyId'),'_self');		
	}
})