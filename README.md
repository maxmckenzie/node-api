# node-api
## An ultra-lightweight API framework using Express

### Pre-requsites

#### Postgres

This project uses a [Postgres](http://www.postgresql.org/) database by default. You can use any database you want, skip this section if you want to use something different.

##### Installation

Postgres can be installed in several ways, see [the documentation](http://www.postgresql.org/docs/9.3/static/installation.html) for more details. On OSX with Homebrew you can:

```
brew install postgresql
```

##### Setup

You'll need to create two databases if you're developing locally, one for the application to use and the other for the test suite.

You can set the names of these databases (typically `<app name>` and `<app name>-test`) by setting environment variables named `DATABASE_URL` and `TEST_DATABASE_URL` (see [direnv](#direnv) below, it'll simplify this step).

Once you've done that, you can create the respective databases using the `createdb` command in your terminal:

```
createdb node-api
createdb node-api-test
```

##### Configuration

There isn't any specialist configuration to speak of. The only exception being that the sample tables in this project use the `uuid-ossp` plugin for Postgres to allow fast indexing of native UUID types. Installation is easy: connect to Postgres (see [pgcli](#pgcli) below), switch to each of your databases in turn (using `\c`), and run:

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

#### Helpful tools

##### pgcli

Only applicable if you're using Postgres. [Pgcli](http://pgcli.com/) is a fully-featured (and generally better) alternative for the `psql` command shipped with Postgres. Highly recommended. Installation instructions can be found [here](http://pgcli.com/install).

##### direnv

[Direnv](http://direnv.net/) is an environment switcher for the shell. It will keep track of the environment variables you'll need for the project. You can find an example `.envrc` in the root of the project, you may need to alter it to fit your environment. For more information, [read the documentation](http://direnv.net/).

```
cp .envrc.example .envrc
```

#### Frameworks

This project uses several frameworks that you'll need to be familiar with before you can understand it fully.

##### Knex.js

[Knex.js](http://knexjs.org/) is a "batteries included" SQL query builder for Postgres, MySQL, MariaDB, SQLite3, and Oracle designed to be flexible, portable, and fun to use. It features both traditional node style callbacks as well as a promise interface for cleaner async flow control, a stream interface, full featured query and schema builders, transaction support (with savepoints), connection pooling and standardized responses between different query clients and dialects.

You should take a glance at [the documentation](http://knexjs.org/).

##### Bookshelf.js

[Bookshelf.js](http://bookshelfjs.org/) is a JavaScript ORM for Node, built on the Knex SQL query builder. Featuring both promise based and traditional callback interfaces, providing transaction support, eager/nested-eager relation loading, polymorphic associations, and support for one-to-one, one-to-many, and many-to-many relations.

You should also take a glance at [this documentation](http://bookshelfjs.org/).

### Setup

The project requires a little set up:

```
npm install
```

### Running the tests

This project is tested using [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/).

Once, before you run the tests for the first time, you'll need to build the test database:

```
NODE_ENV=test npm run migrate
```

To run the tests, use:

```
npm test
```

### Building the application

This application is written in ES6/7 and uses [Babel](https://babeljs.io/) to transpile modules to vanilla JavaScript. You probably won't need to do this when developing locally but it should definitely happen before deployment.

```
npm run build
```

### Running the server

Whilst the node environment is set to `development`, the server will run with ES6/7 being transpiled on-the-fly via a require hook. For performance reasons, on non-development environments you'll need to build the application before starting it.

```
npm start
```

### Coding standards

To ensure code quality and consistency, this application is linted using [ESLint](http://eslint.org/) (using the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)). All code should satisfy the linter before being merged.

```
npm run lint
```

You will probably want to set up your code editor to run ESLint automatically. If you're using Sublime Text you can use [SublimeLinter](http://sublimelinter.readthedocs.org/en/latest/installation.html). Once you have that installed, you should install the [ESLint plugin](https://github.com/roadhump/SublimeLinter-contrib-eslint_d).
