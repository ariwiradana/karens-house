const closeAlert = () => {
    $('.alert-container').toggleClass('animate__fadeIn animate__fadeOut');
    $('.alert-content').toggleClass('animate__slideInUp animate__slideOutDown');
    $('body').css("overflow", "visible");
    setTimeout(function () {
        $('.alert-container').remove();
    }, 800);
}


const customAlert = (header, title) => {
    $('.custom-alert').html(`
        <div class="alert-container animate__animated animate__fadeIn">
            <div class="alert-content animate__animated animate__slideInUp">
                <div class="alert-header">
                    <h6 class="alert-header-title">${header}</h6>
                    <i class="uil uil-times icon-lg"></i>
                </div>
                <div class="alert-body">
                    <h6 class="alert-location">${title}</h6>
                    <a href="https://maps.google.com/?q=${title}" target="_blank">
                        <button class="ml-3 btn btn-alert-book">Visit</button>
                    </a>
                </div>
            </div>
        </div>
    `);

    $('.alert-close, .alert-container').click(function () {
        closeAlert();
    });
}

const customAlertBooking = (header, data) => {
    const customAlert = document.querySelector('.custom-alert');
    const row = `
        <div class="alert-container animate__animated animate__fadeIn">
            <div class="alert-content animate__animated animate__slideInUp">
                <div class="alert-header">
                    <h6 class="alert-header-title">${header}</h6>
                    <i class="uil uil-times icon-lg"></i>
                </div>
                <div id="booking-via">
                
                </div>
            </div>
        </div>`;

    customAlert.insertAdjacentHTML('beforeend', row);

    data.forEach((obj, i) => {
        $('#booking-via').append(`
            <div class="alert-link-content">
                <h6 class="alert-location book-link">${obj[0]}</h6>
                <a href="${obj[1]}" target="_blank">
                    <button class="ml-3 btn btn-alert-book">Book</button>
                </a>
            </div>
        `)
    })

    const alertClose = document.querySelector('.alert-close');
    const alertContainer = document.querySelector('.alert-container');

    alertClose.addEventListener('click', () => {
        console.log('ok')
        closeAlert();
    });

    alertContainer.addEventListener('click', () => {
        closeAlert();
    });
}