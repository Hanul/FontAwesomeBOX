FontAwesomeShowcase.MAIN = METHOD({
	
	run : () => {
		
		DIV({
			style : {
				padding : 20,
				fontSize : 100
			},
			c : FontAwesome.GetIcon('flag')
		}).appendTo(BODY);
	}
});
