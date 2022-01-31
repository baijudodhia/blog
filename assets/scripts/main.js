/* 

0. Global Variables
1. goTop();
2. horizontalSwipe();
3. toggleSidebar();
4. searchBlog();
5. redirectToRandomBlog();
6. getRandomColorLight();
7. getRandomColorDark();
8. getRandomColorGradientLightPredefined();
9. getRandomColorGradientLightPredefined();
10. changeTheme();
11. setDefaultTheme();
12. setDarkTheme();
13. setLightTheme();

*/

baseUrl = 'https://baijudodhia.github.io/blog';

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function horizontalSwipe() {
  let touchstartX = 0;
  let touchstartY = 0;
  let touchendX = 0;
  let touchendY = 0;
  const horizontalSwipe = document.getElementsByTagName("body")[0];
  function handleHorizontalSwipe() {
    if (Math.round(Math.abs(touchendY - touchstartY)) < 30) {
      if (
        touchendX < touchstartX &&
        document.getElementById("sidebar-container").classList.contains("show")
      ) {
        document.getElementById("sidebar-container").classList.remove("show");
        document.querySelector(".header-toggler").classList.remove("active");
      }
      if (
        touchendX > touchstartX &&
        !document.getElementById("sidebar-container").classList.contains("show")
      ) {
        document.getElementById("sidebar-container").classList.add("show");
        document.querySelector(".header-toggler").classList.toggle("active");
      }
    }
  }
  horizontalSwipe.addEventListener("touchstart", (e) => {
    touchstartX = e.changedTouches[0].screenX;
    touchstartY = e.changedTouches[0].screenY;
  });
  horizontalSwipe.addEventListener("touchend", (e) => {
    touchendX = e.changedTouches[0].screenX;
    touchendY = e.changedTouches[0].screenY;
    handleHorizontalSwipe();
  });
}

function toggleSidebar() {
  if (document.getElementById("sidebar-container").classList.contains("show")) {
    document.getElementById("sidebar-container").classList.remove("show");
    document.querySelector(".header-toggler").classList.remove("active");
  } else {
    document.getElementById("sidebar-container").classList.add("show");
    document.querySelector(".header-toggler").classList.toggle("active");
  }
}

async function searchBlog(query) {
  const xmlFetch = await fetch(
    `${baseUrl}/search.xml`
  );
  const xmlText = await xmlFetch.text();
  const xml = await new window.DOMParser().parseFromString(xmlText, "text/xml");
  let arr = [];
  let x = xml.documentElement.childNodes;
  for (i = 0; i < x.length; i++) {
    // Process only element nodes (type 1)
    if (x[i].nodeType == 1) {
      const url = x[i].getElementsByTagName("loc")[0].firstChild.nodeValue;
      const title = x[i].getElementsByTagName("title")[0].firstChild.nodeValue;
      const tags = x[i].getElementsByTagName("tags")[0].firstChild.nodeValue;
      const category = x[i].getElementsByTagName("category")[0].firstChild.nodeValue;
      const regex = new RegExp(query, "g");
      const titleSearch = title.toLowerCase().search(query.toLowerCase());
      const tagsSearch = tags.toLowerCase().search(query.toLowerCase());
      const categorySearch = category.toLowerCase().search(query.toLowerCase());
      if (titleSearch > -1) {
        const post_data = {
          title: title,
          tags: tags,
          category: category,
          url: url,
        };
        arr.push(post_data);
      }
    }
  }
  return arr;
}

async function redirectToRandomBlog() {
  const xmlFetch = await fetch(
    `${baseUrl}/search.xml`
  );
  const xmlText = await xmlFetch.text();
  const xml = await new window.DOMParser().parseFromString(xmlText, "text/xml");
  let x = xml.documentElement.childNodes;
  let arr = [];
  for (i = 0; i < x.length; i++) {
    // Process only element nodes (type 1)
    if (x[i].nodeType == 1) {
      const url = x[i].getElementsByTagName("loc")[0].firstChild.nodeValue;
      arr.push(url);
    }
  }
  const arrSize = arr.length;
  const randInt = Math.floor(Math.random() * arrSize);
  const randBlogUrl = arr[randInt];
  window.location.replace(randBlogUrl);
}

function getRandomColorLight() {
  color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  return color;
}
function getRandomColorDark() {
  color = "hsl(" + Math.random() * 360 + ", 100%, 25%)";
  return color;
}
function getRandomColorGradientPredefined() {
  // "linear-gradient(to right, #0b486b, #f56217)",
  // "linear-gradient(to right, #403b4a, #e7e9bb)"
  // "linear-gradient(to right, #003973, #e5e5be)"
  const gradients = [
    "linear-gradient(to right, #1e130c, #9a8478)",
    "linear-gradient(to right, #348f50, #56b4d3)",
    "linear-gradient(to right, #373B44, #73C8A9)",
    "linear-gradient(to right, #3ca55c, #b5ac49)",
    "linear-gradient(to right, #6d0064, #ff04ff)",
    "linear-gradient(to right, #7b920a, #add100)",
    "linear-gradient(to right, #9d50bb, #6e48aa)",
    "linear-gradient(to right, #e52d27, #b31217)",
    "linear-gradient(to right, #e65c00, #f9d423)",
  ];
  return String(gradients[Math.floor(Math.random() * gradients.length)]);
}
function getRandomDarkColorPredefined(i = -1) {
  const darkColor = [
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgreen",
    "darkmagenta",
    "darkorange",
    "darkred",
    "darkslateblue",
    "darkslategray"
  ];
  let color;
  if (i == -1) {
    color = String(darkColor[Math.floor(Math.random() * darkColor.length)]);
  } else {
    color = String(darkColor[i % darkColor.length])
  }
  return color;
}

function changeTheme() {
  var theme = document
    .getElementById("header-theme-changer-btn")
    .getAttribute("theme-value");
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
    localStorage.setItem("theme", "light");
  } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
    setDarkTheme();
    localStorage.setItem("theme", "dark");
  } else {
    var theme = document
      .getElementById("header-theme-changer-btn")
      .getAttribute("theme-value");
    localStorage.setItem("theme", theme);
  }
}
function setDarkTheme() {
  document
    .getElementById("header-theme-changer-btn")
    .setAttribute("theme-value", "dark");
  document.getElementById("header-theme-changer-btn").value = "🌕";
  document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
}
function setLightTheme() {
  document
    .getElementById("header-theme-changer-btn")
    .setAttribute("theme-value", "light");
  document.getElementById("header-theme-changer-btn").value = "🌑";
  document.getElementsByTagName("html")[0].setAttribute("data-theme", "light");
}
