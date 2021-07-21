function lazyLoad() {
    $('.lazy').Lazy({
        effect: "fadeIn",
        effectTime: 1000,
        onError: function () {
            $('.loading-gif-content').fadeOut();
        },

        onFinishedAll: function () {
            $('.loading-gif-content').fadeOut();
        }
    });
}