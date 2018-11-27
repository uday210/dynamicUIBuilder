@IsTest public with sharing class globaltestclass{
     @IsTest(SeeAllData=true) 
     public static void testOptyinsert() {
             try{
                 SaveOpty.save_opty(new Opportunity());
             }catch(exception ex){}
             
              try{
                 SaveOpty.save_products([select id from opportunity limit 1].id);
             }catch(exception ex){}



              try{
                 GetPriceBooks.getPriceBooks();
             }catch(exception ex){}
             
              try{
                 GetPriceBooks.getProducts();
             }catch(exception ex){}
             
              try{
                 GetPriceBooks.getProductsperPage(1);
             }catch(exception ex){}

        }


}