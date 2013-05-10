# Favorite Locations

Responsive web application built on [Express](http://expressjs.com/) to manage
favorite address locations.

[View example app](http://favorite-locations.herokuapp.com/)

Read the `package.json` and `bower.json` files to view its dependencies server
side and client side (respectively).

Notable dependencies include:

[Grunt](http://gruntjs.com) for linting, concatenating and minifying (and other
useful build tools).
[Jade](http://jade-lang.com/) for server-side templates.
[Handlebars](http://handlebarsjs.com/) for client-side templates.
[RequireJS](http://requirejs.org/)/[Almond](https://github.com/jrburke/almond)
for module loading.
[Backbone.js](http://backbonejs.org/) for client-side structure.
[LayoutManager](https://github.com/tbranyen/backbone.layoutmanager) for view
management.
[Canal](https://github.com/mlmorg/backbone.canal) for client-side routing.

## Development Environment

Install [Node.js](http://nodejs.org/) and [Mongo](http://www.mongodb.org/).
Make sure you've installed [Grunt](http://gruntjs.com) and 
[Bower](https://github.com/twitter/bower) globally:

```
npm install grunt-cli -g
npm install bower -g
```

Then, install the dependencies:

```
npm install
```

Run the tests with:

```
npm test
```

Start the server with:

```
mongod
npm start
```
