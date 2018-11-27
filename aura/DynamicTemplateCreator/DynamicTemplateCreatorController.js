({
    doinit:function(component, event, helper) {
   //      $( "#sortable" ).sortable();
 //   $( "#sortable" ).disableSelection();
        
      //  alert();
          var action = component.get("c.getBaseComponents");
      
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
              
                console.log("From server: " , response.getReturnValue());
                var elements = response.getReturnValue();
              component.set('v.baseComponents',elements);
                component.set('v.renderCreatedTemplate',true);
            }
            
        });

        $A.enqueueAction(action);
        
        helper.getAllTemplates(component,event,helper);
       
    },
	drop : function(component, event, helper) {
		 event.preventDefault();
    var data = event.dataTransfer.getData("text");
        alert(data);
        component.set('v.droppedComponet',data);
        
        component.set('v.showConfiguration',true);
        
                component.set('v.renderCreatedTemplate',false);
   // ev.target.appendChild(document.getElementById(data));
	},
    drag:function(component, event, helper) {
         var selectedItem = event.currentTarget;
          var recId = selectedItem.dataset.cmpname;
         event.dataTransfer.setData("text",recId);//ev.target.id);
    },
    allowDrop:function(component, event, helper) {
         event.preventDefault();
        console.log('hover');
    },
    closeModel:function(component, event, helper) {
          component.set('v.showConfiguration',false);
    },
    closecloseCreateTemplate:function(component, event, helper) {
          component.set('v.closeCreateTemplate',false);
    },
    opencloseCreateTemplate:function(component, event, helper) {
          component.set('v.closeCreateTemplate',true);
    },
    renderTemplate:function(component, event, helper) {
        component.set('v.renderCreatedTemplate',false);
        var selectedItem = event.currentTarget;
          var recIdis = selectedItem.dataset.recid;
        var recName = selectedItem.dataset.name;
        component.set('v.createdTemplateName',recName);
        component.set('v.createdTemplateId',recIdis);
      //  alert(recIdis);
         component.set('v.renderCreatedTemplate',true);
    }
})