/**
 * We stop till the offset is too big. We are only interested in
 * jobs which need get executed soon. (jobs which need to be executed in the next X minutes)
 *
 * Example:
 *
 * Given
 *          t1      t2       t3
 *  jobs=[[1,2,3],[4,5,6],[7,8,9,10]];
 *  now = t1
 *
 *  We dont need to get t2 and t3.
 *
 *
 */

const execa = require('execa');

(async () => {
  try {
    await execa('unknown', ['command']);
  } catch (error) {
    console.log(error);
  }
})();
