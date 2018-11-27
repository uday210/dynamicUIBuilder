public class AssetUtility{


        public static map<String,Asset> getAssets(list<String> MacIds){
        
        
            return new map<string,Asset>([select id from Asset]);
        }
}