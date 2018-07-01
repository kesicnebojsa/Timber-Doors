<?php
define('DS', DIRECTORY_SEPARATOR);
define('CLASSES', __DIR__ . '/class/');
spl_autoload_register(function($class){
	$ClassFileName = str_replace('\\', DS, $class) . '.php';
	if(file_exists(CLASSES. $ClassFileName)){
		require_once CLASSES . $ClassFileName;
	}
});
require_once dirname(__FILE__) . '/includes/arrays.php';
require_once dirname(__FILE__) . '/class/DoorModel.php';
$mail = new PHPMailer\PHPMailer\PHPMailer();

#################### TAB1 Check Email as you type ####################################################

if(isset($_POST['EmailAsYouType'])):

	$validate = new Validate;
	die(json_encode($validate->CheckEmailAsYouType($_POST['EmailAsYouType'])));

#################### TAB1 NEXT #######################################################################

elseif (isset($_POST['Next']) && ($_POST['Next']=='true')):

	$tabOneValues = $_POST['tabOneValues'];
	foreach ($tabOneValues as $k => $v):
		${$k} = trim($v);
	endforeach;

	$validate = new Validate;

	if(isset($Name) && $Name !=='') {
		$validate->CheckName($Name, 'Name');
	}

	if(isset($Address1) && $Address1 !=='') {
		$validate->CheckAddress($Address1, 'Address1');
	}

	if(isset($Address2) && $Address2 !=='') {
		$validate->CheckAddress($Address2, 'Address2');
	}

	if(isset($Phone) && $Phone !=='') {
		$validate->CheckPhone($Phone, 'Phone');
	}

	if(isset($Email) && $Email !=='') {
		$validate->CheckEmail($Email, 'Email');
	}

	if(isset($Contact) && $Contact !=='') {
		$validate->CheckName($Contact, 'Contact');
	}

	if (!empty($validate->GetErrors())):
		die(json_encode($validate->GetErrors()));
	else:
		die(json_encode(''));
	endif;

#################### DOOR MODELS FORM ################################################################

elseif (isset($_POST['submitMail']) && ($_POST['submitMail']=='true') && (!isset($_POST['SubmitOrder']))):

	$validate = new Validate;
	$_POST = $validate->TrimAll($_POST);
	$required = [
		'Name'=>$_POST['Name'],
		'Address1'=>$_POST['Address1'],
		'Phone'=>$_POST['Phone'],
		'Email'=>$_POST['Email'],
		'Door_Height'=>$_POST['Door_Height'],
		'Door_Width'=>$_POST['Door_Width']
	];
	// CHECK REQUIRED
	$validate->CheckRequiredArray($required);
	// VALIDATE
	$validate->CheckName($_POST['Name'],'Name');
	$validate->CheckAddress($_POST['Address1'], 'Address1');
	$validate->CheckAddress($_POST['Address2'], 'Address2');
	$validate->CheckPhone($_POST['Phone'], 'Phone');
	$validate->CheckEmail($_POST['Email'], 'Email');
	$validate->CheckName($_POST['Contact'], 'Contact');
	$validate->CheckNumber($_POST['Door_Height'],1,8, 'Door_Height');
	$validate->CheckNumber($_POST['Door_Width'],1,8, 'Door_Width');

	$validate->CheckExpected($_POST);

	if (!empty($validate->GetErrors())):
		die(json_encode($validate->GetErrors()));
	else:
		require_once dirname(__FILE__) . '/includes/PDFDoorModels/PDFDoorModels.php';
		require_once dirname(__FILE__) . '/includes/EmailSettings.php';
	endif;

	if (!$mail->send()):
		$validate->SetErrors();
		die(json_encode($validate->GetErrors()));
	else:
		die(json_encode('Mail sent to ' . $mailto . '!'));
	endif;

#################### ORDER FORM ######################################################################

elseif (isset($_POST['SubmitOrder']) && (!isset($_POST['submitMail']))):

	foreach ($_POST as $k => $v):
		${$k} = trim($v);
	endforeach;

	$validate = new Validate;

	// CHECK REQUIRED
	@$validate->CheckRequired($Warranty,'Warranty');
	$validate->CheckRequired($DoorCode, 'DoorCode');
	$validate->CheckRequired($DoorHeight, 'DoorHeight');
	$validate->CheckRequired($DoorWidth, 'DoorWidth');
	@$validate->CheckRequired($GlassOn,'GlassOn');
	@$validate->CheckRequired($HungOn,'HungOn');
	@$validate->CheckRequired($LockFit,'LockFit');

	// VALIDATE
	$validate->CheckName($Name, 'Name');
	$validate->CheckName($Contact, 'Contact');
	$validate->CheckUniRegex($OrderNumber, 'OrderNumber');
	$validate->CheckUniRegex($JobName, 'JobName');

	$validate->CheckUniRegex($DoorCode, 'DoorCode');
	$validate->CheckUniRegex($TimberType,'TimberType');
	$validate->CheckNumber($Qty,1,8, 'Quantity');
	$validate->CheckNumber($DoorHeight,1,8, 'DoorHeight');
	$validate->CheckNumber($DoorWidth,1,8, 'DoorWidth');
	$validate->CheckRegex($GlassType, 'GlassType','/^[a-zA-Z]+[a-zA-Z )(]*$/');

	$validate->CheckUniRegex($BrandName, 'BrandName');
	$validate->CheckUniRegex($Code, 'Code');
	$validate->CheckUniRegex($Colour, 'Colour');
	$validate->CheckNumber($Backset,1,8, 'Backset');
	$validate->CheckNumber($LockHeight,1,8, 'LockHeight');

	if (!empty($validate->GetErrors())):
		die(json_encode($validate->GetErrors()));
	else:
		require_once dirname(__FILE__) . '/includes/PDFOrder/PDFOrder.php';
		require_once dirname(__FILE__) . '/includes/EmailSettings.php';
	endif;

	if (!$mail->send()):
		$validate->SetErrors();
		die(json_encode($validate->GetErrors()));
	else:
		die(json_encode('Thank You!We will send an order confirmation within 2 working days!'));
	endif;
endif;
header('Location:../index.php')
?>