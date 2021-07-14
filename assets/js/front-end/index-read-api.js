$(document).ready(function () {
    readCarousel();
    roomType();
    // dummyImg();
});

function roomType() {
    let owl = $('#index-room-type').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 2000,
        smartSpeed: 2000,
        autoplayHoverPause: true,
        margin: 5,
        nav: false,
        dots: false,
        items: 1
    });

    $.ajax({
        url: 'https://api-karens-house.000webhostapp.com/read-room-type.php',
        type: 'get',
        dataType: 'json',
        success: function (response) {

            if (response.status_code == 200) {
                let data = response.data;
                $.each(data, function (i, item) {
                    owl.trigger('add.owl.carousel',
                        [jQuery(
                            `<div class="item room-type-content">
                                <img src="https://api-karens-house.000webhostapp.com/foto/room-type/${item.thumbnail}">
                                <div class="room-type-text-content">
                                    <p class="explore text-dark text-left mb-1"><small>Room Type</small></p>
                                    <h4 class="room-type-title">${item.title}</h4>

                                    <div class="main-facilities-content">
                                        <div class="main-facilities-item">
                                            <h6>ROOM SIZE<h6>
                                            <h6>BED TYPE<h6>
                                        </div>
                                        <div class="main-facilities-item">
                                            <h6>${item.room_size}<h6>
                                            <h6>${item.bed}<h6>
                                        </div>
                                    </div>

                                    <p class="room-type-desc">${item.desc.length > 100 ? item.desc.substring(0, 100) + '...' : item.desc}</p>
                                    <a href="rooms/?type=${item.id}">
                                        <p class="explore"><small>Explore <span>&#10230;</span></small></p>
                                    </a>
                                </div>
                            </div>`
                        )]);
                });
                owl.trigger('refresh.owl.carousel');
            }
        }
    });
}

function readCarousel() {
    startLoading()
    let itemClass;
    let itemIndicatorsClass;

    $.ajax({
        url: "https://api-karens-house.000webhostapp.com/read-carousel-img.php",
        dataType: "json",
        type: "get",
        success: function (response) {
            if (response.status_code == 200) {
                $('section .pages').fadeIn();
                $.each(response.data, function (i, item) {
                    let totalItems = $(".carousel-item").length;

                    if (totalItems === 0) {
                        itemClass = "carousel-item active";
                        itemIndicatorsClass = "active";
                    } else {
                        itemClass = "carousel-item";
                        itemIndicatorsClass = "";
                    }

                    $('#carousel-img').append(`
                        <div class="${itemClass}">
                            <img class="d-block w-100" src="https://api-karens-house.000webhostapp.com/foto/carousel/${item.nama}">
                        </div>
                    `);

                    $('#carousel-indicator').append(`
                        <li data-target="#my-carousel" data-slide-to="${totalItems}" class="${itemIndicatorsClass}"></li>
                `);

                });
                stopLoading()
            }
        }
    });
}

function dummyImg() {
    const N = 3;
    const data = Array.from(Array(N + 1).keys()).slice(1);
    let itemClass;
    let itemIndicatorsClass;
    startLoading()
    $('section .pages').fadeIn();
    $.each(data, function (i, item) {
        let totalItems = $(".carousel-item").length;

        if (totalItems === 0) {
            itemClass = "carousel-item active";
            itemIndicatorsClass = "active";
        } else {
            itemClass = "carousel-item";
            itemIndicatorsClass = "";
        }

        $('#carousel-img').append(`
                <div class="${itemClass}">
                    <img class="d-block w-100" src="https://picsum.photos/1920/1080?${item}">
                </div>
        `);

        $('#carousel-indicator').append(`
                <li data-target="#my-carousel" data-slide-to="${totalItems}" class="${itemIndicatorsClass}"></li>
        `);

    });
    setInterval(function () {
        stopLoading();
    }, 2000);
}