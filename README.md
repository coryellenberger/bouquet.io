# Bouquet

[![Build Status](https://travis-ci.org/coryellenberger/bouquet.io.svg?branch=master)](https://travis-ci.org/coryellenberger/bouquet.io)        [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)       [![Angular Style Guide](https://img.shields.io/badge/bestpractices-angularjs-brightgreen.svg?style=flat)](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) [![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)]()

#### Initializing Project
This will install all of the node modules for this project
After node modules it will run gulp to execute bower bringing in client components
``` 
$ npm install
```

#### Start Project
If you do not have the MongoDB URL you will need to start up a local MongoDB
Configuration for the DB is found in conf.js
The following command will start the node express server on port 3000 
```
$ npm start
```
You can then go to localhost:3000

#### Run Standard JS Linting, Unit Tests and JSDocs
```
$ npm test
```

#### Starting up MongoDB local
After installing MongoDB MSI locally (Windows)
execute the following command in
C:\Program Files\MongoDB\Server\3.0\bin

```
$ mongod.exe --dbpath "C:\{YOURDBPATH}"
```

#### Mocking a Heroku Release
delete the node_modules and public/components folder then run the following command
```
$ npm install --quiet --production
```

### Client Dependencies
- [Angular JS](https://docs.angularjs.org/api) A structural framework for dynamic web apps
- Angular Route
- Lodash
- Angular Resource A factory which creates a resource object that lets you interact with RESTful server-side data sources
- HTML5Shiv HTML5 support for older browsers
- Respond A fast & lightweight polyfill for min/max-width CSS3 Media Queries
- jQuery Lightweight JS library for DOM queries/manipulation
- Skel Lightweight framework to handle responsive logic/view sizes
- Angular Mocks testing dependency