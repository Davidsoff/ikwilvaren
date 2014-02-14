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
		return (Session.get("page") === "openNav");
	},
	ownNav : function() {
		return (Session.get("page") === "ownNav");
	}
});