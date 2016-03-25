deferred.done(function(data) {
    $("#autocomplete").kendoAutoComplete({
        dataTextField: "name",
        dataSource: dataCars
    });
});

