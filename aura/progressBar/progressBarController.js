({
	myAction : function(component, event, helper) {
        helper.doProgressBarRender(component, event, helper);
	},
            moveNextClick:function(component,event,helper){
                component.set('v.renderData',false);
                component.set('v.renderCmp',false);
         //       console.log('otherData ',otherData);
                var steps = component.get('v.stepsData');
                    //[{Name:"step1",val:"1",displaycmp:'test 1'},{Name:"step2",val:"2",displaycmp:'sho wpage'},{Name:"step3",val:"3",displaycmp:'Accoutn test table1'},{Name:"step4",val:"4",displaycmp:'2 components test'}];//component.get('v.progresSteps');
    //  	  component.set('v.currentStep',paths[component.get("v.currentStep_position")+1]);
      
                
               /* component.set("v.currentStep_position",component.get("v.currentStep_position")+1);
                var stepIs = component.get("v.currentStep_position");
                component.set('v.renderCmpName',steps[stepIs].displaycmp);
                component.set('v.renderCmp',true);*/
        helper.doProgressBarRender(component, event, helper);
            }
                
            
})