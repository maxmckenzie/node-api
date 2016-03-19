import Bookshelf from '../database';

const Sample = Bookshelf.Model.extend({
  tableName: 'samples',
  virtuals: {
    __type: () => 'Sample',
  },
});

export default Bookshelf.model('Sample', Sample);
