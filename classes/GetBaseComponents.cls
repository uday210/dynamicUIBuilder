public class GetBaseComponents {
	@AuraEnabled
    public static list<BaseComponents__mdt> getBaseComponents(){
        
        return [SELECT Id, MasterLabel, Name__c, icon__c FROM BaseComponents__mdt];
    }
    
    @AuraEnabled
    public static list<Dynamic_UI__c> getTemplates(){
        
        return [SELECT Id,Name,Grid_Structure__c FROM Dynamic_UI__c];
    }
}