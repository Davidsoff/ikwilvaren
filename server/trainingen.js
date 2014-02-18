Trainingen = new Meteor.Collection("trainingen");

Meteor.publish("outings", function(page) {
	var d = new Date
	if(this.userId!=null){
		if(page === "openNav"){
			return Trainingen.find({datum: {$gt: d}});
		}
		else if(page === "ownNav"){
			return Trainingen.find({owner: this.userId});
		}
		else{
			return null;
		}
	}
});