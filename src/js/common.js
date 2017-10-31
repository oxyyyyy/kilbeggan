// Init slider
$("#index_header_slider").glide({
	type: "carousel"
});

// Init modal
// $('.modal').modal('show')

// Init wow.js
new WOW().init();


// Videos

// Video 1
var video1 = $("#video-1").attr("src");
$("#video-preview-1").click(function () {
	$(this).hide();
	$("#video-1")[0].src += "&autoplay=1";
	$("#video-1").show();
	$("#close-btn-1").show();
});
$("#close-btn-1").click(function () {
	$(this).hide();
	$("#close-btn-1").hide();
	$("#video-preview-1").show();
	$("#video-1").hide();
	$("#video-1").attr("src", "");
	$("#video-1").attr("src", video1);
});

// Video 2
var video2 = $("#video-2").attr("src");
$("#video-preview-2").click(function () {
	$(this).hide();
	$("#video-2")[0].src += "&autoplay=1";
	$("#video-2").show();
	$("#close-btn-2").show();
});
$("#close-btn-2").click(function () {
	$(this).hide();
	$("#close-btn-2").hide();
	$("#video-preview-2").show();
	$("#video-2").hide();
	$("#video-2").attr("src", "");
	$("#video-2").attr("src", video2);
});

// Video 3
var video3 = $("#video-3").attr("src");
$("#video-preview-3").click(function () {
	$(this).hide();
	$("#video-3")[0].src += "&autoplay=1";
	$("#video-3").show();
	$("#close-btn-3").show();
});
$("#close-btn-3").click(function () {
	$(this).hide();
	$("#close-btn-3").hide();
	$("#video-preview-3").show();
	$("#video-3").hide();
	$("#video-3").attr("src", "");
	$("#video-3").attr("src", video3);
});
