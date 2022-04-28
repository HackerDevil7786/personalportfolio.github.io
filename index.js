// https://www.transparentpng.com/thumb/man/rTkJ7v-man-png-image.png
console.log("Script Running");
document.querySelector(".Cross").style.display="none";
document.querySelector(".hamburger").addEventListener("click",()=>{

    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if(document.querySelector(".sidebar").classList.contains("sidebarGo"))
    {
        document.querySelector(".Cross").style.display="none";
        document.querySelector(".ham").style.display="inline";
    }
    else
    {
        
       
        document.querySelector(".ham").style.display="none";
        setTimeout(() => {
            document.querySelector(".Cross").style.display="inline";
        }, 1000);

    }
});