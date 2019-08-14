$(function() {



	function calculate() {
			$total = ($( "#star-form-rate" ).slider( "value" ) * $( "#have-planets" ).slider( "value" ) * $( "#support-life" ).slider( "value" )  * $("#develop-life-frac" ).slider( "value" ) * $( "#intelligent-life-frac" ).slider( "value" ) * $( "#develop-tech-frac" ).slider( "value" ) * $( "#civilisation-length" ).slider( "value" ));
		
			if ($total > 1000) {
				$( "#eq-ans span" ).first().replaceWith("<span>N<br>" + Math.floor(($total) * 100 ) / 100 + "</span>");
				//$( "#eq-ans span" ).first().replaceWith("<span>N<br>" + Math.floor(($total / 1000) * 100 ) / 100 + 'k' + "</span>");
			} else {
				$( "#eq-ans span" ).first().replaceWith("<span>N<br>" + Math.floor($total * 100 ) / 100 + "</span>");
			}
	};

	$(function(){
    	var tabindex = 1;
    	$('.ui-slider-handle').each(function() {
        	if (this.type != "hidden") {
           		var $input = $(this);
           		$input.attr("tabindex", tabindex);
           		tabindex++;
        	}
    	});
	});


		$( "#star-form-rate" ).slider({
			orientation: "vertical",
			range: "min",
			min: 1,
			max: 30,
			value: 30,
			slide: function( event, ui ) {
				$( "#star-form-rate a.ui-slider-handle span" ).replaceWith("<span>" + ui.value + "</span>");

				calculate();
			}
		});

		$("#have-planets").slider({
			orientation: 'vertical',
			range: "min",
			min: 0.02,
			max: 1.00,
			value: 0.5,
			step:0.02,
			slide: function( event, ui ) {
				$( "#have-planets a.ui-slider-handle span" ).replaceWith("<span>" + ui.value + "</span>");
				calculate();
			}
		});

		$("#support-life").slider({
			orientation: 'vertical',
			range: "min",
			min: 1,
			max: 10,
			value: 10,
			slide: function( event, ui ) {
				$( "#support-life a.ui-slider-handle span" ).replaceWith("<span>" + ui.value + "</span>");
				calculate();
			}
		});
		$("#develop-life-frac").slider({
			orientation: 'vertical',
			range: "min",
			min: 0.02,
			max: 1,
			value: 1,
			step: 0.02,
			slide: function( event, ui ) {
				$( "#develop-life-frac a.ui-slider-handle span" ).replaceWith("<span>" + ui.value + "</span>");
				calculate();
			}
		});
		$("#intelligent-life-frac").slider({
			orientation: 'vertical',
			range: "min",
			min: 0.02,
			max: 1,
			value: 1,
			step: 0.02,
			slide: function( event, ui ) {
				$( "#intelligent-life-frac a.ui-slider-handle span" ).replaceWith("<span>" + ui.value + "</span>");
				calculate();
			}
		});
		$("#develop-tech-frac").slider({
			orientation: 'vertical',
			range: "min",
			min: 0.02,
			max: 1,
			value: 1,
			step: 0.02,
			slide: function( event, ui ) {
				$( "#develop-tech-frac a.ui-slider-handle span" ).replaceWith("<span>" + ui.value + "</span>");
				calculate();
			}
		});
		$("#civilisation-length").slider({
			orientation: 'vertical',
			range: "min",
			min: 10,
			max: 1000,
			value: 1000,
			step: 10,
			slide: function( event, ui ) {
				$( "#civilisation-length a.ui-slider-handle span" ).replaceWith("<span>" + ui.value + "</span>");
				calculate();
			}
		});
		

		$("#star-form-rate a.ui-slider-handle").append('<span></span>')
		$("#have-planets a.ui-slider-handle").append('<span></span>');
		$("#support-life a.ui-slider-handle").append('<span></span>');
		$("#develop-life-frac a.ui-slider-handle").append('<span></span>');
		$("#intelligent-life-frac a.ui-slider-handle").append('<span></span>');
		$("#develop-tech-frac a.ui-slider-handle").append('<span></span>');
		$("#civilisation-length a.ui-slider-handle").append('<span></span>');

		$( "#star-form-rate a.ui-slider-handle span" ).replaceWith("<span>" + $("#star-form-rate").slider("value") + "</span>")
		$( "#have-planets a.ui-slider-handle span" ).replaceWith("<span>" + $("#have-planets").slider("value") + "</span>")
		$( "#support-life a.ui-slider-handle span" ).replaceWith("<span>" + $("#support-life").slider("value") + "</span>")
		$( "#develop-life-frac a.ui-slider-handle span" ).replaceWith("<span>" + $("#develop-life-frac").slider("value") + "</span>")
		$( "#intelligent-life-frac a.ui-slider-handle span" ).replaceWith("<span>" + $("#intelligent-life-frac").slider("value") + "</span>")
		$( "#develop-tech-frac a.ui-slider-handle span" ).replaceWith("<span>" + $("#develop-tech-frac").slider("value") + "</span>")
		$( "#civilisation-length a.ui-slider-handle span" ).replaceWith("<span>" + $("#civilisation-length").slider("value") + "</span>")

		$timeIn = 200;
		$timeOut = 200;
		
		$("#eq-ans").hover(function(){
			$("#eq-ans p").animate({opacity: 0}, $timeOut);	
			$("#blurb-ans").animate({opacity: 1}, $timeIn);	
			}, function(){
				$("#blurb-ans").animate({opacity: 0}, $timeOut);
				$("#eq-ans p").animate({opacity: 1}, $timeIn);	
			});	

		$("#eq-sfr").hover(function(){
			$("#eq-ans p").animate({opacity: 0}, $timeOut);	
			$("#blurb-sfr").animate({opacity: 1}, $timeIn);	
			}, function(){
				$("#blurb-sfr").animate({opacity: 0}, $timeOut);
				$("#eq-ans p").animate({opacity: 1}, $timeIn);	
			});
		
		$("#eq-hp").hover(function(){
			$("#eq-ans p").animate({opacity: 0}, $timeOut);	
			$("#blurb-hp").animate({opacity: 1}, $timeIn);	
			}, function(){
				$("#blurb-hp").animate({opacity: 0}, $timeOut);
				$("#eq-ans p").animate({opacity: 1}, $timeIn);	
			});
		
		$("#eq-sl").hover(function(){
			$("#eq-ans p").fadeTo($timeOut, 0);	
			$("#blurb-sl").fadeTo($timeIn, 1)
			}, function(){
				$("#blurb-sl").fadeTo($timeOut, 0);
				$("#eq-ans p").fadeTo($timeIn, 1)
			});
		
		$("#eq-dlf").hover(function(){
			$("#eq-ans p").fadeTo($timeOut, 0);	
			$("#blurb-dlf").fadeTo($timeIn, 1)
			}, function(){
				$("#blurb-dlf").fadeTo($timeOut, 0);
				$("#eq-ans p").fadeTo($timeIn, 1);	
			});

		$("#eq-ilf").hover(function(){
			$("#eq-ans p").fadeTo($timeOut, 0);	
			$("#blurb-ilf").fadeTo($timeIn, 1)
			}, function(){
				$("#blurb-ilf").fadeTo($timeOut, 0);
				$("#eq-ans p").fadeTo($timeIn, 1);	
			});
		
		$("#eq-dtf").hover(function(){
			$("#eq-ans p").fadeTo($timeOut, 0);	
			$("#blurb-dtf").fadeTo($timeIn, 1)
			}, function(){
				$("#blurb-dtf").fadeTo($timeOut, 0);
				$("#eq-ans p").fadeTo($timeIn, 1);	
			});

		$("#eq-cl").hover(function(){
			$("#eq-ans p").fadeTo($timeOut, 0);	
			$("#blurb-cl").fadeTo($timeIn, 1)
			}, function(){
				$("#blurb-cl").fadeTo($timeOut, 0);
				$("#eq-ans p").fadeTo($timeIn, 1);	
			});

		$(window).bind("load",function() {
			$("#blurb-ans").delay(800).fadeTo(1000, 1);
		});

	});