# Let custom element

Use the `<let->` element to associate a named front end only value on a form.

```html
<let- name="just" value="Nice"></let->
```

Tries to be a nicer version of a hidden disabled input, but for any type of data, not just a string value.

```html
<input type="hidden" disabled name="everso" value="Verbose">
```

```html
<let- name="just" value="Nice" signal></let->
```

Maybe I'm profoundly naive, but hear me out and tell me if I'm not getting something. What if forms were the reactive primitives we wanted all along?

Forms are already a declarative method to have reactive values in html. We have events to react to changes. You can have hidden values that can be used for processing without showing up to users. You can set inputs disabled to not have their values show up in formdata and thus not be sent with form submits. You can combine all these things willy nilly and they work great together.

Native inputs are restricted in what type of data they hold though. The let element holds any kind of data, that's its only purpose.

Can't quite do automatic dependency resolution yet like an effect() function usually does, though effects always seemed dangerous to me. If you have more than just a couple of them they can become spaghetti real fast.