$('[data-toggle="tooltip"]').tooltip().on('click', (e) => {
	e.preventDefault;

	$('html, body').animate({
		scrollTop: 640
	}, 'slow' );
});


$('#bookmarklet').on('click', (e) => e.preventDefault());
$('#copyright').text(
	$('#copyright').text().replace('%%YEAR%%', new Date().getFullYear())
);