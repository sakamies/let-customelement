# Let custom element

Use the &lt;let-&gt; element to associate a named front end only value on a form.

Maybe I'm profoundly naive, but hear me out and tell me if I'm not getting something. What if forms were the reactive primitives we wanted all along?

Forms are already a declarative method to have reactive values in html. We have events to react to changes. You can have hidden values that can be used for processing without showing up to users. You can set inputs disabled to not have their values show up in formdata and thus not be sent with form submits. You can combine all these things willy nilly and they work great together.

The only thing I'm proposing here is a shortcut to make hidden disabled inputs easier. So basically a declarative element to make sort of signal, since signals seem to be all the rage today. Really it's just a form element that works like any inputs.