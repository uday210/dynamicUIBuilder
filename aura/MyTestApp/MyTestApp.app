<aura:application extends="force:slds">
	 <aura:attribute name="newBroker" type="String[]" default="['Name','stageName','closeDate']" /> 
     <lightning:recordForm 
         objectApiName="opportunity" 
         layoutType="Compact" 
         fields="{!v.newBroker}"
         columns="2"
         mode="edit"
         onsubmit="{!c.handleSubmit}" />
</aura:application>