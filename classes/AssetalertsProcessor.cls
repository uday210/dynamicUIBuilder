@RestResource(urlMapping='/api/Assetalerts/*')
global with sharing class AssetalertsProcessor
{
    @HttpPost
    global static string doPost() 
    {
        RestRequest     request    = RestContext.request;
        RestResponse    response   = RestContext.response;    
        response.addHeader('Content-Type','applicatin/json');

        
        try
        {
            AssetAlertsParser  passedAlerts = AssetAlertsParser.parse(request.requestBody.toString());
           
           ProcessAlerts(passedAlerts.alerts);
        }
        Catch(Exception ee)
        {
        }
    response.addHeader('status code', '200');
     return '';
     //return '{ "Status":"4 of 6 alerts were successfully processed" }';
    }
    
    
    
    public static list<String> getMacIds(list<AssetAlertsParser.Alerts> Alerts){
    
        list<String> MacIds = new list<String>();
        for(AssetAlertsParser.Alerts eachAlert :Alerts){
            MacIds.add(eachAlert.MACID);
        }
    
        return MacIds;
    }
    
    
    
    public static String ProcessAlerts(list<AssetAlertsParser.Alerts> Alerts){
    
            map<String,Asset> Assets =  AssetUtility.getAssets(getMacIds(alerts));
         
        for(AssetAlertsParser.Alerts eachAlert :Alerts){
                //check asset exist or not
                if(Assets.keyset().contains(eachAlert.MACID)){
                
                    //do alert check
                    /*
                    if(){
                    
                    //if alert exist with open status
                    
                    
                    //check alert number
                        if(){
                        //if open alert with same number
                        //do nothing
                        }else{
                        //if open alert with another number save 
                        }
                        //check 
                    }else{
                    //create alert
                    }
                    */
                }else{
                
                    //do nothing
                }
        
           }
    
        return '';
    }
   
}