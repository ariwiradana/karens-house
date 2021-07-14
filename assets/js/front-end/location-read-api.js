$(document).ready(function () {
	read_location();
});

function read_location() {

	// let location = ["Ceking Rice Terrace", "Ubud Waterfall", "Monkey Forest", "Taman Ujung", "Kintamani", "Sari Profit Rafting"];

	// $.each(location, function (i, data) {
	// 	$('#location').append(
	// 		`
	// 			<div class="map-location-item">
	// 				<span>${i + 1}. <span class="location-name">${data}</span></span>
	// 				<i class="fi-rr-picture"></i>
	// 			</div>
	// 		`
	// 	);
	// });

	$('.map-location-item').click(function () {
		console.log($('.location-name').text())
	});
}