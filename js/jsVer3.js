// Object for TAB2 Ajax form
var emailObject = {};
function prepareMailObject() {
	emailObject = {'submitMail' : 'true'};
	Object.assign(emailObject, tabOneValues);
}

//Marker for TAB1 Next button (acts as submit)
var Next = 'true';

function addDrillPairGlassExtracolor() {
	// Temporary Single Base Coat
	if (DOOREXTRACOLOR == 'on') {
		price+=80;
	}
/*   if (DOOREXTRACOLOR2 == 'on') {
		price+=80;
	}
*/

	//add pairs
	if (DOORPAIRS=='pair') {
		price = price*2 + 420;
	}
	if (DOORPAIRS=='rebate') {
		price = price*2 + 40;
	}
	// add drilling
	if (DOORDRILLING=='standard') {
		price+=60;
	}
	if (DOORDRILLING=='special') {
		price+=150;
	}
	// eye viewer
	if (DOORVIEWER == 'on') {
		price+=65;
	}
}

var price;
var extra40PercForWidth = false;
var extra40PercForHeight = false;
function changeAllPrices() {
	var count = 0;
	$.each( allModelsObejct, function( key, value ) {
		extra40PercForWidth = false;
		extra40PercForHeight = false;
		count++;
		price = value.startPrice;
	  	var id = value.id;
	  	var doorType = Object.keys(allModelsObejct)[count-1].slice(0, 3);

	  	if (value.minWidth) {
		  	if (DOORWIDTH < value.minWidth)	{
		  		$(id).text('N/A');
		  		emailObject[key] = 'N/A';
		  		return;
		  	}
	  	}

	  	if ( (value.maxWidth) || (DOORWIDTH > 1000) ) {
		  	if ( (DOORWIDTH > value.maxWidth) || (DOORWIDTH > 1000) ) {
		  		// no door can go over 2600, but PQC, SQC and PQV can go up to 2600
		  		if ( (DOORWIDTH > 1200) || ( ((doorType !='PQC') && (doorType !='SQC') && (doorType !='PQV')) && (DOORWIDTH > 1000) ) ) {
			  		$(id).text('N/A');
			  		emailObject[key] = 'N/A';
			  		return;
		  		}else{
		  			extra40PercForWidth = true;
		  		}
		  	}
	  	}

	  	if ( (value.maxHeight) || (DOORHEIGHT > 2400) ) {
		  	if ( (DOORHEIGHT > value.maxHeight) || (DOORHEIGHT > 2400) ) {
		  		// no door can go over 1200 height, but PQC, SQC and PQV can go up to 1200
		  		if ( (DOORHEIGHT > 2600) || ( ((doorType !='PQC') && (doorType !='SQC') && (doorType !='PQV')) && (DOORHEIGHT > 2400) ) ) {
			  		$(id).text('N/A');
			  		emailObject[key] = 'N/A';
			  		return;
		  		}else{
		  			extra40PercForHeight = true;
		  		}
		  	}
	  	}

	  	if (value.extraCalc) {
	  		value.extraCalc();
	  	}else{
		  	if (DOORHEIGHT > 1980) {
		  		if (extra40PercForHeight) {
		  			// if there is extra 40% added, that 40% is added to price of 2400 height
		  			price = price / 1980 * 2400;
		  		}else{
			  		price = price / 1980 * DOORHEIGHT;
		  		}
		  	}
		  	if (DOORWIDTH > 860) {
		  		if (extra40PercForWidth) {
		  			// if there is extra 40% added, that 40% is added to price of 1000 width
			  		price = price / 860 * 1000;
			  	}else{
			  		price = price / 860 * DOORWIDTH;
			  	}
		  	}
	  	}
	  	// extra price for 1000+ width and 2400+ height for those models that can go up to 1200 and 2600
	  	if (extra40PercForWidth && extra40PercForHeight) {
	  		price = 1.6 * price;
	  	}else{
	  		if (extra40PercForWidth || extra40PercForHeight) {
	  			price = 1.3 * price;
	  		}
	  	}

		//     GLASS PRICING
		switch(DOORGLASS) {
		    case 'clearGlass':
		        if (value.clearGlass) {
		        	price+=value.clearGlass;
		        }else {
		        	$(id).text('glass N/A');
		        	emailObject[key] = 'N/A';
		        	return;
		        }
		        break;
		    case 'obscure':
		        if (value.obscure) {
		        	price+=value.obscure;
		        }else {
		        	$(id).text('glass N/A');
		        	emailObject[key] = 'N/A';
		        	return;
		        }
		        break;
		    case 'translucent':
		        if (value.translucent) {
		        	price+=value.translucent;
		        }else {
		        	$(id).text('glass N/A');
		        	emailObject[key] = 'N/A';
		        	return;
		        }
		        break;
	        case 'etchlite':
		        if (value.etchlite) {
		        	price+=value.etchlite;
		        }else {
		        	$(id).text('glass N/A');
		        	emailObject[key] = 'N/A';
		        	return;
		        }
		        break;
		    case 'doubleClear':
		        if (value.doubleClear) {
		        	price+=value.doubleClear;
		        }else {
		        	$(id).text('glass N/A');
		        	emailObject[key] = 'N/A';
		        	return;
		        }
		        break;
		    case 'doubleObscure':
		        if (value.doubleObscure) {
		        	price+=value.doubleObscure;
		        }else {
		        	$(id).text('glass N/A');
		        	emailObject[key] = 'N/A';
		        	return;
		        }
		        break;
	        case 'doubleTranslucent':
		        if (value.doubleTranslucent) {
		        	price+=value.doubleTranslucent;
		        }else {
		        	$(id).text('glass N/A');
		        	emailObject[key] = 'N/A';
		        	return;
		        }
		        break;
		    case 'doubleEtchlite':
		        if (value.doubleEtchlite) {
		        	price+=value.doubleEtchlite;
		        }else {
		        	$(id).text('glass N/A');
		        	emailObject[key] = 'N/A';
		        	return;
		        }
		        break;
		    case 'doubleGlazing':
		        if (value.doubleGlazing) {
		        	price+=value.doubleGlazing;
		        }else {
		        	$(id).text('glass N/A');
		        	emailObject[key] = 'N/A';
		        	return;
		        }
		        break;
		}

		// rest options
	  	addDrillPairGlassExtracolor();

	  	// add to email Object
		emailObject[key] = price.toFixed(0);

	  	$(id).text('$' + price.toFixed(0));
	});
}

