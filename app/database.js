import Knex from 'knex';
import bookshelf from 'bookshelf';
import config from '../knexfile';

export const connection = new Knex(config[process.env.NODE_ENV]);

const Bookshelf = bookshelf(connection);

Bookshelf.plugin('registry');
Bookshelf.plugin('virtuals');

export default Bookshelf;
