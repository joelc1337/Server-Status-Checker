$(function () {
    $.ajax("https://www.suckmycomputerstick.com/", {
        crossDomain: true,
        dataType: 'jsonp',
        xhrFields: {
            withCredentials: true
        },
        statusCode: {
            404: function () {
                alert("Not Working")
            },
            200: function () {
                alert("Working");
            }
        }
    })

});