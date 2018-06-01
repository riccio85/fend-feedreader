# Project Overview


This is ["Feed Reader Testing" Project](https://github.com/udacity/frontend-nanodegree-feedreader), as part of Udacity's "Front End Developer Nanodegree Program". It is a web-based application that reads RSS feeds and it includes Jasmine for testing the underlying business logic of the application as well as the event handling and DOM manipulation. 

## How to Install

Clone the project from [this repository](https://github.com/riccio85/fend-arcade-game.git)
## How to Run

If you make your own clone of the project just open the index.html in your browser. Otherwise you can see the [live demo](https://riccio85.github.io/fend-feedreader/).
As you open the app, all test cases get executed by Jasmine framework and test result shows on the page. Here are the list of tests that run:
- test that ensures allFeeds objects have a URL property defined and that the URL is not empty.
- test that ensures allFeeds objects have a name property defined and that the name is not empty.
- test that ensures the menu element is hidden by default. 
- test that ensures the menu changes visibility when the menu icon is clicked. 
- test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
- test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.


## Jasmine-Jquery

In the project it is used to for DOM manipulation or on event (i.e click) test suites. Source and doc here: [https://github.com/velesin/jasmine-jquery](https://github.com/velesin/jasmine-jquery).
