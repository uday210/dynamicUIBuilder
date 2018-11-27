({
	 doInit : function(component,event,helper) {
        console.log("doinit");
         var otherConfigData = JSON.parse(JSON.stringify(component.get('v.otherData')));
         var fieldEditableData = otherConfigData.DatafieldEditConfig;
         var fieldSortableData = {};
         if(otherConfigData.DatafieldSortConfig){
             fieldSortableData = otherConfigData.DatafieldSortConfig;
         }
         console.log('otherConfigData ',otherConfigData);
         if(otherConfigData.showPagination){
             component.set('v.renderPagination',otherConfigData.showPagination);
         }
       var fieldsAre = component.get('v.fieldList');//.split(',');
         /*
            {
                label:'First Name',
                fieldName:'FirstName',
            },{
                label:'Last Name',
                fieldName:'LastName',
            }*/
        var columns = [];
         for(var i=0;i<fieldsAre.length;i++){
             columns.push({
                label:fieldsAre[i],
                fieldName:fieldsAre[i],
                editable:fieldEditableData[fieldsAre[i]],
                sortable:fieldSortableData[fieldsAre[i]]
            });
         }
        //pass the column information
        component.set("v.returnColumns",columns);

        //recriving data from server
        helper.fetchData(component, event, helper);
    },
     pageChange: function (component, event, helper) {
        var page = component.get("v.page") || 0;
        var direction = event.getParam("direction");
        if (/^\d+$/.test(direction)) {
            page = direction;
        } else {
            page = direction === "previous" ? (page - 1) : (page + 1);
        }
        component.set("v.page", page);
         var data  = component.get('v.returnListMaster');
         var page_size = parseInt(component.get('v.pageSize'));
         var subset = data.slice((page-1)*page_size, ((page-1)*page_size)+page_size);
         component.set('v.returnList',subset);//response.getReturnValue());
           helper.createDT(component, event, helper);
      },
     onSave : function (component, event, helper) {
        helper.saveDataTable(component, event, helper);
    },
      updateColumnSorting: function (cmp, event, helper) {
        var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
          console.log('fieldName ',fieldName);
          console.log('sortDirection ',sortDirection);
       cmp.set("v.sortedByIs", fieldName);
          cmp.set("v.sortedDirectionIs", sortDirection);//=='asc')?'desc':'asc');
              helper.createDT(cmp, event, helper);
     //  helper.sortData(cmp, fieldName, sortDirection);
    }
})