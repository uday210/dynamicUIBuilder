({
    fetchData : function(cmp, event, helper) {
        var action = cmp.get("c.getData");
        action.setParams({
            "SOQLis":'select '+cmp.get('v.fieldList').join(',')+' from '+cmp.get('v.sObjecNameIs')
        })

        action.setCallback(this,function(resp){
            var state = resp.getState();

            if(state === 'SUCCESS'){
                var data = resp.getReturnValue();
                //console.log(JSON.stringify(records));
                //pass the records to be displayed
             // var data = response.getReturnValue();
                   var page_size = parseInt(cmp.get('v.pageSize'));
      
                var subset = data.slice(0,page_size);
                cmp.set('v.total',data.length);
                if(cmp.get('v.renderPagination')){
			    	cmp.set("v.returnList",subset);
                }else{
                    cmp.set("v.returnList",data);
                }
                cmp.set("v.returnListMaster",data);
                this.createDT(cmp, event, helper);
            }
        });

        $A.enqueueAction(action);   
    },
     createDT : function(component, event, helper) {
        //Creating dynamic Lightning datatable

        var targetCmp=component.find("newDtPlaceholder");
        targetCmp.set("v.body",[]); //destroying existing one

        $A.createComponent(
            "lightning:datatable",
            {
                "data":component.get("v.returnList"),
                "columns":component.get("v.returnColumns"),
                "keyField":"Id",
                "hideCheckboxColumn":true,
                "aura:id":"dynamicTable",
                "onsave":component.getReference("c.onSave"),
                "sortedBy":component.get("v.sortedByIs"),
                "sortedDirection":component.get("v.sortedDirectionIs"),
                "onsort":component.getReference("c.updateColumnSorting")

            },
            function(tbl,state,message)
            {
                console.log(state +" - " +message);
                var body=targetCmp.get("v.body");
                body.push(tbl);
                targetCmp.set("v.body",body);
            }
        );
    },
      saveDataTable : function(component, event, helper) {
        var editedRecords =  component.find("dynamicTable").get("v.draftValues");
        var totalRecordEdited = editedRecords.length;
        var action = component.get("c.updateRecords");
        action.setParams({
            'editedAccountList' : JSON.stringify(editedRecords),
            'ObjectApiName':component.get('v.sObjecNameIs')
        });
        action.setCallback(this,function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                //if update is successful
                if(response.getReturnValue() === true){
                    helper.showToast({
                        "title": "Record Update",
                        "type": "success",
                        "message": "Records Updated"
                    });
                   // helper.reloadDataTable();
                } else{ //if update got failed
                    helper.showToast({
                        "title": "Error!!",
                        "type": "error",
                        "message": "Error in update"
                    });
                }
            }
        });
        $A.enqueueAction(action);
    },
     /*
     * Show toast with provided params
     * */
    showToast : function(params){
        var toastEvent = $A.get("e.force:showToast");
        if(toastEvent){
            toastEvent.setParams(params);
            toastEvent.fire();
        } else{
            alert(params.message);
        }
    },

})