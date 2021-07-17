$(document).ready(function () {
	read_room_type();
	read_other_room();
	dummyImg();
});

function read_room_type() {
	startLoading();
	let id = window.location.href.split('=')[1];

	$.ajax({
		url: `https://api-karens-house.000webhostapp.com/read-room-type.php?id=${id}`,
		type: 'get',
		dataType: 'json',
		success: function (response) {
			if (response.status_code == 200) {
				stopLoading();
				const data = response.data[0];
				const facilities = response.data[0].facilities

				$('#title').text(data.title);
				$('#desc').text(data.desc);
				$('#room_size').text(data.room_size);
				$('#bed').text(data.bed);
				$('#bathroom').text(data.bathroom);
				$('#features-title').text(data.title);
				$('#thumbnail').attr("src", `https://api-karens-house.000webhostapp.com/foto/room-type/${data.thumbnail}`);

				$.each(facilities, function (i, item) {
					$('#facilities').append(`
						<div class="room-features-item">
							<i class="fas ${item.facility_icon}"></i> <span class="room-facility">${item.facility_title}</span>
						</div>
					`);
				});

			}
		}
	});
}

function dummyImg() {
	const N = 5;
	const data = Array.from(Array(N + 1).keys()).slice(1);
	startLoading()

	$.each(data, function (i, data) {
		$('#room-img').append(`

		<div class="room-img-item">
			<a href="https://source.unsplash.com/random?sig=${data}" data-fancybox="gallery" data-aos="flip-left" data-aos-duration="1000">
				<img class="room-img" src="https://source.unsplash.com/random?sig=${data}">
			</a>
		</div>

	`)

	});

	setInterval(function () {
		stopLoading();
	}, 2000)

}

function read_other_room() {
	let owl = $('#other-room').owlCarousel({
		loop: true,
		smartSpeed: 500,
		autoplay: true,
		autoplaySpeed: 500,
		margin: 40,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			700: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});

	$.ajax({
		url: 'https://api-karens-house.000webhostapp.com/read-room-type.php',
		type: 'get',
		dataType: 'json',
		success: function (response) {
			if (response.status_code == 200) {
				const data = response.data;

				$.each(data, function (i, item) {
					owl.trigger('add.owl.carousel',
						[jQuery(`
							<div class="item">
								<div class="other-room-overlay">
									<p class="explore text-light text-left"><small>Room Type</small></p>
									<h5 class="overlay-title">${item.title}</h5>
									<a href="./?type=${item.id}">
										<p class="explore"><small>Explore <span class="icon-explore">&#10230;</span></small></p>
									</a>
								</div>
								<img src="https://source.unsplash.com/random?sig=${i}">
							</div>
							`)]);
				});
				owl.trigger('refresh.owl.carousel');
			}
		}
	});
}