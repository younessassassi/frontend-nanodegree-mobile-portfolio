## Website Performance Optimization portfolio project by Youness Assassi

The resulting website can be accessed <a href="http://younessassassi.github.io/frontend-nanodegree-mobile-portfolio/#">here</a>

The purpose of this project was to learn critical skills needed to optimize a website or web application for speed.  The skills included identifying critical rendering path then use tools such as GRUNT to automate minimizing CSS and JS code, and inlining it within the HTML tags. Other skills learned were how to manage large assets such images, as well optimizing scripts to ensure faster page loads.

<a href="http://younessassassi.github.io/frontend-nanodegree-mobile-portfolio/#">index.html</a> has been enhanced by doing the following:
- inlined minified CSS
- inlined minified js
- inlined web font
- added media queries for css that was not part of the critical rendering path
- added async attribute to scripts that were not part of the critical rendering path and would allow scripts to execute asynchronously

- For practice, I had applied the same index.html enhancements to all the linked webpages project-2048, project-mobiel and project-webperf

<a href="http://younessassassi.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html">pizza.html</a> has been enhanced by doing the following:
- inlined minified CSS
- inlined minified js
- resized image files
- updated a few js functions responsible for displaying pizzas on screen such as:
	- moved Math.sin(document.body.scrollTop / 1250) out of the loop in updatePositions()
	- moved dx and newwidth variables out of the loop in changePizzaSizes and enhnaced the code accordignly
	- used document.getElementsBy.. instead of document.querySelectorAll across the board
	- genrated only the necessary number of pizzas based on the screen size rather than fixed number of 200
	- used window.requestAnimationFrame for more efficient animation
