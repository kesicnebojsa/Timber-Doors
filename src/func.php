<?php
// html escape
function h($string=''){
	return htmlentities($string,ENT_QUOTES,'UTF-8',false);
}
// test die
function die_r($v){
	echo '<pre>';
	print_r($v);
	echo '</pre>';
	die;
}
// redirect to home page
function goHome(){
	header('Location: ' . MYSITE);
	die;
}
/*
 * 	Automatically generate link for javascript and stylesheet assets
 * 	If there are multiple file versions, target the file with the latest modified date
 *
 * 	@param string  $file 	- name of the file
 * 	@param string  $folder 	- folder name
*/
function getAssetLink(string $file, string $folder) {
	$file_paths = glob(PUBLIC_PATH . $folder . DS . $file);
	if (count($file_paths) > 1) {
		foreach ($file_paths as $file_path) {
			$key = basename($file_path);
			$value = filemtime($file_path);
			$files[$key] = time() - $value;
		}
		asort($files);
		$files = array_keys($files);
		$file = $files[0];
	} else {
		$file = basename(implode('',glob(PUBLIC_PATH . $folder . DS . $file)));
	}
	echo MYSITE . $folder . '/' . $file;
}
/*
 * 	extended trim - add ability to pass an array of any depth and apply trim recursively to each of its elements
 * 	@param mixed $var - string or multidimensional array
*/
function trim_e($var) {
	if (is_array($var)) {
		foreach ($var as $k => $v) {
			if (is_array($v)) {
				$var[$k] = trim_e($v);
			} else {
				$var[$k] = trim($v);
			}
		}
		return $var;
	} else {
		$var = trim($var);
		return $var;
	}
}
?>