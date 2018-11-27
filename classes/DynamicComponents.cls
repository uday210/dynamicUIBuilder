global class DynamicComponents  extends VisualEditor.DynamicPickList{
    
    global override VisualEditor.DataRow getDefaultValue(){
        Dynamic_UI__c each = [select Name from Dynamic_UI__c limit 1];
        
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow(each.Name,each.Name);
        return defaultValue;
    }
    global override VisualEditor.DynamicPickListRows getValues() {
   //     VisualEditor.DataRow value2 = new VisualEditor.DataRow('yellow', 'YELLOW');
        VisualEditor.DynamicPickListRows  myValues = new VisualEditor.DynamicPickListRows();
        for(Dynamic_UI__c each:[select Name from Dynamic_UI__c]){
                   VisualEditor.DataRow value1 = new VisualEditor.DataRow(each.Name, each.Name);
 				   myValues.addRow(value1);
      
        }
        return myValues;
    }
}