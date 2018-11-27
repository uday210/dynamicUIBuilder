public class ComponentConfigurator {
    
    @AuraEnabled
    public static list<String> getAllFields(String objNameIs){
        
        Map<String, Schema.SObjectField> objectFields = Schema.getGlobalDescribe().get(objNameIs).getDescribe().fields.getMap();
		system.debug(objectFields.Values());
        list<String> strList = new List<String>();
	  for(String fieldName : objectFields.keySet())
    {
        strList.add((String.valueOf(objectFields.get(fieldName))));
    }
        //	system.debug(strList);
        return strList;//(list<String>)objectFields.Values();
    }
    @AuraEnabled
    public static map<String,String> getAllObjects(){
         List<Schema.SObjectType> gd = Schema.getGlobalDescribe().Values();     
    map<String,String> options = new map<String,String>();
    
    for(Schema.SObjectType f : gd)
    {
        if(f.getDescribe().isQueryable())
       options.put(f.getDescribe().getLabel(),f.getDescribe().getName());
    }
        
        return options;
    }
	
     @AuraEnabled
    public static String saveTemplate(String TemplateName){
          Dynamic_UI__c Dui = new Dynamic_UI__c();
        Dui.Name = TemplateName;
        
        insert Dui;
        
        return Dui.id;
    }
                                         
    @AuraEnabled
    public static void saveConfiguration(String TemplateName,String ComponentName,String configJsonData,map<String,object> formulaMapAre,String elLocation){
        
//        Dynamic_UI__c Dui = new Dynamic_UI__c();
        //Dui.Name = TemplateName;
        
       // insert Dui;
        Dynamic_UI_Elements__c DuiE = new Dynamic_UI_Elements__c();
        DuiE.Component_Name__c = ComponentName;
        DuiE.Config_Data__c = configJsonData;
        DuiE.Dynamic_UI__c = TemplateName;//Dui.Id;
        DuiE.Component_Position__c = elLocation;
        insert DuiE;
        system.debug('formulaMapAre  '+formulaMapAre);
        if(formulaMapAre !=null && ComponentName=='c:DynamicFormCreator'){
              Template_Validation__c Tv = new Template_Validation__c();
            Tv.Name = ''+formulaMapAre.get('ruleName');
            Tv.Formula_Fields__c = (''+formulaMapAre.get('formulaFields')).replace('[','').replace(']','').replace('(','').replace(')','');
            Tv.Validation_Formula__c = ''+formulaMapAre.get('enteredformulaCriteria');
            Tv.UI_Element__c =    DuiE.id;
            Tv.Error_Message__c = 'error message';
            insert Tv;
                  //[select id,Formula_Fields__c,Validation_Formula__c from Template_Validation__c limit 1];        
     
        }
    }
}