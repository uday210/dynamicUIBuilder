public class AssetAlertsParser {

    public List<Alerts> alerts;

    public class Alerts {
        public String MACID;
        public String AlertNumber;
        public String AlertMessage;
    }

    
    public static AssetAlertsParser parse(String json) {
        return (AssetAlertsParser) System.JSON.deserialize(json, AssetAlertsParser.class);
    }
}