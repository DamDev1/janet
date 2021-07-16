const tabsTextButton = document.querySelectorAll(".tabsTextButton");
const tabText = document.querySelectorAll("tabText");

function showTabs(tabsIndex, colorCode){
    tabsTextButton.forEach(function(show){
        show.style.background = "";
    });
    

    tabText.forEach(function(show){
        show.style.display = "none"
    });
    tabText[tabsIndex].style.display = "block";
}
showTabs(0);