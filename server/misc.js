Meteor.methods({
	addOuting: function(title, tijd , datum, description, roeier, st, co ){
		var dateMatcher = /\d{2,4}/g;
        var timeMatcher = /\d{2}/g;
        var dateMatch = datum.match(dateMatcher);
        var tijdMatch = tijd.match(timeMatcher);
        var date = new Date(parseInt(dateMatch[2]),parseInt(dateMatch[1]),parseInt(dateMatch[0]),parseInt(tijdMatch[0]), parseInt(tijdMatch[1]));

        var outing = {
        	titel: title,
        	datum: date,
        	owner: this.userId,
        	desc: description,
        	roeiers:roeier,
        	stuur:st,
        	coach:co
        }

        Trainingen.insert(outing);
	},
	removeOuting: function(id){
		Trainingen.remove(id);
	}
})