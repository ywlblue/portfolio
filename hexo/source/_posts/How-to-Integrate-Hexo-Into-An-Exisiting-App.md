---
title: How to Integrate Hexo Into An Exisiting App
date: 2020-09-06 18:03:10
tags: tech
---

![](https://i.loli.net/2020/09/07/GWQ93pv2TXgOPHB.png)

This is my first post. I spent a day on figuring out how to add a blog module into my portfolio and deploy it to heroku. And ta da, I did it as you are reading this post. 

<!--more-->

[Hexo](https://hexo.io/) is an open-source framework built upon `nodejs`, and it has lots of [themes](https://hexo.io/themes) avaiable to download. I found a bunch of tutorial on how to deploy it to GitHub, but rarely found one to teach you how to work with your current application. In this post, I am going to show you how to add Hexo into your nodejs app, change a theme, and deploy it to heroku.

## Quick Start

I don't want to overload my nodejs app's `public` folder, so I create a new folder called `hexo` underneath the root of my application. Look like this

<img src="https://i.loli.net/2020/09/07/cAGhYLl5pCzT3BV.png" style="zoom:50%;" />



Install Hexo in the newly created folder `hexo` by running the command

```bash
$ npm install -g hexo-cli
```



## Configure Routes

 Inside `app.js`, add the following

```javascript
app.use('/blog', express.static(path.join(__dirname, 'hexo/public')));
```

> The path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve.

By adding this line, I am telling the express app that uses resources in `hexo/public` to satisfy the requests whenever the route is `/blog`. And other routes will continue using the static files from `/public`.



## Run the Blog

Create a `public` folder for the first time running. Render the markdown file in `source/_post` into html and copy them to `public`. It would simply copy the original file to `public` if it's other format. 

```bash
$ hexo g
```

Run the application

```bash
$ npm start
```

To serialize two commands, change the `start` command in `package.json` from

```json
"scripts": {
    "start": "node ./bin/www"
  }
```

To

```json
"scripts": {
    "start": "(cd hexo && hexo generate) & node ./bin/www"
  }
```



## Change Theme

The Hexo's default theme is `landscape`. It's clean and simple, but not my style. I love exploring new stuffes and immerse myself into beautiful design. 

1. Just find your favorite theme, and add it as subproject in `hexo/themes` by running

   ```bash
   $ git submodule add theme-url-in-github
   ```

   The theme will be cloned to current directory. To read more about `submodule`, please refers to the documentation  [Git Tools - Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

2. Change the theme. Go to `/hexo/_config.yaml`, change the theme to package name in your themes folder. 

3. You can customize the theme. The documentation for each theme maintained by the author is well-written and will give you guidance. 

4. Local deployment should work.



## Deploy to Heroku

1. Generate the static files in `hexo` first. This step is really important. Otherwise, `hexo/public` is not able to locate.
2. Remove `public` in `.gitigonre` to allow `public` folder being pushed to GitHub 
3. Push to GitHub. Done!

 