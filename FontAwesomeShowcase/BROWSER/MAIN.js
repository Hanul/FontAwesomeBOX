FontAwesomeShowcase.MAIN = METHOD({
	
	run : () => {
		
		DIV({
			style : {
				padding : 20
			},
			c : FontAwesome.GetIcon({
				style : {
					fontSize : 100
				},
				key : 'flag'
			})
		}).appendTo(BODY);
	}
});
