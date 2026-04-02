/*alfred arduini
scripts.js
03/30/2026
*/

//hamburger function
function hamburger(){
    var navlink = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlink.style.display === "block"){
        navlink.style.display="none";
        menuicon.style.color = "#002080";
    } else{
        navlink.style.display = "block";
        menuicon.style.color = "#fff";
    }
}
