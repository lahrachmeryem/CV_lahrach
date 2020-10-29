window.addEventListener('load', function() {
    console.log('All assets are loaded')
    display_stars();
})
    function dis(btn) {
        if(document.getElementById(btn).style.display =="block"){
            document.getElementById(btn).style.display ="none";
        }else{
            document.getElementById(btn).style.display ="block";
        }
    }
    function hide(btn1,btn2,btn3,btn4,btn5) {
        document.getElementById(btn1).style.display ="none";
        document.getElementById(btn2).style.display ="none";
        document.getElementById(btn3).style.display ="none";
        document.getElementById(btn4).style.display ="none";
        document.getElementById(btn5).style.display ="none";
    }


    // var ul = document.getElementById("skills");
    //  console.log(ul)
    // var items = ul.getElementsByTagName("li");
    // for (var i = 0; i < items.length; ++i) {
    //     console.log(items[i])
    // }




 function  display_stars() {
     var stars = document.getElementsByClassName('stars');
         for (var i = 0; i<stars.length;i++){
             stars[i].appendChild('<div>Hello</div>')
         }

 }
