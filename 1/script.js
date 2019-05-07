(function($) {
    $(function() {
    $('.btn').click(function () {
        $one = $('.one').val();
        $two = $('.two').val();
        $sum = parseFloat($one) + parseFloat($two);
        alert('С округлением до 2 символов после запятой: ' + $sum.toFixed(2));

    })
    })
})(jQuery)