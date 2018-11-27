public class demoDynamicDataTableController {
    @AuraEnabled
    public static list<sObject> getData(String SOQLis){
        
        return database.query(SOQLis);
    }
	
     @AuraEnabled
    public static boolean updateRecords(string editedAccountList,String ObjectApiName){
          Type t = Type.forName('list<'+ObjectApiName+'>.class');
 list<sObject> PassedListObject = new  list<sObject>();
        PassedListObject= (list<sObject>)JSON.deserialize(editedAccountList ,t);
      //upsert data;
     
        try{
            update PassedListObject;
            return true;
        } catch(Exception e){
            return false;
        }
    }
}