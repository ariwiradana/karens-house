$(document).ready(() => {
	loadGallery();
});

const loadGallery = () => {
	const id = "all";
	ajaxLoad(id, 0, 4);

	$('.nav-gallery .nav-item').click(function () {
		let id = $(this).find('.nav-link').attr('href').split('#')[1];

		let child = $(`#gallery-${id}`).children().length;
		console.log(child)

		if (id == 'living-room') {
			id = 'livingroom';
		}

		if (child === 0) {
			ajaxLoad(id, 0, 4);
		}
	});

	$('.btn-load-more').click(function () {
		$(this).html(`<i class="fas fa-spinner fa-pulse loading-spinner"></i>`);
		let id = $('.nav-gallery .nav-item').find('.active').attr('href').split('#')[1];

		let child = $(`#gallery-${id}`).children().length;

		let start = child + 1;
		let limit = 4;

		ajaxLoad(id, start, limit);

		setTimeout(function () {
			$('.btn-load-more').html("load more");
		}, 5000);
	});
}

function lazyLoad() {
	$('.lazy').Lazy({
		effect: "fadeIn",
		effectTime: 1000,
		onError: function () {
			$('.btn-load-more').html("load more");
		},

		onFinishedAll: function () {
			$('.btn-load-more').html("load more");
		}
	});
}


function ajaxLoad(id, start, limit) {
	$('.loading-gif-content').fadeIn();
	startLoading()
	let url = "";
	if (id == "all") {
		url = `https://api-karens-house.000webhostapp.com/read-gallery-images.php?start=${start}&limit=${limit}`;
	} else {
		url = `https://api-karens-house.000webhostapp.com/read-gallery-images.php?jenis=${id}&start=${start}&limit=${limit}`;
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
							<img class="gallery-img" data-src="https://api-karens-house.000webhostapp.com/foto/gallery/${id}/${obj.filename}" alt="${obj.jenis}">
							<div class="gallery-overlay-container">
								<div class ="gallery-overlay-content fadeIn-bottom">
									<i class="uil uil-expand-alt"></i>
								</div>
							</div>
						</a>
					</div>
					`);
				});

				$('.gallery-img').lazy({
					effect: "fadeIn",
					effectTime: 1000,
					onFinishedAll: function () {
						stopLoading();
					}
				});
			}
		},
		error: function () {
			ajaxLoad();
		}
	});
}