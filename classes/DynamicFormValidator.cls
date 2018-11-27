public class DynamicFormValidator {
    @AuraEnabled
    public static formValidationData doFormValidate(map<String,Object> formData,
                                                   String sObjectName,
                                                   String TemplateValidationRuleId){
                    
            Template_Validation__c Tv = [select id,Formula_Fields__c,Validation_Formula__c,Error_Message__c,Error_Location__c from Template_Validation__c where UI_Element__c=:TemplateValidationRuleId limit 1];        
            map<String,Object> sObjectFromLightningForm = formData;
            String objectName = sObjectName;
            list<String> ExpressionFields = new list<String>();
            ExpressionFields = Tv.Formula_Fields__c.split(',');
            system.debug('ExpressionFields '+ExpressionFields);
            //Define set of all allowed operators
            //Mostly we don't need to change this, it can be added in setup method
            Operations opObj = Operations.getInstance(); 
            opObj.registerOperation(OperationFactory.getInstance('&&'));
            opObj.registerOperation(OperationFactory.getInstance('==')); 
            opObj.registerOperation(OperationFactory.getInstance('!=')); 
            opObj.registerOperation(OperationFactory.getInstance('||'));
            opObj.registerOperation(OperationFactory.getInstance('('));
            opObj.registerOperation(OperationFactory.getInstance(')'));
            opObj.registerOperation(OperationFactory.getInstance('<'));
            opObj.registerOperation(OperationFactory.getInstance('<=')); 
            opObj.registerOperation(OperationFactory.getInstance('>'));
            opObj.registerOperation(OperationFactory.getInstance('>='));
             opObj.registerOperation(OperationFactory.getInstance('><'));
            

                                                   
                                                       
           //Define bindings, which will replace variables while
            //evaluating rules      
            Map<String, String>bindings = new Map<String, String>();
            for(string eachExpressionField : ExpressionFields){
            system.debug('eachExpressionField '+eachExpressionField);
            system.debug('sObjectFromLightningForm  '+sObjectFromLightningForm );
                 bindings.put((objectName+'.'+eachExpressionField).toLowerCase(), string.valueOf(sObjectFromLightningForm.get(eachExpressionField))); 
            
            }
            system.debug('bindings '+bindings);
            //Define rule
           // String expr  = 'Case.OwnerName__c == Minal || ( Case.age_mins__c < 75 && Case.IsEscalated == false )' ;
            
           String expr  = tv.Validation_Formula__c;//'PartnerType ==Gold' ; //get it from the respective record
            system.debug('expr '+expr);
            //Initialize Rule Engine
            Rule r = new Rule().setExpression(expr);   
            
            //Evaluate rule with Binding values
            Boolean retVal = r.eval(bindings) ;
            
            //Check if expected result is correct
            System.debug('>>>>> '+ retVal);  
                           
             return new formValidationData(!retVal,tv.Error_Message__c,tv.Error_Location__c);                               
    }
    
    
    public class formValidationData{
        @AuraEnabled
        public boolean isSuccess ;
         @AuraEnabled
        public String ErrorMessages;
          @AuraEnabled
        public String ErrorLocation;
        formValidationData(boolean isSuccess,String ErrorMessages,String ErrorLocation){
            this.isSuccess = isSuccess;
            this.ErrorMessages = ErrorMessages;
            this.ErrorLocation = ErrorLocation;
        }
    }

}