({
	onDragStart : function(component, event, helper) {
		event.dataTransfer.dropEffect = "move";
        var item = component.get('v.item');
      	event.dataTransfer.setData('text', JSON.stringify(item));
	}
})