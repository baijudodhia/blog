async function searchBlog(query) {
  const xmlFetch = await fetch("https://baijudodhia.github.io/blog/sitemap.xml")
  const xmlText = await xmlFetch.text()
  const xml = await (new window.DOMParser()).parseFromString(xmlText, "text/xml")
  let arr = [];
  let x = xml.documentElement.childNodes;
  for (i = 0; i < x.length; i++) {
    // Process only element nodes (type 1)
    if (x[i].nodeType == 1) {
      const url = x[i].getElementsByTagName("loc")[0].firstChild.nodeValue;
      const title = x[i].getElementsByTagName("title")[0].firstChild.nodeValue;
      const tags = x[i].getElementsByTagName("tags")[0].firstChild.nodeValue;
      const category = x[i].getElementsByTagName("category")[0].firstChild.nodeValue;
      const regex = new RegExp(query, 'g');
      const titleSearch = title.toLowerCase().search(query.toLowerCase());
      const tagsSearch = tags.toLowerCase().search(query.toLowerCase());
      const categorySearch = category.toLowerCase().search(query.toLowerCase());
      if (titleSearch > -1) {
        const post_data = {
          "title": title,
          "tags": tags,
          "category": category,
          "url": url
        }
        arr.push(post_data);
      }
    }
  }
  return arr;
}