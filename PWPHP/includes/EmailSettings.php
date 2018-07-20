<?php
//			E-MAIL VARIABLES
  $host = 'mail.stevancuk.com';              		//  set smtp server host
  $port = 587;                           			//  set smtp server port (usually 465 for ssl, 587 for tls)
  $SMTPAuth = true;                      			//  whether to use SMTP authentication, false otherwise
  $username = 'stevan@stevancuk.com';      			//  set server email username for authentication
  $password = 'elf666priest';             		 	//  set server email password for authentication
  $mailfrom = 'stevan@stevancuk.com';       		//  set who the message appears to be sent from (part of mail headers)
  $mailOrdersTo = 'ikactest@gmail.com';         	//  !!! this e-mail will receive ORDERS e.g. orders@parkwooddoors.co.nz







############### SET EMAIL MSG ##############################

if (isset($_POST['submitMail']) && ($_POST['submitMail']=='true') && (!isset($_POST['submitOrder']))):

// PERSONAL INFO
$V = new Validate($_POST);
$msg = 'SUPPLIER:<br><br>';
$msg .= 'Name: ' . $V->h($_POST['Name']) . '<br>';
$msg .= 'Address: ' . $V->h($_POST['Address1']) . '<br>';

	if(isset($_POST['Address2'])):
		$msg .= 'Address2: ' .   $V->h($_POST['Address2']) . '<br>';
	endif;

$msg .= 'Phone: ' . $V->h($_POST['Phone']) . '<br>';
$msg .= 'Email: ' . $V->h($_POST['Email']) . '<br>';

	if(isset($_POST['Contact'])):
		$msg .= 'Contact: ' . $V->h($_POST['Contact']) . '<br>';
	endif;

//OPTIONS
$msg .= '<br><hr><br>OPTIONS:<br><br>';
$msg .= 'Door Height: ' . $V->h($_POST['Door_Height']) . '<br>';
$msg .= 'Door Width: ' . $V->h($_POST['Door_Width']) . '<br>';

	if($_POST['Pairs']==='single'):
		$msg .= 'Pairs: Single <br>';
	elseif($_POST['Pairs']==='rebate'):
		$msg .= 'Pairs: Rebated pair <br>';
	elseif($_POST['Pairs']==='pair'):
		$msg .= 'Pairs: Pair-of-doors Kit <br>';
	endif;

	if($_POST['Drilling']==='noLocks'):
		$msg .= 'Drilling: No Locks <br>';
	elseif($_POST['Drilling']==='standard'):
		$msg .= 'Drilling: Standard Locks <br>';
	elseif($_POST['Drilling']==='special'):
		$msg .= 'Drilling: Special Locks, incl 4pt <br>';
	endif;

	if($_POST['Glass']==='noGlass'):
		$msg .= 'Glass: No Glass <br>';
	elseif($_POST['Glass']==='clearGlass'):
		$msg .= 'Glass: Clear or Tinted <br>';
	elseif($_POST['Glass']==='obscure'):
		$msg .= 'Glass: Obscure <br>';
	elseif($_POST['Glass']==='translucent'):
		$msg .= 'Glass: Translucent Laminate <br>';
	elseif($_POST['Glass']==='etchlite'):
		$msg .= 'Glass: Etchlite (Opal) <br>';
	elseif($_POST['Glass']==='doubleClear'):
		$msg .= 'Glass: Double Glazed Clear or Tinted <br>';
	elseif($_POST['Glass']==='doubleObscure'):
		$msg .= 'Glass: Double Glazed Obscure <br>';
	elseif($_POST['Glass']==='doubleTranslucent'):
		$msg .= 'Glass: Double Glazed Translucent Laminate <br>';
	elseif($_POST['Glass']==='doubleEtchlite'):
		$msg .= 'Glass: Double Glazed Etchlite (or Opal) <br>';
	elseif($_POST['Glass']==='doubleGlazing'):
		$msg .= 'Glass: Beaded For Double Glazing <br>';
	endif;

	$msg .= (isset($_POST['Supply_and_Fit_Eye_Viewer']) && $_POST['Supply_and_Fit_Eye_Viewer']=='on') ? 'Machine and Supply: Selected <br>' : 'Machine and Supply: Not Selected <br>';
	$msg .= (isset($_POST['Extra_Color']) && $_POST['Extra_Color']=='on') ? 'Temporary Single Base Coat - Sikkens HLS Dark Oak: Selected <br>' : 'Temporary Single Base Coat - Sikkens HLS Dark Oak: Not Selected <br>';
	$msg .= (isset($_POST['Extra_Color2']) && $_POST['Extra_Color']=='on') ? 'Signature Finish Kit: Selected <br>' : 'Signature Finish Kit: Not Selected <br>';

else:
	$msg = 'Comment box message:<br>';
	$msg .= $CommentBox;
endif;

######################################################################################################

if (isset($_POST['submitMail']) && ($_POST['submitMail']=='true') && (!isset($_POST['submitOrder']))):
	$mailto = $V->h($_POST['Email']);
else:
	$mailto = $mailOrdersTo;
endif;

$mail->Host = $host;
$mail->isSMTP();
$mail->SMTPAuth = $SMTPAuth;
$mail->Username = $username;
$mail->Password = $password;
$mail->SMTPSecure = 'tls';
$mail->Port = $port;
$mail->IsHTML(true);
$mail->Body = $msg;

if (isset($_POST['submitMail']) && ($_POST['submitMail']=='true') && (!isset($_POST['submitOrder']))):
	$mail->Subject = 'Timber Doors selection form';
else:
	$mail->Subject = 'Order id: ' . $id;
endif;

$mail->setFrom($mailfrom , 'Parkwood Doors');
$mail->addAddress($mailto);
$mail->SMTPDebug = 0;
$mail->Debugoutput = 'html';
$mail->addStringAttachment($pdf, $pdfname);
?>