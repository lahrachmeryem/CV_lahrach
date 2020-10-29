

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
// function myFunction() {
//
//     if(document.getElementById('text').style.display =="block"){
//         document.getElementById("text").style.display ="none";
//     }else{
//         document.getElementById('text').style.display ="block";
//     }
// }
// function hide(c1,c2,c3,c4,c5) {
//     document.getElementById(c1).style.display ="none";
//     document.getElementById(c2).style.display ="none";
//     document.getElementById(c3).style.display ="none";
//     document.getElementById(c4).style.display ="none";
//     document.getElementById(c5).style.display ="none";
// }
//  onclick="dis('hide5');"
//      " hide('hide2','hide3','hide4','hide1','hide6');"