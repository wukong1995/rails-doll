import $ from 'jquery';
/*
path: string or array
fn: function
*/
export const runPage = (path, fn) => {
  const pageId = $('body').attr('id');
  
  if (pageId === path || path.indexOf(pageId) !== -1) {
    fn();
  }
}; 
