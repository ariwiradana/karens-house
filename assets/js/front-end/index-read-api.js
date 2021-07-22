$(document).ready(function () {
    // readCarousel();
    roomType();
    dummyImg();
});


function roomType() {
    let owl = $('#index-room-type').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        margin: 5,
        nav: false,
        dots: false,
        items: 1
    });

    let dummy = "https://picsum.photos/1280/720?";
    let img = "https://api-karens-house.000webhostapp.com/foto/room-type/";

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
                            `<div class="item index-room-type-content">
                                <div class="img-content">
                                    <img src="${dummy}${i + 5}">
                                </div>
                                <div class="index-room-type-text-content">
                                    <p class="explore text-dark text-left mb-1"><small>Room Type</small></p>
                                    <h4 class="index-room-type-title">${item.title}</h4>

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

                                    <p class="index-room-type-desc">${item.desc.length > 100 ? item.desc.substring(0, 100) + '...' : item.desc}</p>
                                    <a href="rooms/?type=${item.id}">
                                        <p class="explore"><small>Explore <span>&#10230;</span></small></p>
                                    </a>
                                </div>
                            </div>`
                        )]);
                });
                owl.trigger('refresh.owl.carousel');
            }
        },
        error: function () {
            roomType();
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
                            <img class="d-block w-100 lazy" data-src="https://api-karens-house.000webhostapp.com/foto/carousel/${item.nama}">
                        </div>
                    `);

                    $('.lazy').lazy({
                        effect: "fadeIn",
                        effectTime: 1000
                    });

                    $('#carousel-indicator').append(`
                        <li data-target="#my-carousel" data-slide-to="${totalItems}" class="${itemIndicatorsClass}"></li>
                    `);
                });
                stopLoading()
            }
        },
        error: function () {
            readCarousel();
        }
    });
}

function dummyImg() {
    const N = 10;
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
                    <img class="d-block w-100 img-dummy" src="https://picsum.photos/1920/1080?${item}">
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

// const gmaps = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCvC1wgMf7631iiv1o7kaNXcnswYQ9b59I&callback=mapData";
// $.getScript(gmaps, function () {});

// function mapData() {
//     const karenslocation = {
//         lat: -8.44819898282695,
//         lng: 115.25355074537637
//     };

//     const map = new google.maps.Map(document.querySelector(".index-map"), {
//         center: karenslocation,
//         zoom: 11,
//     });

//     const marker = new google.maps.Marker({
//         position: karenslocation,
//         map,
//         label: {
//             text: "K",
//             color: "white"
//         },
//         title: "Karens House"
//     });

//     let infoWindow = new google.maps.InfoWindow();

//     marker.addListener("click", () => {
//         infoWindow.close();
//         infoWindow.setContent(marker.getTitle());
//         infoWindow.open(marker.getMap(), marker);
//         map.setCenter(karenslocation);
//         map.setZoom(14);

//         setTimeout(function () {
//             map.panTo(marker.getPosition());
//         }, 1000);
//     });
// }