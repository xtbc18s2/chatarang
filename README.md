# Chatarang

## Potential future enhancements

* Client-side form validation (_e.g._ required fields)
* Prevent the creation of a room that already exists
* Delete the messages when a room is deleted
* Include emojis in message body
* Upload images
* Multiple organizations
* Show a room's members
* Show who is logged in
* Indicate when someone is typing
* Make it mobile-friendly!

## Day 11 Homework

See how far you can get implementing emoji reactions.

### Super Mega Bonus Credit

Reflect on how much you've learned these last three weeks!

## Day 10 Homework

Only list public rooms, and rooms in which the current user is listed as a member.

### Super Mega Bonus Credit

Don't allow users to load non-public rooms of which they're not members.

### Super Mega Bonus Credit Hyper Fighting

Make a separate UI for direct messages.

* List them separately in the sidebar.
* Make a new form (or at least a new button that presents the same form differently).

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
