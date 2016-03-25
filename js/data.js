var deferred = $.Deferred();

var dataCars = [
    { id: 1, name: "Ferrari" },
    { id: 2, name: "Mazda" },
    { id: 3, name: "Mercedes" },
    { id: 4, name: "Škoda octavia" },
    { id: 5, name: "Toyota" },
    { id: 6, name: "Audi" }
];

var dataCountries;
$.getJSON('../bower_components/Countries/countries.json', function(data) {
    deferred.resolve(data);    
});

