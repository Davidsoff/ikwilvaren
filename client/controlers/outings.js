Template.outings.helpers({
	roei : function() {
		return this.roeiers>0;
	},
	needCoach : function() {
		return Session.equals("page", "ownNav");
	},
    isOwner : function() {
        return this.owner===Meteor.userId();
    }
});

Template.newOuting.events({
	'click .save' : function(event) {
		event.preventDefault();
    	var titel = document.getElementById("titel").value;
        var tijd = document.getElementById("tijd").value;
        var datum = document.getElementById("datum").value;
    	var description = document.getElementById("description").value;
    	var roeiers = document.getElementById("roeiers").value;
    	var stuur = document.getElementById("stuur").checked;
    	var coach = document.getElementById("coach").checked;
        console.log("ping");
        
        if(fieldsOk()){
            Meteor.call(
                'addOuting', 
                titel, 
                tijd, 
                datum, 
                description, 
                roeiers, 
                stuur, 
                coach, 
                function (err, result) {
                    if (err) {
                        errorAlert("Er ging iets fout. Probeer het later nog een keer.");
                    }
                    else{
                        successAlert("Outing toegevoegd!")
                        $('#titel').removeClass('has-error')
                        $('#description').removeClass('has-error')
                    }
                });
            console.log("pong");
        }
	},

    'keyup #roeiers' : function(e){
        x = document.getElementById("roeiers");
        if(x.value>8){
            x.value=8;
        }
        if(x.value<0){
            x.value=0;
        }
    }
});

Template.newOuting.rendered = function() {
    $(function () {
        $('#tijdInput').datetimepicker({
            pickDate: false
        });
        $('#datumInput').datetimepicker({
            pickTime: false
        });
    });
}

Deps.autorun(function () {
    Meteor.subscribe("outings", Session.get("page"));
});

Template.outings.events({
    'click .delete' : function(e){
        Meteor.call('removeOuting',e.target.id)
    }
});

Template.outings.outing = function(){
    return Trainingen.find();
};

function errorAlert(message) {
    $('#alerts').append(
        '<div id="alert" class="alert alert-danger fade in">' +
            '<button type="button" class="close" data-dismiss="alert">' +
            '&times;</button>' + message + '</div>');
}

function successAlert(message) {
    $('#alerts').append(
        '<div id="alert" class="alert alert-success fade in">' +
            '<button type="button" class="close" data-dismiss="alert">' +
            '&times;</button>' + message + '</div>');
}

function fieldsOk(){
    if($('#titel').value===""){
            $('#titel').addClass('has-error');
            return false;
    }
    if($('#description').value===""){
            $('#description').addClass('has-error');
            return false;
    }
    return true;
}