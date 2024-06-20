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
git clone https://github.com/Kayakbabe/MMM-Rhino.git
```

## Configuration TBD

To use this module, add it to the modules array in the `config/config.js` file:

```javascript
modules: [
  {
    module: "MMM-Rhino",
    position: "bottom_right", // This can be any of the regions BUT
    // Best results in bottom_bar so it loads after other modules.
    config: {
      // See 'Configuration options' for more information.
      x: "", // 
      x: "", // 
      apikey: "YOUR_API_KEY" // picovoice API key.
    }
  }
];
```

### Configuration options TBD

The following properties can be configured:

| Option                       | Description                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `x`                   | blah <br><br> **Example:** `'xxxx'` <br> **Default value:** `false` <br><br> Value is **REQUIRED**                                                                                                                                                                                                                   |
| `x`                  | blah. Value is **REQUIRED** |
| `apikey`                     | Your [PICOVOICE](https://picovoice.ai) API key, which can be obtained by creating an Picovoice account. <br><br> Value is **REQUIRED**                                                                                                                                                                                                                                                       |

## Update

Go to the module’s folder inside MagicMirror modules folder and pull the latest version from GitHub and install:

```bash
cd ~/MagicMirror/modules/MMM-Rhino
git pull
```

## Special Thanks

- [Michael Teeuw](https://github.com/MichMich) for creating the inspiring project [MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror).
- [SikandAlex](https://github.com/SikandAlex/MMM-Porcupine) for their PicoVoice Porcupine module, which inspired me and on which a part of this module is based
- The community of magicmirror.builders for help in the development process and all contributors for finding and fixing errors in this module.

## Contributing

If you find any problems, bugs or have questions, please [open a GitHub issue](https://github.com/Kayakbabe/MMM-Rhino/issues) in this repository.
