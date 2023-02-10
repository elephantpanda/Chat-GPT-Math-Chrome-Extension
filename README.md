# Chat-GPT-Math-Chrome-Extension
Making Chat GPT3 good at math


This is a Chrome Extension to make Chat GPT-3 good at math.

See the YouTube video here:  [Perfect Math with Chat GPT](https://www.youtube.com/watch?v=1JJqYyNJEeI)

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/1JJqYyNJEeI/0.jpg)](https://www.youtube.com/watch?v=1JJqYyNJEeI)

Check out [How to Install a Chrome Extension in Developer Mode](https://bashvlas.com/blog/install-chrome-extension-in-developer-mode/)

The prompt in the video is:

`Imagine you have access to a Javascript compiler. Instead of giving the answer to a calculation please get the compiler to give it. Write the Javascript in between gptscript tags. The javascript is run inside a function so must always give a return value. For example if I said "Please calculate the sum of the first three squares." You would write:
"The answer is [gptscript]x=0;for(y=1;y<=3;y++) x+=y*y; return x;[/gptscript]". Always write everything between the gptscript tags on one line only.
Let's begin. What is the 1234*4322?`


Some things that don't work properly are: 

* It can't handle multiple lines of scripts.
* It can't converts pairs of asterisks into italic markdown.

