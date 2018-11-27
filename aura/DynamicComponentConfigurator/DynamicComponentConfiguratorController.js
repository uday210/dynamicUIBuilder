({
	doinit:function(component, event, helper) {
        
        var operationare = ['==','<=','>=','!=','><'];
        component.set('v.operationsAllowed',operationare);
          var action = component.get("c.getAllObjects");
      
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
              
                console.log("All Objects " , response.getReturnValue());
                var elements = response.getReturnValue();
                var elementMap  = [];
                for (var key in elements) {
  					console.log(key, elements[key]);
                    elementMap.push({
                        'keyIs':key,
                        'valueIs':elements[key]
                    });
				}
                component.set('v.objectNames',elementMap);

            }
            
        });

        $A.enqueueAction(action);
       
    },
    onSingleSelectChange: function(component,event,helper) {
    var objName =  component.find("mySelect").get("v.value");
      //  alert(objName);
        component.set('v.selectedObject',objName);
        helper.getObjectFields(component,event,helper,objName);
        
	 },
    handleChange: function (cmp, event) {
         var selectedOptionValue = event.getParam("value");
        console.log('selectedOptionValue ',selectedOptionValue);
        cmp.set('v.selectedFields',selectedOptionValue);
    },
    save:function(component,event,helper) {
        try{
        var formulaMap = {};
        var FormulaFieldsAre = [];
        //logic for formula field
        var selectedFieldInstances = component.find('selectedField');
        var selectedOperationInstancces = component.find('selectedOperation');
        var enteredValueInstances = component.find('enteredValue');
        
        console.log(selectedFieldInstances.length);
        console.log(selectedOperationInstancces.length);
        console.log(enteredValueInstances.length);
        var formulaValues = {};
        var rowIds = component.get('v.rowAlphaBets');
        for(var i=0;i<selectedFieldInstances.length;i++){
     //    console.log('>>>>> ',   selectedFieldInstances[i].get('v.value'));
            if(FormulaFieldsAre.indexOf(selectedFieldInstances[i].get('v.value'))==-1){
                FormulaFieldsAre.push(selectedFieldInstances[i].get('v.value').replace(' ',''));
            }
            if(selectedFieldInstances[i].get('v.value')){
                
                var eachFoemulaRow = component.get('v.selectedObject')+'.'+selectedFieldInstances[i].get('v.value')+' ' +selectedOperationInstancces[i].get('v.value')+' '+enteredValueInstances[i].get('v.value');
          //  console.log('eachFoemulaRow ',eachFoemulaRow);
                formulaValues[rowIds[i]] = eachFoemulaRow;
            }
        }
        console.log('formulaValues ',formulaValues);
        var enteredformulaCriteria =  component.get('v.formulaCriteria');
        for(var key in formulaValues){
            enteredformulaCriteria = enteredformulaCriteria.replace(key,formulaValues[key]);
            
        }
        
          console.log('enteredformulaCriteria ',enteredformulaCriteria);
        formulaMap['enteredformulaCriteria'] = enteredformulaCriteria;
        formulaMap['formulaFields'] = FormulaFieldsAre;
        formulaMap['ruleName'] = component.get('v.validationRuleName');
      console.log('formulaMap ',formulaMap);
        }catch(err){}
    //    return false;
        //end of logic
        try{
        var cmpInstances = component.find('inlineStatus');
        var DatatableEditableFields={};
        for(var i=0;i<cmpInstances.length;i++){
            console.log(JSON.parse(JSON.stringify(cmpInstances[i])));
            console.log(cmpInstances[i].get('v.label'),cmpInstances[i].get('v.value'));
            DatatableEditableFields[cmpInstances[i].get('v.label')] = cmpInstances[i].get('v.value');
        }
        
        
        var cmpSortingInstances = component.find('sortingStatus');
        var DatatableSortableFields={};
        for(var i=0;i<cmpSortingInstances.length;i++){
           // console.log(JSON.parse(JSON.stringify(cmpInstances[i])));
          //  console.log(cmpInstances[i].get('v.label'),cmpInstances[i].get('v.value'));
            DatatableSortableFields[cmpSortingInstances[i].get('v.label')] = cmpSortingInstances[i].get('v.value');
        }
    }catch(err){}
        var tempName  = component.get('v.createdTemplateId')
        var cmpIs = component.get('v.selectedBaseComponent');
        var objIs = component.get('v.selectedObject');
        var selFields = component.get('v.selectedFields');
        console.log('selFields ',selFields.join());
        console.log('DatatableSortableFields ',DatatableSortableFields);
        var configData = {
            "ObjectName":objIs,
			"fields":selFields.join(),
            "DatafieldEditConfig":DatatableEditableFields,
            "DatafieldSortConfig":DatatableSortableFields
        };
        
        if(cmpIs=='c:DynamicTableCreator'){
            configData['showPagination'] = component.get('v.pagination');
            
        }
        if(cmpIs=='c:progressBar' || cmpIs=='c:DynamicTabs'){
            
          var steps = [];
          var elements = document.getElementsByClassName("stepNameinput");
            var cmpElements = document.getElementsByClassName("templateNameinput");
        console.log("elements.length: " + elements.length);
        for (var i=0; i<elements.length; i++) {
            console.log('>>> selected cmp is ',cmpElements[i].value);
            var contextValue = '';
                   steps.push({Name:elements[i].value,val:''+i,displaycmp:cmpElements[i].value});
   
        }
           
         //return false; 
            //,{Name:"step2",val:"2",displaycmp:'sho wpage'},{Name:"step3",val:"3",displaycmp:'Accoutn test table1'},{Name:"step4",val:"4",displaycmp:'2 components test'}];//component.get('v.progresSteps');
  configData['steps'] = steps;
        }
        
         if(cmpIs =='c:TextEditor'){
               configData = '';
             configData = component.get('v.myVal');
            }
    
        console.log('config data ',JSON.stringify(configData));
        
        
        var action = component.get("c.saveConfiguration");
            action.setParams({
                TemplateName:tempName,
                ComponentName:cmpIs,
                configJsonData:JSON.stringify(configData),
                formulaMapAre:formulaMap,
                elLocation:component.get('v.elementLocation')
            });
        action.setCallback(this, function(response) {
            	component.set('v.renderCreatedTemplate',false);
            
            var state = response.getState();
            if (state === "SUCCESS") {
              
				//component.set('v.createdTemplateName',tempName);
                
				component.set('v.renderCreatedTemplate',true);
              
				component.set('v.showConfiguration',false);
                component.set('v.renderTime',component.get('v.renderTime')+1);
               // component.set('v.renderCreatedTemplate',true);
            }
            
        });

        $A.enqueueAction(action);
        
    },
    setSteps:function(cmp){
        
        var stepsArray = [];
        for(var i=0;i<cmp.get('v.numOfSteps');i++){
            stepsArray.push(i);
        }
        cmp.set('v.items',stepsArray);
    }
})