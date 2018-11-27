public class GetDynamicComponentData {
    
    @AuraEnabled
    public static Dynamic_UI__c getUiDetails(String uiElementName){
        
        return [select id,Grid_Structure__c,(select id,Component_Name__c,Config_Data__c,Component_Position__c from Dynamic_UI_Elements__r) from Dynamic_UI__c where name=:uiElementName];
    }
    
     @AuraEnabled
    public static Dynamic_UI_Elements__c getSingleUiDetailsforHtml(){
        
        return [select id,Config_Data__c from Dynamic_UI_Elements__c where id='a056F00000pAM1R'];
    }

}