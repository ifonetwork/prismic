export default function( selector ) {
	const core = SEMICOLON.Core;
	core.initFunction({ class: 'has-plugin-dataheights', event: 'pluginDataHeightsReady' });

	selector = core.getSelector( selector, false, false );
	if( selector.length < 1 ){
		return true;
	}

	selector.forEach(el => {
		let heightXs = el.getAttribute('data-height-xs') || 'auto',
			heightSm = el.getAttribute('data-height-sm') || heightXs,
			heightMd = el.getAttribute('data-height-md') || heightSm,
			heightLg = el.getAttribute('data-height-lg') || heightMd,
			heightXl = el.getAttribute('data-height-xl') || heightLg,
			heightXxl = el.getAttribute('data-height-xxl') || heightXl,
			body = core.getVars.elBody.classList,
			elHeight;

		if( body.contains('device-xs') ) {
			elHeight = heightXs;
		} else if( body.contains('device-sm') ) {
			elHeight = heightSm;
		} else if( body.contains('device-md') ) {
			elHeight = heightMd;
		} else if( body.contains('device-lg') ) {
			elHeight = heightLg;
		} else if( body.contains('device-xl') ) {
			elHeight = heightXl;
		} else if( body.contains('device-xxl') ) {
			elHeight = heightXxl;
		}

		if( elHeight ) {
			el.style.height = !isNaN( elHeight ) ? elHeight + 'px' : elHeight;
		}
	});

	core.getVars.resizers.dataHeights = () => SEMICOLON.Modules.dataHeights();
};
