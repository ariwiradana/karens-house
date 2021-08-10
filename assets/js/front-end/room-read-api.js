$(document).ready(() => {
	roomType();
	otherRoom();
});

const roomType = async () => {
	startLoading();
	let id = localStorage.getItem('room-type');
	const req = await fetch(`https://api-karens-house.000webhostapp.com/read-room-type.php?id=${id}`);
	const {
		status_code,
		data
	} = await req.json();

	if (status_code == 200) {
		const obj = data[0];

		document.querySelector('#title').innerHTML = obj.title;
		document.querySelector('#desc').innerHTML = obj.desc;
		document.querySelector('#room_size').innerHTML = obj.room_size;
		document.querySelector('#bed').innerHTML = obj.bed;
		document.querySelector('#bathroom').innerHTML = obj.bathroom;
		document.querySelector('#features-title').innerHTML = obj.title;
		document.querySelector('#thumbnail').setAttribute("src", `https://api-karens-house.000webhostapp.com/foto/room-type/${obj.thumbnail}`);

		const facilities = obj.facilities;
		facilities.forEach((obj, i) => {
			const facilityContent = document.querySelector('#facilities');
			const row =
				`<div class="room-features-item">
						<i class="${obj.category}"></i> <span class="room-facility">${obj.facility}</span>
					</div>`;
			facilityContent.insertAdjacentHTML('beforeend', row)
		});

		const roomImg = obj.images;
		roomImg.forEach((obj, i) => {
			const roomImgContent = document.querySelector('#room-img');
			const row =
				`<div class="room-img-item">
					<a href="https://api-karens-house.000webhostapp.com/foto/room-type/${obj.category == 1 ? 'family' : obj.category == 2 ?'mountain' : 'terrace'}/${obj.image}" data-fancybox="gallery">
						<img class="room-img" data-src="https://api-karens-house.000webhostapp.com/${obj.image}" alt="${obj.category}">
					</a>
				</div>`;
			roomImgContent.insertAdjacentHTML('beforeend', row)
		});

		$('.room-img').lazy({
			effect: "fadeIn",
			effectTIme: 1000,
			onFinishedAll: () => {
				stopLoading();
			}
		});
	}
}

const otherRoom = async () => {
	startLoading();
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
				items: 1,
				margin: 0
			},
			700: {
				items: 1,
				margin: 0
			},
			1000: {
				items: 3,
				margin: 5
			}
		}
	});

	const req = await fetch('https://api-karens-house.000webhostapp.com/read-room-type.php');
	const {
		status_code,
		data
	} = await req.json();

	if (status_code == 200) {
		stopLoading();
		data.forEach((obj, i) => {
			const row = `
			<div class="item">
				<div class="other-room-overlay">
					<p class="explore text-light text-left"><small>Room Type</small></p>
					<h5 class="overlay-title">${obj.title}</h5>
					<a href="../rooms/">
						<p class="explore other-room-id" data-id="${obj.id}"><small class="other-room-id" data-id="${obj.id}">Explore <span class="icon-explore">&#10230;</span></small></p>
					</a>
				</div>
				<img class="other-img" src="https://api-karens-house.000webhostapp.com/foto/room-type/${obj.thumbnail}">
			</div>`
			owl.trigger('add.owl.carousel', row);
		});
		owl.trigger('refresh.owl.carousel');

		document.addEventListener('click', (e) => {
			if (e.target.classList.contains('other-room-id')) {
				localStorage.setItem('room-type', e.target.dataset.id);
			}
		})
	}
}