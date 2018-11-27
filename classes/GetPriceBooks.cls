public class GetPriceBooks {
    @AuraEnabled
    public static list<pricebook2> getPriceBooks(){
        
   //return options;
        return [select Name,id from pricebook2];
    } 
    
    
    @AuraEnabled
    public static list<Product2> getProducts(){
        
        list<Product2> AllProducts = ProductsSingleton.getInstance().Allproducts;
        list<Product2> SearchProducts = new list<Product2>();
        for(Integer i=0;i<100;i++){
            SearchProducts.add(AllProducts[i]);
        }
       system.debug('>>>>>>>> ');
        return SearchProducts;//[SELECT CreatedById,CreatedDate,Description,DisplayUrl,ExternalDataSourceId,ExternalId,Family,Id,IsActive,IsArchived,IsDeleted,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,Name,ProductCode,QuantityUnitOfMeasure,StockKeepingUnit,SystemModstamp FROM Product2  order by Name ASC limit 50];
    } 
	@AuraEnabled
    public static list<Product2> getProductsperPage(Integer pageNumber){
        
        list<Product2> AllProducts = ProductsSingleton.getInstance().Allproducts;
        list<Product2> SearchProducts = new list<Product2>();
        integer StartIndex = (pageNumber -1)*10;
        for(Integer i=StartIndex;i<(StartIndex+100);i++){
            SearchProducts.add(AllProducts[i]);
        }
       system.debug('>>>>>>>> ');
        return SearchProducts;//[SELECT CreatedById,CreatedDate,Description,DisplayUrl,ExternalDataSourceId,ExternalId,Family,Id,IsActive,IsArchived,IsDeleted,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,Name,ProductCode,QuantityUnitOfMeasure,StockKeepingUnit,SystemModstamp FROM Product2  order by Name ASC limit 50];
    } 

}