var DOORWIDTH, DOORHEIGHT, DOORPAIRS, DOORDRILLING, DOORGLASS, DOORVIEWER, DOOREXTRACOLOR; /* DOOREXTRACOLOR2*/
function doAllCalculations() {
	DOORHEIGHT = $('#inputDoorHeightTimber').val();
	DOORWIDTH = $('#inputDoorwidthTimber').val();
	DOORPAIRS = $('#singleTimber').val();
	DOORDRILLING = $('#drillingTimber').val();
	DOORGLASS = $('#glassTimber').val();
	DOORVIEWER = $('#eyeViewerTimber:checked').val();
	DOOREXTRACOLOR = $('#extraColorTimber:checked').val();
    /*DOOREXTRACOLOR2 = $('#extraColorTimber2:checked').val();*/

	//Prepare object for TAB2 Ajax form

  	prepareMailObject();
  	emailObject["Door Height"] = DOORHEIGHT;
  	emailObject["Door Width"] = DOORWIDTH;
  	emailObject["Pairs"] = DOORPAIRS;
  	emailObject["Drilling"] = DOORDRILLING;
  	emailObject["Glass"] = DOORGLASS;
  	emailObject["Supply and Fit Eye Viewer"] = DOORVIEWER;
  	emailObject["Extra Color"] = DOOREXTRACOLOR;
    /*emailObject["Extra Color2"] = DOOREXTRACOLOR2;*/

	// Regex - set input field border color as you type TAB2

	if(DOORHEIGHT){
		if(/^\d{1,8}$/.test(DOORHEIGHT)){
		$('#inputDoorHeightTimber').css('border', '2px inset #eeeeee');
		}else{
		$('#inputDoorHeightTimber').css('border', '2px solid red');
		}
	}

    if(DOORWIDTH) {
		if(/^\d{1,8}$/.test(DOORWIDTH)){
			$('#inputDoorwidthTimber').css('border', '2px inset #eeeeee');
		}else{
        	$('#inputDoorwidthTimber').css('border', '2px solid red');
   		}
    }

	changeAllPrices();

   	// console.log('calcing!');
}

//  ****************************   TAB 1   *******************************

// TAB1 restrictions
$("#inputNameTimber, #inputContactTimber").keydown(function (e) {
    //Allow: backspace, delete, tab
    if ($.inArray(e.keyCode, [46, 8, 9 ]) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow: Ctrl+V
        (e.keyCode == 86 && e.ctrlKey === true) ||
         // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
             // let it happen, don't do anything
             return;
    }
    // Ensure that it is not a number and stop the keypress
    if ( (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 111) || (e.keyCode >= 186 && e.keyCode <= 192) || (e.keyCode >= 219 && e.keyCode <= 222) ) {
        e.preventDefault();
    }
});

