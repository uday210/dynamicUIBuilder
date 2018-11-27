<aura:application extends="force:slds">
	<!-- attribute to play sound -->
    <aura:attribute name="playSound" type="Boolean" default="false"/>
    
    <!-- button to trigger sound event -->
   <lightning:button variant="neutral" title="Play Sound" onclick="{! c.triggerSoundEvent }">
        <aura:if isTrue="{!v.playSound}" >
            <lightning:Icon iconName="{!v.playSound ? 'utility:volume_high' : ''}" size="small" />
        </aura:if> Play Sound
    </lightning:button>   
    
    <!-- Sound -->
    <aura:if isTrue="{!v.playSound}" >
        <audio autoplay="true"><source src='{!$Resource.dellvoice}' type='audio/mpeg'/>
            </audio>
    </aura:if>
</aura:application>