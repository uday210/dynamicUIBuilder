<aura:application extends="force:slds" controller="DynamicFormValidator">
	   <lightning:recordEditForm
          aura:id="recordViewForm"
            onsubmit="{!c.handleSubmit}"
            objectApiName="Account">
            <!-- the messages component is for error messages -->
            <lightning:messages />

            <lightning:inputField fieldName="Name" />
            <lightning:inputField fieldName="Type" />
           
            <div class="slds-m-top_medium">
                <lightning:button  variant="brand" type="submit" name="save" label="Save" />
            </div>
        </lightning:recordEditForm>
</aura:application>