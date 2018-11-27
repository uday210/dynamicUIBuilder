public class ProductsSingleton {
    
    
    public list<product2> Allproducts{get;set;}
    public static ProductsSingleton instance = null;
    
    public static ProductsSingleton getInstance(){
        if(instance ==null)
            instance = new ProductsSingleton();
        
        return instance;
    }
    private ProductsSingleton(){
        
        Allproducts = [SELECT CreatedById,CreatedDate,Description,DisplayUrl,ExternalDataSourceId,ExternalId,Family,Id,IsActive,IsArchived,IsDeleted,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,Name,ProductCode,QuantityUnitOfMeasure,StockKeepingUnit,SystemModstamp FROM Product2  order by Name ASC];
    } 
    
    

}