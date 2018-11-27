<aura:application extends="force:slds" controller="GetDynamicComponentData">
       <ltng:require afterScriptsLoaded="{!c.doInit}" scripts="{!join(',',
         $Resource.jquery_lightning + '/jquery_lightning/jquery-2.2.4.min.js',
         $Resource.jquery_lightning + '/jquery_lightning/jquery-ui.1.11.4.min.js'
)}"/>
    <aura:attribute name="templateName" type="String" default="MYTABS"/>
      <aura:attribute name="esHtml" type="String" />
  <!--  <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>-->

    <lightning:card footer="" title="">
        <div aura:id="MainContainer" style="margin:0.5%;margin-left:18px">
            
            
        </div>
   </lightning:card>

</aura:application>