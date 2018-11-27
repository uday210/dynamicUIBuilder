({
	 handleClick : function (cmp, event, helper) {
        var buttonstate = cmp.get('v.buttonstate');
         if(cmp.get('v.eachRecord.Id')!=cmp.get('v.recordTypeIs')){
             cmp.set('v.recordTypeIs',cmp.get('v.eachRecord.Id'));
           }else{
                   cmp.set('v.recordTypeIs','');
                     
                           }
        cmp.set('v.buttonstate', !buttonstate);
    }
})