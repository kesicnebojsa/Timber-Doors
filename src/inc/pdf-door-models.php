<?php
/*
	asset links (img src=, pdf css) should be relative to ajax.php
	because this whole file will be included in ajax.php!
*/

// Buffer the following html with PHP so it can be stored to a variable later
ob_start();
?>
<html lang='en'>
<head>
<meta charset='utf-8' />
<meta name = 'viewport' content = 'initial-scale = 1.0, user-scalable = no'>
	<title>Timber Doors</title>
	<link rel='stylesheet' href='../css/pdf-door-models.css'>
</head>
<body>
<table class='MainTable'>
	<tr>
		<th class='Heading'></th>
		<th class='Heading'></th>
	</tr>
	<tr>
<?php
foreach ($doors as $k => $v):
	foreach ($v as $dc => $dm):
		$d = new DoorModel($dc);?>
		<td>
			<table class='DoorModel'>
				<tr>
					<th class='ImgContainer' rowspan='7'><img src='../img/<?php o($d->img);?>.jpg' height='210px' width='80px'></img></th>
					<th class='CodeColumn'>Code</th>
					<th class='TimbersColumn'>Available Timbers </th>
					<th class='PriceColumn'>Price</th>
				</tr>
				<tr>
					<td class='CodeCell'><?php o($d->dc1);?></td>
					<td class='TimbersCell'><?php o($d->m1);?></td>
					<td class='PriceCell'><?php o($_POST[$d->dc1]);?></td>
				</tr>
				<tr>
					<td class='CodeCell'><?php o($d->dc2);?></td>
					<td class='TimbersCell'><?php o($d->m2);?></td>
					<td class='PriceCell'><?php o($_POST[$d->dc2]);?></td>
				</tr>
				<tr>
					<td class='CodeCell'><?php o($d->dc3);?></td>
					<td class='TimbersCell'><?php o($d->m3);?></td>
					<td class='PriceCell'><?php o($_POST[$d->dc3]);?></td>
				</tr>
				<tr>
					<td class='CodeCell'><?php o($d->dc4);?></td>
					<td class='TimbersCell'><?php o($d->m4);?></td>
					<td class='PriceCell'><?php if(isset($_POST[$d->dc4])): o($_POST[$d->dc4]); endif;?></td>
				</tr>
				<tr>
					<td class='CodeCell'><?php o($d->dc5);?></td>
					<td class='TimbersCell'><?php o($d->m5);?></td>
					<td class='PriceCell'><?php if(isset($_POST[$d->dc5])): o($_POST[$d->dc5]); endif;?></td>
				</tr>
				<tr>
					<td class='CodeCell'><?php o($d->dc6);?></td>
					<td class='TimbersCell'><?php o($d->m6);?></td>
					<td class='PriceCell'><?php if(isset($_POST[$d->dc6])): o($_POST[$d->dc6]); endif;?></td>
				</tr>
			</table>
		</td>
<?php if ($k % 2 == 0):?>
	</tr>
	<tr>
<?php endif; endforeach; endforeach;?>
</table>
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
$pdfname = 'Timber_Doors.pdf';
/*
$dompdf->stream();
$pdfname = date('dmy') . '-' . date('is') . rand(1,999) . '.pdf';
*/
?>