$(function () {
    $('#button').click(function () {
        var input = $('#websiteInput').val()
        $.ajax(input, {
            crossDomain: true,
            dataType: 'jsonp',
            xhrFields: {
                withCredentials: true
            },
            statusCode: {
                404: function () {
                    console.log("Not Working")
                },
                200: function () {
                    console.log("Working")
                }
            }
        })
    })
});