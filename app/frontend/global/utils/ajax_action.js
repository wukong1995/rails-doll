import $ from 'jquery';

export const deleteAction = (url) => {
  return $.ajax({
    url,
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    },
    type: 'DELETE'
  });
};

export const deleteMultipleAction = (url, ids) => {
  return $.ajax({
    url,
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    },
    type: 'DELETE',
    data: {
      ids
    }
  });
};

export const getAction = (url) => {
  return $.ajax({
    url,
    type: 'GET',
    dataType: 'json',
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
  });
};

export const fetchAction = (url, page) => {
  return $.ajax({
    url,
    type: 'GET',
    data: {
      page
    }
  });
};

export const postAction = (url) => {
  return $.ajax({
    url,
    type: 'POST',
    dataType: 'json',
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
  });
};
