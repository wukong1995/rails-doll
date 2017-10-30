/* global confirm alert */
import $ from 'jquery';

export const destroyAction = () => {
  $('.js-delete-btn').on('click', function() {
    if(confirm('Are you sure?')) {
      const $this = $(this);

      $.ajax({
        url: $this.data('url'),
        method: 'DELETE',
        success: function(res) {
          if(res.success_code === 1) {
            $this.closest('tr').remove();
          } else {
            alert(res.error);
          }
        },
        error: function(res) {
          alert(res.responseText);
        }
      });
    }
  });
};
