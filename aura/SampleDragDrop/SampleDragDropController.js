({
    doInit : function(cmp, event, helper) {
        cmp.set('v.table1Data', [
                    	{"rowid":"dnd-r-0", "rowdata":["table1-row1-cell1","table1-row1-cell2"]},
						{"rowid":"dnd-r-1", "rowdata":["table1-row2-cell1","table1-row2-cell2"]}
                	]);
        
        cmp.set('v.table2Data', []);
    },
    allowDrop : function(cmp, event, helper) {
        event.preventDefault();
    },
    handleDrag : function(cmp, event, helper) {
        cmp.set("v.draggedDivID", event.target.id);
    },
    handleDrop : function(cmp, event, helper) {
        var srcId = cmp.get("v.draggedDivID");
        var rowIndex = parseInt(srcId.replace("dnd-r-", ""));
        
        var table1Data = cmp.get("v.table1Data");
        var table2Data = cmp.get("v.table2Data");
        
        var rowThatWasDragged = table1Data[rowIndex];
        table2Data.push(rowThatWasDragged);
        
        table1Data.splice(rowIndex, 1);
        cmp.set("v.table1Data", table1Data);
        cmp.set("v.table2Data", table2Data);
	}
})