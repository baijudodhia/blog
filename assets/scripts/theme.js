function changeTheme() {
    var theme = document.getElementById("header-theme-changer-btn").getAttribute("theme-value");
    if (theme === "dark") {
        setLightTheme();
        localStorage.setItem("theme", "light");
    } else {
        setDarkTheme();
        localStorage.setItem("theme", "dark");
    }
}
function setDefaultTheme() {
    if (localStorage.getItem("theme") !== null) {
        let theme = localStorage.getItem("theme");
        if (theme === "light") {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    } else if (window.matchMedia("(prefers-color-scheme:light)").matches) {
        setLightTheme();
        localStorage.setItem("theme", 'light');
    } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
        setDarkTheme();
        localStorage.setItem("theme", 'dark');
    } else {
        var theme = document.getElementById("header-theme-changer-btn").getAttribute("theme-value");
        localStorage.setItem("theme", theme);
    }
}
function setDarkTheme() {
    document.getElementById("header-theme-changer-btn").setAttribute("theme-value", "dark");
    document.getElementById("header-theme-changer-btn").value = "🌕";
    document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
}
function setLightTheme() {
    document.getElementById("header-theme-changer-btn").setAttribute("theme-value", "light");
    document.getElementById("header-theme-changer-btn").value = "🌑";
    document.getElementsByTagName("html")[0].setAttribute("data-theme", "light");
}