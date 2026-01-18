# es-logical-optional-chaining
optional chaining operator in fp

## wai?
Ever try to grab something like `user.profile.name`, but your app crashes because `profile` doesn't exist, and then your boss threatens to fire you if you don't take on every single position and not make a single typo? This package provides a solution. Now `user.profile.name` can return undefined silently if `profile` doesn't exist.

## hau?
first you need to install
```bash
npm install es-logical-optional-chaining
```
then heres an example:
```js
const optionalChaining = require("es-logical-optional-chaining")

const user = {} // profile is missing

const nonexistent = optionalChaining(user, ["profile", "name"]) // doesnt crash
```

## wau!
sho support by contributing