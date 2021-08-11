const closeAlert = () => {
    document.querySelector('.alert-container').classList.toggle('animate__fadeOut')
    document.querySelector('.alert-content').classList.toggle('animate__slideOutDown')
    document.body.classList.remove('overflow-hidden')

    setTimeout(() => {
        document.querySelector('.alert-container').remove();
    }, 800);
}


const customAlert = (header, title) => {
    const customAlert = document.querySelector('.custom-alert');
    const row = `
        <div class="alert-container animate__animated animate__fadeIn">
            <div class="alert-content animate__animated animate__slideInUp">
                <div class="alert-header">
                    <h6 class="alert-header-title">${header}</h6>
                    <i class="uil uil-times icon-lg btn-close-alert"></i>
                </div>
                <div class="alert-body">
                    <h6 class="alert-location">${title}</h6>
                    <a href="https://maps.google.com/?q=${title}" target="_blank">
                        <button class="ml-3 btn btn-alert-book">Visit</button>
                    </a>
                </div>
            </div>
        </div>
    `;

    customAlert.insertAdjacentHTML('beforeend', row)
}

const customAlertBooking = (header, data) => {
    const customAlert = document.querySelector('.custom-alert');
    const row = `a
        <div class="alert-container animate__animated animate__fadeIn">
            <div class="alert-content animate__animated animate__slideInUp">
                <div class="alert-header">
                    <h6 class="alert-header-title">${header}</h6>
                    <i class="uil uil-times icon-lg btn-close-alert"></i>
                </div>
                <div id="booking-via">
                
                </div>
            </div>
        </div>`;

    customAlert.insertAdjacentHTML('beforeend', row);
    document.body.classList.add('overflow-hidden')

    data.forEach((obj, i) => {
        $('#booking-via').append(`
            <div class="alert-link-content">
                <h6 class="alert-location book-link">${obj[0]}</h6>
                <a href="${obj[1]}" target="_blank">
                    <button class="ml-3 btn btn-alert-book">Book</button>
                </a>
            </div>
        `)
    });
}

let data = [
    ["Booking.com", "https://www.booking.com/hotel/id/karen-house-ubud.id.html"],
    ["Tiket.com", "https://www.tiket.com/hotel/indonesia/karen-house-ubud-310001603224194661"],
    ["Chambers-Hotes.fr", "https://www.chambres-hotes.fr/chambres-hotes_karen-house-ubud_ubud_h4439009_en.html"]
];

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('booking')) {
        customAlertBooking("Book Via", data);
    } else if (e.target.classList.contains('book')) {
        customAlertBooking("Book Via", data);
    } else if (e.target.classList.contains('btn-close-alert')) {
        closeAlert()
    } else if (e.target.classList.contains('alert-container')) {
        closeAlert()
    }
})