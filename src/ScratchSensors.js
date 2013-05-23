ScratchSensors = {
    update: function (name, value)
    {
        if(typeof(Storage)!=="undefined") {
            path = localStorage.scratchSensorsPath;
        } else {
            path = window.scratchSensorsPath;
        }

        if (!path){
            path = "/usr/bin/ScratchGenericSensor";
        }

        var evt = document.createEvent("CustomEvent");

        console.log("Updating sensor " + name + " to val: " + value);
        console.log("executing /usr/bin/python " +
                path + " " + name + " " + value);

        evt.initCustomEvent(
            "execute",
            true,
            true,
            {
                'command':'/usr/bin/python',
                'args': path + " " + name + " " + value
            }
        );
        return document.dispatchEvent(evt);
    },

    setup : function(path)
    {
        if(typeof(Storage)!=="undefined") {
            localStorage.scratchSensorsPath = path;
        } else {
            window.scratchSensorsPath = path;
        }
    }
};
