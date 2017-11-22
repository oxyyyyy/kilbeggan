// Init slider
$("#index_header_slider").glide({
	type: "carousel"
});

// Init modal
// $('.modal').modal('show')

// Init wow.js
new WOW().init();


// Videos

// New universal script
$(document).ready(function () {
	numberOfVideos = $(".video").length;
	console.log("Number of videos on the page =", numberOfVideos);
	var i = 1;
	while (i <= numberOfVideos) {
		console.log("Iteracion number:", i);
		var video = $(".video").attr("id");
		video = video.substring(0, video.length - 1) + i;
		console.log(video);
		var videoSrc = $("#" + video).attr("src");
		console.log(videoSrc);
		var videoPreview = $(".video-preview").attr("id");
		videoPreview = videoPreview.substring(0, videoPreview.length - 1) + i;
		console.log(videoPreview);
		var videoCloseBtn = $(".close-btn-container").attr("id");
		videoCloseBtn = videoCloseBtn.substring(0, videoCloseBtn.length - 1) + i;
		console.log(videoCloseBtn);			
		$("#" + videoPreview).click(function () {
			$(this).hide();
			$("#" + video)[0].videoSrc += "&autoplay=1";
			$("#" + video).show();
			$("#" + videoCloseBtn).show();
		});
		$("#" + videoCloseBtn).click(function () {
			$(this).hide();
			$("#" + videoCloseBtn).hide();
			$("#" + videoPreview).show();
			$("#" + video).hide();
			$("#" + video).attr("src", "");
			$("#" + video).attr("src", videoSrc);
		});
		i++;
	}
})

// Video 3
// var video3 = $("#video-3").attr("src");
// $("#video-preview-3").click(function () {
// 	$(this).hide();
// 	$("#video-3")[0].src += "&autoplay=1";
// 	$("#video-3").show();
// 	$("#close-btn-3").show();
// });
// $("#close-btn-3").click(function () {
// 	$(this).hide();
// 	$("#close-btn-3").hide();
// 	$("#video-preview-3").show();
// 	$("#video-3").hide();
// 	$("#video-3").attr("src", "");
// 	$("#video-3").attr("src", video3);
// });
