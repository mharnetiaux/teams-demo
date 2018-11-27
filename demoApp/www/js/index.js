var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function() {
        Keyboard.shrinkView(true);
        Keyboard.hideFormAccessoryBar(true);
        Keyboard.disableScrollingInShrinkView(false);
        Keyboard.automaticScrollToTopOnHiding = false;
        
        window.addEventListener('keyboardDidShow', function () {
            document.getElementById("scroll").scrollIntoView({behavior: "instant", block: "end", inline: "end"});
        });
    }
};

app.initialize();