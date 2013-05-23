Generic scratch connector
===========================

This scratch connector, using scratchpy libraries, and its two lines of code
are a binding to use with chrome extension "ExternalExec", so you can
build web applications that send data to scratch.

Basically, you install ExternalExec, and, in your web app, you do this:

::

    function updateSensor(name, vale){
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(
            "execute",
            true,
            true,
            {
                'command':'/usr/bin/python',
                'args': "<path_to_this_folder>/ScratchGenericSensor.py "
                + name + " " + value
            }
        );
        document.dispatchEvent(evt);
    }

This code will provide an "updateSensor" function, wich, by passing name and
value, will

WebAppScratch
==============

Ok guys, I'll give you everything already done.

Just include scratchSensors.js in your web app, initialize it with the path to
scratchGenercSensor, make the user running scratch to install and the extension
and there you have it!

::

    ScratchSensors.setup('<path_to_this_folder>/ScratchGenericSensor.py');
    ScratchSensors.update('foo', 'bar');
    ScratchSensors.update('bar', 'baz');

It uses localStorage, so, if you do the setup once, you wont be needing to do it
anymore, never.

¡Imagine the posibilities!

Detailed install instructions
================================

First, remember to recursively checkout the git.

::

    git submodule init
    git submodule update --recursive

Ok, now let's begin.
We'll need the chrome extension installed, install it by dragging the CRX
now present in Connector/ExternalExec/ExternalExec.crx into your extensions
page. (Tip: To open your extensions page quickly use "chrome://extensions" in your
navigation bar).

Now, source src/ScratchSensors.js in your application, and specify the location
of Connector/ScratchGenericSensor.py.

Oh, you also have to activate remote sensors on scratch, but, for that, better
use the scratch wiki.

Voilá, you got it, easy?

BTW, I know, using an external program and an extension wasn't the best way, but
I had done the other extension (a few hours ago) for other stuffs, so... I
figured I could use it here and buy myself some spare time ;-)
