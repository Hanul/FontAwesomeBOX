FontAwesome.GetIcon = METHOD((m) => {
	
	let fontStyleEl = document.createElement('style');
	fontStyleEl.type = 'text/css';
	fontStyleEl.appendChild(document.createTextNode('@import url(/FontAwesome/R/css/font-awesome.min.css);'));
	document.getElementsByTagName('head')[0].appendChild(fontStyleEl);
	
	return {
		
		run : (name) => {
			
			let dom = DOM({
				tag : 'i',
				cls : 'fa fa-' + name
			});
			
			dom.getEl().setAttribute('aria-hidden', 'true');
			
			return dom;
		}
	};
});
