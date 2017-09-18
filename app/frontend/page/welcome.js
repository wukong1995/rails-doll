/* global confirm */
import $ from 'jquery';

const deleteArticle = () => {

  $('.delete-article').on('click', function() {
    if(confirm('Are you sure?')) {
      const $this = $(this);

      $.ajax({
        url: $this.data('url'),
        method: 'DELETE',
        success: function(res) {
          if(res.success_code === 1) {
            $this.closest('tr').remove();
          }
        }
      });
    }
  });
};

export default deleteArticle;
