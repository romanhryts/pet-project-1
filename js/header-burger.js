(function(){
    const iconBurger = document.querySelector(".header__container-main-top-row-logo-burger");
    const navigationBody = document.querySelector(".header__container-main-top-row-nav");
    const menuPoints = document.querySelector(".header__container-main-top-row-nav-menu");
    iconBurger.addEventListener("click", function (e) {
        currentLogo(iconBurger);
        iconBurger.classList.toggle("active");
        document.body.classList.toggle("lock");
        navigationBody.classList.toggle("active");
        menuPoints.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".header__container-main-top-row-nav-menu");
    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", (_) => {
            if (iconBurger.classList.contains("active")) {
              iconBurger.classList.remove("active");  
              document.body.classList.remove("lock");
              navigationBody.classList.remove("active");
              menuPoints.classList.remove("active");
              currentLogo(iconBurger);
            }
        });
    });

    function currentLogo(iconBurger) {
        iconBurger.innerHTML === "✕" ? iconBurger.innerHTML = "☰" : iconBurger.innerHTML = "✕"; 
    }
})()