import $ from 'jquery';
/**
 * page run corresponding function
 * @param {array | string} path
 * @param {func} fn
 */
export const runPage = (path, fn) => {
  const pageID = $('body').attr('id');
  const map = {
    string: () => pageID === path,
    object: () => path.some(x => x === pageID)
  };
  const isAllow = map[typeof path]();

  if (isAllow) {
    fn();
  }
};
