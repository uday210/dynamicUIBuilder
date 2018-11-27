({
	doInit : function(component, event, helper) {
		component.set('v.renderMain',false);
        console.log('otherData ',JSON.parse(JSON.stringify(component.get('v.otherData'))));
        
       // .steps
        component.set('v.tabList',JSON.parse(JSON.stringify(component.get('v.otherData'))).steps);
       component.set('v.selectedTabIdIs',JSON.parse(JSON.stringify(component.get('v.otherData'))).steps[0].displaycmp);
        component.set('v.renderMain',true);
	},
    Tabchanged:function(component, event, helper) {
		//alert(event.getParam('id'));
        component.set('v.renderCmp',false);
        
        component.set('v.renderCmp',true);
	},
})