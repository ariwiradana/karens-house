$(document).ready(() => {
    readCarousel();
    roomType();
});

const readCarousel = async () => {
    startLoading();
    const req = await fetch('https://api-karens-house.000webhostapp.com/read-carousel-img.php');
    const {
        status_code,
        data
    } = await req.json();

    if (status_code == 200) {
        data.forEach((obj, i) => {
            const carousel = `                                
                <div class="carousel-item">
                    <img class="d-block w-100 carousel-img" data-src="https://api-karens-house.000webhostapp.com/foto/carousel/${obj.image}">
                </div>`;
            const carouselContent = document.querySelector('#carousel-img');
            carouselContent.insertAdjacentHTML('beforeend', carousel);

            const dot = `
                <li data-target="#my-carousel" data-slide-to="${i}"></li>
            `;
            const dots = document.querySelector('#carousel-indicator');
            dots.insertAdjacentHTML('beforeend', dot);

        });
    } else {
        readCarousel();
    }

    const carouselIndicator = document.querySelectorAll('#carousel-indicator li');
    carouselIndicator[0].classList.add('active');

    const carouselItem = document.querySelectorAll('.carousel-item');
    carouselItem[0].classList.add('active');

    for (let indicator of carouselIndicator) {
        indicator.addEventListener('click', (e) => {
            for (let i of carouselIndicator) {
                i.classList.remove('active');
            }
            const dataSlide = e.target.getAttribute("data-slide-to");
            carouselIndicator[dataSlide].classList.add('active');

            for (let i of carouselItem) {
                i.classList.remove('active')
            }
            carouselItem[dataSlide].classList.add('active');
        });
    }

    $('.carousel-img').lazy({
        effect: "fadeIn",
        effectTime: 1000,
        onFinishedAll: function () {
            stopLoading();
        }
    });
}

const roomType = async () => {
    let owl = await $('#index-room-type').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            800: {
                items: 2,
                margin: 20
            },
            1200: {
                items: 3,
                margin: 25,
            }
        }
    });

    const req = await fetch('https://api-karens-house.000webhostapp.com/read-room-type.php');
    const {
        status_code,
        data
    } = await req.json();

    if (status_code == 200) {
        for (obj of data) {
            const row =
                `<div class="item index-room-item">
                    <div class="index-room-img-container">
                        <img data-src="https://api-karens-house.000webhostapp.com/foto/room-type/${obj.thumbnail}" alt="" class="index-room-img">
                    </div>
                    <div class="index-room-body">
                        <p class="explore text-dark text-left mb-1 text-uppercase"><small>Room Type</small></p>
                        <h4 class="index-room-title">${obj.title}</h4>
                        <div class="main-facilities-content">
                            <div class="main-facilities-item">
                            <h6>ROOM SIZE<h6>
                                <h6>BED TYPE<h6>
                            </div>
                            <div class="main-facilities-item">
                            <h6>${obj.room_size}<h6>
                                <h6>${obj.bed}<h6>
                            </div>
                        </div>
                        <p class="index-room-desc">${obj.desc.length > 70 ? obj.desc.substring(0, 70) + '...' : obj.desc}</p>
                        <a href="rooms/" class="mt-4">
                            <button class="btn btn-block btn-outline-primary btn-room-detail" data-id="${obj.id}">See Details <span>&#10230;</span></button>
                        </a>
                    </div>
                </div>`;
            owl.trigger('add.owl.carousel', row);
            owl.trigger('refresh.owl.carousel');
        }

        $('.index-room-img').lazy({
            effect: "fadeIn",
            effectTime: 1000,
            onFinishedAll: function () {
                stopLoading();
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-room-detail')) {
                localStorage.setItem('room-type', e.target.dataset.id);
            }
        })
    } else {
        roomType();
    }
}

const gmaps = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCvC1wgMf7631iiv1o7kaNXcnswYQ9b59I&callback=mapData";
$.getScript(gmaps, function () {});

function mapData() {
    const karenslocation = {
        lat: -8.44819898282695,
        lng: 115.25355074537637
    };

    const map = new google.maps.Map(document.querySelector(".index-map"), {
        center: karenslocation,
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.HYBRID,
    });

    const marker = new google.maps.Marker({
        position: karenslocation,
        map,
        icon: {
            url: `https://api-karens-house.000webhostapp.com/icon/karens-icon.svg`,
            scaledSize: new google.maps.Size(150, 150)
        },
        title: "Karens House"
    });

    let infoWindow = new google.maps.InfoWindow();

    marker.addListener("click", () => {
        map.setCenter(karenslocation);
        map.setZoom(14);

        setTimeout(function () {
            map.panTo(marker.getPosition());
        }, 1000);
    });
}