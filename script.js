$(document).ready(function () {
    var newRows = $(".server-row").remove();
    var failedRows = $(".failed").remove();
    var array = [];
    var offline = 0;
    var givenName = "hello";
   
    // Gets the information of the API.
    $.getJSON("",
        function (e) {
            for (var key in e.targets) {
                work(e.targets[key]);
              
            }
        });
       
    $(".failed").children(clone);
    // function work has the website Data
    //The function also creates the the status image and get the information of the websites.
    function work(k) {
        var clone = newRows.clone();
        var clone2 = failedRows.clone();
        $(".Website-row").append(clone);
        if (k.url.substring(0, 7) == "http://") {

        } else {
            k.url = "http://" + k.url;
        }
        console.log("ss")
        clone.find(".site").html(k.name);
        $(".Website-row").append(clone);
        console.log(clone.children);
        $.get(k)
            .done(function (k) {
                clone.find(".status").html('<img src="http://www.thepointless.com/images/greendot.jpg" width="40px" height="40px">');
            }).fail(function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 401) {

                    clone.find(".status").html('<img src="http://www.clker.com/cliparts/W/i/K/w/1/D/glossy-orange-circle-icon-hi.png" width="40px" height="40px">');
                }
                if (textStatus == "error") {
                    clone.find(".status").html('<img src="http://www.clker.com/cliparts/W/i/K/w/1/D/glossy-orange-circle-icon-hi.png" width="40px" height="40px">');
                }
                if (errorThrown == "Unauthorized") {
                    clone.find(".status").html('<img src="http://www.clker.com/cliparts/W/i/K/w/1/D/glossy-orange-circle-icon-hi.png" width="40px" height="40px">');
                } else {

                    console.log(textStatus);
                    console.log(errorThrown);
                    clone.find(".status").html('<img src="http://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/404/2016/04/06125833/2000px-Location_dot_red.svg_.png" width="40px" height="40px">');
                    console.log(k);
                }
            });

    }



    //for(var i=0; i < website.length; i++){      work(i);  }



});