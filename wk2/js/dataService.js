angular.module('EmployeeDirectory').service("dataService", function () {

    var employees = [
        {name:"Thomas Jackson", street:"1234 My Street", city:"Orlando", state:"FL", zip:"12345"},
        {name:"John Doe", street:"1234 My Street", city:"Orlando", state:"FL", zip:"12345"},
        {name:"Jane Doe", street:"1234 My Street", city:"Orlando", state:"FL", zip:"12345"},
        {name:"Donald Duck", street:"1234 My Street", city:"Orlando", state:"FL", zip:"12345"},
        {name:"Mickey Mouse", street:"1234 My Street", city:"Orlando", state:"FL", zip:"12345"},
        {name:"Ruth Fertel", street:"1234 My Street", city:"Orlando", state:"FL", zip:"12345"}
    ];

    this.getNames = function(){

        return namesArray;

    };

    this.addName = function(pName){

        namesArray.push(pName);

    };

    this.removeName = function(pName){

        namesArray.splice(namesArray.indexOf(pName),1);

    }

});