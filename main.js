window.onscroll = () => {scrollNavbar()};
scrollNavbar = () => {
    const navBar = document.getElementById("topOfPage");
    if (document.documentElement.scrollTop > 80) {
        navBar.classList.add("fixed-header");

    } else {
        navBar.classList.remove("fixed-header");
    }
}