'use strict';

var randGender = function (i) {
    return (i % 2 === 0) ? "male" : "female";
};

var randBirthday = function (i) {
    return (i < 30) ? "1980-1-" + (i + 1) : "1980-" + (Math.round(i / 30)) + "-" + (i - 30);
};

var userData = [];
for (var i = 0; i < 60; i++) {
    var obj = {
        first: 'SomeName' + i,
        last: 'SomeLastName' + i,
        birthday: randBirthday(i),
        gender: randGender(i)
    };
    userData.push(obj);
}

$(document).ready(function () {


    $('#info-table').dataTable({
        "data": userData,
        "columns": [
            {"data": "first"},
            {"data": "last"},
            {"data": "birthday"}
        ],
        "searching": false
    });

    $('#info-table tbody').on('click', 'tr', function () {

        var name = $('td', this).eq(0).text();
        var lastName = $('td', this).eq(1).text();
        var birthday = $('td', this).eq(2).text();
        alert("Info: Name: " + name + " LastName: " + lastName + " Birthday: " + birthday);
    });

    $('#info-table td:nth-child(3),th:nth-child(3)').addClass("hidden-xs");

    $('#info-table').on('draw.dt', function () {
        $('#info-table td:nth-child(3),th:nth-child(3)').addClass("hidden-xs");
    });
});

