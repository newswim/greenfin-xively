#### Meteor-React-Data

- [Atmosphere](https://atmospherejs.com/meteor/react-meteor-data)
- Guide
- Komposer


#### Collection & Object Validation

There's not a whole lot of options out there currently, however since Meteor 1.3
we have easy access to any NPM package we want, so using something like Yup or Joi
is much more viable. For now, let's stick with @aldeed's Simple Schema.

note: if we use Collection2, we'll automatically get Simple-Schema as well.

TODO: Notate all of the possible Simple-Schema methods available.

#### Asynchronous code

> These parts are taking directly from the [Meteor Guide](http://guide.meteor.com/), slightly modified
>

- Need to be wrapped in a Fiber. Typically, just using Meteor.bindEnvironment
is enough to do the trick. Bad example:

```js
// Inside a Meteor method definition
someLibraryFunction() {
  library.property.someMethod({
    user: 'newswim'
  }, (err, res) => {
    // Using a collection here will throw an error
    // because the asynchronous code is not in a fiber
    CollectionName.insert(res);
  })
}
```

Good example:

```js
// Inside a Meteor method definition
someLibraryFunction() {
  library.property.someMethod({
    user: 'newswim'
  }, Meteor.bindEnvironment((err, res) => {
    // Everything is good now
    CollectionName.insert(res);
  }));
}
```

Additionally, if your function has an argument signature of (err, res), you can
use `Meteor.wrapAsync`. See an example in [the guide](http://guide.meteor.com/using-packages.html#wrap-async).


#### Promises

This is some futuristic shit. Meteor's `ecmascript` package allows us to use ES2015
and ES2016 features like `async/await`. If you're using an NPM package that uses Promises
rather than callbacks, you can use this syntax to call Promise-based libraries serially:

```js
async function sendTextMessage(user) {
  const toNumber = await phoneLookup.findFromEmail(user.emails[0].address);
  return await client.sendMessage({
    to: toNumber,
    from: '+14506667788',
    body: 'Hello world!'
  });
}
```

So that we have very synchronous looking code, which is in fact asynchronous.
