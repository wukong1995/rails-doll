import $ from 'jquery';
import { postAction } from 'utils/ajax_action';


const home = () => {
  $('.js-add-cart').on('click', function () {
    const product_id = $(this).data('id');
    postAction(`cart/add/${product_id}`)
      .done((res) => {
        console.log(res);
      })
      .fails((res) => {
        // alert('请刷新重试');
        console.log(res);
      });
  });
};

export default home;
