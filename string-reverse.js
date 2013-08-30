Object.defineProperty( String.prototype, "reverse",
	{
		"enumerable": false,
		"configurable": true,
		"writable": false,
		"value": function reverse( ){
			/*
				Some parts or the concept taken from this code is taken from
					Mathias Bynens Github repository Esrever(http://git.io/esrever)
				Lots of thanks to him :)
			*/
			var combiningMarks = "[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]";
			var highSurrogates = "[\uD800-\uDBFF]";
			var lowSurrogates = "[\uDC00-\uDFFF]";
			var otherSymbols = "[\0-\u02FF\u0370-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uDC00-\uFE1F\uFE30-\uFFFF]";

			var regexCombinedSymbols = new RegExp( "(" + otherSymbols 
				+ "|" + highSurrogates + lowSurrogates 
				+ "|" + highSurrogates + ")"
				+ "(" + combiningMarks + "+)", "g" );

			var regexSurrogatePairs = new RegExp( "(" + highSurrogates + ")(" + lowSurrogates + ")", "g" );

			return this.valueOf( )
				.replace( regexCombinedSymbols,
					function( wholeMatch, symbolsSurrogates, combiningMarks ){
						return combiningMarks.reverse( ) + symbolsSurrogates;
					} )
				.replace( regexSurrogatePairs, "$2$1" )
				.split( "" )
				.reverse( )
				.join( "" );	
		}
	} );