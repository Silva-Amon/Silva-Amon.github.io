var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF = urlArray[urlArray.length-1];

if (pageHREF == "" || pageHREF == "home.php" || pageHREF == "index.php"){
    var menu = document.querySelectorAll('nav li a');
    menu[0].className="active";
}else if (pageHREF !== ""){
    var menu = document.querySelectorAll('nav li a');
    var i;

    for(i=0; i<menu.length; i++){
        var currentURL=(menu[i].getAttribute("href"));
        menu[i].className="";
        if (currentURL===pageHREF){
            menu[i].className="actualPage";
        }
    }
}
