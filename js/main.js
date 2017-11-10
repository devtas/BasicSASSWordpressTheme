(function($) {
	var APP = APP || {};

	APP.masks = function() {
		$('.date').mask('00/00/0000');
		$('.time').mask('00:00:00');
		$('.date_time').mask('00/00/0000 00:00:00');
		$('.cep').mask('00000-000');
		$('.phone').mask('0000-0000');
		$('.phone_with_ddd').mask('(00) 0000-0000');
		$('.phone_us').mask('(000) 000-0000');
		$('.cpf').mask('000.000.000-00', {reverse: true});
		$('.cnpj').mask('00.000.000/0000-00', {reverse: true});
		$('.money').mask('000.000.000.000.000,00', {reverse: true});
		$('.money2').mask("#.##0,00", {reverse: true});
		$('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
			translation: {
				'Z': {
					pattern: /[0-9]/, optional: true
				}
			}
		});
		$('.percent').mask('##0,00%', {reverse: true});
	}

	APP.loaded = function() {
		console.log('');
		console.log('%c WP Theme by https://github.com/devtas/', 'background-color: #24292E; color: #fff; padding: 6px;');
		console.log('');
	}

	// This function init all services
	APP.init = function() {
		APP.masks();
		APP.loaded();
	}

}(jQuery))