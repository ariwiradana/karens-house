function closeAlert() {
    $('.alert-container').toggleClass('animate__fadeIn animate__fadeOut');
    $('.alert-content').toggleClass('animate__slideInUp animate__slideOutDown');
    $('body').css("overflow", "visible");
    setTimeout(function () {
        $('.alert-container').remove();
    }, 800);
}


function customAlert(header, title) {
    $('.custom-alert').html(`
        <div class="alert-container animate__animated animate__fadeIn">
            <div class="alert-content animate__animated animate__slideInUp">
                <div class="alert-header">
                    <h6 class="alert-header-title">${header}</h6>
                    <i class="fi-rr-cross alert-close"></i>
                </div>
                <a href="https://maps.google.com/?q=${title}" target="_blank">
                    <h6 class="alert-location">${title}</h6>
                </a>
            </div>
        </div>
    `);

    $('.alert-close, .alert-container').click(function () {
        closeAlert();
    });
}

function customAlertBooking(header, title) {
    $('.custom-alert').html(`
        <div class="alert-container animate__animated animate__fadeIn">
            <div class="alert-content animate__animated animate__slideInUp">
                <div class="alert-header">
                    <h6 class="alert-header-title">${header}</h6>
                    <i class="fi-rr-cross alert-close"></i>
                </div>
                <h6 class="alert-location">${title}</h6>
            </div>
        </div>
    `);

    $('.alert-close, .alert-container').click(function () {
        closeAlert();
    });
}