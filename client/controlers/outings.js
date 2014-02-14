Template.outings.helpers({
	needStuur : function() {
		return (Session.get("page") === "openNav");
	},
	needCoach : function() {
		return (Session.get("page") === "ownNav");
	}
});

Template.newOuting.events({
	'click .save' : function(event) {
		event.preventDefault();
    	var titel = document.getElementById("titel").value;
    	var description = document.getElementById("description").value;
    	var roeiers = document.getElementById("roeiers").value;
    	var stuur = document.getElementById("stuur").checked;
    	var coach = document.getElementById("coach").checked;
    	console.log(Meteor.userId());
    	console.log(titel);
    	console.log(description);
    	console.log(roeiers);
    	console.log(stuur);
    	console.log(coach);
	}
});