# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Project 0 - Racing Game

**Read this entire document before writing a line of code.**

## Contents

* **[Overview](#overview):** What is this project?
* **[Topics Covered](#topics-covered):** What skills are we using?
* **[Timeline](#timeline):** When is it due?
* **[Technical Requirements](#technical-requirements):** What technologies will I be using?
* **[Specs](#specs):** What are the core features?
* **[Deliverables](#deliverables):** What is necessary to call this complete?
* **[Best Practices](#best-practices):**  What are some tips from real-world development?
* **[Getting Started](#getting-started):** How should I begin approaching this?
* **[Submission](#submission):** How do I turn in the project?
* **[Bonus Ideas](#bonus-ideas):** What if I want to do more?
* **[Resources](#resources):** Where can I look for help online?
* **[Project Feedback](#project-feedback):** How will I get feedback from instructors?

<img src="https://media.giphy.com/media/mHChlbqGMndYY/giphy.gif" width=400>

---

## Overview

###### What is this project?

You'll be building one more browser game, synthesizing all the knowledge you've packed into your brain over the past two weeks! You'll be leveraging the power of jQuery to create a **Racing Game**, where two or more players can move their "cars" across the browser to compete for the win.

**You will be working individually for this project**, but we encourage you to get help from your peers and even pair-program on each other's projects when bugs arise.

**You must push your project to Github**, and we encourage you to also host it either using <a href="https://pages.github.com" target="_blank">Github Pages</a> or <a href="https://www.bitballoon.com" target="_blank">BitBalloon</a>.

**You will receive written instructor feedback** on this project. See the [feedback doc](feedback.md) for details.




---

## Topics Covered

###### What skills are we using?

By the time you submit this project, you will have leveled-up in many big themes in the course:

* **Terminal**: Practice interacting with the computer and navigating the file-system from the Command Line.
* **Git**: Manage and interact with a git repository to store changes to code.
* **JavaScript**: Work with objects and events, while learning how to strategically solve problems and resolve errors.
* **Front-End**: Work on HTML structure, CSS styles, and animating documents within a browser. Also, learn how to respond to actions your users take and the data they input into the browser.
* **Documentation**: Document your code and your GitHub repository so others understand what you've built.

---

## Timeline

###### When is it due?

* **Assigned:** Friday, March 25th
* **Due:** Monday, March 28th @ 9:17am

---

## Technical Requirements
###### What technologies will I be using?

**Your app must:**

* Use **jQuery** to capture events and manipulate the DOM. 
* Minimize the use of global variables.
* Integrate **Object Oriented Programming** design patterns, using at least one constructor.
* Abide by the **separation of concerns** principle with separate HTML, CSS, and JavaScript files.
* Leverage CSS styling for a pleasing user experience.
* Include **a public Github repository** with frequent commits and descriptive commit messages!
* Have useful documentation that you or other developers can reference later.

---

## Specs

###### What are the core features?

**A user should be able to...**

* See a beautiful **game board** on the page  
* See at least **two players** on the board  
* Press a key on their keyboard to **move their player** one square  
* See **who won** the round
* **Reset** the game / start a new round

---

## Deliverables

###### What is necessary to call this complete?

* A **working game, built by you**.
* A **git repository hosted on Github** with frequent commits dating back to the very beginning of the project.
* **A `readme`** with explanations of the **technologies used**, **existing features**, **planned features**, and anything else you'd like to add. See the [example-readme](example-readme.md) as a guide, and use this <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet" target="_blank">markdown cheatsheet</a> to help with formatting.

---

## Best Practices

###### What are some tips from real-world development?

* Take very small steps, and **use your development tools** (`console.log`, Chrome JavaScript console, Chrome debugger) to debug and solve problems as you go.
* **Wireframe** your page layout, and **whiteboard** the different components of your app (data, view/presentation logic, game logic, styles). 
* Write **clean, well-indented code**! Follow this javascript [style guide](https://github.com/airbnb/javascript/tree/master/es5). Make sure you remove unused/commented code!
* Use **class-based css** rules, and avoid id-based rules for CSS styling. (Ids are okay for elements you need to access with JavaScript.)
* Stick with the **KISS** (Keep It Simple Stupid) and **DRY** (Don’t Repeat Yourself) principles.
* **Commit early, and commit often**. Write commit messages that describe what you changed in each commit.
* Don't be afraid to **break your code**. Play in your console. Experiment. You can go back to a previous commit if you need to.
* **Don’t be afraid to write code that you know you will have to remove later**. Create temporary elements (buttons, links, etc.) to trigger events for testing. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a win button to start out.
* Write a helpful **`README.md`** that you or other developers can reference later. See [example-readme](example-readme.md) as a guide, and use this <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet" target="_blank">markdown cheatsheet</a> to help with formatting.
* **Use the docs and be a Google wizard**. This is what developers spend most of their time doing!



---

## Getting Started

###### How should I begin approaching this?

* Create a **NEW GitHub repository** from your GitHub account. Make sure you're in your class work folder, and create the project locally. Follow the steps to `git init` the new repo.
* You'll need an `index.html`, `style.css`, and `app.js`. Make sure your stylesheet and JavaScript files are linked in `index.html`, and also include the CDNs you'll be using (Bootstrap, jQuery).

---

## Submission

###### How do I turn in the project?

* As you make code changes, frequently commit and push to GitHub.
* Once you've finished the project and pushed your work to GitHub, please add the link to your project's GitHub repo to [this google spreadsheet](https://docs.google.com/spreadsheets/d/1ujt7SPT0sWdnSD3IK1DdHNmWHdgG8Zteu-rbCIRVtwU/edit#gid=0).

## Bonus Ideas

###### What if I want to do more?

These feature ideas are here to help you challenge yourself more! **Don't focus on them until you've completed the core requirements.**  Feel free to come up with your own bonus ideas & use your creativity. 

* Allow **customized players** (name, symbol, color, avatar, etc.). Let the users change their player's properties with a form!
* Keep track of **multiple game rounds** with a win counter or win history. 
* Integrate with a **3rd party API**: flickr, youtube, spotify, giphy, etc. 
* Use Handlebars templating to display information like the past rounds' win history, or data from your API.
* Get creative with **inventive styling** beyond what we've practiced, e.g. use hover effects or CSS animations to spiff things up. Get creative with backgrounds.
* Timing: display a **countdown timer** ("3, 2, 1, Go!"), the winning time, or the best time.
* **Race against a bot** that the computer controls.
* **Instant replay**: record yourself and then race against yourself, in real-time.
* Use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">localStorage</a> to **keep track of game state**, even if the user refreshes the page.

---

## Resources

###### Where can I look for help online?

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">MDN Javascript Docs</a> - *a great reference for all things JavaScript*
* <a href="http://api.jquery.com" target="_blank">jQuery Docs</a>
* <a href="https://pages.github.com" target="_blank">Github Pages</a> or <a href="https://www.bitballoon.com" target="_blank">BitBalloon</a> - *for hosting your game*

---

## Project Feedback

###### How will I get feedback from instructors?

See the [feedback doc](feedback.md) for details.
