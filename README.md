# MMM-Rhino
[MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror) module to allow voice control via Picovoice Rhino. This module outputs to the MagicMirror Notification system so other modules may interact with the MagicMirror.

**This module is in preliminary development mode. Assume it is buggy and incomplete until I remove this message.** 

# API
Uses PicoVoice Rhino. You will have to follow the instructions provided by Picovoice to install on your Raspberry Pi. You will need an account on their site and to obtain an api key. https://picovoice.ai/

# Modules Supported
+ MMM-Pages
+ News (default module included with MagicMirror)

The yml file provided in this repository will allow you to import it to the Rhino console on PicoVoice so that you can generate your own rhino profile that will work with your api key. 

Once imported, you can also add more notifications. If you do so, please document in the issues of this github so that I can possibly add them to the yml file for other users. At least having the notifications documented will help others with modules that I have not used. I will endeavor to add the notification for modules that I am using (which utilize input from the Magic Mirror Notification system for commands)

# Installation
Before installing this module, you have to setup with Picovoice to get an api key, and create a Rhino model which will work with your api key. The steps below will guide you.

## 1. Get a free PicoVoice Account
Go to <https://picovoice.ai/> and get a picovoice account. A free account that allows 10 Rhino downloads a month should be sufficient. Rhino works offline, So once you have installed PicoVoice, obtained your api key, and downloaded your Rhino model. You can command your mirror offline.

## 2. Setup Picovoice

## 3. Get Your Custom Rhino model
in the rhino console , Create a new context named MagicMirrorRhino.
Enter the context. 
import the MagicMirrorRhino.yml file. save it. Test it, Modify if you wish to fit your language style. 
*This intent of this module it not to teach you to use Rhino or PicoVoice, so please use their forums, FAQs and examples.* 
Download the rhino model. It will be downloaded as a zip file.

(note: you can test and play with your model as much as you want without downloading it. So if you are modifying your model to work with more notification than I have provided. Keep this in mind as the free account only allows 10 downloads per month.)

**Also note your private PicoVoice api key. You will need this in the config.**

## 4. Install Module
In your terminal, go to your MagicMirror's module folder:

```sh
cd ~/MagicMirror/modules
```

Clone this repository:

```sh
git this url blah blah blah 
```
