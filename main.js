const sideBar = document.querySelector(".sideBar");
const toggle = document.querySelector(".toggle");

sideBar.style.display = "none";


toggle.addEventListener("click", function(e){
    if(sideBar.style.display == "none"){
        sideBar.style.display = "block";
    }else{
        sideBar.style.display = "none";
    }

    e.preventDefault();
})