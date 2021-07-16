$(document).ready(function () {})


const gmaps = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCvC1wgMf7631iiv1o7kaNXcnswYQ9b59I&callback=mapData";
$.getScript(gmaps, function () {});


function mapData() {
	startLoading();

	$.ajax({
		url: "https://api-karens-house.000webhostapp.com/read-location.php",
		type: "get",
		dataType: "json",
		success: function (response) {
			stopLoading();
			if (response.status_code == 200) {
				const karenslocation = {
					lat: -8.44819898282695,
					lng: 115.25355074537637
				};

				const map = new google.maps.Map(document.querySelector(".map-content"), {
					center: karenslocation,
					zoom: 12,
				});

				const marker = new google.maps.Marker({
					position: karenslocation,
					map,
					label: "K",
					title: "Karens House"
				});

				let infoWindow = new google.maps.InfoWindow();

				marker.addListener("click", () => {
					infoWindow.close();
					infoWindow.setContent(marker.getTitle());
					infoWindow.open(marker.getMap(), marker);
				});


				$.each(response.data, function (i, data) {
					let infoWindow = new google.maps.InfoWindow();
					let pos = new google.maps.LatLng(data.lat, data.lon);

					let marker = new google.maps.Marker({
						position: pos,
						map,
						title: `${i + 1}. ${data.location_name}`,
						label: `${i + 1}`,
						optimized: false,
					});

					marker.addListener("click", () => {
						infoWindow.close();
						infoWindow.setContent(marker.getTitle());
						infoWindow.open(marker.getMap(), marker);
					});
					$(`#location-all-tab`).append(`
						<div class="map-location-item">
							<span>${i + 1}. <span class="location-name">${data.location_name}</span></span>
							<i class="ml-2 fas ${data.jenis == 'food' ? 'fa-utensils' : data.jenis == 'temple' ? 'fa-gopuram' : 'fa-camera'}"></i>
						</div>
					`)
				});

			}
		}
	})

	$('.nav-tabs .nav-item a').click(function () {
		startLoading();
		let id = $(this).attr('id');
		$(`#location-${id}`).html('');

		let urls;

		if (id == 'all-tab') {
			urls = "https://api-karens-house.000webhostapp.com/read-location.php"
		} else {
			urls = `https://api-karens-house.000webhostapp.com/read-location.php?jenis=${id.split('-')[0]}`
		}

		$.ajax({
			url: urls,
			type: "get",
			dataType: "json",
			success: function (response) {
				if (response.status_code == 200) {
					stopLoading();

					const karenslocation = {
						lat: -8.44819898282695,
						lng: 115.25355074537637
					};

					const map = new google.maps.Map(document.querySelector(".map-content"), {
						center: karenslocation,
						zoom: 12,
					});

					const marker = new google.maps.Marker({
						position: karenslocation,
						map,
						label: "K",
						title: "Karens House"
					});

					let infoWindow = new google.maps.InfoWindow();

					marker.addListener("click", () => {
						infoWindow.close();
						infoWindow.setContent(marker.getTitle());
						infoWindow.open(marker.getMap(), marker);
					});

					$.each(response.data, function (i, data) {
						let infoWindow = new google.maps.InfoWindow();
						let pos = new google.maps.LatLng(data.lat, data.lon);

						let marker = new google.maps.Marker({
							position: pos,
							map,
							title: `${i + 1}. ${data.location_name}`,
							label: `${i + 1}`,
							optimized: false,
						});

						marker.addListener("click", () => {
							infoWindow.close();
							infoWindow.setContent(marker.getTitle());
							infoWindow.open(marker.getMap(), marker);
						});
					});


					$.each(response.data, function (i, data) {
						$(`#location-${id}`).append(`
							<div class="map-location-item">
								<span>${i + 1}. <span class="location-name">${data.location_name}</span></span>
								<i class="ml-2 fas ${data.jenis == 'food' ? 'fa-utensils' : data.jenis == 'temple' ? 'fa-gopuram' : 'fa-camera'}"></i>
							</div>
						`);
					});
				}
			}
		})
	});

}