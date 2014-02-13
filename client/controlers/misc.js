Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_EMAIL'
});

if (Meteor.isClient) {
	var click = 0
  Template.hello.events({
    'click input' : function() {
  		click++;
  		console.log(click);
  		var text = document.getElementById("click");
  		text.innerHTML = "er is "+click+" keer geklikt";
		}
  });
}



