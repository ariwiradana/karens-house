$(document).ready(function () {
	mapData()
});

const gmaps = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCvC1wgMf7631iiv1o7kaNXcnswYQ9b59I&callback=Maps";
$.getScript(gmaps, function () {});

let map;

function Maps() {
	map = new google.maps.Map(document.querySelector(".map-content"), {
		center: {
			lat: -8.448348883235509,
			lng: 115.25334555611327
		},
		zoom: 16,
	});
}

function mapData() {

	$.ajax({
		url: "https://api-karens-house.000webhostapp.com/read-room-type.php",
		type: "get",
		dataType: "json",
		success: function (response) {
			if (response.status_code == 200) {
				const data = response.data;
				const facilities = response.data[0].facilities;

				$.each(data, function (i, data) {
					$('#location').append(`
						<div class="map-location-item">
							<span>${i + 1}. <span class="location-name">${data.title}</span></span>
						</div>
					`)
				});
			}
		}
	})

	$('.map-location-item').find('.location-name').click(function () {
		console.log($(this).text());
	});
}