$("#inputAddressTimber, #inputAddress2Timber").keydown(function (e) {
    //Allow: backspace, delete, tab, minus / , space
    if ( $.inArray(e.keyCode, [8, 46, 9, 109, 111, 32 ]) !== -1 ||
    	// Allow: / \ - . ,
        ( ( (e.keyCode == 191) || (e.keyCode == 220) || (e.keyCode == 189) || (e.keyCode == 190) || (e.keyCode == 188) ) && (e.shiftKey != true) ) ||
        // Allow: Shift + letter
        (e.keyCode > 64 && e.keyCode < 91 && e.shiftKey === true) ||
        // Allow: Shift+7   &
        (e.keyCode == 55 && e.shiftKey === true) ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow: Ctrl+V
        (e.keyCode == 86 && e.ctrlKey === true) ||
         // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39) ) {
             // let it happen, don't do anything
             return;
    }
    // Ensure
    if ( e.shiftKey || (e.keyCode < 48 ) || (e.keyCode >= 106 && e.keyCode <= 111) || (e.keyCode >= 186 ) ) {
        e.preventDefault();
    }
});

$("#inputPhoneTimber").keydown(function (e) {
    //Allow: delete, backspace, tab, escape, enter, dash, plus, space
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 109, 107, 32 ]) !== -1 ||
    	// Allow:  -
        ( (e.keyCode == 189) && (e.shiftKey != true) ) ||
         // Allow: )
        (e.keyCode == 48 && e.shiftKey === true) ||
        // Allow: (
        (e.keyCode == 57 && e.shiftKey === true) ||
        // Allow: +
        (e.keyCode == 187 && e.shiftKey === true) ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow: Ctrl+V
        (e.keyCode == 86 && e.ctrlKey === true) ||
         // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
             // let it happen, don't do anything
             return;
    }
    // Ensure that it is a number and stop the keypress
    if ( (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) ) {
        e.preventDefault();
    }
});

// TAB1 values
var tabOneValues = {
	Name : '',
	Address1 : '',
	Address2 : '',
	Phone : '',
	Email : '',
	Contact : ''
};
function tab1Inputs() {
	tabOneValues.Name = $('#inputNameTimber').val();
	tabOneValues.Address1 = $('#inputAddressTimber').val();
	tabOneValues.Address2 = $('#inputAddress2Timber').val();
	tabOneValues.Phone = $('#inputPhoneTimber').val();
	tabOneValues.Email = $('#inputEmailTimber').val();
	tabOneValues.Contact = $('#inputContactTimber').val();
}

$('.inputLabelTimber input').on('input', function() {
	tab1Inputs();
});

// Regex - set input field border color as you type TAB1

	//Name
	$('#inputNameTimber',).on('input', function() {
		if(tabOneValues.Name){
			if(/^[a-zA-Z]{1}[a-zA-Z ]{0,50}$/.test(tabOneValues.Name)) {
				$('#inputNameTimber').css('border', '2px inset #eeeeee');
			}else{
				$('#inputNameTimber').css('border', '2px solid red');
			}
		}
	});
	//Address1
	$('#inputAddressTimber',).on('input', function() {
		if(tabOneValues.Address1){
			if(/^[a-zA-Z\d]{1}[a-zA-Z (0-9)\-\/\\\.,&]{0,60}$/.test(tabOneValues.Address1)) {
				$('#inputAddressTimber').css('border', '2px inset #eeeeee');
			}else{
				$('#inputAddressTimber').css('border', '2px solid red');
			}
		}
	});
	//Address2
	$('#inputAddress2Timber',).on('input', function() {
		if(tabOneValues.Address2){
			if(/^[a-zA-Z\d]{1}[a-zA-Z (0-9)\-\/\\\.,&]{0,60}$/.test(tabOneValues.Address2)) {
				$('#inputAddress2Timber').css('border', '2px inset #eeeeee');
			}else{
				$('#inputAddress2Timber').css('border', '2px solid red');
			}
		}
	});
	//Phone
	$('#inputPhoneTimber',).on('input', function() {
		if(tabOneValues.Phone){
			if(/^[+]?[() ]*([0-9][ \-()]*){6,45}$/.test(tabOneValues.Phone)){
				$('#inputPhoneTimber').css('border', '2px inset #eeeeee');
			}else{
				$('#inputPhoneTimber').css('border', '2px solid red');
			}
		}
	});
	//Email ajax - check as you type
	$('#inputEmailTimber').on('input', function(){
		if(tabOneValues.Email){
			$.post( "PWPHP/processor.php", {EmailAsYouType : $('#inputEmailTimber').val()}).done(function(result) {
				if (JSON.parse(result) === true){
					$('#inputEmailTimber').css('border', '2px inset #eeeeee');
				}else{
					$('#inputEmailTimber').css('border', '2px solid red');
				}
			});
		}
	});
	//Contact
	$('#inputContactTimber',).on('input', function() {
		if(tabOneValues.Contact){
			if(/^[a-zA-Z]{1}[a-zA-Z ]{0,50}$/.test(tabOneValues.Contact)) {
				$('#inputContactTimber').css('border', '2px inset #eeeeee');
			}else{
				$('#inputContactTimber').css('border', '2px solid red');
			}
		}
	});

