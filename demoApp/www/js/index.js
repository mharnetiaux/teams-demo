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
            title: 'Ruth - URGENT',
            text: "Darell Salyer's blood sugar is high. I'm updating his diagnosis to prediabetic. Need to evaluate treatment plan.",
            attachments: ['../images/urgent.png'],
            trigger: { in: 1, unit: 'minute' }
        });
    }
};

app.initialize();