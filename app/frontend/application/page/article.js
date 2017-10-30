/* global alert */
import $ from 'jquery';

const article = () => {
  $('.js-edit-btn').on('click', function() {
    const $modal = $('#myModal');
    const $this = $(this);

    $.ajax({
      url: $this.data('url'),
      method: 'GET',
      success: function(res) {
        $modal.find('.modal-content').html(res);
        $modal.modal('show');
      },
      error: function(res) {
        alert(res.responseText);
      }
    });

  });
};

export default article;
