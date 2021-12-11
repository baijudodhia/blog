function redirectToRandomBlog() {
  var x = new XMLHttpRequest();
  x.open("GET", "https://baijudodhia.github.io/blog/sitemap.xml", true);
  x.onreadystatechange = function () {
    if (x.readyState == 4 && x.status == 200) {
      var doc = x.responseXML;
      txt = "";
      x = doc.documentElement.childNodes;
      let arr = [];
      for (i = 0; i < x.length; i++) {
        // Process only element nodes (type 1)
        if (x[i].nodeType == 1) {
          const url_string =
            x[i].getElementsByTagName("loc")[0].firstChild.nodeValue;
          if (/\.html/.test(url_string)) {
            arr.push(url_string);
          }
        }
      }
      const arrSize = arr.length;
      const randInt = Math.floor(Math.random() * arrSize);
      const randBlogUrl = arr[randInt];
      window.location.replace(randBlogUrl);
    }
  };
  x.send(null);
}
