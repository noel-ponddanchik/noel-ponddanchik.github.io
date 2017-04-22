$(document).ready(function(){

	$('.description').hide();
	$('.back').hide();
	$('#modal-overlay').hide();
	$('#about-modal').hide();


	$('.griditem').hover(function() {
		$(this).addClass('griditem-opacity');
		},  function(){
		$(this).removeClass('griditem-opacity');

	});



	$('.griditem').click(function() {
		if ($('#right').hasClass('container-active')) {
		} else {
			$('#left .container').addClass('container-active');
			$('#right .container').addClass('container-active');
			$('.griditem').hide();
			$(this).addClass('active-item');
			$(this).show();
			$(this).unbind('mouseenter mouseleave');
			$(this).removeClass('griditem-opacity');
			var thisitem = $(this).attr('id');
			$('#'+thisitem+'-description').show(1);
			$('.back').prependTo('#right .container');
			$('.back').show(1);

		}

	});


	$('#left, .back').click(function() {
			$('#left .container').removeClass('container-active');
			$('#right .container').removeClass('container-active');
			$('.griditem').removeClass('active-item');
			$('.griditem').hide();
			$('.description').hide();
			$('.griditem').show(1);
			$('.back').hide();
			$('.griditem').hover(function() {
				$(this).addClass('griditem-opacity');
					},  function(){
				$(this).removeClass('griditem-opacity');

	});


	});

	$('#button').click(function() {
		$('#modal-overlay').fadeIn(400, function() {
			$('#about-modal').show();
		});

	});

	$('#credits-button').click(function() {
		$('#modal-overlay').fadeIn(400, function() {
			$('#credits-modal').show();
		});

	});

	$('#x, #modal-overlay').click(function() {
		$('#about-modal').fadeOut(400, function() {
			$('#modal-overlay').fadeOut(400);
		});

	});

	$('#x, #modal-overlay').click(function() {
		$('#credits-modal').fadeOut(400, function() {
			$('#modal-overlay').fadeOut(400);
		});

	});





});
