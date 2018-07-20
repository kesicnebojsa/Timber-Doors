var allModelsObejct = {
	//E1
	PQCE1 : {
		startPrice: 720, id: '#price1_E1 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=93};
			if (DOORHEIGHT>2100) {price+=82};
			if (DOORWIDTH>910) {price+=92};
			if ( (DOORWIDTH>910) && (DOORHEIGHT>2100) ) {price+=1};
		}
	},
	SQCE1 : {
		startPrice: 771, id: '#price2_E1 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=103};
			if (DOORHEIGHT>2100) {price+=93};
			if (DOORWIDTH>910) {price+=155};
		}
	},
	PQVE1 : {
		startPrice: 658, id: '#price3_E1 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=80};
			if (DOORHEIGHT>2100) {price+=60};
			if (DOORWIDTH>910) {price+=80};
		}
	},
	//E152
	PQCE152 : {
		startPrice: 2025, id: '#price1_E152 > h2', maxHeight : 2400, maxWidth : 1300,
		extraCalc() {
			if (DOORWIDTH>1000) {price+=618};
			if (DOORHEIGHT>2100) {price+=185};
		}
	},
	SQCE152 : {
		startPrice: 2184, id: '#price2_E152 > h2', maxHeight : 2400, maxWidth : 1300,
		extraCalc() {
			if (DOORWIDTH>1000) {price+=618};
			if (DOORHEIGHT>2100) {price+=206};
		}
	},
	PQVE152 : {
		startPrice: 1798, id: '#price3_E152 > h2', maxHeight : 2400, maxWidth : 1300,
		extraCalc() {
			if (DOORWIDTH>1000) {price+=500};
			if (DOORHEIGHT>2100) {price+=160};
		}
	},
	//AR10
	PQCAR10 : {
		startPrice: 891, id: '#price1_AR10 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=93};
			if (DOORHEIGHT>2100) {price+=82};
			if (DOORWIDTH>910) {price+=92};
			if ( (DOORWIDTH>910) && (DOORHEIGHT>2100) ) {price+=1};
		},
		clearGlass : 110,
		obscure : 130,
		translucent : 139,
		etchlite : 139,
		doubleClear : 163,
		doubleObscure : 179,
		doubleTranslucent : 205,
		doubleEtchlite : 205,
		doubleGlazing : 40
	},
	SQCAR10 : {
		startPrice: 1000, id: '#price2_AR10 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=93};
			if (DOORHEIGHT>2100) {price+=123};
			if ( (DOORWIDTH>860) && (DOORHEIGHT>2100) ) {price+=30};
			if (DOORWIDTH>910) {price+=202};
			if ( (DOORWIDTH>910) && (DOORHEIGHT>2100) ) {price-=22};
		},
		clearGlass : 110,
		obscure : 130,
		translucent : 139,
		etchlite : 139,
		doubleClear : 163,
		doubleObscure : 179,
		doubleTranslucent : 205,
		doubleEtchlite : 205,
		doubleGlazing : 40
	},
	PQVAR10 : {
		startPrice: 865, id: '#price3_AR10 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=90};
			if (DOORHEIGHT>2100) {price+=80};
			if (DOORWIDTH>910) {price+=90};
		},
		clearGlass : 110,
		obscure : 130,
		translucent : 139,
		etchlite : 139,
		doubleClear : 163,
		doubleObscure : 179,
		doubleTranslucent : 205,
		doubleEtchlite : 205,
		doubleGlazing : 40
	},
	//AR11
	PQCAR11 : {
		startPrice: 1071, id: '#price1_AR11 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=93};
			if (DOORHEIGHT>2100) {price+=83};
			if ( (DOORWIDTH>860) && (DOORHEIGHT>2100) ) {price-=1};
			if (DOORWIDTH>910) {price+=93};
		},
		clearGlass : 187,
		obscure : 210,
		translucent : 220,
		etchlite : 220,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 650,
		doubleEtchlite : 650,
		doubleGlazing : 160
	},
	SQCAR11 : {
		startPrice: 1160, id: '#price2_AR11 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=130};
			if (DOORHEIGHT>2100) {price+=131};
			if ( (DOORWIDTH>860) && (DOORHEIGHT>2100) ) {price-=5};
			if (DOORWIDTH>910) {price+=125};
			if ( (DOORWIDTH>910) && (DOORHEIGHT>2100) ) {price+=5};
		},
		clearGlass : 187,
		obscure : 210,
		translucent : 220,
		etchlite : 220,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 650,
		doubleEtchlite : 650,
		doubleGlazing : 160
	},
	PQVAR11 : {
		startPrice: 1040, id: '#price3_AR11 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=90};
			if (DOORHEIGHT>2100) {price+=80};
			if (DOORWIDTH>910) {price+=90};
		},
		clearGlass : 187,
		obscure : 210,
		translucent : 220,
		etchlite : 220,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 650,
		doubleEtchlite : 650,
		doubleGlazing : 160
	},
	//AR12
	PQCAR12 : {
		startPrice: 1071, id: '#price1_AR12 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=93};
			if (DOORHEIGHT>2100) {price+=83};
			if ( (DOORWIDTH>860) && (DOORHEIGHT>2100) ) {price-=1};
			if (DOORWIDTH>910) {price+=93};
		},
		clearGlass : 187,
		obscure : 210,
		translucent : 220,
		etchlite : 220,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 650,
		doubleEtchlite : 650,
		doubleGlazing : 160
	},
	SQCAR12 : {
		startPrice: 1160, id: '#price2_AR12 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=130};
			if (DOORHEIGHT>2100) {price+=131};
			if ( (DOORWIDTH>860) && (DOORHEIGHT>2100) ) {price-=5};
			if (DOORWIDTH>910) {price+=125};
			if ( (DOORWIDTH>910) && (DOORHEIGHT>2100) ) {price+=5};
		},
		clearGlass : 187,
		obscure : 210,
		translucent : 220,
		etchlite : 220,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 650,
		doubleEtchlite : 650,
		doubleGlazing : 160
	},
	PQVAR12 : {
		startPrice: 1040, id: '#price3_AR12 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=90};
			if (DOORHEIGHT>2100) {price+=80};
			if (DOORWIDTH>910) {price+=90};
		},
		clearGlass : 187,
		obscure : 210,
		translucent : 220,
		etchlite : 220,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 650,
		doubleEtchlite : 650,
		doubleGlazing : 160
	},
	//AR13
	PQCAR13 : {
		startPrice: 1071, id: '#price1_AR13 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=93};
			if (DOORHEIGHT>2100) {price+=83};
			if ( (DOORWIDTH>860) && (DOORHEIGHT>2100) ) {price-=1};
			if (DOORWIDTH>910) {price+=93};
		},
		clearGlass : 187,
		obscure : 210,
		translucent : 220,
		etchlite : 220,
		doubleClear : 386,
		doubleObscure : 440,
		doubleTranslucent : 499,
		doubleEtchlite : 499,
		doubleGlazing : 120
	},
	SQCAR13 : {
		startPrice: 1160, id: '#price2_AR13 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=130};
			if (DOORHEIGHT>2100) {price+=131};
			if ( (DOORWIDTH>860) && (DOORHEIGHT>2100) ) {price-=5};
			if (DOORWIDTH>910) {price+=125};
			if ( (DOORWIDTH>910) && (DOORHEIGHT>2100) ) {price+=5};
		},
		clearGlass : 187,
		obscure : 210,
		translucent : 220,
		etchlite : 220,
		doubleClear : 386,
		doubleObscure : 440,
		doubleTranslucent : 499,
		doubleEtchlite : 499,
		doubleGlazing : 120
	},
	PQVAR13 : {
		startPrice: 1040, id: '#price3_AR13 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=90};
			if (DOORHEIGHT>2100) {price+=80};
			if (DOORWIDTH>910) {price+=90};
		},
		clearGlass : 187,
		obscure : 210,
		translucent : 220,
		etchlite : 220,
		doubleClear : 386,
		doubleObscure : 440,
		doubleTranslucent : 499,
		doubleEtchlite : 499,
		doubleGlazing : 120
	},
	//AR14
	PQCAR14 : {
		startPrice: 1071, id: '#price1_AR14 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=93};
			if (DOORHEIGHT>2100) {price+=83};
			if ( (DOORWIDTH>860) && (DOORHEIGHT>2100) ) {price-=1};
			if (DOORWIDTH>910) {price+=93};
		},
		clearGlass : 187,
		obscure : 210,
		translucent : 220,
		etchlite : 220,
		doubleClear : 386,
		doubleObscure : 440,
		doubleTranslucent : 499,
		doubleEtchlite : 499,
		doubleGlazing : 120
	},
	SQCAR14 : {
		startPrice: 1160, id: '#price2_AR14 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=130};
			if (DOORHEIGHT>2100) {price+=131};
			if ( (DOORWIDTH>860) && (DOORHEIGHT>2100) ) {price-=5};
			if (DOORWIDTH>910) {price+=125};
			if ( (DOORWIDTH>910) && (DOORHEIGHT>2100) ) {price+=5};
		},
		clearGlass : 187,
		obscure : 210,
		translucent : 220,
		etchlite : 220,
		doubleClear : 386,
		doubleObscure : 440,
		doubleTranslucent : 499,
		doubleEtchlite : 499,
		doubleGlazing : 120
	},
	PQVAR14 : {
		startPrice: 1040, id: '#price3_AR14 > h2', maxHeight : 2400, maxWidth : 1000,
		extraCalc() {
			if (DOORWIDTH>860) {price+=90};
			if (DOORHEIGHT>2100) {price+=80};
			if (DOORWIDTH>910) {price+=90};
		},
		clearGlass : 187,
		obscure : 210,
		translucent : 220,
		etchlite : 220,
		doubleClear : 386,
		doubleObscure : 440,
		doubleTranslucent : 499,
		doubleEtchlite : 499,
		doubleGlazing : 120
	},
	//E1 With
	PQPE1WR : {
		startPrice: 567, id: '#price1_E1WR > h2'
	},
	PQCE1WR : {
		startPrice: 949, id: '#price2_E1WR > h2'
	},
	SQCE1WR : {
		startPrice: 1056, id: '#price3_E1WR > h2'
	},
	PQVE1WR : {
		startPrice: 809, id: '#price4_E1WR > h2'
	},
	ROE1WR : {
		startPrice: 882, id: '#price5_E1WR > h2'
	},
	AAE1WR : {
		startPrice: 882, id: '#price6_E1WR > h2'
	},
	//E2
	PQPE2 : {
		startPrice: 661, id: '#price1_E2 > h2'
	},
	PQCE2 : {
		startPrice: 1061, id: '#price2_E2 > h2'
	},
	SQCE2 : {
		startPrice: 1181, id: '#price3_E2 > h2'
	},
	PQVE2 : {
		startPrice: 905, id: '#price4_E2 > h2'
	},
	ROE2 : {
		startPrice: 987, id: '#price5_E2 > h2'
	},
	AAE2 : {
		startPrice: 987, id: '#price6_E2 > h2'
	},
	//E2 NO
	PQPE2NS : {
		startPrice: 830, id: '#price1_E2NS > h2'
	},
	PQCE2NS : {
		startPrice: 1059, id: '#price2_E2NS > h2'
	},
	SQCE2NS : {
		startPrice: 1164, id: '#price3_E2NS > h2'
	},
	PQVE2NS : {
		startPrice: 919, id: '#price4_E2NS > h2'
	},
	ROE2NS : {
		startPrice: 990, id: '#price5_E2NS > h2'
	},
	AAE2NS : {
		startPrice: 990, id: '#price6_E2NS > h2'
	},
	//AR44
	PQPAR44EXT : {
		startPrice: 676, id: '#price1_AR44EXT > h2'
	},
	PQCAR44EXT : {
		startPrice: 1092, id: '#price2_AR44EXT > h2'
	},
	SQCAR44EXT : {
		startPrice: 1209, id: '#price3_AR44EXT > h2'
	},
	PQVAR44EXT : {
		startPrice: 939, id: '#price4_AR44EXT > h2'
	},
	ROAR44EXT : {
		startPrice: 1018, id: '#price5_AR44EXT > h2'
	},
	AAAR44EXT : {
		startPrice: 1018, id: '#price6_AR44EXT > h2'
	},
	//E17
	PQPE17 : {
		startPrice: 733, id: '#price1_E17 > h2',
		clearGlass : 136,
		obscure : 165,
		translucent : 168,
		etchlite : 168
	},
	PQCE17 : {
		startPrice: 1036, id: '#price2_E17 > h2',
		clearGlass : 136,
		obscure : 165,
		translucent : 168,
		etchlite : 168
	},
	SQCE17 : {
		startPrice: 1152, id: '#price3_E17 > h2',
		clearGlass : 136,
		obscure : 165,
		translucent : 168,
		etchlite : 168
	},
	PQVE17 : {
		startPrice: 903, id: '#price4_E17 > h2',
		clearGlass : 136,
		obscure : 165,
		translucent : 168,
		etchlite : 168
	},
	ROE17 : {
		startPrice: 970, id: '#price5_E17 > h2',
		clearGlass : 136,
		obscure : 165,
		translucent : 168,
		etchlite : 168
	},
	AAE17 : {
		startPrice: 970, id: '#price6_E17 > h2',
		clearGlass : 136,
		obscure : 165,
		translucent : 168,
		etchlite : 168
	},
	//E18
	PQPE18 : {
		startPrice: 637, id: '#price1_E18 > h2',
		clearGlass : 100,
		obscure : 125,
		translucent : 132,
		etchlite : 132,
		doubleClear : 160,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	PQCE18 : {
		startPrice: 903, id: '#price2_E18 > h2',
		clearGlass : 100,
		obscure : 125,
		translucent : 132,
		etchlite : 132,
		doubleClear : 160,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	SQCE18 : {
		startPrice: 1052, id: '#price3_E18 > h2',
		clearGlass : 100,
		obscure : 125,
		translucent : 132,
		etchlite : 132,
		doubleClear : 160,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	PQVE18 : {
		startPrice: 781, id: '#price4_E18 > h2',
		clearGlass : 100,
		obscure : 125,
		translucent : 132,
		etchlite : 132,
		doubleClear : 160,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	ROE18 : {
		startPrice: 843, id: '#price5_E18 > h2',
		clearGlass : 100,
		obscure : 125,
		translucent : 132,
		etchlite : 132,
		doubleClear : 160,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	AAE18 : {
		startPrice: 843, id: '#price6_E18 > h2',
		clearGlass : 100,
		obscure : 125,
		translucent : 132,
		etchlite : 132,
		doubleClear : 160,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	//E19
	PQPE19 : {
		startPrice: 821, id: '#price1_E19 > h2',
		clearGlass : 272,
		obscure : 394,
		translucent : 449,
		etchlite : 449
	},
	PQCE19 : {
		startPrice: 1174, id: '#price2_E19 > h2',
		clearGlass : 272,
		obscure : 394,
		translucent : 449,
		etchlite : 449
	},
	SQCE19 : {
		startPrice: 1345, id: '#price3_E19 > h2',
		clearGlass : 272,
		obscure : 394,
		translucent : 449,
		etchlite : 449
	},
	PQVE19 : {
		startPrice: 1025, id: '#price4_E19 > h2',
		clearGlass : 272,
		obscure : 394,
		translucent : 449,
		etchlite : 449
	},
	ROE19 : {
		startPrice: 1100, id: '#price5_E19 > h2',
		clearGlass : 272,
		obscure : 394,
		translucent : 449,
		etchlite : 449
	},
	AAE19 : {
		startPrice: 1100, id: '#price6_E19 > h2',
		clearGlass : 272,
		obscure : 394,
		translucent : 449,
		etchlite : 449
	},
	//E20
	PQPE20 : {
		startPrice: 699, id: '#price1_E20 > h2',
		clearGlass : 195,
		obscure : 249,
		translucent : 262,
		etchlite : 262
	},
	PQCE20 : {
		startPrice: 1009, id: '#price2_E20 > h2',
		clearGlass : 195,
		obscure : 249,
		translucent : 262,
		etchlite : 262
	},
	SQCE20 : {
		startPrice: 1153, id: '#price3_E20 > h2',
		clearGlass : 195,
		obscure : 249,
		translucent : 262,
		etchlite : 262
	},
	PQVE20 : {
		startPrice: 870, id: '#price4_E20 > h2',
		clearGlass : 195,
		obscure : 249,
		translucent : 262,
		etchlite : 262
	},
	ROE20 : {
		startPrice: 942, id: '#price5_E20 > h2',
		clearGlass : 195,
		obscure : 249,
		translucent : 262,
		etchlite : 262
	},
	AAE20 : {
		startPrice: 942, id: '#price6_E20 > h2',
		clearGlass : 195,
		obscure : 249,
		translucent : 262,
		etchlite : 262
	},
	//E21
	PQPE21 : {
		startPrice: 749, id: '#price1_E21 > h2',
		clearGlass : 128,
		obscure : 178,
		translucent : 199,
		etchlite : 199
	},
	PQCE21 : {
		startPrice: 1089, id: '#price2_E21 > h2',
		clearGlass : 128,
		obscure : 178,
		translucent : 199,
		etchlite : 199
	},
	SQCE21 : {
		startPrice: 1243, id: '#price3_E21 > h2',
		clearGlass : 128,
		obscure : 178,
		translucent : 199,
		etchlite : 199
	},
	PQVE21 : {
		startPrice: 953, id: '#price4_E21 > h2',
		clearGlass : 128,
		obscure : 178,
		translucent : 199,
		etchlite : 199
	},
	ROE21 : {
		startPrice: 1021, id: '#price5_E21 > h2',
		clearGlass : 128,
		obscure : 178,
		translucent : 199,
		etchlite : 199
	},
	AAE21 : {
		startPrice: 1021, id: '#price6_E21 > h2',
		clearGlass : 128,
		obscure : 178,
		translucent : 199,
		etchlite : 199
	},
	//E3
	PQPE3 : {
		startPrice: 618, id: '#price1_E3 > h2'
	},
	PQCE3 : {
		startPrice: 1029, id: '#price2_E3 > h2'
	},
	SQCE3 : {
		startPrice: 1104, id: '#price3_E3 > h2'
	},
	PQVE3 : {
		startPrice: 850, id: '#price4_E3 > h2'
	},
	ROE3 : {
		startPrice: 925, id: '#price5_E3 > h2'
	},
	AAE3 : {
		startPrice: 925, id: '#price6_E3 > h2'
	},
	//E4
	PQPE4 : {
		startPrice: 499, id: '#price1_E4 > h2'
	},
	PQCE4 : {
		startPrice: 952, id: '#price2_E4 > h2'
	},
	SQCE4 : {
		startPrice: 1019, id: '#price3_E4 > h2'
	},
	PQVE4 : {
		startPrice: 784, id: '#price4_E4 > h2'
	},
	ROE4 : {
		startPrice: 852, id: '#price5_E4 > h2'
	},
	AAE4 : {
		startPrice: 852, id: '#price6_E4 > h2'
	},
	//E4OT
	PQPE4OT : {
		startPrice: 449, id: '#price1_E4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197,
		doubleClear : 316,
		doubleObscure : 355,
		doubleTranslucent : 399,
		doubleEtchlite : 399,
		doubleGlazing : 80
	},
	PQCE4OT : {
		startPrice: 827, id: '#price2_E4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197,
		doubleClear : 316,
		doubleObscure : 355,
		doubleTranslucent : 399,
		doubleEtchlite : 399,
		doubleGlazing : 80
	},
	SQCE4OT : {
		startPrice: 895, id: '#price3_E4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197,
		doubleClear : 316,
		doubleObscure : 355,
		doubleTranslucent : 399,
		doubleEtchlite : 399,
		doubleGlazing : 80
	},
	PQVE4OT : {
		startPrice: 702, id: '#price4_E4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197,
		doubleClear : 316,
		doubleObscure : 355,
		doubleTranslucent : 399,
		doubleEtchlite : 399,
		doubleGlazing : 80
	},
	ROE4OT : {
		startPrice: 758, id: '#price5_E4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197,
		doubleClear : 316,
		doubleObscure : 355,
		doubleTranslucent : 399,
		doubleEtchlite : 399,
		doubleGlazing : 80
	},
	AAE4OT : {
		startPrice: 758, id: '#price6_E4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197,
		doubleClear : 316,
		doubleObscure : 355,
		doubleTranslucent : 399,
		doubleEtchlite : 399,
		doubleGlazing : 80
	},
	//E4S
	PQPE4S : {
		startPrice: 348, id: '#price1_E4S > h2',
		clearGlass : 93,
		obscure : 99,
		translucent : 126,
		etchlite : 126,
		doubleClear : 158,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	PQCE4S : {
		startPrice: 468, id: '#price2_E4S > h2',
		clearGlass : 93,
		obscure : 99,
		translucent : 126,
		etchlite : 126,
		doubleClear : 158,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	SQCE4S : {
		startPrice: 491, id: '#price3_E4S > h2',
		clearGlass : 93,
		obscure : 99,
		translucent : 126,
		etchlite : 126,
		doubleClear : 158,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	PQVE4S : {
		startPrice: 414, id: '#price4_E4S > h2',
		clearGlass : 93,
		obscure : 99,
		translucent : 126,
		etchlite : 126,
		doubleClear : 158,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	ROE4S : {
		startPrice: 435, id: '#price5_E4S > h2',
		clearGlass : 93,
		obscure : 99,
		translucent : 126,
		etchlite : 126,
		doubleClear : 158,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	AAE4S : {
		startPrice: 435, id: '#price6_E4S > h2',
		clearGlass : 93,
		obscure : 99,
		translucent : 126,
		etchlite : 126,
		doubleClear : 158,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	//E5
	PQPE5 : {
		startPrice: 595, id: '#price1_E5 > h2'
	},
	PQCE5 : {
		startPrice: 970, id: '#price2_E5 > h2'
	},
	SQCE5 : {
		startPrice: 1029, id: '#price3_E5 > h2'
	},
	PQVE5 : {
		startPrice: 802, id: '#price4_E5 > h2'
	},
	ROE5 : {
		startPrice: 868, id: '#price5_E5 > h2'
	},
	AAE5 : {
		startPrice: 868, id: '#price6_E5 > h2'
	},
	//E6
	PQPE6 : {
		startPrice: 638, id: '#price1_E6 > h2'
	},
	PQCE6 : {
		startPrice: 1037, id: '#price2_E6 > h2'
	},
	SQCE6 : {
		startPrice: 1108, id: '#price3_E6 > h2'
	},
	PQVE6 : {
		startPrice: 864, id: '#price4_E6 > h2'
	},
	ROE6 : {
		startPrice: 935, id: '#price5_E6 > h2'
	},
	AAE6 : {
		startPrice: 935, id: '#price6_E6 > h2'
	},
	//E7
	PQPE7 : {
		startPrice: 582, id: '#price1_E7 > h2'
	},
	PQCE7 : {
		startPrice: 882, id: '#price2_E7 > h2'
	},
	SQCE7 : {
		startPrice: 922, id: '#price3_E7 > h2'
	},
	PQVE7 : {
		startPrice: 731, id: '#price4_E7 > h2'
	},
	ROE7 : {
		startPrice: 785, id: '#price5_E7 > h2'
	},
	AAE7 : {
		startPrice: 785, id: '#price6_E7 > h2'
	},
	//E8
	PQPE8 : {
		startPrice: 656, id: '#price1_E8 > h2'
	},
	PQCE8 : {
		startPrice: 1051, id: '#price2_E8 > h2'
	},
	SQCE8 : {
		startPrice: 1124, id: '#price3_E8 > h2'
	},
	PQVE8 : {
		startPrice: 899, id: '#price4_E8 > h2'
	},
	ROE8 : {
		startPrice: 951, id: '#price5_E8 > h2'
	},
	AAE8 : {
		startPrice: 951, id: '#price6_E8 > h2'
	},
	//E8OT
	PQPE8OT : {
		startPrice: 511, id: '#price1_E8OT > h2',
		clearGlass : 146,
		obscure : 199,
		translucent : 250,
		etchlite : 250,
		doubleClear : 359,
		doubleObscure : 409,
		doubleTranslucent : 470,
		doubleEtchlite : 470,
		doubleGlazing : 80
	},
	PQCE8OT : {
		startPrice: 787, id: '#price2_E8OT > h2',
		clearGlass : 146,
		obscure : 199,
		translucent : 250,
		etchlite : 250,
		doubleClear : 359,
		doubleObscure : 409,
		doubleTranslucent : 470,
		doubleEtchlite : 470,
		doubleGlazing : 80
	},
	SQCE8OT : {
		startPrice: 823, id: '#price3_E8OT > h2',
		clearGlass : 146,
		obscure : 199,
		translucent : 250,
		etchlite : 250,
		doubleClear : 359,
		doubleObscure : 409,
		doubleTranslucent : 470,
		doubleEtchlite : 470,
		doubleGlazing : 80
	},
	PQVE8OT : {
		startPrice: 675, id: '#price4_E8OT > h2',
		clearGlass : 146,
		obscure : 199,
		translucent : 250,
		etchlite : 250,
		doubleClear : 359,
		doubleObscure : 409,
		doubleTranslucent : 470,
		doubleEtchlite : 470,
		doubleGlazing : 80
	},
	ROE8OT : {
		startPrice: 727, id: '#price5_E8OT > h2',
		clearGlass : 146,
		obscure : 199,
		translucent : 250,
		etchlite : 250,
		doubleClear : 359,
		doubleObscure : 409,
		doubleTranslucent : 470,
		doubleEtchlite : 470,
		doubleGlazing : 80
	},
	AAE8OT : {
		startPrice: 727, id: '#price6_E8OT > h2',
		clearGlass : 146,
		obscure : 199,
		translucent : 250,
		etchlite : 250,
		doubleClear : 359,
		doubleObscure : 409,
		doubleTranslucent : 470,
		doubleEtchlite : 470,
		doubleGlazing : 80
	},
	//E8S
	PQPE8S : {
		startPrice: 343, id: '#price1_E8S > h2',
		clearGlass : 99,
		obscure : 129,
		translucent : 160,
		etchlite : 160,
		doubleClear : 179,
		doubleObscure : 199,
		doubleTranslucent : 235,
		doubleEtchlite : 235,
		doubleGlazing : 40
	},
	PQCE8S : {
		startPrice: 451, id: '#price2_E8S > h2',
		clearGlass : 99,
		obscure : 129,
		translucent : 160,
		etchlite : 160,
		doubleClear : 179,
		doubleObscure : 199,
		doubleTranslucent : 235,
		doubleEtchlite : 235,
		doubleGlazing : 40
	},
	SQCE8S : {
		startPrice: 473, id: '#price3_E8S > h2',
		clearGlass : 99,
		obscure : 129,
		translucent : 160,
		etchlite : 160,
		doubleClear : 179,
		doubleObscure : 199,
		doubleTranslucent : 235,
		doubleEtchlite : 235,
		doubleGlazing : 40
	},
	PQVE8S : {
		startPrice: 404, id: '#price4_E8S > h2',
		clearGlass : 99,
		obscure : 129,
		translucent : 160,
		etchlite : 160,
		doubleClear : 179,
		doubleObscure : 199,
		doubleTranslucent : 235,
		doubleEtchlite : 235,
		doubleGlazing : 40
	},
	ROE8S : {
		startPrice: 423, id: '#price5_E8S > h2',
		clearGlass : 99,
		obscure : 129,
		translucent : 160,
		etchlite : 160,
		doubleClear : 179,
		doubleObscure : 199,
		doubleTranslucent : 235,
		doubleEtchlite : 235,
		doubleGlazing : 40
	},
	AAE8S : {
		startPrice: 423, id: '#price6_E8S > h2',
		clearGlass : 99,
		obscure : 129,
		translucent : 160,
		etchlite : 160,
		doubleClear : 179,
		doubleObscure : 199,
		doubleTranslucent : 235,
		doubleEtchlite : 235,
		doubleGlazing : 40
	},
	//E9
	PQPE9 : {
		startPrice: 652, id: '#price1_E9 > h2',
		clearGlass : 170,
		obscure : 215,
		translucent : 241,
		etchlite : 241
	},
	PQCE9 : {
		startPrice: 957, id: '#price2_E9 > h2',
		clearGlass : 170,
		obscure : 215,
		translucent : 241,
		etchlite : 241
	},
	SQCE9 : {
		startPrice: 1025, id: '#price3_E9 > h2',
		clearGlass : 170,
		obscure : 215,
		translucent : 241,
		etchlite : 241
	},
	PQVE9 : {
		startPrice: 829, id: '#price4_E9 > h2',
		clearGlass : 170,
		obscure : 215,
		translucent : 241,
		etchlite : 241
	},
	ROE9 : {
		startPrice: 885, id: '#price5_E9 > h2',
		clearGlass : 170,
		obscure : 215,
		translucent : 241,
		etchlite : 241
	},
	AAE9 : {
		startPrice: 885, id: '#price6_E9 > h2',
		clearGlass : 170,
		obscure : 215,
		translucent : 241,
		etchlite : 241
	},
	//E9S
	PQPE9S : {
		startPrice: 399, id: '#price1_E9S > h2',
		clearGlass : 78,
		obscure : 99,
		translucent : 111,
		etchlite : 111
	},
	PQCE9S : {
		startPrice: 547, id: '#price2_E9S > h2',
		clearGlass : 78,
		obscure : 99,
		translucent : 111,
		etchlite : 111
	},
	SQCE9S : {
		startPrice: 574, id: '#price3_E9S > h2',
		clearGlass : 78,
		obscure : 99,
		translucent : 111,
		etchlite : 111
	},
	PQVE9S : {
		startPrice: 480, id: '#price4_E9S > h2',
		clearGlass : 78,
		obscure : 99,
		translucent : 111,
		etchlite : 111
	},
	ROE9S : {
		startPrice: 506, id: '#price5_E9S > h2',
		clearGlass : 78,
		obscure : 99,
		translucent : 111,
		etchlite : 111
	},
	AAE9S : {
		startPrice: 506, id: '#price6_E9S > h2',
		clearGlass : 78,
		obscure : 99,
		translucent : 111,
		etchlite : 111
	},
	//E11
	PQPE11 : {
		startPrice: 781, id: '#price1_E11 > h2'
	},
	PQCE11 : {
		startPrice: 1205, id: '#price2_E11 > h2'
	},
	SQCE11 : {
		startPrice: 1398, id: '#price3_E11 > h2'
	},
	PQVE11 : {
		startPrice: 1026, id: '#price4_E11 > h2'
	},
	ROE11 : {
		startPrice: 1102, id: '#price5_E11 > h2'
	},
	AAE11 : {
		startPrice: 1102, id: '#price6_E11 > h2'
	},
	//E12
	PQPE12 : {
		startPrice: 699, id: '#price1_E12 > h2', minWidth: 810,
		clearGlass : 93,
		obscure : 99,
		translucent : 113,
		etchlite : 113,
		doubleClear : 158,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	PQCE12 : {
		startPrice: 1119, id: '#price2_E12 > h2', minWidth: 810,
		clearGlass : 93,
		obscure : 99,
		translucent : 113,
		etchlite : 113,
		doubleClear : 158,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	SQCE12 : {
		startPrice: 1208, id: '#price3_E12 > h2', minWidth: 810,
		clearGlass : 93,
		obscure : 99,
		translucent : 113,
		etchlite : 113,
		doubleClear : 158,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	PQVE12 : {
		startPrice: 944, id: '#price4_E12 > h2', minWidth: 810,
		clearGlass : 93,
		obscure : 99,
		translucent : 113,
		etchlite : 113,
		doubleClear : 158,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	ROE12 : {
		startPrice: 1021, id: '#price5_E12 > h2', minWidth: 810,
		clearGlass : 93,
		obscure : 99,
		translucent : 113,
		etchlite : 113,
		doubleClear : 158,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	AAE12 : {
		startPrice: 1021, id: '#price6_E12 > h2', minWidth: 810,
		clearGlass : 93,
		obscure : 99,
		translucent : 113,
		etchlite : 113,
		doubleClear : 158,
		doubleObscure : 179,
		doubleTranslucent : 199,
		doubleEtchlite : 199,
		doubleGlazing : 40
	},
	//E13
	PQPE13 : {
		startPrice: 824, id: '#price1_E13 > h2', minWidth: 810,
		clearGlass : 165,
		obscure : 174,
		translucent : 185,
		etchlite : 185
	},
	PQCE13 : {
		startPrice: 1234, id: '#price2_E13 > h2', minWidth: 810,
		clearGlass : 165,
		obscure : 174,
		translucent : 185,
		etchlite : 185
	},
	SQCE13 : {
		startPrice: 1318, id: '#price3_E13 > h2', minWidth: 810,
		clearGlass : 165,
		obscure : 174,
		translucent : 185,
		etchlite : 185
	},
	PQVE13 : {
		startPrice: 1056, id: '#price4_E13 > h2', minWidth: 810,
		clearGlass : 165,
		obscure : 174,
		translucent : 185,
		etchlite : 185
	},
	ROE13 : {
		startPrice: 1131, id: '#price5_E13 > h2', minWidth: 810,
		clearGlass : 165,
		obscure : 174,
		translucent : 185,
		etchlite : 185
	},
	AAE13 : {
		startPrice: 1131, id: '#price6_E13 > h2', minWidth: 810,
		clearGlass : 165,
		obscure : 174,
		translucent : 185,
		etchlite : 185
	},
	//E15
	PQPE15 : {
		startPrice: 970, id: '#price1_E15 > h2', minWidth: 810,
		clearGlass : 165,
		obscure : 190,
		translucent : 199,
		etchlite : 199
	},
	PQCE15 : {
		startPrice: 1406, id: '#price2_E15 > h2', minWidth: 810,
		clearGlass : 165,
		obscure : 190,
		translucent : 199,
		etchlite : 199
	},
	SQCE15 : {
		startPrice: 1501, id: '#price3_E15 > h2', minWidth: 810,
		clearGlass : 165,
		obscure : 190,
		translucent : 199,
		etchlite : 199
	},
	PQVE15 : {
		startPrice: 1210, id: '#price4_E15 > h2', minWidth: 810,
		clearGlass : 165,
		obscure : 190,
		translucent : 199,
		etchlite : 199
	},
	ROE15 : {
		startPrice: 1288, id: '#price5_E15 > h2', minWidth: 810,
		clearGlass : 165,
		obscure : 190,
		translucent : 199,
		etchlite : 199
	},
	AAE15 : {
		startPrice: 1288, id: '#price6_E15 > h2', minWidth: 810,
		clearGlass : 165,
		obscure : 190,
		translucent : 199,
		etchlite : 199
	},
	//E14
	PQPE14 : {
		startPrice: 626, id: '#price1_E14 > h2', minWidth: 810,
		clearGlass : 242,
		obscure : 269,
		translucent : 308,
		etchlite : 308
	},
	PQCE14 : {
		startPrice: 924, id: '#price2_E14 > h2', minWidth: 810,
		clearGlass : 242,
		obscure : 269,
		translucent : 308,
		etchlite : 308
	},
	SQCE14 : {
		startPrice: 1018, id: '#price3_E14 > h2', minWidth: 810,
		clearGlass : 242,
		obscure : 269,
		translucent : 308,
		etchlite : 308
	},
	PQVE14 : {
		startPrice: 798, id: '#price4_E14 > h2', minWidth: 810,
		clearGlass : 242,
		obscure : 269,
		translucent : 308,
		etchlite : 308
	},
	ROE14 : {
		startPrice: 853, id: '#price5_E14 > h2', minWidth: 810,
		clearGlass : 242,
		obscure : 269,
		translucent : 308,
		etchlite : 308
	},
	AAE14 : {
		startPrice: 853, id: '#price6_E14 > h2', minWidth: 810,
		clearGlass : 242,
		obscure : 269,
		translucent : 308,
		etchlite : 308
	},
	//E14S
	PQPE14S : {
		startPrice: 384, id: '#price1_E14S > h2', minWidth: 375,
		clearGlass : 148,
		obscure : 159,
		translucent : 181,
		etchlite : 181
	},
	PQCE14S : {
		startPrice: 514, id: '#price2_E14S > h2', minWidth: 375,
		clearGlass : 148,
		obscure : 159,
		translucent : 181,
		etchlite : 181
	},
	SQCE14S : {
		startPrice: 567, id: '#price3_E14S > h2', minWidth: 375,
		clearGlass : 148,
		obscure : 159,
		translucent : 181,
		etchlite : 181
	},
	PQVE14S : {
		startPrice: 456, id: '#price4_E14S > h2', minWidth: 375,
		clearGlass : 148,
		obscure : 159,
		translucent : 181,
		etchlite : 181
	},
	ROE14S : {
		startPrice: 479, id: '#price5_E14S > h2', minWidth: 375,
		clearGlass : 148,
		obscure : 159,
		translucent : 181,
		etchlite : 181
	},
	AAE14S : {
		startPrice: 479, id: '#price6_E14S > h2', minWidth: 375,
		clearGlass : 148,
		obscure : 159,
		translucent : 181,
		etchlite : 181
	},
	//E24
	PQPE24 : {
		startPrice: 579, id: '#price1_E24 > h2',
		clearGlass : 187,
		obscure : 249,
		translucent : 262,
		etchlite : 262,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	PQCE24 : {
		startPrice: 893, id: '#price2_E24 > h2',
		clearGlass : 187,
		obscure : 249,
		translucent : 262,
		etchlite : 262,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	SQCE24 : {
		startPrice: 987, id: '#price3_E24 > h2',
		clearGlass : 187,
		obscure : 249,
		translucent : 262,
		etchlite : 262,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	PQVE24 : {
		startPrice: 771, id: '#price4_E24 > h2',
		clearGlass : 187,
		obscure : 249,
		translucent : 262,
		etchlite : 262,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	ROE24 : {
		startPrice: 834, id: '#price5_E24 > h2',
		clearGlass : 187,
		obscure : 249,
		translucent : 262,
		etchlite : 262,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	AAE24 : {
		startPrice: 834, id: '#price6_E24 > h2',
		clearGlass : 187,
		obscure : 249,
		translucent : 262,
		etchlite : 262,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	//E16
	PQPE16 : {
		startPrice: 590, id: '#price1_E16 > h2',
		clearGlass : 187,
		obscure : 240,
		translucent : 252,
		etchlite : 252,
		doubleClear : 799,
		doubleObscure : 899,
		doubleTranslucent : 999,
		doubleEtchlite : 999,
		doubleGlazing : 280
	},
	PQCE16 : {
		startPrice: 881, id: '#price2_E16 > h2',
		clearGlass : 187,
		obscure : 240,
		translucent : 252,
		etchlite : 252,
		doubleClear : 799,
		doubleObscure : 899,
		doubleTranslucent : 999,
		doubleEtchlite : 999,
		doubleGlazing : 280
	},
	SQCE16 : {
		startPrice: 962, id: '#price3_E16 > h2',
		clearGlass : 187,
		obscure : 240,
		translucent : 252,
		etchlite : 252,
		doubleClear : 799,
		doubleObscure : 899,
		doubleTranslucent : 999,
		doubleEtchlite : 999,
		doubleGlazing : 280
	},
	PQVE16 : {
		startPrice: 771, id: '#price4_E16 > h2',
		clearGlass : 187,
		obscure : 240,
		translucent : 252,
		etchlite : 252,
		doubleClear : 799,
		doubleObscure : 899,
		doubleTranslucent : 999,
		doubleEtchlite : 999,
		doubleGlazing : 280
	},
	ROE16 : {
		startPrice: 826, id: '#price5_E16 > h2',
		clearGlass : 187,
		obscure : 240,
		translucent : 252,
		etchlite : 252,
		doubleClear : 799,
		doubleObscure : 899,
		doubleTranslucent : 999,
		doubleEtchlite : 999,
		doubleGlazing : 280
	},
	AAE16 : {
		startPrice: 826, id: '#price6_E16 > h2',
		clearGlass : 187,
		obscure : 240,
		translucent : 252,
		etchlite : 252,
		doubleClear : 799,
		doubleObscure : 899,
		doubleTranslucent : 999,
		doubleEtchlite : 999,
		doubleGlazing : 280
	},
	//FP1
	PQPFP1 : {
		startPrice: 484, id: '#price1_FP1 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299,
		doubleClear : 412,
		doubleObscure : 355,
		doubleTranslucent : 530,
		doubleEtchlite : 530,
		doubleGlazing : 40
	},
	PQCFP1 : {
		startPrice: 759, id: '#price2_FP1 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299,
		doubleClear : 412,
		doubleObscure : 355,
		doubleTranslucent : 530,
		doubleEtchlite : 530,
		doubleGlazing : 40
	},
	SQCFP1 : {
		startPrice: 820, id: '#price3_FP1 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299,
		doubleClear : 412,
		doubleObscure : 355,
		doubleTranslucent : 530,
		doubleEtchlite : 530,
		doubleGlazing : 40
	},
	PQVFP1 : {
		startPrice: 644, id: '#price4_FP1 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299,
		doubleClear : 412,
		doubleObscure : 355,
		doubleTranslucent : 530,
		doubleEtchlite : 530,
		doubleGlazing : 40
	},
	ROFP1 : {
		startPrice: 695, id: '#price5_FP1 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299,
		doubleClear : 412,
		doubleObscure : 355,
		doubleTranslucent : 530,
		doubleEtchlite : 530,
		doubleGlazing : 40
	},
	AAFP1 : {
		startPrice: 695, id: '#price6_FP1 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299,
		doubleClear : 412,
		doubleObscure : 355,
		doubleTranslucent : 530,
		doubleEtchlite : 530,
		doubleGlazing : 40
	},
	//FP6
	PQPFP6 : {
		startPrice: 542, id: '#price1_FP6 > h2',
		clearGlass : 181,
		obscure : 249,
		translucent : 252,
		etchlite : 252
	},
	PQCFP6 : {
		startPrice: 844, id: '#price2_FP6 > h2',
		clearGlass : 181,
		obscure : 249,
		translucent : 252,
		etchlite : 252
	},
	SQCFP6 : {
		startPrice: 912, id: '#price3_FP6 > h2',
		clearGlass : 181,
		obscure : 249,
		translucent : 252,
		etchlite : 252
	},
	PQVFP6 : {
		startPrice: 719, id: '#price4_FP6 > h2',
		clearGlass : 181,
		obscure : 249,
		translucent : 252,
		etchlite : 252
	},
	ROFP6 : {
		startPrice: 774, id: '#price5_FP6 > h2',
		clearGlass : 181,
		obscure : 249,
		translucent : 252,
		etchlite : 252
	},
	AAFP6 : {
		startPrice: 774, id: '#price6_FP6 > h2',
		clearGlass : 181,
		obscure : 249,
		translucent : 252,
		etchlite : 252
	},
	//FP12
	PQPFP12 : {
		startPrice: 593, id: '#price1_FP12 > h2',
		clearGlass : 181,
		obscure : 269,
		translucent : 299,
		etchlite : 299
	},
	PQCFP12 : {
		startPrice: 912, id: '#price2_FP12 > h2',
		clearGlass : 181,
		obscure : 269,
		translucent : 299,
		etchlite : 299
	},
	SQCFP12 : {
		startPrice: 984, id: '#price3_FP12 > h2',
		clearGlass : 181,
		obscure : 269,
		translucent : 299,
		etchlite : 299
	},
	PQVFP12 : {
		startPrice: 780, id: '#price4_FP12 > h2',
		clearGlass : 181,
		obscure : 269,
		translucent : 299,
		etchlite : 299
	},
	ROFP12 : {
		startPrice: 839, id: '#price5_FP12 > h2',
		clearGlass : 181,
		obscure : 269,
		translucent : 299,
		etchlite : 299
	},
	AAFP12 : {
		startPrice: 839, id: '#price6_FP12 > h2',
		clearGlass : 181,
		obscure : 269,
		translucent : 299,
		etchlite : 299
	},
	//EF3
	PQPEF3 : {
		startPrice: 419, id: '#price1_EF3 > h2',
		clearGlass : 143,
		obscure : 215,
		translucent : 233,
		etchlite : 233,
		doubleClear : 385,
		doubleObscure : 440,
		doubleTranslucent : 499,
		doubleEtchlite : 499,
		doubleGlazing : 120
	},
	PQCEF3 : {
		startPrice: 636, id: '#price2_EF3 > h2',
		clearGlass : 143,
		obscure : 215,
		translucent : 233,
		etchlite : 233,
		doubleClear : 385,
		doubleObscure : 440,
		doubleTranslucent : 499,
		doubleEtchlite : 499,
		doubleGlazing : 120
	},
	SQCEF3 : {
		startPrice: 696, id: '#price3_EF3 > h2',
		clearGlass : 143,
		obscure : 215,
		translucent : 233,
		etchlite : 233,
		doubleClear : 385,
		doubleObscure : 440,
		doubleTranslucent : 499,
		doubleEtchlite : 499,
		doubleGlazing : 120
	},
	PQVEF3 : {
		startPrice: 554, id: '#price4_EF3 > h2',
		clearGlass : 143,
		obscure : 215,
		translucent : 233,
		etchlite : 233,
		doubleClear : 385,
		doubleObscure : 440,
		doubleTranslucent : 499,
		doubleEtchlite : 499,
		doubleGlazing : 120
	},
	ROEF3 : {
		startPrice: 595, id: '#price5_EF3 > h2',
		clearGlass : 143,
		obscure : 215,
		translucent : 233,
		etchlite : 233,
		doubleClear : 385,
		doubleObscure : 440,
		doubleTranslucent : 499,
		doubleEtchlite : 499,
		doubleGlazing : 120
	},
	AAEF3 : {
		startPrice: 595, id: '#price6_EF3 > h2',
		clearGlass : 143,
		obscure : 215,
		translucent : 233,
		etchlite : 233,
		doubleClear : 385,
		doubleObscure : 440,
		doubleTranslucent : 499,
		doubleEtchlite : 499,
		doubleGlazing : 120
	},
	//F8
	PQPF8 : {
		startPrice: 395, id: '#price1_F8 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	PQCF8 : {
		startPrice: 616, id: '#price2_F8 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	SQCF8 : {
		startPrice: 668, id: '#price3_F8 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	PQVF8 : {
		startPrice: 544, id: '#price4_F8 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	ROF8 : {
		startPrice: 579, id: '#price5_F8 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	AAF8 : {
		startPrice: 579, id: '#price6_F8 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	//F9
	PQPF9 : {
		startPrice: 449, id: '#price1_F9 > h2',
		clearGlass : 357,
		obscure : 420,
		translucent : 440,
		etchlite : 569
	},
	PQCF9 : {
		startPrice: 665, id: '#price2_F9 > h2',
		clearGlass : 357,
		obscure : 420,
		translucent : 440,
		etchlite : 569
	},
	SQCF9 : {
		startPrice: 724, id: '#price3_F9 > h2',
		clearGlass : 357,
		obscure : 420,
		translucent : 440,
		etchlite : 569
	},
	PQVF9 : {
		startPrice: 584, id: '#price4_F9 > h2',
		clearGlass : 357,
		obscure : 420,
		translucent : 440,
		etchlite : 569
	},
	ROF9 : {
		startPrice: 624, id: '#price5_F9 > h2',
		clearGlass : 357,
		obscure : 420,
		translucent : 440,
		etchlite : 569
	},
	AAF9 : {
		startPrice: 624, id: '#price6_F9 > h2',
		clearGlass : 357,
		obscure : 420,
		translucent : 440,
		etchlite : 569
	},
	//F10
	PQPF10 : {
		startPrice: 399, id: '#price1_F10 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	PQCF10 : {
		startPrice: 633, id: '#price2_F10 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	SQCF10 : {
		startPrice: 686, id: '#price3_F10 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	PQVF10 : {
		startPrice: 561, id: '#price4_F10 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	ROF10 : {
		startPrice: 596, id: '#price5_F10 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	AAF10 : {
		startPrice: 596, id: '#price6_F10 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	//E1L
	PQPE1L : {
		startPrice: 199, id: '#price1_E1L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 40
	},
	PQCE1L : {
		startPrice: 373, id: '#price2_E1L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 40
	},
	SQCE1L : {
		startPrice: 415, id: '#price3_E1L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 40
	},
	PQVE1L : {
		startPrice: 327, id: '#price4_E1L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 40
	},
	ROE1L : {
		startPrice: 357, id: '#price5_E1L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 40
	},
	AAE1L : {
		startPrice: 357, id: '#price6_E1L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 40
	},
	//E2L
	PQPE2L : {
		startPrice: 279, id: '#price1_E2L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 80
	},
	PQCE2L : {
		startPrice: 488, id: '#price2_E2L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 80
	},
	SQCE2L : {
		startPrice: 541, id: '#price3_E2L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 80
	},
	PQVE2L : {
		startPrice: 431, id: '#price4_E2L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 80
	},
	ROE2L : {
		startPrice: 468, id: '#price5_E2L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 80
	},
	AAE2L : {
		startPrice: 468, id: '#price6_E2L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 80
	},
	//E3L
	PQPE3L : {
		startPrice: 299, id: '#price1_E3L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 120
	},
	PQCE3L : {
		startPrice: 479, id: '#price2_E3L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 120
	},
	SQCE3L : {
		startPrice: 530, id: '#price3_E3L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 120
	},
	PQVE3L : {
		startPrice: 425, id: '#price4_E3L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 120
	},
	ROE3L : {
		startPrice: 460, id: '#price5_E3L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 120
	},
	AAE3L : {
		startPrice: 460, id: '#price6_E3L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 120
	},
	//E4L
	PQPE4L : {
		startPrice: 299, id: '#price1_E4L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	PQCE4L : {
		startPrice: 496, id: '#price2_E4L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	SQCE4L : {
		startPrice: 547, id: '#price3_E4L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	PQVE4L : {
		startPrice: 442, id: '#price4_E4L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	ROE4L : {
		startPrice: 477, id: '#price5_E4L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	AAE4L : {
		startPrice: 477, id: '#price6_E4L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	//F6
	PQPF6 : {
		startPrice: 389, id: '#price1_F6 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	PQCF6 : {
		startPrice: 590, id: '#price2_F6 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	SQCF6 : {
		startPrice: 642, id: '#price3_F6 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	PQVF6 : {
		startPrice: 518, id: '#price4_F6 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	ROF6 : {
		startPrice: 554, id: '#price5_F6 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	AAF6 : {
		startPrice: 554, id: '#price6_F6 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	//Fig 5A
	PQPFIG5A : {
		startPrice: 460, id: '#price1_FIG5A > h2',
		clearGlass : 101,
		obscure : 139,
		translucent : 146,
		etchlite : 146,
		doubleClear : 179,
		doubleObscure : 199,
		doubleTranslucent : 239,
		doubleEtchlite : 239,
		doubleGlazing : 40
	},
	PQCFIG5A : {
		startPrice: 796, id: '#price2_FIG5A > h2',
		clearGlass : 101,
		obscure : 139,
		translucent : 146,
		etchlite : 146,
		doubleClear : 179,
		doubleObscure : 199,
		doubleTranslucent : 239,
		doubleEtchlite : 239,
		doubleGlazing : 40
	},
	SQCFIG5A : {
		startPrice: 868, id: '#price3_FIG5A > h2',
		clearGlass : 101,
		obscure : 139,
		translucent : 146,
		etchlite : 146,
		doubleClear : 179,
		doubleObscure : 199,
		doubleTranslucent : 239,
		doubleEtchlite : 239,
		doubleGlazing : 40
	},
	PQVFIG5A : {
		startPrice: 703, id: '#price4_FIG5A > h2',
		clearGlass : 101,
		obscure : 139,
		translucent : 146,
		etchlite : 146,
		doubleClear : 179,
		doubleObscure : 199,
		doubleTranslucent : 239,
		doubleEtchlite : 239,
		doubleGlazing : 40
	},
	ROFIG5A : {
		startPrice: 748, id: '#price5_FIG5A > h2',
		clearGlass : 101,
		obscure : 139,
		translucent : 146,
		etchlite : 146,
		doubleClear : 179,
		doubleObscure : 199,
		doubleTranslucent : 239,
		doubleEtchlite : 239,
		doubleGlazing : 40
	},
	AAFIG5A : {
		startPrice: 748, id: '#price6_FIG5A > h2',
		clearGlass : 101,
		obscure : 139,
		translucent : 146,
		etchlite : 146,
		doubleClear : 179,
		doubleObscure : 199,
		doubleTranslucent : 239,
		doubleEtchlite : 239,
		doubleGlazing : 40
	},
	//Fig 5
	PQPFIG5 : {
		startPrice: 486, id: '#price1_FIG5 > h2'
	},
	PQCFIG5 : {
		startPrice: 801, id: '#price2_FIG5 > h2'
	},
	SQCFIG5 : {
		startPrice: 868, id: '#price3_FIG5 > h2'
	},
	PQVFIG5 : {
		startPrice: 708, id: '#price4_FIG5 > h2'
	},
	ROFIG5 : {
		startPrice: 753, id: '#price5_FIG5 > h2'
	},
	AAFIG5 : {
		startPrice: 753, id: '#price6_FIG5 > h2'
	},
	//BRACE
	PQPBRACE : {
		startPrice: 676, id: '#price1_BRACE > h2'
	},
	PQCBRACE : {
		startPrice: 833, id: '#price2_BRACE > h2'
	},
	SQCBRACE : {
		startPrice: 1136, id: '#price3_BRACE > h2'
	},
	PQVBRACE : {
		startPrice: 895, id: '#price4_BRACE > h2'
	},
	ROBRACE : {
		startPrice: 965, id: '#price5_BRACE > h2'
	},
	AABRACE : {
		startPrice: 965, id: '#price6_BRACE > h2'
	},
	//VIL2
	PQPVIL2 : {
		startPrice: 499, id: '#price1_VIL2 > h2'
	},
	PQCVIL2 : {
		startPrice: 629, id: '#price2_VIL2 > h2'
	},
	SQCVIL2 : {
		startPrice: 629, id: '#price3_VIL2 > h2'
	},
	PQVVIL2 : {
		startPrice: 647, id: '#price4_VIL2 > h2'
	},
	ROVIL2 : {
		startPrice: 943, id: '#price5_VIL2 > h2'
	},
	AAVIL2 : {
		startPrice: 943, id: '#price6_VIL2 > h2'
	},
	//VIL4
	PQPVIL4 : {
		startPrice: 599, id: '#price1_VIL4 > h2'
	},
	PQCVIL4 : {
		startPrice: 772, id: '#price2_VIL4 > h2'
	},
	SQCVIL4 : {
		startPrice: 1403, id: '#price3_VIL4 > h2'
	},
	PQVVIL4 : {
		startPrice: 837, id: '#price4_VIL4 > h2'
	},
	ROVIL4 : {
		startPrice: 1148, id: '#price5_VIL4 > h2'
	},
	AAVIL4 : {
		startPrice: 1148, id: '#price6_VIL4 > h2'
	},
	//BUN2
	PQPBUN2 : {
		startPrice: 393, id: '#price1_BUN2 > h2'
	},
	PQCBUN2 : {
		startPrice: 514, id: '#price2_BUN2 > h2'
	},
	SQCBUN2 : {
		startPrice: 991, id: '#price3_BUN2 > h2'
	},
	PQVBUN2 : {
		startPrice: 508, id: '#price4_BUN2 > h2'
	},
	ROBUN2 : {
		startPrice: 796, id: '#price5_BUN2 > h2'
	},
	AABUN2 : {
		startPrice: 796, id: '#price6_BUN2 > h2'
	},
	//BUN3
	PQPBUN3 : {
		startPrice: 449, id: '#price1_BUN3 > h2'
	},
	PQCBUN3 : {
		startPrice: 576, id: '#price2_BUN3 > h2'
	},
	SQCBUN3 : {
		startPrice: 1088, id: '#price3_BUN3 > h2'
	},
	PQVBUN3 : {
		startPrice: 587, id: '#price4_BUN3 > h2'
	},
	ROBUN3 : {
		startPrice: 879, id: '#price5_BUN3 > h2'
	},
	AABUN3 : {
		startPrice: 879, id: '#price6_BUN3 > h2'
	},
	//BUN4
	PQPBUN4 : {
		startPrice: 484, id: '#price1_BUN4 > h2'
	},
	PQCBUN4 : {
		startPrice: 611, id: '#price2_BUN4 > h2'
	},
	SQCBUN4 : {
		startPrice: 1124, id: '#price3_BUN4 > h2'
	},
	PQVBUN4 : {
		startPrice: 622, id: '#price4_BUN4 > h2'
	},
	ROBUN4 : {
		startPrice: 914, id: '#price5_BUN4 > h2'
	},
	AABUN4 : {
		startPrice: 914, id: '#price6_BUN4 > h2'
	},
	//TRA2
	PQPTRA2 : {
		startPrice: 390, id: '#price1_TRA2 > h2'
	},
	PQCTRA2 : {
		startPrice: 499, id: '#price2_TRA2 > h2'
	},
	SQCTRA2 : {
		startPrice: 992, id: '#price3_TRA2 > h2'
	},
	PQVTRA2 : {
		startPrice: 509, id: '#price4_TRA2 > h2'
	},
	ROTRA2 : {
		startPrice: 796, id: '#price5_TRA2 > h2'
	},
	AATRA2 : {
		startPrice: 796, id: '#price6_TRA2 > h2'
	},
	//TRA4
	PQPTRA4 : {
		startPrice: 455, id: '#price1_TRA4 > h2'
	},
	PQCTRA4 : {
		startPrice: 589, id: '#price2_TRA4 > h2'
	},
	SQCTRA4 : {
		startPrice: 1104, id: '#price3_TRA4 > h2'
	},
	PQVTRA4 : {
		startPrice: 614, id: '#price4_TRA4 > h2'
	},
	ROTRA4 : {
		startPrice: 910, id: '#price5_TRA4 > h2'
	},
	AATRA4 : {
		startPrice: 910, id: '#price6_TRA4 > h2'
	},
	//TRA4OT
	PQPTRA4OT : {
		startPrice: 455, id: '#price1_TRA4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197
	},
	PQCTRA4OT : {
		startPrice: 544, id: '#price2_TRA4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197
	},
	SQCTRA4OT : {
		startPrice: 915, id: '#price3_TRA4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197
	},
	PQVTRA4OT : {
		startPrice: 631, id: '#price4_TRA4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197
	},
	ROTRA4OT : {
		startPrice: 781, id: '#price5_TRA4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197
	},
	AATRA4OT : {
		startPrice: 781, id: '#price6_TRA4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197
	},
	//VIC2
	PQPVIC2 : {
		startPrice: 562, id: '#price1_VIC2 > h2'
	},
	PQCVIC2 : {
		startPrice: 703, id: '#price2_VIC2 > h2'
	},
	SQCVIC2 : {
		startPrice: 1290, id: '#price3_VIC2 > h2'
	},
	PQVVIC2 : {
		startPrice: 748, id: '#price4_VIC2 > h2'
	},
	ROVIC2 : {
		startPrice: 1053, id: '#price5_VIC2 > h2'
	},
	AAVIC2 : {
		startPrice: 1053, id: '#price6_VIC2 > h2'
	},
	//PIO2
	PQPPIO2 : {
		startPrice: 431, id: '#price1_PIO2 > h2'
	},
	PQCPIO2 : {
		startPrice: 499, id: '#price2_PIO2 > h2'
	},
	SQCPIO2 : {
		startPrice: 873, id: '#price3_PIO2 > h2'
	},
	PQVPIO2 : {
		startPrice: 675, id: '#price4_PIO2 > h2'
	},
	ROPIO2 : {
		startPrice: 733, id: '#price5_PIO2 > h2'
	},
	AAPIO2 : {
		startPrice: 733, id: '#price6_PIO2 > h2'
	},
	//PIO4
	PQPPIO4 : {
		startPrice: 499, id: '#price1_PIO4 > h2'
	},
	PQCPIO4 : {
		startPrice: 558, id: '#price2_PIO4 > h2'
	},
	SQCPIO4 : {
		startPrice: 926, id: '#price3_PIO4 > h2'
	},
	PQVPIO4 : {
		startPrice: 728, id: '#price4_PIO4 > h2'
	},
	ROPIO4 : {
		startPrice: 786, id: '#price5_PIO4 > h2'
	},
	AAPIO4 : {
		startPrice: 786, id: '#price6_PIO4 > h2'
	},
	//PIO4OT
	PQPPIO4OT : {
		startPrice: 471, id: '#price1_PIO4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197
	},
	PQCPIO4OT : {
		startPrice: 530, id: '#price2_PIO4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197
	},
	SQCPIO4OT : {
		startPrice: 823, id: '#price3_PIO4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197
	},
	PQVPIO4OT : {
		startPrice: 684, id: '#price4_PIO4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197
	},
	ROPIO4OT : {
		startPrice: 737, id: '#price5_PIO4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197
	},
	AAPIO4OT : {
		startPrice: 737, id: '#price6_PIO4OT > h2',
		clearGlass : 131,
		obscure : 149,
		translucent : 197,
		etchlite : 197
	},
	//IP1
	PQPIP1 : {
		startPrice: 404, id: '#price1_IP1 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299
	},
	PQCIP1 : {
		startPrice: 427, id: '#price2_IP1 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299
	},
	SQCIP1 : {
		startPrice: 689, id: '#price3_IP1 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299
	},
	PQVIP1 : {
		startPrice: 546, id: '#price4_IP1 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299
	},
	ROIP1 : {
		startPrice: 588, id: '#price5_IP1 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299
	},
	AAIP1 : {
		startPrice: 588, id: '#price6_IP1 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299
	},
	//IP6
	PQPIP6 : {
		startPrice: 472, id: '#price1_IP6 > h2',
		clearGlass : 181,
		obscure : 249,
		translucent : 252,
		etchlite : 252
	},
	PQCIP6 : {
		startPrice: 499, id: '#price2_IP6 > h2',
		clearGlass : 181,
		obscure : 249,
		translucent : 252,
		etchlite : 252
	},
	SQCIP6 : {
		startPrice: 806, id: '#price3_IP6 > h2',
		clearGlass : 181,
		obscure : 249,
		translucent : 252,
		etchlite : 252
	},
	PQVIP6 : {
		startPrice: 646, id: '#price4_IP6 > h2',
		clearGlass : 181,
		obscure : 249,
		translucent : 252,
		etchlite : 252
	},
	ROIP6 : {
		startPrice: 692, id: '#price5_IP6 > h2',
		clearGlass : 181,
		obscure : 249,
		translucent : 252,
		etchlite : 252
	},
	AAIP6 : {
		startPrice: 692, id: '#price6_IP6 > h2',
		clearGlass : 181,
		obscure : 249,
		translucent : 252,
		etchlite : 252
	},
	//IP12
	PQPIP12 : {
		startPrice: 532, id: '#price1_IP12 > h2',
		clearGlass : 181,
		obscure : 269,
		translucent : 299,
		etchlite : 299
	},
	PQCIP12 : {
		startPrice: 582, id: '#price2_IP12 > h2',
		clearGlass : 181,
		obscure : 269,
		translucent : 299,
		etchlite : 299
	},
	SQCIP12 : {
		startPrice: 896, id: '#price3_IP12 > h2',
		clearGlass : 181,
		obscure : 269,
		translucent : 299,
		etchlite : 299
	},
	PQVIP12 : {
		startPrice: 725, id: '#price4_IP12 > h2',
		clearGlass : 181,
		obscure : 269,
		translucent : 299,
		etchlite : 299
	},
	ROIP12 : {
		startPrice: 774, id: '#price5_IP12 > h2',
		clearGlass : 181,
		obscure : 269,
		translucent : 299,
		etchlite : 299
	},
	AAIP12 : {
		startPrice: 774, id: '#price6_IP12 > h2',
		clearGlass : 181,
		obscure : 269,
		translucent : 299,
		etchlite : 299
	},
	//ROS
	PQPROS : {
		startPrice: 550, id: '#price1_ROS > h2',
		clearGlass : 178,
		obscure : 215,
		translucent : 249,
		etchlite : 249
	},
	PQCROS : {
		startPrice: 604, id: '#price2_ROS > h2',
		clearGlass : 178,
		obscure : 215,
		translucent : 249,
		etchlite : 249
	},
	SQCROS : {
		startPrice: 915, id: '#price3_ROS > h2',
		clearGlass : 178,
		obscure : 215,
		translucent : 249,
		etchlite : 249
	},
	PQVROS : {
		startPrice: 743, id: '#price4_ROS > h2',
		clearGlass : 178,
		obscure : 215,
		translucent : 249,
		etchlite : 249
	},
	ROROS : {
		startPrice: 792, id: '#price5_ROS > h2',
		clearGlass : 178,
		obscure : 215,
		translucent : 249,
		etchlite : 249
	},
	AAROS : {
		startPrice: 792, id: '#price6_ROS > h2',
		clearGlass : 178,
		obscure : 215,
		translucent : 249,
		etchlite : 249
	},
	//I1L
	PQPI1L : {
		startPrice: 232, id: '#price1_I1L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 40
	},
	PQCI1L : {
		startPrice: 262, id: '#price2_I1L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 40
	},
	SQCI1L : {
		startPrice: 399, id: '#price3_I1L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 40
	},
	PQVI1L : {
		startPrice: 351, id: '#price4_I1L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 40
	},
	ROI1L : {
		startPrice: 381, id: '#price5_I1L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 40
	},
	AAI1L : {
		startPrice: 381, id: '#price6_I1L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 40
	},
	//I2L
	PQPI2L : {
		startPrice: 258, id: '#price1_I2L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 80
	},
	PQCI2L : {
		startPrice: 293, id: '#price2_I2L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 80
	},
	SQCI2L : {
		startPrice: 495, id: '#price3_I2L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 80
	},
	PQVI2L : {
		startPrice: 392, id: '#price4_I2L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 80
	},
	ROI2L : {
		startPrice: 427, id: '#price5_I2L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 80
	},
	AAI2L : {
		startPrice: 427, id: '#price6_I2L > h2',
		clearGlass : 331,
		obscure : 399,
		translucent : 369,
		etchlite : 499,
		doubleClear : 571,
		doubleObscure : 645,
		doubleTranslucent : 765,
		doubleEtchlite : 765,
		doubleGlazing : 80
	},
	//I3L
	PQPI3L : {
		startPrice: 269, id: '#price1_I3L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 120
	},
	PQCI3L : {
		startPrice: 305, id: '#price2_I3L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 120
	},
	SQCI3L : {
		startPrice: 499, id: '#price3_I3L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 120
	},
	PQVI3L : {
		startPrice: 408, id: '#price4_I3L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 120
	},
	ROI3L : {
		startPrice: 443, id: '#price5_I3L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 120
	},
	AAI3L : {
		startPrice: 443, id: '#price6_I3L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 120
	},
	//I4L
	PQPI4L : {
		startPrice: 278, id: '#price1_I4L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	PQCI4L : {
		startPrice: 314, id: '#price2_I4L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	SQCI4L : {
		startPrice: 499, id: '#price3_I4L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	PQVI4L : {
		startPrice: 416, id: '#price4_I4L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	ROI4L : {
		startPrice: 452, id: '#price5_I4L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	AAI4L : {
		startPrice: 452, id: '#price6_I4L > h2',
		clearGlass : 170,
		obscure : 249,
		translucent : 287,
		etchlite : 287,
		doubleClear : 485,
		doubleObscure : 557,
		doubleTranslucent : 645,
		doubleEtchlite : 645,
		doubleGlazing : 160
	},
	//IF6
	PQPIF6 : {
		startPrice: 363, id: '#price1_IF6 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	PQCIF6 : {
		startPrice: 399, id: '#price2_IF6 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	SQCIF6 : {
		startPrice: 599, id: '#price3_IF6 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	PQVIF6 : {
		startPrice: 501, id: '#price4_IF6 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	ROIF6 : {
		startPrice: 537, id: '#price5_IF6 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	AAIF6 : {
		startPrice: 537, id: '#price6_IF6 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	//IF8
	PQPIF8 : {
		startPrice: 388, id: '#price1_IF8 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	PQCIF8 : {
		startPrice: 424, id: '#price2_IF8 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	SQCIF8 : {
		startPrice: 632, id: '#price3_IF8 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	PQVIF8 : {
		startPrice: 527, id: '#price4_IF8 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	ROIF8 : {
		startPrice: 562, id: '#price5_IF8 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	AAIF8 : {
		startPrice: 562, id: '#price6_IF8 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	//IF9
	PQPIF9 : {
		startPrice: 408, id: '#price1_IF9 > h2',
		clearGlass : 357,
		obscure : 420,
		translucent : 440,
		etchlite : 569
	},
	PQCIF9 : {
		startPrice: 450, id: '#price2_IF9 > h2',
		clearGlass : 357,
		obscure : 420,
		translucent : 440,
		etchlite : 569
	},
	SQCIF9 : {
		startPrice: 707, id: '#price3_IF9 > h2',
		clearGlass : 357,
		obscure : 420,
		translucent : 440,
		etchlite : 569
	},
	PQVIF9 : {
		startPrice: 567, id: '#price4_IF9 > h2',
		clearGlass : 357,
		obscure : 420,
		translucent : 440,
		etchlite : 569
	},
	ROIF9 : {
		startPrice: 607, id: '#price5_IF9 > h2',
		clearGlass : 357,
		obscure : 420,
		translucent : 440,
		etchlite : 569
	},
	AAIF9 : {
		startPrice: 607, id: '#price6_IF9 > h2',
		clearGlass : 357,
		obscure : 420,
		translucent : 440,
		etchlite : 569
	},
	//IF10
	PQPIF10 : {
		startPrice: 422, id: '#price1_IF10 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	PQCIF10 : {
		startPrice: 458, id: '#price2_IF10 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	SQCIF10 : {
		startPrice: 666, id: '#price3_IF10 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	PQVIF10 : {
		startPrice: 561, id: '#price4_IF10 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	ROIF10 : {
		startPrice: 596, id: '#price5_IF10 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	AAIF10 : {
		startPrice: 596, id: '#price6_IF10 > h2',
		clearGlass : 217,
		obscure : 299,
		translucent : 334,
		etchlite : 334
	},
	//IF3
	PQPIF3 : {
		startPrice: 333, id: '#price1_IF3 > h2',
		clearGlass : 143,
		obscure : 215,
		translucent : 233,
		etchlite : 233
	},
	PQCIF3 : {
		startPrice: 376, id: '#price2_IF3 > h2',
		clearGlass : 143,
		obscure : 215,
		translucent : 233,
		etchlite : 233
	},
	SQCIF3 : {
		startPrice: 599, id: '#price3_IF3 > h2',
		clearGlass : 143,
		obscure : 215,
		translucent : 233,
		etchlite : 233
	},
	PQVIF3 : {
		startPrice: 492, id: '#price4_IF3 > h2',
		clearGlass : 143,
		obscure : 215,
		translucent : 233,
		etchlite : 233
	},
	ROIF3 : {
		startPrice: 533, id: '#price5_IF3 > h2',
		clearGlass : 143,
		obscure : 215,
		translucent : 233,
		etchlite : 233
	},
	AAIF3 : {
		startPrice: 533, id: '#price6_IF3 > h2',
		clearGlass : 143,
		obscure : 215,
		translucent : 233,
		etchlite : 233
	},
	//AR41
	PQPAR41 : {
		startPrice: 406, id: '#price1_AR41 > h2'
	},
	PQCAR41 : {
		startPrice: 499, id: '#price2_AR41 > h2'
	},
	SQCAR41 : {
		startPrice: 832, id: '#price3_AR41 > h2'
	},
	PQVAR41 : {
		startPrice: 646, id: '#price4_AR41 > h2'
	},
	ROAR41 : {
		startPrice: 701, id: '#price5_AR41 > h2'
	},
	AAAR41 : {
		startPrice: 701, id: '#price6_AR41 > h2'
	},
	//AR42
	PQPAR42 : {
		startPrice: 423, id: '#price1_AR42 > h2'
	},
	PQCAR42 : {
		startPrice: 499, id: '#price2_AR42 > h2'
	},
	SQCAR42 : {
		startPrice: 850, id: '#price3_AR42 > h2'
	},
	PQVAR42 : {
		startPrice: 663, id: '#price4_AR42 > h2'
	},
	ROAR42 : {
		startPrice: 718, id: '#price5_AR42 > h2'
	},
	AAAR42 : {
		startPrice: 718, id: '#price6_AR42 > h2'
	},
	//AR43
	PQPAR43 : {
		startPrice: 452, id: '#price1_AR43 > h2'
	},
	PQCAR43 : {
		startPrice: 558, id: '#price2_AR43 > h2'
	},
	SQCAR43 : {
		startPrice: 912, id: '#price3_AR43 > h2'
	},
	PQVAR43 : {
		startPrice: 711, id: '#price4_AR43 > h2'
	},
	ROAR43 : {
		startPrice: 770, id: '#price5_AR43 > h2'
	},
	AAAR43 : {
		startPrice: 770, id: '#price6_AR43 > h2'
	},
	//AR44
	PQPAR44 : {
		startPrice: 506, id: '#price1_AR44 > h2'
	},
	PQCAR44 : {
		startPrice: 598, id: '#price2_AR44 > h2'
	},
	SQCAR44 : {
		startPrice: 996, id: '#price3_AR44 > h2'
	},
	PQVAR44 : {
		startPrice: 781, id: '#price4_AR44 > h2'
	},
	ROAR44 : {
		startPrice: 843, id: '#price5_AR44 > h2'
	},
	AAAR44 : {
		startPrice: 843, id: '#price6_AR44 > h2'
	},
	//AR61
	PQPAR61 : {
		startPrice: 415, id: '#price1_AR61 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299
	},
	PQCAR61 : {
		startPrice: 501, id: '#price2_AR61 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299
	},
	SQCAR61 : {
		startPrice: 768, id: '#price3_AR61 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299
	},
	PQVAR61 : {
		startPrice: 610, id: '#price4_AR61 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299
	},
	ROAR61 : {
		startPrice: 656, id: '#price5_AR61 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299
	},
	AAAR61 : {
		startPrice: 656, id: '#price6_AR61 > h2',
		clearGlass : 231,
		obscure : 269,
		translucent : 269,
		etchlite : 299
	},
	//AR63
	PQPAR63 : {
		startPrice: 467, id: '#price1_AR63 > h2',
		clearGlass : 181,
		obscure : 230,
		translucent : 252,
		etchlite : 252
	},
	PQCAR63 : {
		startPrice: 564, id: '#price2_AR63 > h2',
		clearGlass : 181,
		obscure : 230,
		translucent : 252,
		etchlite : 252
	},
	SQCAR63 : {
		startPrice: 860, id: '#price3_AR63 > h2',
		clearGlass : 181,
		obscure : 230,
		translucent : 252,
		etchlite : 252
	},
	PQVAR63 : {
		startPrice: 678, id: '#price4_AR63 > h2',
		clearGlass : 181,
		obscure : 230,
		translucent : 252,
		etchlite : 252
	},
	ROAR63 : {
		startPrice: 728, id: '#price5_AR63 > h2',
		clearGlass : 181,
		obscure : 230,
		translucent : 252,
		etchlite : 252
	},
	AAAR63 : {
		startPrice: 728, id: '#price6_AR63 > h2',
		clearGlass : 181,
		obscure : 230,
		translucent : 252,
		etchlite : 252
	}
}