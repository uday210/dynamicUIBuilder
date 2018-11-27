({
    init: function(component, event, helper) {
        var formFields = ['Name','Industry','OwnerId','Site','AccountSource'];
        var sObjectNameIs = 'Account';
        
        var foemFieldComponents = [];
        for(var  i=0;i<formFields.length;i++){
            
            var eachField = ["lightning:inputField", { fieldName: formFields[i]}];
            foemFieldComponents.push(eachField);
        }
        var buttonField = ["lightning:button", { type:"submit",name:"submit",label:"submit",variant:"brand"}];
        foemFieldComponents.push(buttonField);
        // First, create children
        /* [
            ["lightning:inputField", { fieldName: "Name"}],
            ["lightning:inputField", { fieldName: "Industry" }],
            ["lightning:inputField", { fieldName: "OwnerId" }],
            ["lightning:inputField", { fieldName: "Site" }],
            ["lightning:inputField", { fieldName: "AccountSource" }]
        ]*/
        $A.createComponents(foemFieldComponents, (components, status, errors) => {
            // Then parent, specifying body of lightning:inputFields
            $A.createComponents(
            [["lightning:recordEditForm", { objectApiName: sObjectNameIs, body: components,onsuccess: component.getReference("c.handleOnSuccess") }]], 
                            (components, status, errors) => {
                                component.set("v.recordEdit", components);
                            });
        });
    },
            handleOnSuccess:function(component,event,helper){
                
           //     alert();
                var payload = event.getParams().response;
//alert(payload.id);
            }
})