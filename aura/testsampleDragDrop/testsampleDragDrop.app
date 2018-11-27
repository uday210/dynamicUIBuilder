<aura:application extends="force:slds">
    <aura:attribute name="startId" type="string"/>
    <aura:attribute name="parentId" type="string"/>

    <div class="div1" id="div1" ondrop="{!c.drop}" ondragover="{!c.allowDrop}">
       <!-- <span src="{!$Resource.Pic1}" draggable="true" ondragstart="{!c.drag}" id="drag1" width="88" height="31"/>-->
           <span  draggable="true" ondragstart="{!c.drag}" id="drag1">test</span>
    </div>

    <div class="div2" id="div2" ondrop="{!c.drop}" ondragover="{!c.allowDrop}">
     <!--   <img src="{!$Resource.Pic2}" draggable="true" ondragstart="{!c.drag}" id="drag2" width="88" height="31"/>-->
        <span  draggable="true" ondragstart="{!c.drag}" id="drag2">test 2</span>
    </div>
    <input type="button" onclick="{!c.MoveDiv}" value="Click Me" />
    <div class="div2" id="div3" ondrop="{!c.drop}" ondragover="{!c.allowDrop}"><span id="drag3"> </span></div>

</aura:application>