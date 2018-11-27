({
	  connectCometd : function(component,event,helper) {
    //alert('cometd');
      var helper = this;
    // Configure CometD
    var cometdUrl = "https://callnotification-dev-ed.lightning.force.com/cometd/40.0/";//window.location.protocol+'//'+window.location.hostname+'/cometd/40.0/';
    console.log('cometdUrl >> ', cometdUrl);
    //alert('cometdUrl >> '+ cometdUrl);

    var cometd = component.get('v.cometd');
    //console.log('cometd >> ', cometd);
    //console.log('cometd >> ',json.parse(cometd));
console.log('>>>>>> session ',component.get('v.sessionId'));
    cometd.configure({
      url: cometdUrl,
      requestHeaders: { Authorization: 'OAuth '+ component.get('v.sessionId')},
      appendMessageTypeToURL : false
    });
    cometd.websocketEnabled = false;
    // Establish CometD connection
    console.log('Connecting to CometD: '+ cometdUrl);
   // console.log('requestHeaders >>' + requestHeaders);
    cometd.handshake(function(handshakeReply) {
      if (handshakeReply.successful) {
          helper.dovidyologin(component,event,helper);
        console.log('Connected to CometD.');
        // Subscribe to platform event
        var newSubscription = cometd.subscribe('/event/InboundCall__e',
          function(platformEvent) {
            alert();
          }
        );
        // Save subscription for later
        var subscriptions = component.get('v.cometdSubscriptions');
        subscriptions.push(newSubscription);
        component.set('v.cometdSubscriptions', subscriptions);
      }
      else
        console.error('Failed to connected to CometD.');
    });
      },

})