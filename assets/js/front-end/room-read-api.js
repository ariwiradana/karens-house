$(document).ready(function () {
	read_room_type();
	// read_other_room();
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
				const data = response.data[0];
				const facilities = response.data[0].facilities

				$('#title').text(data.title);
				$('#desc').text(data.desc);
				$('#room_size').text(data.room_size);
				$('#bed').text(data.bed);
				$('#features-title').text(data.title);
				$('#thumbnail').attr("src", `https://api-karens-house.000webhostapp.com/foto/room-type/${data.thumbnail}`);

				$.each(facilities, function (i, item) {
					$('#facilities').append(`
						<div class="room-features-item">
							<i class="fas ${item.facility_icon}"></i> <span class="room-facility">${item.facility_title}</span>
						</div>
					`);
				});

				stopLoading();
			}
		}
	});
}


function read_other_room() {
	$('#other-room').owlCarousel({
		loop: true,
		smartSpeed: 500,
		autoplay: true,
		autoplaySpeed: 500,
		margin: 5,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
	// $.ajax({
	// 	url: 'https://api-karens-house.000webhostapp.com/read-room-type.php',
	// 	type: 'get',
	// 	dataType: 'json',
	// 	success: function (response) {
	// 		if (response.status_code == 200) {
	// 			const data = response.data;

	// 			$.each(data, function (i, item) {
	// 				owl.trigger('add.owl.carousel',
	// 					[jQuery(
	// 						`<div class="item">
	//                             <img src="https://api-karens-house.000webhostapp.com/foto/room-type/${item.thumbnail}"/>
	//                             <a href="rooms/?type=${item.id}">
	//                                 <div class="index-room-type-overlay">
	//                                     <h6 class="index-room-type-title mb-2">${item.title}</h6>
	//                                     <p class="index-room-type-desc">${item.desc}</p>
	//                                     <div class="d-flex justify-content-end">
	//                                         <span class="index-room-type-details">More Details <i class="fas fa-arrow-right text-light"></i></span>
	//                                     </div>
	//                                 </div>
	//                             </a>
	//                         </div>`
	// 					)]);
	// 			});
	// 			owl.trigger('refresh.owl.carousel');
	// 		}
	// 	}
	// });
}