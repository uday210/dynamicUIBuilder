public class sObjectSchema{


    @AuraEnabled
    public static String getSobjectSchemaDetails(String sObjectName){
        
        String[] types = new String[]{};
        types.add(sObjectName);
        
        
        
        return JSON.serialize(Schema.describeSObjects(types));
    
        
    }
    

}