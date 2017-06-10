$(function () {
    var config = {
        apiKey: "AIzaSyBnpzgmDOck_UshUttnOxn0659ciML55wg",
        authDomain: "website-checker-ebd22.firebaseapp.com",
        databaseURL: "https://website-checker-ebd22.firebaseio.com",
        projectId: "website-checker-ebd22",
        storageBucket: "website-checker-ebd22.appspot.com",
        messagingSenderId: "1032612384445"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    var ref = database.ref('websites');


    //Input Button
    $('#button').click(function () {
        var input = $('#websiteInput').val()

        if (input.substring(0, 7) == "https://") {

        } else {
            input = "https://" + input;
        }
        var data = {
            website: input,
        }
        ref.push(data);

        ref.on('value', gotData, errData);
        //function that gets the information from firebase
        function gotData(data) {

            $(".webs").remove();

            var websites = data.val();
            var keys = Object.keys(websites);
        
            for (var i = 0; i < keys.length; i++) {
                var k = keys[i];
                var website = websites[k].website;
                $("#data").append('<tr class="webs"> <td class="sites">' + website + "  " + '<button  class="btn btn-danger btn"><span class="glyphicon glyphicon-remove"></span></button> </td>  </tr>')
            }


            for(var p in websites){
                if(websites.hasOwnProperty(p)){
                var user = websites[p]
                    console.log(user.website)
                }
            }
            console.log(website.length)
            //calls the websites
            
            $.ajax({
                url: user.website,
                timeout: 3000,
                statusCode: {
                    200: function (response) {
                        console.log("complete")
                    },
                    400: function (response) {
                        alert('Not working!');
                    },
                    0: function (response) {
                        alert('Not working!');
                    }
                }
            });
        }
        function errData(data) {
            console.log("error");
            console.log(err)
        }

    })
});