import Sample from '../models/Sample';

export default (req, res) => {
  Sample
    .query()
    .where('page', 'default')
    .increment('count', 1)
    .then(() => {
      res.send('Hello world!');
    });
}
