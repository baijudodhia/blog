function changeTheme() {
    var theme = document.getElementById("header-theme-changer-btn").getAttribute("theme-value");
    if (theme === "dark") {
        document.getElementById("header-theme-changer-btn").setAttribute("theme-value", "light");
        document.getElementById("header-theme-changer-btn").value = "🌑";
        document.getElementsByTagName("html")[0].setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    } else {
        document.getElementById("header-theme-changer-btn").setAttribute("theme-value", "dark");
        document.getElementById("header-theme-changer-btn").value = "🌕";
        document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
}
function setDefaultTheme() {
    if(localStorage.getItem("theme") !== null) {
        let theme = localStorage.getItem("theme");
        if (theme === "light") {
            document.getElementById("header-theme-changer-btn").setAttribute("theme-value", "light");
            document.getElementById("header-theme-changer-btn").value = "🌑";
            document.getElementsByTagName("html")[0].setAttribute("data-theme", "light");
        } else {
            document.getElementById("header-theme-changer-btn").setAttribute("theme-value", "dark");
            document.getElementById("header-theme-changer-btn").value = "🌕";
            document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
        }
    } else {
        var theme = document.getElementById("header-theme-changer-btn").getAttribute("theme-value");
        localStorage.setItem("theme", theme);
    }
}