// AJAX SUBMIT FORM TAB1 - NEXT BUTTON
$('#sectionOneButtonTimber').on('click', function() {
	tab1Inputs();
	doAllCalculations();
	$.ajax({
    	type: 'POST',
    	url: "PWPHP/processor.php",
        data: {Next, tabOneValues},
        success: function(result){

			//Check required inputs on php response

			//Name
			if ((JSON.parse(result)).Name) {
				$('#inputNameTimber').css('border', '2px solid red');
			}else{
				$('#inputNameTimber').css('border', '2px inset #eeeeee');
			}
			//Address1
			if ((JSON.parse(result)).Address1) {
				$('#inputAddressTimber').css('border', '2px solid red');
			}else{
				$('#inputAddressTimber').css('border', '2px inset #eeeeee');
			}
			//Phone
			if ((JSON.parse(result)).Phone) {
				$('#inputPhoneTimber').css('border', '2px solid red');
			}else{
				$('#inputPhoneTimber').css('border', '2px inset #eeeeee');
			}
			//Email
			if ((JSON.parse(result)).Email) {
				$('#inputEmailTimber').css('border', '2px solid red');
			}else{
				$('#inputEmailTimber').css('border', '2px inset #eeeeee');
			}

			//Check optional inputs on php response

			//Address2
			if ((JSON.parse(result)).Address2) {
				$('#inputAddress2Timber').css('border', '2px solid red');
			}else{
				$('#inputAddress2Timber').css('border', '2px inset #eeeeee');
			}
			//Contact
			if ((JSON.parse(result)).Contact) {
				$('#inputContactTimber').css('border', '2px solid red');
			}else{
				$('#inputContactTimber').css('border', '2px inset #eeeeee');
			}

			if (JSON.parse(result)){
				return;
			}
			tab1CopyInputsToTab2And3();

			$('#calcTab1Timber').removeClass('activeTabTimber');
			$('#calcTab2Timber').addClass('activeTabTimber');
			$('#calcTab3Timber').removeClass('activeTabTimber');

			$('#userDetailsPageTimber').addClass('formWrapperDisplayNone');
			$('#formShareMailTimber, #allModelsWrapper').removeClass('formWrapperDisplayNone');
			$('#formWrapperTimber').addClass('formWrapperDisplayNone');

			$('#all_codes_main').css('display', 'block');
		},
        error: function(xhr,status,error){
        	console.log(xhr);
        	console.log(status);
        	console.log(error);
        }
	});
});

function tab1CopyInputsToTab2And3() {
	$('#suppSpanNameTimber').text(tabOneValues.Name);
	$('#suppSpanAddressTimber').text(tabOneValues.Address1);
	$('#suppSpanAddress2Timber').text(tabOneValues.Address2);
	$('#suppSpanPhoneTimber').text(tabOneValues.Phone);
	$('#suppSpanEmailTimber').text(tabOneValues.Email);
	$('#suppSpanContactTimber').text(tabOneValues.Contact);

	$('#companyName').val(tabOneValues.Name);
	$('#formContact').val(tabOneValues.Contact);
}

function tab2Totab3Inputs() {
	$('#glassType1Timber').val( $("#glassTimber option:selected").text() );
	$('#doorSizeHightTimber').val(DOORHEIGHT);
	$('#DoorWidth1Timber').val(DOORWIDTH);
}

//  ****************************   TAB 2   *******************************

// AJAX SUBMIT FORM TAB2
$('#mailButtonTimber').click(function(e){
	e.preventDefault();
	$('body').addClass('waitCursor');
	$.ajax({
		type: 'POST',
		url: "PWPHP/processor.php",
		data: emailObject,
		success: function(result){
			$('body').removeClass('waitCursor');

			//Check required inputs on php response

			//Door Height
			if (JSON.parse(result).Door_Height){
				$('#inputDoorHeightTimber').css('border', '2px solid red');
			}else{
				$('#inputDoorHeightTimber').css('border', '2px inset #eeeeee');
			}
			//Door Width
			if (JSON.parse(result).Door_Width) {
				$('#inputDoorwidthTimber').css('border', '2px solid red');
			}else{
				$('#inputDoorwidthTimber').css('border', '2px inset #eeeeee');
			}

			//console.log(result);

			// display 'mail sent' info
			if(result.includes("Mail sent to")) {
				$('#emailWarningSecondPage1').css("display", "block");
			}
		},
		error: function(xhr,status,error){
			console.log(xhr);
			console.log(status);
			console.log(error);
		}
	});
});

// X button for 'email sent'
$('#emailWarningAbsolute1').click(function(){
	$('#emailWarningSecondPage1').css("display", "none");
})
// X button for 'email not sent'
$('#emailWarningRelative2').click(function(){
	$('#emailWarningSecondPage2').css("display", "none");
})

// Print button
$('#printButtonTimber, #print2ButtonTimber').click(function(event){
	event.preventDefault();
	window.print();
});

