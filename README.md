to use:  

`import LFO from 'lfo-value'`  

create a new instance of the lfo specifying, min value, max value, and frequency in seconds  

`const myLFO = new LFO(1, 100, 2); `  

On instance creation it records an internal 'instance start time' to map against, after which it doesn't rely on it's own internal clock or anything looping, you bring your own logic to read it back, at read time it simply calculates the value to return.  

`myLFO.getSquare(); // outputs 1 or 100 every 2 seconds`  

To get animated values read this from any looping function such as requestAnimationFrame or setInterval  

you can supply an offset in seconds, which lets you create multiple LFO's with the same interval but off-phase using the same instance.  

`console.log(myLFO.getSquare(), myLFO.getSquare(1)); //2 square waves 180 degrees out of phase from each other`  

