<?php
// set order id
$id = date('dmy') . '-' . date('His') . '-' . rand(1,999);

/*
	reformat $date and $datereq to "dd-mm-yyyy" for pdf creation because
	html's "input type=date" is always stored as "yyyy-mm-dd" (ISO format)
*/

if (empty($Date)) {
	$Date = '';
} else {
	$Date =	explode('-', $Date);
	$Date = $Date[2] . '-' . $Date[1] . '-' . $Date[0];
}

if (empty($DateRequired)) {
	$DateRequired = '';
} else {
	$DateRequired = explode("-", $DateRequired);
	$DateRequired = $DateRequired[2] . '-' . $DateRequired[1] . '-' . $DateRequired[0];
}

/*
	asset links (img src=, pdf css) should be relative to ajax.php
	because this whole file will be included in ajax.php!
*/

// Buffer the following html with PHP so it can be stored to a variable later
ob_start();
?>
<html lang="en">
<head>
<meta charset="utf-8">
	<title>Timber Doors Order</title>
	<link rel="stylesheet" href="../css/pdf-order.css">
</head>
<body>
	<div id="Main">
		<div id="Form">
		    <div id="Logo">
				<img src="../img/Logo.jpg" alt="logo">
		    </div>
			<div id="Order">
				<p><b><?php echo 'Order id: ' . $id ?></b></p>
			</div>
		    <div id="SupplierDetails">
				<div class="colour">
					<h2>Supplier Details</h2>
				</div>
				<div class="space">
					<p>Name: <?= ($Name ?? '') ?></p>
					<p>Contact: <?= ($Contact ?? '') ?></p>
					<p>Order Number: <?= ($OrderNumber ?? '') ?></p>
					<p>Date: <?= ($Date ?? '') ?></p>
					<p>Date Required: <?= ($DateRequired ?? '') ?></p>
					<p>Job Name: <?= ($JobName ?? '') ?></p>
				</div>
		    </div>
				<div id="Warranty">
				<div class="colour">
					<h2>Warranty</h2>
				</div>
				<div class="space">
					<p><?= ($Warranty ?? '') ?></p>
				</div>
		    </div>
		    <div id="DoorDetails">
				<div class="colour">
					<h2>Door Details</h2>
				</div>
				<div class="space">
					<p>Door Code: <?= ($DoorCode ?? '') ?></p>
					<p>Timber type: <?= ($TimberType ?? '') ?></p>
					<p>Qty: <?= ($Qty ?? '') ?></p>
					<p>Door Height: <?= ($DoorHeight ?? '') ?></p>
					<p>Door Width: <?= ($DoorWidth ?? '') ?></p>
					<p>Glass Type: <?= ($GlassType ?? '') ?></p>
					<p>Glass on which side: <?= ($GlassOn ?? '') ?></p>
					<p>Beading Door Viewer: <?= empty($DoorViewer) ? 'NOT SELECTED' : 'SELECTED' ?></p>
					<p>Extra Protective Wrap $35: <?= empty($ProtectiveWrap) ? 'NOT SELECTED' : 'SELECTED' ?></p>
					<p>Temporary Single Base Coat - Sikkens HLS Dark Oak $80: <?= empty($TempOak) ? 'NOT SELECTED' : 'SELECTED' ?></p>
					<p><?= ($HungOn ?? '') ?></p>
			   </div>
            </div>
            <div id="LockDetails">
				<div class="colour">
					<h2>Lock Details</h2>
				</div>
				<div class="space">
					<p><?= ($LockFit ?? '') ?></p>
					<p>Brand Name: <?= ($BrandName ?? '') ?></p>
					<p>Code: <?= ($Code ?? '') ?></p>
					<p>Colour: <?= ($Colour ?? '') ?></p>
					<p>Backset: <?= ($Backset ?? '') ?></p>
					<p>Height to spindle (standard 990mm): <?= ($LockHeight ?? '') ?></p>
				</div>
		    </div>
		    <div id="RebatedPairs">
				<div class="colour">
					<h2>Rebated Pairs</h2>
				</div>
				<div class="space">
					<p><?= empty($Rebated) ? 'Rebated only / Pair-of-doors kit: NOT SELECTED' : $Rebated ?></p>
					<?php if(empty($RebatedWay)):?>
					<p>Rebated which way: NOT SELECTED</p>
					<?php else: ?>
					<p>Rebated which way:</p>
		        	<div id="Img">
						<img src="../img/<?= ($RebatedWay ?? '') ?>.jpg">
					</div>
					<?php endif;?>
				</div>
				<div class="space">
					<p><?= empty($DoorOpens) ? 'Door Opens in / out: NOT SELECTED' : $DoorOpens ?></p>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
<?php
// collect the output buffer into a variable $html
$html = ob_get_contents();
ob_end_clean();

use Dompdf\Dompdf;

// create an instance of the dompdf class
$dompdf = new Dompdf();

// (Optional) setup the paper size and orientation
$dompdf->setPaper('A4', 'portrait');

// send the captured HTML and PHP from the output buffer to the dompdf class for processing
$dompdf->loadHtml($html);

// render the HTML as PDF
$dompdf->render();

// output the generated PDF as a string to $pdf variable
$pdf = $dompdf->output();
$pdfname = 'Order_' . $id . '.pdf';
/*
	$dompdf->stream();
	$pdfname = date('dmy') . '-' . date('is') . rand(1,999) . '.pdf';
*/
?>