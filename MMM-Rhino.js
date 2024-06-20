/* Magic Mirror
 * Module: MMM-Rhino
 *
 * By Kelly Allen https://github.com/Kayakbabe
 * MIT Licensed.
 */


Module.register("MMM-Rhino", {
  defaults: {
    debug: false,
    //hotword: "Magic Mirror", // do i want to add porcupine or just have it hot all the time?
    sensitivity: 0.7,
    accessKey: "", //add check that this value is filled in, or else give a notification and log error
    contextPath: "MagicMirrorControl_en_raspberry-pi_v3_0_0.rhn",
    modelFilePath: "",
    // do i need to add var for hx stuff for usb mic or diff port than default or have
    // them configure externally?
    onDetected: {
      notification: "RHINO_ACTIVATED",
      parameters: {
        type: "MIC",
        profile: "default",
        chime: true
       }
    }
  },

  start: function() {
    Log.log('Rhino voice control started');
    this.config = this.configAssignment({}, this.defaults, this.config)
    this.sendSocketNotification('INIT', this.config)
  },

  notificationReceived: function(notification, payload, sender) {
    Log.log(`Notification received: ${id}`, payload);
    switch (notification) {
       // add a case to mute the microphone and speaker
      case "RHINO_READY":
      case "DOM_OBJECTS_CREATED":
      case "ALL_MODULES_STARTED":
      //case "PORCUPINE_START":  //do i want to integrate porcupine or let rhino run all the time?
      //  this.sendSocketNotification('START')
      //  break
      //case "PORCUPINE_STOP":
      //  this.sendSocketNotification('STOP')
      break
    }
  },

  // do i need to have a timer or some notification that pages has finished it's job?
  // a timer might be easier to implment as in command sent, timer kicks in to slow speaker down.
  // might not be necessary at all.

  // When node_helper sends the DETECTED socket notification and it is recieved
  // here
  socketNotificationReceived: function(notification, payload) {
    switch (notification) {
      case "DETECTED":
        // Send ASSISTANT_ACTIVATE notification to MM Google Assistant MK2
        // find handling code in line 278 of MMM-AssistantMk2.js
        // https://github.com/bugsounet/MMM-AssistantMk2
        this.sendNotification(this.config.onDetected.notification, this.config.onDetected.parameters)
        break
    }
  },

  // Assign the configuration
  configAssignment : function (result) {
    var stack = Array.prototype.slice.call(arguments, 1)
    var item
    var key
    while (stack.length) {
      item = stack.shift()
      for (key in item) {
        if (item.hasOwnProperty(key)) {
          if (typeof result[key] === "object" && result[key] && Object.prototype.toString.call(result[key]) !== "[object Array]") {
            if (typeof item[key] === "object" && item[key] !== null) {
              result[key] = this.configAssignment({}, result[key], item[key])
            } else {
              result[key] = item[key]
            }
          } else {
            result[key] = item[key]
          }
        }
      }
    }
    return result
  },
})
