({
	doInit : function(component, event, helper) {
        var newItems = [{
            title: 'One item',
            id: '23243342',
            status: 'New'
        }];
        component.set('v.allItems', newItems);
	},
    
    onPipelineChanged: function(component, event, helper) {
        var title = event.getParam('title');
        var item = event.getParam('item');
        var allLists = component.get('v.allItems');
	     var actualItem = allLists.find(function(el) {
            return el.id == item.id;
        });
        if (actualItem) {
            actualItem.status = title;
            component.set('v.allItems', allLists);
        } else {
            console.log('could not find item ', item, ' in list ', allLists);
        }

        
    }
 })