---
title: Optimize Performance of MongoDB
date: 2020-12-12 18:10:35
tags: tech
photos:
	- https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png?w=775
---

Database performance is critical in any application. MongoDB provides high performance data access, however, what can we do to fully exploit it resources for our application?

<!--more-->

I have been working as backend intern for almost two months. Currently, my daily routine is to handle the admin panel's data access. Yesterday, my co-worker from QA team handed over a weird bug to us, which said she cannot open a payment detail page from QA site because of request timeout. However, I cannot reproduce this bug because I can open it in our app with no trouble. Then our CTO checked the log of our admin panel app and found that it's because of a sooooooo slow query to database.

With out CTO's guidance, the first time, I learned the magic of indexing. The original query tooks about 15ms, but after adding indexes in the query's lookup fileds, it becomes 1.2ms. 10 times faster. It is sooooooooo fast. 

Did a quick look up on why indexing is such an amazing thing. The data structure behind indexing is a B-tree, which was originally designed for storing data on disk to take advantage of locality. It's a self-balanced tree, but instead of storing data in the tree, we build a tree with copies of the key. Each key copy is associated with a link. The time complexity for searching, inserting, deleting, and accessing are all O(logN). Without indexing, we are basically doing the linear search with time complexity O(N). When there are large amount of data, the search speed slow down, which might cause timeout if the internet speed is not fast enough. That is also the reason why I did not catch this bug on my side. 