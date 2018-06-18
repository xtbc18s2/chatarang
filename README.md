# Chatarang

## Day 9 Homework

Move the list of rooms in state to `Main`, and be sure that the description updates appropriately when changing rooms.

## Day 8 Homework

Add another authentication method (or two?). Remember, [documentation](https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed_in_user) is your friend.

### Super Mega Bonus Credit

Continue to enhance the app. Be creative!

### Super Mega Bonus Credit Hyper Fighting

Have a great weekend!

## Day 7 Homework

Add support for multiple rooms/channels! _Hint_: The first argument (`endpoint`) to `base.syncState` should be different for each room/channel.

Don't forget to make the sidebar links work!

### Super Mega Bonus Credit

Add direct messages too!

### Super Mega Bonus Credit Hyper Fighting

Use Firebase authentication when signing in users. _Hint_: Google authentication is the easiest method.


## Day 6 Homework

Create and style more components, based on the `chat-static` content. There should be approximately one CSS file per component.


### Super Mega Bonus Credit Hyper Fighting

* Make a `SignIn` component with a form that takes a user name.
* When the form is submitted, save that user in the `state` of the `App` component.
* When `state.user` is not set, show the `SignIn` component.
* When `state.user` is set, show the `Main` component.

_Hint_: You need to figure out how to do **conditional rendering**.
