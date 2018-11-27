<aura:application extends="force:slds">
	 <aura:attribute type="Aura.Component[]" name="firstPanel" />
    <aura:attribute type="Aura.Component[]" name="secondPanel" />
    <aura:handler name="init" value="{! this }" action="{! c.doInit }" />
    <div class="wasCreatedDynamicallyInCode">
        Here should go the first component:
        <div id="addALightningComponentHere1">
            {! v.firstPanel }
        </div>
    </div>
    <div class="wasCreatedDynamicallyInCode">
        Here should go the second component:
        <div id="addALightningComponentHere2">
            {! v.secondPanel }
        </div>
    </div>
</aura:application>