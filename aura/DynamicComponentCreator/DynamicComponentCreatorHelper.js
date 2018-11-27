({
    doComponentCreator : function(cmp,event,helper,cmpData,cmposition){
  console.log('cmpData>>>>>> cmpData ',cmpData);
        //cmpName,objName,fieldsSetIs,otherInfo) {
        $A.createComponents(cmpData,
            function(components, status, errorMessage){
                if (status === "SUCCESS") {
                    var body = cmp.get("v.body");
                    body.push(components);
                    cmp.set("v.body", body);
               //     alert('cmposition '+cmposition);
                    cmp.find("grid").find(cmposition).set("v.body", components);
                 
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                    // Show error message
                }
            }
        );
    },
    helperDoinit:function(cmp,event,helper){
        //alert('helperDoinit');
      //  alert(cmp.get("v.templateName"));
        if(cmp.get("v.templateName")){
         var action = cmp.get("c.getUiDetails");
        action.setParams({ uiElementName : cmp.get("v.templateName") });

        action.setCallback(this, function(response) {
            var state = response.getState();
       //     alert(state);
            if (state === "SUCCESS") {
              
                console.log("From server: Component_Position__c " , response.getReturnValue());
                var elements = response.getReturnValue().Dynamic_UI_Elements__r;
               
                if(response.getReturnValue() && elements){
                    var cmpData = {};
            
                for(var i=0;i<elements.length;i++){ 
                var configData = JSON.parse(elements[i].Config_Data__c);
                console.log('configData ',configData);
                var fieldsSet =[];
                    if(configData.fields){
                    fieldsSet = configData.fields.split(',');
                    }   
                    var eachCmp = [elements[i].Component_Name__c,{"sObjecNameIs": configData.ObjectName,"fieldList":fieldsSet,"otherData":configData,"componentDetails":elements[i].Id}];
                    if(!cmpData[elements[i].Component_Position__c]){
                    var eachCmpList = [];
                    eachCmpList.push(eachCmp);
                    cmpData[elements[i].Component_Position__c]= eachCmpList;
                    }else{
                           var eachCmpList = cmpData[elements[i].Component_Position__c];
                    eachCmpList.push(eachCmp);
                    cmpData[elements[i].Component_Position__c]= eachCmpList;
                 
                    }
                    
                }
                console.log('cmpData ',cmpData);
              //  if(elements.Component_Name__c =='c:DynamicFormCreator'){
                    for(var key in cmpData){
         //               alert(key);
                    	helper.doComponentCreator(cmp,event,helper,cmpData[key],key);//elements.Component_Name__c,configData.ObjectName,fieldsSet,configData);
                    }
                        // }else if(elements.Component_Name__c=='c:DynamicTableCreator'){
                    
                }
            }
            
        });

        $A.enqueueAction(action);
       
        }
    }
})