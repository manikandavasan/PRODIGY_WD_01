window.onscroll = function() {
    changeNavStyle();
    };
    function changeNavStyle() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
    navbar.style.backgroundColor = gray;
    } else {
    navbar.style.backgroundColor = "#4CAF50";
    }
    }