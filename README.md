This was refered from udemy course https://sapient.udemy.com/course/the-complete-nodejs-developer-course-2
Git url is https://github.com/vkugithub/node-course-v3-code
How to setup the node project.
1. Install Node
2. Install npm if you want to use some modules from npm like validator
3. Create configuration using npm init
4. Install dependency like npm install validator if dependencies already in package.json then run npm install only it will install all the dependencies automatically
5. Run js on node like node validator.js

Validator module
https://www.npmjs.com/package/validator


14 Nov 2019
chalk example
npm install nodemon -g -- to install nodemon globally
npm install nodemon --save-dev  -- to install as dev dependency
npm run dev -- to run dev script at local from package.json
and use nodemon insted of node vaidator.js it will automatically restart the application for any change.

Nodemon reload only server part on changes to reload on changes in hbs use following commands [ nodemon app1.js -e js,hbs ]


webserver
static web page
dynamic page
use of handler bar
header
footter
use of css

client side java script
1. Create form take input location and use for to fetch waether information
2. addListener on form, on submit action call service to get info using location
3. Print result to <p> using id.

Account on hurekoo
devdependencies
script to run on production and local
ssh configuration for hurekoo
deploy on hureko

1. download heroku https://devcenter.heroku.com/articles/heroku-cli
heroku -v
heroku login
heroku keys:add
git push heroku master


