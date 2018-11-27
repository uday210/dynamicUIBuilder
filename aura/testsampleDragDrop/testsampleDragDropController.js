({
    allowDrop: function(cmp, event, helper){
        event.preventDefault();
    },
    drag: function(cmp, ev, helper){
          var parentId = document.getElementById(ev.target.id).parentElement.id;
        cmp.set("v.startId",ev.target.id);
        cmp.set("v.parentId",parentId);
    },
    drop: function(cmp, ev, helper){
        var drag = cmp.get("v.startId");
        var div = ev.target.id;
        var fragment = document.createDocumentFragment();
        fragment.appendChild(document.getElementById(drag));
        document.getElementById(div).appendChild(fragment);
        var c = document.getElementById(div).children;
        var x = document.getElementById('drag1').parentElement.id;
        var fragment = document.createDocumentFragment();
        fragment.appendChild(document.getElementById(c[0].id));
        document.getElementById(cmp.get("v.parentId")).appendChild(fragment);
    }
})