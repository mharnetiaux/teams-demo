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
        cordova.plugins.notification.local.schedule({
            title: "Ruth - URGENT",
            text: "Darell Salyer's blood sugar is high. I'm updating his diagnosis to prediabetic. Need to evaluate treatment plan.",
            attachments: ['file://icon/urgent-notification.svg'],
            trigger: {
                in: 1,
                unit: 'minute'
            }
        });

        Keyboard.shrinkView(true);
        Keyboard.hideFormAccessoryBar(false);
        Keyboard.disableScrollingInShrinkView(false);
        Keyboard.automaticScrollToTopOnHiding = false;
        
        window.addEventListener('keyboardDidShow', function () {
            document.getElementById("scroll").scrollIntoView({behavior: "instant", block: "end", inline: "end"});
        });
    }
};

app.initialize();