// generates current year
const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();

// toggles navlinks
const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("show-nav-links");
})

// holds fixed behavior for a while
const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () =>{
    if(window.pageYOffset < 60)
        navBar.classList.remove("fixed");
    else
        navBar.classList.add("fixed");
});

//hides nav link when clicked in mobile design
const scrollLinks = document.querySelectorAll(".scroll-links");

scrollLinks.forEach(link =>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        navLinks.classList.remove("show-nav-links");
        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        
        let position;
        if(window.innerWidth > 972){
            if(navBar.classList.contains("fixed"))
                position = element.offsetTop - 72;
            else
                position = element.offsetTop - 144;
        }
        else{
            if(e.target.classList.contains("btn-banner")){
                position = element.offsetTop - 120;
            }
            else if(navBar.classList.contains("fixed"))
                position = element.offsetTop - 60;
            else 
                position = element.offsetTop - 190 - 120;
        }

        window.scrollTo({
            top: position,
            left: 0,
            behavior: "smooth"
        });
    });
});

//maintains smooth scroll behavior 
