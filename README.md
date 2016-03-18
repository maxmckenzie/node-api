# node-api
## An ultra-lightwight API framework using Express.js

### Pre-requsites

##### [Postgres](http://www.postgresql.org/)

This project uses a Postgres database by default. You can install Postgres any way you want. On OSX with Homebrew you can:

```
brew install postgresql
```

You'll need to create two databases if you're developing locally, one for the application to use and the other for the test suite. You can choose the names of these databases (typically `<app name>` and `<app name>-test`) by setting the environment variables `DATABASE_URL` and `TEST_DATABASE_URL` (see [direnv](#direnv) below). Once you've done that, you can create the databases using the `createdb` command,

#### Helpful tools

##### direnv

Direnv is an environment switcher for the shell. It will keep track of the environment variables you'll need for the project. You can find an example `.envrc` in the root of the project, you may need to alter it to fit your environment. For more information, [read the documentation](http://direnv.net/).

```
cp .envrc.example .envrc
```

##### pgcli

Only applicable if you're using Postgres. Pgcli is a fully-featured (and generally better) alterative for the `psql` command shipped with Postgres. Highly recommended. Installation instructions can be found [here](http://pgcli.com/).

### Setup

The project requires a little set up:

```
npm install
```

### Running the tests

This project is tested using [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/).

Once, before you run the tests, you'll need to build the test database:

```
npm run test-migrate
```

To run the tests, use:

```
npm test
```

### Building the application

This application is written in ES6/7 and uses Babel to transpile modules to vanilla Node. You probably won't need to do this when developing locally but it should definitely happen before deployment.

```
npm run build
```

### Running the server

On non-production environments, this will start the server with ES6/7 being transpiled on-the-fly via a require hook. For performance reasons, on production you'll need to build the application before starting it.

```
npm start
```
