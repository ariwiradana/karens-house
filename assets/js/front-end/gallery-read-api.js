$(document).ready(function () {
	// dummyImg();
	loadGallery();
});


function loadGallery() {
	const id = "all";
	ajaxLoad(id);

	$('.nav-gallery .nav-item').click(function () {
		let id = $(this).find('.nav-link').attr('href').split('#')[1];
		ajaxLoad(id);
	});
}



function ajaxLoad(id) {
	startLoading();
	$.ajax({
		url: 'https://api-karens-house.000webhostapp.com/read-gallery-img.php',
		type: 'get',
		dataType: 'json',
		success: function (response) {
			if (response.status_code == 200) {
				let data = "";
				if (id == "all") {
					data = response.data.all;
				} else if (id == "front") {
					data = response.data.front;
				} else if (id == 'bedroom') {
					data = response.data.bedroom;
				} else if (id == 'living-room') {
					data = response.data.livingroom;
				} else if (id == 'bathroom') {
					data = response.data.bathroom;
				} else {
					data = response.data.terrace;
				}

				$.each(data, function (i, data) {
					$(`#gallery-${id}`).append(`
					<div class="gallery-item">
						<a href="https://api-karens-house.000webhostapp.com/${data}" data-fancybox="gallery">
							<div class="gallery-overlay"></div>
							<img class="gallery-img" loading="lazy" src="https://api-karens-house.000webhostapp.com/${data}">
							<div class="gallery-overlay-container">
								<div class ="gallery-overlay-content fadeIn-bottom">
									<i class="fi-rr-expand"></i>
								</div>
							</div>
						</a>
					</div>
					`);
				});
				stopLoading();
			}
		}
	});
}

function dummyImg() {
	const N = 10;
	const data = Array.from(Array(N + 1).keys()).slice(1);
	startLoading()

	$.each(data, function (i, data) {
		$('.gallery-content').append(`
			<div class="gallery-item">
				<a href="https://source.unsplash.com/random?sig=${data}" data-fancybox="gallery" data-aos="flip-left" data-aos-duration="400">
					<div class="gallery-overlay"></div>
					<img class="gallery-img" loading="lazy" src="https://source.unsplash.com/random?sig=${data}">
					<div class="gallery-overlay-container">
						<div class ="gallery-overlay-content fadeIn-bottom">
							<i class="fi-rr-expand"></i>
						</div>
					</div>
				</a>
			</div>
		`);

	});

	setInterval(function () {
		stopLoading();
	}, 2000)

}