//  ****************************   TAB 3   *******************************

	// Regex - set input field border color as you type TAB3

	//Name
	$('#companyName',).on('input', function() {
		if(/^[a-zA-Z]+[a-zA-Z ]{0,50}$|^$/.test($('#companyName').val())) {
			$('#companyName').css('border', '2px inset #eeeeee');
		}else{
			$('#companyName').css('border', '2px solid red');
		}
	});
	//Contact
	$('#formContact',).on('input', function() {
		if(/^[a-zA-Z]+[a-zA-Z ]{0,50}$|^$/.test($('#formContact').val())) {
			$('#formContact').css('border', '2px inset #eeeeee');
		}else{
			$('#formContact').css('border', '2px solid red');
		}
	});
	//Order Number
	$('#orderNumber',).on('input', function() {
		if(/^[a-zA-Z\\\ (0-9)\-\/.,)(]{0,60}$|^$/.test($('#orderNumber').val())) {
			$('#orderNumber').css('border', '2px inset #eeeeee');
		}else{
			$('#orderNumber').css('border', '2px solid red');
		}
	});
	//Job Name
	$('#jobNameTimber',).on('input', function() {
		if(/^[a-zA-Z\\\ (0-9)\-\/.,)(]{0,60}$|^$/.test($('#jobNameTimber').val())) {
			$('#jobNameTimber').css('border', '2px inset #eeeeee');
		}else{
			$('#jobNameTimber').css('border', '2px solid red');
		}
	});
	//Door Code
	$('#DoorCode1Timber',).on('input', function() {
		if(/^[a-zA-Z\\\ (0-9)\-\/.,)(]{0,60}$/.test($('#DoorCode1Timber').val())) {
			$('#DoorCode1Timber').css('border', '2px inset #eeeeee');
		}else{
			$('#DoorCode1Timber').css('border', '2px solid red');
		}
	});
	//Timber Type
	$('#doorColorTimber',).on('input', function() {
		if(/^[a-zA-Z\\\ (0-9)\-\/.,)(]{0,60}$|^$/.test($('#doorColorTimber').val())) {
			$('#doorColorTimber').css('border', '2px inset #eeeeee');
		}else{
			$('#doorColorTimber').css('border', '2px solid red');
		}
	});
	//Qty
	$('#OtyLabelTimber',).on('input', function() {
		if(/^\d{1,8}$|^$/.test($('#OtyLabelTimber').val())) {
			$('#OtyLabelTimber').css('border', '2px inset #eeeeee');
		}else{
			$('#OtyLabelTimber').css('border', '2px solid red');
		}
	});
	//Door Height
	$('#doorSizeHightTimber',).on('input', function() {
		if(/^\d{1,8}$/.test($('#doorSizeHightTimber').val())) {
			$('#doorSizeHightTimber').css('border', '2px inset #eeeeee');
		}else{
			$('#doorSizeHightTimber').css('border', '2px solid red');
		}
	});
	//Door Width
	$('#DoorWidth1Timber',).on('input', function() {
		if(/^\d{1,8}$/.test($('#DoorWidth1Timber').val())) {
			$('#DoorWidth1Timber').css('border', '2px inset #eeeeee');
		}else{
			$('#DoorWidth1Timber').css('border', '2px solid red');
		}
	});
	//Glass Type
	$('#glassType1Timber',).on('input', function() {
		if(/^[a-zA-Z]+[a-zA-Z )(]{0,50}$|^$/.test($('#glassType1Timber').val())) {
			$('#glassType1Timber').css('border', '2px inset #eeeeee');
		}else{
			$('#glassType1Timber').css('border', '2px solid red');
		}
	});
	//Brand Name
	$('#OrderBrandName',).on('input', function() {
		if(/^[a-zA-Z\\\ (0-9)\-\/.,)(]{0,60}$|^$/.test($('#OrderBrandName').val())) {
			$('#OrderBrandName').css('border', '2px inset #eeeeee');
		}else{
			$('#OrderBrandName').css('border', '2px solid red');
		}
	});
	//Lock Code
	$('#OrderCode',).on('input', function() {
		if(/^[a-zA-Z\\\ (0-9)\-\/.,)(]{0,60}$|^$/.test($('#OrderCode').val())) {
			$('#OrderCode').css('border', '2px inset #eeeeee');
		}else{
			$('#OrderCode').css('border', '2px solid red');
		}
	});
	//Lock Color
	$('#OrderColor',).on('input', function() {
		if(/^[a-zA-Z\\\ (0-9)\-\/.,)(]{0,60}$|^$/.test($('#OrderColor').val())) {
			$('#OrderColor').css('border', '2px inset #eeeeee');
		}else{
			$('#OrderColor').css('border', '2px solid red');
		}
	});
	//Backset
	$('#OrderBackSet',).on('input', function() {
		if(/^\d{1,8}$|^$/.test($('#OrderBackSet').val())) {
			$('#OrderBackSet').css('border', '2px inset #eeeeee');
		}else{
			$('#OrderBackSet').css('border', '2px solid red');
		}
	});
	//Height to Spindle
	$('#hightFormTimber',).on('input', function() {
		if(/^\d{1,8}$|^$/.test($('#hightFormTimber').val())) {
			$('#hightFormTimber').css('border', '2px inset #eeeeee');
		}else{
			$('#hightFormTimber').css('border', '2px solid red');
		}
	});

	// Radio buttons

	//Warranty
	$('#warChek1Timber,#warChek2Timber').on('click', function() {
		$('#warrLabelId').css('color', '');
		$('#floatLeftId').css('color', '');
	});

	//GlassOn
	$('#glassOnHingeSideTimber,#glassOnLockSideTimber').on('click', function() {
		$('#pPlusInputDoorDet7').css('color', '');
		$('#pPlusInputDoorDet8').css('color', '');
	});

	//HungOn
	$('#hungOnRightInputTimber,#hungOnLeftInputTimber').on('click', function() {
		$('#pPlusInputDoorDet12').css('color', '');
		$('#pPlusInputDoorDet13').css('color', '');
	});

	//LockFit
	$('#machChekTimber,#lockChekTimber').on('click', function() {
		$('#machChekboxTimber').css('color', '');
		$('#LockAndSuppCheboxTimber').css('color', '');
	});

