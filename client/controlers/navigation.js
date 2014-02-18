Template.header.events({
	"click .inactive": function(event){
		event.preventDefault();
		document.getElementsByClassName("active").item(0).className = "inactive";
		event.currentTarget.className = "active";
		Session.set("page",event.currentTarget.id)
	}
});

Template.outings.helpers({
	openNav : function() {
		return Session.equals("page", "openNav");
	},
	ownNav : function() {
		return Session.equals("page","ownNav");
	}
});