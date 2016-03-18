# node-api
## An ultra-lightwight API framework using Express.js

### Pre-requsites

#### Postgres

This project uses a Postgres database by default. You can use any database you want, skip this section if you want to use something different.

##### Installation

Postgres can be installed in several ways, see [the documentation](http://www.postgresql.org/) for more details. On OSX with Homebrew you can:

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

##### direnv

Direnv is an environment switcher for the shell. It will keep track of the environment variables you'll need for the project. You can find an example `.envrc` in the root of the project, you may need to alter it to fit your environment. For more information, [read the documentation](http://direnv.net/).

```
cp .envrc.example .envrc
```

##### pgcli

Only applicable if you're using Postgres. Pgcli is a fully-featured (and generally better) alternative for the `psql` command shipped with Postgres. Highly recommended. Installation instructions can be found [here](http://pgcli.com/).

#### Frameworks

This project uses several frameworks that you'll need to be familiar with before you can understand it in its entirety.

##### Knex.js

Knex.js is a "batteries included" SQL query builder for Postgres, MySQL, MariaDB, SQLite3, and Oracle designed to be flexible, portable, and fun to use. It features both traditional node style callbacks as well as a promise interface for cleaner async flow control, a stream interface, full featured query and schema builders, transaction support (with savepoints), connection pooling and standardized responses between different query clients and dialects.

You should take a glance at [the documentation](http://knexjs.org/).

##### Bookshelf.js

Bookshelf is a JavaScript ORM for Node.js, built on the Knex SQL query builder. Featuring both promise based and traditional callback interfaces, providing transaction support, eager/nested-eager relation loading, polymorphic associations, and support for one-to-one, one-to-many, and many-to-many relations.

You should also take a glance at [this documentation](http://bookshelfjs.org/).

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

On non-production environments, this will start the server with ES6/7 being transpiled on-the-fly via a require hook. For performance reasons, in production you'll need to build the application before starting it.

```
npm start
```