/* Collect all input field and radio button names and values from TAB3 FORM
and prepare an object for submission */
var objectForPDF = {};
function makeObjectForPDF() {
	objectForPDF[$('#submitButtonOrderTimber').attr("name")] = 'true';
	for (var i = 0; i < $('#mainFormForprint input').length; i++) {
		if(/\bradio\b/.test($('#mainFormForprint input').eq(i).attr("type"))){
			if($('#mainFormForprint input').eq(i).is(':checked')) {
				if(!(/\bDoorViewer\b|\bProtectiveWrap\b|\bTempOak\b/.test($('#mainFormForprint input').eq(i).attr("name"))
					&& (!$('#mainFormForprint input').eq(i).is(':checked')) )) {
					objectForPDF[$('#mainFormForprint input').eq(i).attr("name")] = $('#mainFormForprint input').eq(i).val();
				}
				objectForPDF[$('#mainFormForprint input').eq(i).attr("name")] = $('#mainFormForprint input').eq(i).val();
			}
		}else{
			objectForPDF[$('#mainFormForprint input').eq(i).attr("name")] = $('#mainFormForprint input').eq(i).val();
		}
	};
}

// AJAX SUBMIT FORM TAB3
$('#submitButtonOrderTimber').click(function(e){

	e.preventDefault();
	$('body').addClass('waitCursor');
	makeObjectForPDF();

	var selectTimber = $('#doorColorTimber').val();
	var textAreaComment = $('#text_area').val();

	objectForPDF.TimberType = selectTimber;
	objectForPDF.CommentBox = textAreaComment;

	$.post( "PWPHP/processor.php", objectForPDF).done(function(result) {
		$('body').removeClass('waitCursor');
        //console.log(result);

		// Check inputs on php response

		//Warranty
		if ((JSON.parse(result)).Warranty) {
			$('#warrLabelId').css('color', 'red');
			$('#floatLeftId').css('color', 'red');
		}else{
			$('#warrLabelId').css('color', '');
			$('#floatLeftId').css('color', '');
		}
		//DoorCode
		if ((JSON.parse(result)).DoorCode) {
			$('#DoorCode1Timber').css('border', '2px solid red');
		}else{
			$('#DoorCode1Timber').css('border', '2px inset #eeeeee');
		}
		//DoorHeight
		if ((JSON.parse(result)).DoorHeight) {
			$('#doorSizeHightTimber').css('border', '2px solid red');
		}else{
			$('#doorSizeHightTimber').css('border', '2px inset #eeeeee');
		}
		//DoorWidth
		if ((JSON.parse(result)).DoorWidth) {
			$('#DoorWidth1Timber').css('border', '2px solid red');
		}else{
			$('#DoorWidth1Timber').css('border', '2px inset #eeeeee');
		}
		//GlassOn
		if ((JSON.parse(result)).GlassOn) {
			$('#pPlusInputDoorDet7').css('color', 'red');
			$('#pPlusInputDoorDet8').css('color', 'red');
		}else{
			$('#pPlusInputDoorDet7').css('color', '');
			$('#pPlusInputDoorDet8').css('color', '');
		}
		//HungOn
		if ((JSON.parse(result)).HungOn) {
			$('#pPlusInputDoorDet12').css('color', 'red');
			$('#pPlusInputDoorDet13').css('color', 'red');
		}else{
			$('#pPlusInputDoorDet12').css('color', '');
			$('#pPlusInputDoorDet13').css('color', '');
		}
		//LockFit
		if ((JSON.parse(result)).LockFit) {
			$('#machChekboxTimber').css('color', 'red');
			$('#LockAndSuppCheboxTimber').css('color', 'red');
		}else{
			$('#machChekboxTimber').css('color', '');
			$('#LockAndSuppCheboxTimber').css('color', '');
		}

		//Check optional inputs on php response

		//Name
		if ((JSON.parse(result)).Name) {
			$('#companyName').css('border', '2px solid red');
		}else{
			$('#companyName').css('border', '2px inset #eeeeee');
		}
		//Contact
		if ((JSON.parse(result)).Contact) {
			$('#formContact').css('border', '2px solid red');
		}else{
			$('#formContact').css('border', '2px inset #eeeeee');
		}
		//Order Number
		if ((JSON.parse(result)).OrderNumber) {
			$('#orderNumber').css('border', '2px solid red');
		}else{
			$('#orderNumber').css('border', '2px inset #eeeeee');
		}
		//Job Name
		if ((JSON.parse(result)).JobName) {
			$('#jobNameTimber').css('border', '2px solid red');
		}else{
			$('#jobNameTimber').css('border', '2px inset #eeeeee');
		}
		//Timber Type
		if ((JSON.parse(result)).TimberType) {
			$('#doorColorTimber').css('border', '2px solid red');
		}else{
			$('#doorColorTimber').css('border', '2px inset #eeeeee');
		}
		//Qty
		if ((JSON.parse(result)).Quantity) {
			$('#OtyLabelTimber').css('border', '2px solid red');
		}else{
			$('#OtyLabelTimber').css('border', '2px inset #eeeeee');
		}
		//Glass Type
		if ((JSON.parse(result)).GlassType) {
			$('#glassType1Timber').css('border', '2px solid red');
		}else{
			$('#glassType1Timber').css('border', '2px inset #eeeeee');
		}
		//console.log(result);
		if(result.includes("Thank You!")) {
			$('#emailWarningSecondPage13').css("display", "block");
		}

	});

	// Resubmission incident - purify object for its potential volatility
	objectForPDF = {};
});

