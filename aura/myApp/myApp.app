<aura:application extends="force:slds">
    <aura:attribute name="fields" type="String[]" default="['FirstName','LastName','Email']"/>
    <aura:attribute name="dateField" type="Object"/>
    <lightning:input type="color" label="Color" name="color" value="#EEEEEE" />
    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
     <lightning:recordEditForm aura:id="recordViewForm"
                                     onsubmit="{!c.handleSubmit}"
                                     objectApiName="Contact">
          <lightning:inputField fieldName="LastName" aura:id="index_" value="test"/>
          <lightning:inputField fieldName="{!v.dateField.field}" value="{!v.dateField.val}" aura:id="index_" />
         
                  <lightning:button aura:id="submit" type="submit" label="Update record" class="slds-m-top_medium" />
      
         
    </lightning:recordEditForm>
    
    <ui:button press="{!c.myAction}" label="test"/>
</aura:application>