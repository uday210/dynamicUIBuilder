({
	doProgressBarRender : function(component, event, helper) {
        var Step = ''+component.get('v.currentStep_position');
        component.set('v.renderData',true);
		  var progressBarSteps = [];
      var steps = [{Name:"step1",val:"1",displaycmp:'test 1'},{Name:"step2",val:"2",displaycmp:'test 2'},{Name:"step3",val:"3",displaycmp:'test 3'},{Name:"step4",val:"4"}];//component.get('v.progresSteps');
        
        for(var i=0;i<steps.length;i++){
            
            progressBarSteps.push(["lightning:progressStep", { label: steps[i].Name,value:steps[i].val}]);
        }
   //     console.log('progressBarSteps ',progressBarSteps);
        $A.createComponents(progressBarSteps, (components, status, errors) => {
            // Then parent, specifying body of lightning:inputFields
            $A.createComponents(
            [["lightning:progressIndicator", { currentStep: Step,type:"path" ,body: components }]], 
                            (components, status, errors) => {
                                component.set("v.data", components);
                            });
        });
	
	}
})