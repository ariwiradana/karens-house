$(document).ready(function () {
	// loadFoto();
	dummyImg();
});

function loadFoto() {
	startLoading();
	$.ajax({
		url: 'https://api-karens-house.000webhostapp.com/read-gallery-img.php',
		type: 'get',
		dataType: 'json',
		success: function (response) {
			if (response.status_code == 200) {
				$.each(response.data, function (i, data) {
					$('.gallery-content').append(`
					<div class="gallery-item">
						<a href="https://api-karens-house.000webhostapp.com/foto/gallery/${data.nama}" data-fancybox="gallery" data-aos="flip-left" data-aos-duration="800">
							<div class="gallery-overlay"></div>
							<img class="gallery-img" src="https://api-karens-house.000webhostapp.com/foto/gallery/${data.nama}">
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
				<a href="https://source.unsplash.com/random?sig=${data}" data-fancybox="gallery" data-aos="flip-left" data-aos-duration="800">
					<div class="gallery-overlay"></div>
					<img class="gallery-img" src="https://source.unsplash.com/random?sig=${data}">
					<div class="gallery-overlay-container">
						<div class ="gallery-overlay-content fadeIn-bottom">
							<i class="fi-rr-expand"></i>
						</div
					</div>
				</a>
			</div>
		`);

	});

	setInterval(function () {
		stopLoading();
	}, 2000)

}