# MMM-Rhino
MagicMirror module to allow voice control via Picovoice Rhino. This module outputs to the MagicMirror Notification system so that other modules may interact with the MagicMirror.

# API
Uses PicoVoice Rhino. You will have to follow the instructions provided by Picovoice to install on your Raspberry Pi. You will need an account on their site and to obtain an api key. https://picovoice.ai/

# Modules Supported
MMM-Pages
default News

The yml file provided in this repository will allow you to import it to the Rhino console on PicoVoice so that you can generate your own rhino profile that will work with your api key. 

Once imported, you can also add more notifications. If you do so, please document in the issues of this github so that I can possibly add them to the yml file for other users. At least having the notifications documented will help others with modules that I have not used. I will endeavor to add the notification for modules that I am using (which utilize input from the Magic Mirror Notification system for commands)
