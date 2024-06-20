/** Rhino module **/
"use strict"
const path = require("path")

const Rhino = require('bumblebee-hotword-node');
var NodeHelper = require("node_helper")

// Logging function to log MMM-Rhino output, in this case it is binding the
// output of the current script to the console with the [RHINO] context
var _log = function() {
    var context = "[RHINO]"
    return Function.prototype.bind.call(console.log, console, context)
}()

// Logging
var log = function() {
  //do nothing
}

// export functions for use elsewhere
module.exports = NodeHelper.create({
  // Start function
  start: function () {
    console.log("[RHINO] Starting...")
    this.config = {}
    this.running = false
    this.rhino = null
  },

  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "INIT":
        // set the internal config to the payload received in socket notification
        this.config = payload
        this.initialize()
        break
      case "START":
        // if we get a START socket notification, tell Rhino to start listening
        if (!this.running) this.activate()
        break
      case "STOP":
        // If we get a STOP socket notification, tell Rhino to stop listening
        if (this.running) this.deactivate()
        break
    }
  },

  initialize: function() {
    // if config has debug=true then start in debug mode, else dont
    var debug = (this.config.debug) ? this.config.debug : false
    if (debug == true) log = _log

    // Create a new rhino instance
    this.rhino = new Rhino()

    var hotword = this.config.hotword

    // Inform the user of the hotword currently in use + sensitivity
    console.log('USING HOTWORD:', hotword)
    console.log('SENSITIVITY:', this.config.sensitivity)

    // Add the hotword
    const data = require(`./hotwords/${hotword}`);
    this.rhino.addHotword(hotword, data, config.sensitivity);

    // Set the sensitivity for the hotword detection
    this.rhino.setSensitivity(this.config.sensitivity)

    // DOESN'T WORK (only normal JS version)
    //this.rhino.setMicVolume(this.config.micVolume)

    // Listen for hotword detection events, when we receive the event:
    // send a socketNotification
    this.rhino.on('hotword', (hotword) => {
        this.sendSocketNotification("DETECTED")
        console.log('DETECTED:', hotword);
    });

    log("Initialized...")

  },

  // Tell Rhino to start listening
  activate: function() {
    this.rhino.start()
    this.running = true
  },

  // Tell Rhino to stop listening
  deactivate: function() {
    this.rhino.stop()
    this.running = false
  },

})
