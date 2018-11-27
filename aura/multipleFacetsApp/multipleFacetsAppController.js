({
    doInit : function(cmp) {
        $A.createComponent(
            "lightning:button",
            {
                "aura:id": "findableAuraId",
                "label": "Press Me First",
                "onclick": cmp.getReference("c.handlePress")
            },
            function(newButton, status, errorMessage){
                //Add the new button to the body array
                if (status === "SUCCESS") {
                    var firstPanel = cmp.get("v.firstPanel");
                    firstPanel.push(newButton);
                    cmp.set("v.firstPanel", firstPanel);
                }

            }
        );
        $A.createComponent(
            "lightning:button",
            {
                "aura:id": "findableAuraId",
                "label": "Press Me Second",
                "onclick": cmp.getReference("c.handlePress")
            },
            function(newButton, status, errorMessage){
                //Add the new button to the body array
                if (status === "SUCCESS") {
                    var secondPanel = cmp.get("v.secondPanel");
                    secondPanel.push(newButton);
                    cmp.set("v.secondPanel", secondPanel);
                }

            }
        );
    },
    handlePress: function(component, event, helper) {

    }
})