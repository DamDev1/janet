const sideBar = document.querySelector(".sideBar");
const toggle = document.querySelector(".toggle");
const closetoggle = document.querySelector(".closetoggle");

const tabsButton = document.querySelectorAll(".tabsButton");
const tabContent = document.querySelectorAll(".tabContent");

sideBar.style.display = "none";



toggle.addEventListener("click", function(e){
    if(sideBar.style.display == "none"){
        sideBar.style.display = "block";
    }
    else{
        sideBar.style.display = "none";
    }

    e.preventDefault();
});


closetoggle.addEventListener("click", function(){
    sideBar.style.display = "none";
});


function showTabs(tabsIndex, colorCode){
    tabsButton.forEach(function(show){
        show.style.background = "";
    });
    tabsButton[tabsIndex].style.background = "green";
    tabsButton[tabsIndex].style.color = "white";

    tabContent.forEach(function(show){
        show.style.display = "none"
    });
    tabContent[tabsIndex].style.display = "block";
}
showTabs(0);
