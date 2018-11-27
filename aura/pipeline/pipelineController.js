({
	allowDrop: function(component, event, helper) {
        event.preventDefault();
    },
    
    onDrop: function(component, event, helper) {
        event.preventDefault();
        var pipelineChangeEvent = component.getEvent('pipelineChange');
        pipelineChangeEvent.setParams({
            'title': component.get('v.title'),
            'item': JSON.parse(event.dataTransfer.getData('text'))
        });
        pipelineChangeEvent.fire();
        
    },
})