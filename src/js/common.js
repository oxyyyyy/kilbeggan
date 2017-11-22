// Init slider
$("#index_header_slider").glide({
	type: "carousel"
});

// Init modal
// $('.modal').modal('show')

// Init wow.js
new WOW().init();


// Videos

$(document).ready(function () {

	const initVideoPlayer =
		id => {
			const src = $(`#video-${id}`).attr('src');
			$(`#video-preview-${id}`).click(function() {
				$(this).hide();
				$(`#video-${id}`)[0].src += '&autoplay=1';
				$(`#video-${id}`).show();
				$(`#close-btn-${id}`).show();
			});
			$(`#close-btn-1`).click(function () {
				$(this).hide();
				$(`#close-btn-${id}`).hide();
				$(`#video-preview-${id}`).show();
				$(`#video-${id}`).hide();
				$(`#video-${id}`).attr('src', '');
				$(`#video-${id}`).attr('src', src);
			});
		}

	for (let i = 1; i <= 3; i++) {
		initVideoPlayer(i);
	}
});

