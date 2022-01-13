---
layout: post
title:  "Web Components VSCode Snippet"
date:   2022-01-13 14:00:00 +0530
author: Baiju Dodhia
category: tech
tags: vscode-snippets web-components
excerpt: A sample VSCode Snippet for Web Component.
---

![Wallpaper](https://source.unsplash.com/1600x600/?vscode)


Guide to create a VSCode Snippet - [here](https://baijudodhia.github.io/blog/tech/2022/01/13/custom-vscode-snippets-guide.html)


A sample VSCode Snippet for Web Component.

{% highlight javascript linenos %}
{
  "Web Component Snippet": {
    "scope": "javascript,typescript",
    "prefix": "webcomponent",
    "body": [
      "class ${1:CustomWebComponent} extends HTMLElement {",
      "\tconstructor() {",
      "\t\tsuper();",
      "\t\t// element created",
      "\t}",
      "",
      "\tconnectedCallback() {",
      "\t\t// browser calls this method when the element is added to the document",
      "\t\t// (can be called many times if an element is repeatedly added/removed)",
      "\t}",
      "",
      "\tdisconnectedCallback() {",
      "\t\t// browser calls this method when the element is removed from the document",
      "\t\t// (can be called many times if an element is repeatedly added/removed)",
      "\t}",
      "",
      "\tstatic get observedAttributes() {",
      "\t\treturn [",
      "\t\t\t/* Attributes to observe. */",
      "\t\t];",
      "\t}",
      "",
      "\tattributeChangedCallback(name, oldValue, newValue) {",
      "\t\t// called when one of attributes listed above is modified",
      "\t}",
      "",
      "\tadoptedCallback() {",
      "\t\t// called when the element is moved to a new document",
      "\t\t// (happens in document.adoptNode, very rarely used)",
      "\t}",
      "",
      "\t// there can be other element methods and properties",
      "}",
      "",
      "customElements.define('${0}', ${1:WebComponent});"
    ],
    "description": "Generates a template code for Web Component along with registeration."
  }
}
{% endhighlight %}