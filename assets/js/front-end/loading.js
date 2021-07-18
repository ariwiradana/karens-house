function startLoading() {
    $('body').css("overflow", "hidden");

    let path = "";
    let title = $('title').text();

    if (title == "Karéns House Ubud | Hidden Paradise of Ubud") {
        path = "assets";
    } else {
        path = "../assets";
    }

    $('.loading-container').html(`
        <div class="loading-content">
            <div id="loading-content" class="animate__animated animate__fadeInUp">
                <img src="${path}/logo/logo.svg">
                <div class="loader">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
            </div>
        </div>
    `)
}

function stopLoading() {
    $('.loading-container').addClass("animate__slideOutUp");
    $('body').css("overflow", "visible");
}

function imgLoading() {
    $("img").on('load', function () {
        setTimeout(function () {
            $('.img-loading').fadeOut();
        }, 2000);
    });
}