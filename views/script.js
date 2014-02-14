$(document).ready(function() 
{
		$(".fancybox").fancybox();
	});

		$("#gallery2 img").hide();

		$ ("#gallery3 img").hide();

		$("#gallery2 p").click(function() {
			$("#gallery2 img").fadeIn(1000);
				$("#gallery1 img").hide();
				$("#gallery3 img").hide();
		});

		$("#gallery3 p").click(function() {
			$("#gallery3 img").fadeIn(1000);
				$("#gallery2 img").hide();
				$("#gallery1 img").hide();
		});

		$("#gallery1 p").click(function() {
			$("#gallery1 img").fadeIn(1000);
				$("#gallery2 img").hide();
				$("#gallery3 img").hide();
		});


	