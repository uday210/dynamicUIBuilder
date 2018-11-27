({
    doComponentCreator : function(cmp,event,helper,cmpData,containerPos){
  console.log('cmpData>>>>>> cmpData ',cmpData);
        //cmpName,objName,fieldsSetIs,otherInfo) {
        $A.createComponents(cmpData,
            function(components, status, errorMessage){
                if (status === "SUCCESS") {
                    var body = cmp.get("v.body");
                    body.push(components);
                    cmp.set("v.body", body);
                   // alert(containerPos);
                    if(!containerPos){
                    // console.log("div1: ", cmp.find("container").getElement());
                    cmp.find("grid").find("container").set("v.body", components);
                   

                   }else{
                        //cmp.find(containerPos).set("v.body", components);
                       try{
                       cmp.find("grid").find(containerPos).set("v.body", components);
                       }catch(err){}
                    }
                 
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
        
        
         var action = cmp.get("c.getUiDetails");
        action.setParams({ uiElementName : cmp.get("v.templateName") });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
              
                console.log("From server: " , response.getReturnValue());
                var elements = response.getReturnValue().Dynamic_UI_Elements__r;
               
                if(response.getReturnValue() && elements){
                    var cmpData = [];
            
                for(var i=0;i<elements.length;i++){ 
                var configData = JSON.parse(elements[i].Config_Data__c);
                console.log('configData ',configData);
                var fieldsSet =[];
                    if(configData.fields){
                    fieldsSet = configData.fields.split(',');
                    }   
                    var eachCmp = [elements[i].Component_Name__c,{"sObjecNameIs": configData.ObjectName,"fieldList":fieldsSet,"otherData":configData,"componentDetails":elements[i].Id}];
                	cmpData.push(eachCmp);
                    
                }
                console.log('cmpData ',cmpData);
                    //,'container1','container2'
                    var comps = ['container','container1','container2'];
              //  if(elements.Component_Name__c =='c:DynamicFormCreator'){
                    for(var i=0;i<comps.length;i++){
                    helper.doComponentCreator(cmp,event,helper,cmpData,comps[i]);//elements.Component_Name__c,configData.ObjectName,fieldsSet,configData);
                    }
                        // }else if(elements.Component_Name__c=='c:DynamicTableCreator'){
                    
                }
            }
            
        });

        $A.enqueueAction(action);
       
        
    }
})