// X button for 'email sent'
$('#emailWarningRelative13').click(function(){
	$('#emailWarningSecondPage13').css("display", "none");
})
// X button for 'email not sent'
$('#emailWarningRelative23').click(function(){
	$('#emailWarningSecondPage23').css("display", "none");
})

//	Make optional radio buttons on TAB3 switch off
$('#doorViewerInputTimber, #extrProtWrapInputTimber, #temporarySimpleOakInputTimber').click(function(){
	thisRadio = $(this);
    if (thisRadio.hasClass("imChecked")) {
        thisRadio.removeClass("imChecked");
        thisRadio.prop('checked', false);
    } else {
        thisRadio.prop('checked', true);
        thisRadio.addClass("imChecked");
    };
});

// 3 big buttons on top

// 2nd and third buttons should be disabled until first tab inputs are validated or they can validate as well

$('#calcTab1Timber').click(function(){
	$('#calcTab1Timber').addClass('activeTabTimber');
	$('#calcTab2Timber').removeClass('activeTabTimber');
	$('#calcTab3Timber').removeClass('activeTabTimber');

	$('#userDetailsPageTimber').removeClass('formWrapperDisplayNone');
	$('#formShareMailTimber, #allModelsWrapper').addClass('formWrapperDisplayNone');
	$('#formWrapperTimber').addClass('formWrapperDisplayNone');

	$('#all_codes_main').css('display', 'none');
});
$('#calcTab2Timber').click(function(){
	$('#all_codes_main').css('display', 'block');
	tab1Inputs();
	doAllCalculations();

	$.ajax({
    	type: 'POST',
    	url: "PWPHP/processor.php",
        data: {Next, tabOneValues},
        success: function(result){

			// Check inputs on php response

			if ((JSON.parse(result)).Name) {
				$('#inputNameTimber').css('border', '2px solid red');
			}else{
				$('#inputNameTimber').css('border', '2px inset #eeeeee');
			}
			if ((JSON.parse(result)).Address1) {
				$('#inputAddressTimber').css('border', '2px solid red');
			}else{
				$('#inputAddressTimber').css('border', '2px inset #eeeeee');
			}
			if ((JSON.parse(result)).Address2) {
				$('#inputAddress2Timber').css('border', '2px solid red');
			}else{
				$('#inputAddress2Timber').css('border', '2px inset #eeeeee');
			}

			if ((JSON.parse(result)).Phone) {
				$('#inputPhoneTimber').css('border', '2px solid red');
			}else{
				$('#inputPhoneTimber').css('border', '2px inset #eeeeee');
			}

			if ((JSON.parse(result)).Email) {
				$('#inputEmailTimber').css('border', '2px solid red');
			}else{
				$('#inputEmailTimber').css('border', '2px inset #eeeeee');
			}
			if ((JSON.parse(result)).Contact) {
				$('#inputContactTimber').css('border', '2px solid red');
			}else{
				$('#inputContactTimber').css('border', '2px inset #eeeeee');
			}

			if (JSON.parse(result)){
				return;
			}

			tab1CopyInputsToTab2And3();
			$('#calcTab1Timber').removeClass('activeTabTimber');
			$('#calcTab2Timber').addClass('activeTabTimber');
			$('#calcTab3Timber').removeClass('activeTabTimber');

			$('#userDetailsPageTimber').addClass('formWrapperDisplayNone');
			$('#formShareMailTimber, #allModelsWrapper').removeClass('formWrapperDisplayNone');
			$('#formWrapperTimber').addClass('formWrapperDisplayNone');
        },
        error: function(xhr,status,error){
        	console.log(xhr);
        	console.log(status);
        	console.log(error);
        }
    });
});

