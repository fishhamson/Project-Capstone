window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    var active = document.getElementById("active");
    active.classList.toggle("colorFix", window.scrollY > 0);
    var colorText = document.getElementById("colorText1");
    colorText.classList.toggle("colorText", window.scrollY > 0)
    var colorText = document.getElementById("colorText2");
    colorText.classList.toggle("colorText", window.scrollY > 0)
    var colorText = document.getElementById("colorText3");
    colorText.classList.toggle("colorText", window.scrollY > 0)
    var colorText = document.getElementById("colorText4");
    colorText.classList.toggle("colorText", window.scrollY > 0)
    var colorLogo = document.getElementById("colorLogo1");
    colorLogo.classList.toggle("colorLogo", window.scrollY > 0)
    var colorLogo = document.getElementById("colorLogo2");
    colorLogo.classList.toggle("colorLogo", window.scrollY > 0)
    var colorMenu = document.getElementById("navbarCorpvision");
    colorMenu.classList.toggle("colorMenu", window.scrollY > 0)
  })