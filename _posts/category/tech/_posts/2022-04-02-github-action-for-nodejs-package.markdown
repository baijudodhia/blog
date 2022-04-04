---
layout: post
title: "Github Action for Node.js Package"
date: 2022-04-04 12:00:00 +0530
date_updated: 2022-04-04 12:00:00 +0530
author: Baiju Dodhia
category: technology
tags: github-actions github npm nodejs node-packages guides
excerpt: Github Action for configuring Node.js Packages with hosted on Github.
---

### Steps to configure Repository as Node.js Package - 

1. Create '.npmrc' file and add the following content in it -
{% highlight shell %}
    @your_github_username:registry=https://npm.pkg.github.com
{% endhighlight %}

2. In 'package.json' file add/modify according to the following code -
{% highlight json linenos %}
{
	"name": "@your_github_username/package-name",
	"repository": {
		"type": "git",
		"url": "git+https://git@github.com/your_github_username/package_reponame.git"
	},
}
{% endhighlight %}

### Steps to configure Github Actions for the Repo -

1. Create a '.github' folder at the root of the Github Repository.
2. Create a 'workflows' folder inside the '.github' folder.
3. Create a 'your_file_name.yml' file inside the 'workflows' folder. The 'your_file_name.yml' file indicates to Github that this is a file for Github Action.

The following code can be added in the 'your_file_name.yml' for configuring the Repository as a Github Package.
{% highlight shell linenos %}
name: publish Node.js Package

on:
  push:
    branches:
      - build

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 12
      - run: npm install
      - run: npm test

  publish-gpr:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 12
          registry-url: https://npm.pkg.github.com/
          scope: '@your_github_username'
      - run: npm install
      - run: git config --global user.email "$GITHUB_ACTOR@users.noreply.github.com" && git config --global user.name "$GITHUB_ACTOR"
      - run: npm version --minor
      - run: git push --tags && git push
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: $\{\{secrets.GITHUB_TOKEN\}\}
{% endhighlight %}

The above action creates a build when we push code to the 'build' branch of the repository.
After the build is created and the 'build' action is successful, the publish-gpr action is starts executing and publishes the package to Github Packages.

Changes required:
1. Under 'publish-gpr' action -> scope needs to be changed.
2. Under 'publish-gpr' action -> NODE_AUTH_TOKEN secrets variable 'GITHUB_TOKEN' needs to be changed according to the defined secret variable. (You need to generate a Token and Save in the Secrets on Repo). The backslash is used as escape charater for the blog post, remove that and only keep curly braces.

Note: The Node.js Package is registered on [https://npm.pkg.github.com/](https://npm.pkg.github.com/) and not on [https://registry.npmjs.org/](https://registry.npmjs.org/)

After the package is published, it can be downloaded using
{% highlight shell %}
npm install @your_username/package-name
{% endhighlight %}