$('#calcTab3Timber').click(function(){
	$('#all_codes_main').css('display', 'none');
	tab1Inputs();

	$.ajax({
    	type: 'POST',
    	url: "PWPHP/processor.php",
        data: {Next, tabOneValues},
        success: function(result){

			// Check inputs on php response

			if ((JSON.parse(result)).Name) {
				$('#inputNameTimber').css('border', '2px solid red');

			}else{
				$('#inputNameTimber').css('border', '2px inset #eeeeee');
			}
			if ((JSON.parse(result)).Address1) {
				$('#inputAddressTimber').css('border', '2px solid red');

			}else{
				$('#inputAddressTimber').css('border', '2px inset #eeeeee');
			}
			if ((JSON.parse(result)).Address2) {
				$('#inputAddress2Timber').css('border', '2px solid red');

			}else{
				$('#inputAddress2Timber').css('border', '2px inset #eeeeee');
			}
			if ((JSON.parse(result)).Phone) {
				$('#inputPhoneTimber').css('border', '2px solid red');

			}else{
				$('#inputPhoneTimber').css('border', '2px inset #eeeeee');
			}
			if ((JSON.parse(result)).Email) {
				$('#inputEmailTimber').css('border', '2px solid red');

			}else{
				$('#inputEmailTimber').css('border', '2px inset #eeeeee');
			}
			if ((JSON.parse(result)).Contact) {
				$('#inputContactTimber').css('border', '2px solid red');

			}else{
				$('#inputContactTimber').css('border', '2px inset #eeeeee');
			}

			if (JSON.parse(result)){
				return;
			}

			tab1CopyInputsToTab2And3();
			tab2Totab3Inputs();
			$('#calcTab1Timber').removeClass('activeTabTimber');
			$('#calcTab2Timber').removeClass('activeTabTimber');
			$('#calcTab3Timber').addClass('activeTabTimber');

			$('#userDetailsPageTimber').addClass('formWrapperDisplayNone');
			$('#formShareMailTimber, #allModelsWrapper').addClass('formWrapperDisplayNone');
			$('#formWrapperTimber').removeClass('formWrapperDisplayNone');
        },
        error: function(xhr,status,error){
        	console.log(xhr);
        	console.log(status);
        	console.log(error);
        }
    });
});

// if pair of doors is selected, extra drilling options should be disabled
$('#singleTimber').on('change', function() {
	if ( $('#singleTimber').val() == 'pair') {
		$('#drillingTimber').val('noLocks');
		$('#drillingTimber').attr('disabled', 'disabled');
	}else {
		$('#drillingTimber').removeAttr('disabled', 'disabled');
	}
});

// show/hide 'hints' section
$('#glassFormHeading span').on("click", function() {
	if ( $('#paragraphDivGlassCalcAbsolute').css('display') == 'none' ) {
		$('#paragraphDivGlassCalcAbsolute').css('display', 'block');
	}else {
		$('#paragraphDivGlassCalcAbsolute').css('display', 'none');
	}
});

// // show/hide Door Codes
// $('#showHideDoorCodes').on("click", function() {
// 	$('#all_codes_all_codes').toggle('display');
// });

// Door codes scroll to door
$('#all_codes_all_codes > div').on("click", function() {
	var elementText = $(this).find('h4').html().split(' ').join('');
	elementText = elementText.split('&amp;').join('');
	elementText = elementText.split('/').join('');
	elementText = elementText.split('.').join('');
	elementText = elementText.split(')').join('');
	elementText = elementText.split('(').join('');
	console.log(elementText);
	// $('#all_codes_all_codes').toggle('display');
	$('html, body').animate({
        scrollTop: $(`#${elementText}`).offset().top
    }, 500);
});

// do calculations on input/select changes
$('input').on('input',function(){
	doAllCalculations();
});
$('#eyeViewerTimber, #extraColorTimber').on('change',function(){
	doAllCalculations();
});
$('select').on('change', function() {
	doAllCalculations();
});

// DEV
$('#calcTab2Timber').trigger('click');
