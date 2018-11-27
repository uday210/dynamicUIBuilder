public class SaveOpty {
    
     @AuraEnabled
    public static  list<picklistSchema>  get_opty_schema(){
        
                
   Schema.DescribeFieldResult fieldResult =
 Opportunity.stageName.getDescribe();
   List<Schema.PicklistEntry> ple = fieldResult.getPicklistValues();
    list<picklistSchema>  vals = new list<picklistSchema>();
        for( Schema.PicklistEntry f : ple)
   {
   vals.add(new picklistSchema(f.getLabel(),f.getValue()));
  // system.debug('f.getLabel()  '+f.getLabel());
   
  // system.debug('f.getValue()  '+f.getValue());
  
    
   }       
         return vals;
    }
    public class picklistSchema{
        @AuraEnabled
        public string label;
         @AuraEnabled
        public string value;
        picklistSchema(string label,string value){
            this.label = label;
            this.value = value;
        }
    }
    @AuraEnabled
    public static String save_opty(Opportunity Opp){
        Opp.Pricebook2Id ='01s6F00000BtCra';
       try{
        insert Opp;
       } catch(exception ex){
        throw new AuraHandledException(ex.getmessage());
        } 
        return Opp.id;
    }
    @AuraEnabled
    public static void  save_products(String OppId){
        OpportunityLineItem opl = new OpportunityLineItem();
        opl.OpportunityId = Oppid;
        opl.Product2Id = '01t6F000008extM';
        opl.Quantity = 2;
        opl.UnitPrice = 0;
        try{
        insert opl;
        }catch(exception ex){
        throw new AuraHandledException(ex.getmessage());
        }
    }

}