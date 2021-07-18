$(document).ready(function () {
    $(function () {
        $('.lazy').Lazy({
            beforeLoad: function (element) {
                $('.img-loading').html(`
                    <div class="img-loading-content">
                        <div class="loading-icon"></div>
                    </div>
                `);
            },
            afterLoad: function (element) {
                imgLoading();
            },
        });
    });
})