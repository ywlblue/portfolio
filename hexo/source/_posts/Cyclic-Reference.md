---
title: Cyclic Reference
date: 2021-01-04 21:05:05
tags: tech
photos:
	-  https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconexperience.com%2Fo_collection%2Ficons%2F%3Ficon%3Darrow_loop3&psig=AOvVaw1c_EraO2l0W7wp3_moLUxt&ust=1609911053907000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKD2up2IhO4CFQAAAAAdAAAAABAf
---

Have learned `Cyclic Reference` in my database introduction class, but never ran into that situation or even able to put myself into the position. Today, finally I found a bug related to it and refresh my memory about what is cyclic reference and why it's bad.

<!--more-->

This morning, my co-worker found an error in QA said `run out of heap space`, which slow down our QA server and causes lots of test cases failed. And then they want me to check whether our entity classes have any cyclic reference. Don't remember what's that, and I do a quick lookup on it. Thus, I have to write it down in case I have to look it up again.

What's cyclic reference? On my word, an entity A contains a reference to entity B, and then entity B contains reference to A, which results in a closed loop. It increases the likelihood of error and data inconsistency. Though I am not sure whether this circular reference causes our heap error, if we don't catch it today, it can be a nightmare someday.

Reference

[Prevent Circular References in Database Design](https://www.codeproject.com/Articles/38655/Prevent-Circular-References-in-Database-Design)