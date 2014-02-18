Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Session.setDefault("page","home");

Trainingen = new Meteor.Collection("trainingen");

var before = 0
var prev = 0;
var click = 1;
Template.home.events({
    'click input' : function() {
        before = prev;
        prev = click;
        click= before+prev;
        var text = document.getElementById("click");
        text.innerHTML = "de waarde is "+before+".";
    }
});




