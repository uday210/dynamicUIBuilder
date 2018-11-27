<aura:application >
	<aura:attribute name="label" type="String" required="true" access="global"/>
    <aura:attribute name="description" type="String" required="true" access="global"/>
    <aura:attribute name="descriptor" type="String" required="true" access="global"/>
    
    <aura:handler name="change" value="{!v.description}" action="{!c.valueChange}"/>

    <aura:handler name="init" value="{!this}" action="{!c.init}"/>

    <div class="container">
        <h3>{!v.label}</h3>

        <div class="description"><aura:unescapedHtml value="{!v.description}"/></div>

        {!v.body}
    </div>
</aura:application>