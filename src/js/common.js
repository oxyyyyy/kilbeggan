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
	console.log(numberOfVideos);
	var video = $(".video").attr("id");
	var videoSrc = $(".video").attr("src");
	var videoPreview = $(".video-preview").attr("id");
	var videoPlayBtn = $(".play-btn").attr("id");
	var videoCloseBtn = $(".close-btn-container").attr("id");
	$("#"+videoPreview).click(function () {
		$(this).hide();
		$("#"+video)[0].videoSrc += "&autoplay=1";
		$("#"+video).show();
		$("#"+videoCloseBtn).show();
	});
	$("#"+videoCloseBtn).click(function () {
		$(this).hide();
		$("#"+videoCloseBtn).hide();
		$("#"+videoPreview).show();
		$("#"+video).hide();
		$("#"+video).attr("src", "");
		$("#"+video).attr("src", videoSrc); 
	});
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
