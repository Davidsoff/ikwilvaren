Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_EMAIL'
});

if (Meteor.isClient) {

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
      	console.log("You pressed the button");
    }
  });
}