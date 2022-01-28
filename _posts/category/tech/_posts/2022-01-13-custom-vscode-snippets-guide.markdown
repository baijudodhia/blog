---
layout: post
title:  "Custom VSCode Snippets Guide"
date:   2022-01-13 12:55:00 +0530
author: Baiju Dodhia
category: technology
tags: vscode-snippets guides
excerpt: A simple step by step guide to create a Custom VSCode Snippet.
---

![Wallpaper](https://source.unsplash.com/1600x600/?vscode)

A simple step by step guide to create a VSCode Custom Snippet.

## Steps using VSCode

1. Open VSCode and navigate to File > Preferences > User Snippets.
2. Select "New Global Snippets file..." or "New Snippets file for 'project-name'..." depending upon where to create the snippet.
3. Type the snippet file name.
4. A new file-name.code-snippets file will be generated in the AppData Code folder (If using Windows) or .vscode folder of the project depending upon the scope of snippet.

## Steps without using VSCode

1. Project specific snippet -
   1. Open the project folder and create a ".vscode" folder inside it at root level if not already present.
   2. Open the ".vscode" folder and create a new file inside it for custom code snippets using ".code-snippets" extension. This will generate a code snippet which can be used within the same project.
2. Global snippet -
   1. To create a Global VSCode Snippet open the AppData folder (in Windows) by searching %APPDATA% in windows search.
   2. Then navigate to AppData > Roaming > Code > User > snippets folder. In this folder create a new file inside it for global code snippets using ".code-snippets" extension. This will generate a code snippet which can be used by all the projects.

## Default File Content

- For Global Snippet

{% highlight javascript linenos %}
{
    // Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
    // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
    // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
    // used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
    // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
    // Placeholders with the same ids are connected.
    // Example:
    "Print to console": {
    	"scope": "javascript,typescript",
    	"prefix": "log",
    	"body": [
    		"console.log('$1');",
    		"$2"
    	],
    	"description": "Log output to console"
    }
}
{% endhighlight %}

- For Project Specific Snippet

{% highlight javascript linenos %}
{
	// Place your 'project-name' workspace snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.
	// Example:
	"Print to console": {
		"scope": "javascript,typescript",
		"prefix": "log",
		"body": [
			"console.log('$1');",
			"$2"
		],
		"description": "Log output to console"
	}
}
{% endhighlight %}

Now these files can be edited to generate custom code snippets.