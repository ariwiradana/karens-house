function startLoading() {
    $('body').css("overflow", "hidden");
    $('.loading-container').html(`
        <div class="loading-content">
            <div id="loading-content" class="animate__animated animate__fadeInUp">
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