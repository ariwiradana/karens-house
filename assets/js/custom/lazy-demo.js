$(function () {
    $('.lazy').Lazy({
        beforeLoad: function (element) {
            var imageSrc = element.data('src');
            console.log('image "' + imageSrc + '" is about to be loaded');
        },
    });
});