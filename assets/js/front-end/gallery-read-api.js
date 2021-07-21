$(document).ready(function () {
	loadGallery();
});

function loadGallery() {
	const id = "all";
	ajaxLoad(id);

	$('.nav-gallery .nav-item').click(function () {
		let id = $(this).find('.nav-link').attr('href').split('#')[1];
		$('.loading-gif-content').fadeIn();
		ajaxLoad(id);
	});
}

function lazyLoad() {
	$('.lazy').Lazy({
		effect: "fadeIn",
		effectTime: 1000,
		onError: function () {
			$('.loading-gif-content').fadeOut();
		},

		onFinishedAll: function () {
			$('.loading-gif-content').fadeOut();
		}
	});
}


function ajaxLoad(id) {
	startLoading()
	let url = "";
	if (id == "all") {
		url = `https://api-karens-house.000webhostapp.com/read-images.php`;
	} else {
		url = `https://api-karens-house.000webhostapp.com/read-images.php?jenis=${id}`;
	}

	$.ajax({
		url: url,
		type: 'get',
		dataType: 'json',
		success: function (response) {
			if (response.status_code == 200) {
				$.each(response.data, function (i, obj) {
					$(`#gallery-${id}`).append(`
					<div class="gallery-item">
						<a href="https://api-karens-house.000webhostapp.com/uploads/gallery/${obj.filename}" data-fancybox="gallery">
							<div class="gallery-overlay"></div>
							<img class="gallery-img lazy" data-src="https://api-karens-house.000webhostapp.com/uploads/gallery/${obj.filename}" alt="${obj.jenis}">
							<div class="gallery-overlay-container">
								<div class ="gallery-overlay-content fadeIn-bottom">
									<i class="fi-rr-expand"></i>
								</div>
							</div>
						</a>
					</div>
					`);
				});

				lazyLoad();
				stopLoading()
			}
		}
	});
}

function dummyImg() {
	const N = 50;
	const data = Array.from(Array(N + 1).keys()).slice(1);
	startLoading()

	$.each(data, function (i, data) {
		$('#img').append(`
			<div class="gallery-item">
				<a href="https://source.unsplash.com/random?sig=${data}" data-fancybox="gallery" data-aos="flip-left" data-aos-duration="400">
					<div class="gallery-overlay"></div>
					<img class="gallery-img lazy" data-src="https://source.unsplash.com/random?sig=${data}">
					<div class="gallery-overlay-container">
						<div class ="gallery-overlay-content fadeIn-bottom">
							<i class="fi-rr-expand"></i>
						</div>
					</div>
				</a>
			</div>
		`);

		$('.gallery-img').lazy({
			effect: "fadeIn"
		});

	});

	setInterval(function () {
		stopLoading();
	}, 2000)

}