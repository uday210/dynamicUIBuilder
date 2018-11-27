<aura:application >
	<ltng:require scripts="{!$Resource.cometd}" afterScriptsLoaded="{!c.onCometdLoaded}"/>
    <aura:attribute name="CreateANewLead" type="Lead" default="{'sObjectType':'Lead'}"/>
 <aura:attribute name="notifications" type="Object[]"/>
  <aura:attribute name="isMuted" type="Boolean" default="false"/>
    <aura:attribute name="sessionId" type="String" default="00D5A000000BwU5!AR8AQO4YV.cjqN0DeqDWHM1Xstmiib_VCryeUxkcd0b9VHGhB6xLGuPZX2JPk0xtWyKAM9XMWR4OiuBCKUKPVE8blxCRgnwS"/>
<aura:attribute name="cometd" type="Object"/>
    <aura:attribute name="from" type="string"/>
    <aura:attribute name="loggedUserid" type="string"/>
    <aura:attribute name="vidyoUrl" type="string"/>
    <aura:attribute name="callComming" type="boolean" default="false"/>
<aura:attribute name="cometdSubscriptions" type="Object[]"/>
    <aura:attribute name="matcheddatarecords" type="Object[]"/>
    <aura:attribute name="phoneNum" type="String"/>
    <aura:attribute name="CreateLead" type="boolean" default="false"/>
     <aura:attribute name="CallAnswered" type="boolean" default="false"/>
     <aura:attribute name="ClickedOnAnswered" type="boolean" default="false"/>
     <aura:attribute name="Vidyocallout" type="boolean" default="false"/>
     <aura:attribute name="VidyocalloutStatus" type="String" default="false"/>
     <aura:attribute name="incall" type="String" default="0N55A000000fxja"/>
    <aura:attribute name="available" type="String" default="0N55A000000fxjQ"/>

</aura:application>