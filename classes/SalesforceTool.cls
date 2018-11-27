public  class SalesforceTool
{
  
    // SomeValues to be store
    public String oid ;
    public String cid ;
    public String apmid ;
    public String carid ;

   
    // used receive response by sending a http request
    @AuraEnabled
    public static String getResponse(String ClassId)
    {
      String endpoint = 'https://mydealreg-dev-ed.my.salesforce.com/services/data/v43.0/tooling/sobjects/ApexClass/01p6F00000NkOGC';//'https://na1.salesforce.com/services/data/v28.0/tooling/sobjects';

        try
        {
        
             HttpRequest req = new HttpRequest();
      PageReference newPage = page.sessionIdGenerator;
        string sessionId = getSessionIdFromVFPage(newPage);
        req.setHeader('Authorization', 'Bearer ' +sessionId);//  UserInfo.getSessionID());
        req.setHeader('Content-Type', 'application/json');
        req.setEndpoint(endpoint);
        req.setMethod('GET');
            Http httpreq = new Http();
            HttpResponse res = httpreq.send(req);
            String reqresponse = res.getBody();
            return reqresponse;
        }
        catch (Exception e)
        {
          return 'Error:' +e.getMessage();
        }
    }
    
     public static String getSessionIdFromVFPage(PageReference visualforcePage){
        String content = visualforcePage.getContent().toString();
        Integer s = content.indexOf('Start_Of_Session_Id') + 'Start_Of_Session_Id'.length(),
                e = content.indexOf('End_Of_Session_Id');
        return content.substring(s, e);
    }

    // create a http request with required endpoint and request method
   /* public HttpRequest createHttpRequest(String endpoint, String method)
    {
        HttpRequest req = new
        HttpRequest();
        endpoint += '';
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID());
        req.setHeader('Content-Type', 'application/json');
        req.setEndpoint(endpoint);
        req.setMethod(method);
        return req;
    }*/
}