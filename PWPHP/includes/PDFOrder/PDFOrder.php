<?php

#set order id
$id = date("dmy") . '-' . date("His") . '-' . rand(1,999);

/* reformat $date and $datereq to "dd-mm-yyyy" for pdf creation because
 html's "input type=date" is always stored as "yyyy-mm-dd" (ISO format) */

if (empty($Date)):
$Date ='';
else:
$Date =	explode("-", $Date);
$Date = $Date[2] . '-' . $Date[1] . '-' . $Date[0];
endif;

if (empty($DateRequired)):
$DateRequired ='';
else:
$DateRequired = explode("-", $DateRequired);
$DateRequired = $DateRequired[2] . '-' . $DateRequired[1] . '-' . $DateRequired[0];
endif;

//References (img src=, pdf css) should be pointing from processor perspective because this whole file will be included in processor.php!
// Buffer the following html with PHP so it can be stored to a variable later
ob_start(); ?>

<html lang="en">
<head>
<meta charset="utf-8">
	<title>Timber Doors Order</title>
	<link rel="stylesheet" href="includes/PDFOrder/PDFOrder.css">
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
					<p>Name: <?= ($Name ?? ''); ?></p>
					<p>Contact: <?= ($Contact ?? ''); ?></p>
					<p>Order Number: <?= ($OrderNumber ?? ''); ?></p>
					<p>Date: <?= ($Date ?? ''); ?></p>
					<p>Date Required: <?= ($DateRequired ?? ''); ?></p>
					<p>Job Name: <?= ($JobName ?? ''); ?></p>
				</div>
		    </div>
				<div id="Warranty">
				<div class="colour">
					<h2>Warranty</h2>
				</div>
				<div class="space">
					<p><?= ($Warranty ?? ''); ?></p>
				</div>
		    </div>
		    <div id="DoorDetails">
				<div class="colour">
					<h2>Door Details</h2>
				</div>
				<div class="space">
					<p>Door Code: <?= ($DoorCode ?? '') ?></p>
					<p>Timber type: <?php echo ($TimberType ?? '')  ?></p>
					<p>Qty: <?php echo $Qty ?></p>
					<p>Door Height: <?php echo ($DoorHeight ?? '') ?></p>
					<p>Door Width: <?php echo ($DoorWidth ?? '') ?></p>
					<p>Glass Type: <?php echo ($GlassType ?? '') ?></p>
					<p>Glass on which side: <?php echo ($GlassOn ?? '') ?></p>
					<p>Beading Door Viewer: <?php if(empty($DoorViewer)): echo 'NOT SELECTED'; else: echo 'SELECTED'; endif;?></p>
					<p>Extra Protective Wrap $35: <?php if(empty($ProtectiveWrap)): echo 'NOT SELECTED'; else: echo 'SELECTED'; endif;?></p>
					<p>Temporary Single Base Coat - Sikkens HLS Dark Oak $80: <?php if(empty($TempOak)): echo 'NOT SELECTED'; else: echo 'SELECTED'; endif;?></p>
					<p><?php echo ($HungOn ?? '') ?></p>
			   </div>
            </div>
            <div id="LockDetails">
				<div class="colour">
					<h2>Lock Details</h2>
				</div>
				<div class="space">
					<p><?php echo $LockFit ?></p>
					<p>Brand Name: <?php echo $BrandName ?></p>
					<p>Code: <?php echo $Code ?></p>
					<p>Colour: <?php echo $Colour ?></p>
					<p>Backset: <?php echo $Backset ?></p>
					<p>Height to spindle (standard 990mm): <?php echo $LockHeight ?></p>
				</div>
		    </div>
		    <div id="RebatedPairs">
				<div class="colour">
					<h2>Rebated Pairs</h2>
				</div>
				<div class="space">
					<p><?php if(empty($Rebated)): echo 'Rebated only / Pair-of-doors kit: NOT SELECTED'; else: echo $Rebated; endif;?></p>
					<?php if(empty($RebatedWay)):?>
					<p>Rebated which way: NOT SELECTED</p>
					<?php else: ?>
					<p>Rebated which way:</p>
		        	<div id="Img">
						<img src="../img/<?php echo $RebatedWay ?>.jpg">
					</div>
					<?php endif;?>
				</div>
				<div class="space">
					<p><?php if(empty($DoorOpens)): echo 'Door Opens in / out: NOT SELECTED'; else: echo $DoorOpens; endif; ?></p>
				</div>
			</div>
		</div>
	</div>
</body>
</html>

<?php

# collect the output buffer into a variable $html
$html = ob_get_contents();
ob_end_clean();

//ini_set('max_execution_time', 300);
use Dompdf\Dompdf;

# Require dompdf composer autoload
require_once dirname(__FILE__) . '/../../class/dompdf/autoload.inc.php';

# create an instance of the dompdf class
$dompdf = new Dompdf();

# (Optional) setup the paper size and orientation
$dompdf->setPaper('A4', 'portrait');

# send the captured HTML and PHP from the output buffer to the dompdf class for processing
$dompdf->loadHtml($html);

# render the HTML as PDF
$dompdf->render();

# output the generated PDF as a string to $pdf variable
$pdf = $dompdf->output();
$pdfname = 'Order_' . $id . '.pdf';
//$dompdf->stream();
//$pdfname = date('dmy') . '-' . date('is') . rand(1,999) . '.pdf';
?>