<?php
class Validate {

	private $errors = [];

	// private function ClearEmptyValuesInErrorsArray($array){
		// foreach ($array as $k => $v){
			// if ($v == ''){
				// unset($array[$k]);
			// }
		// }
		// return($array);
	// }

	public function GetErrors(){
		return ($this->errors);
	}

	public function SetErrors(){
		$this->errors['Email'] = 'Email not sent!';
	}

	public function h($var){
		$var = htmlentities($var);
		return($var);
	}

	public function TrimAll($var){
		if (is_array($var)){
			foreach ($var as $k => $v){
				$var[$k] = trim($v);
			}
		}
		else{
			$var = trim($var);
		}
	return($var);
	}

	public function CheckRequiredArray($array) {
		foreach ($array as $k =>$v){
			if(empty($array[$k])){
				$this->errors[$k] = 'Required';
			}
		}
	}

	public function CheckRequired($var,$InputFieldName) {
		if(empty($var)){
			$this->errors["{$InputFieldName}"] = 'Required';
		}
	}

	public function CheckName($var,$InputFieldName){
		if ((!empty($var)) && (!preg_match('/^[a-zA-Z]{1}[a-zA-Z ]{0,50}$/', $var))){
			$this->errors["{$InputFieldName}"] = 'Error';
		}
	}

	public function CheckEmail($var,$InputFieldName){
		if(!empty($var) && (!filter_var($var, FILTER_VALIDATE_EMAIL))){
			$this->errors["{$InputFieldName}"] = 'Error';
		}
	}

	public function CheckEmailAsYouType($var){
		if(filter_var($var, FILTER_VALIDATE_EMAIL)){
			return(true);
		}
		else{
			return(false);
		}
	}

	public function CheckAddress($var,$InputFieldName){
		if(!empty($var) && (!preg_match('/^[a-zA-Z\d]{1}[a-zA-Z (0-9)\-\/\\\.,&]{0,60}$/', $var))){
			$this->errors["{$InputFieldName}"] = 'Error';
		}
	}

	public function CheckPhone($var,$InputFieldName){
		if(!empty($var) && (!preg_match('/^[+]?[() ]*([0-9][ \-()]*){6,45}$/', $var))){
			$this->errors["{$InputFieldName}"] = 'Error';
		}
	}

	public function CheckNumber($var,$min,$max,$InputFieldName){
		if(!empty($var) && (!preg_match('/^\d{' . $min . ',' . $max . '}$/', $var))){
			$this->errors["{$InputFieldName}"] = 'Error';
		}
	}

	public function CheckRegex ($var,$InputFieldName,$regex){
		if(!preg_match($regex,$var)){
			$this->errors["{$InputFieldName}"] = 'Error';
		}
	}

	public function CheckUniRegex ($var,$InputFieldName){
		if(!preg_match('/^[a-zA-Z\\\ (0-9)\-\/.,)(]{0,60}$/',$var)){
			$this->errors["{$InputFieldName}"] = 'Error';
		}
	}

	public function CheckExpected($var){
		foreach ($var as $k => $v){
			//Pairs expected
			if (preg_match('/\bPairs\b/',$k) && (!preg_match('/\bsingle\b|\brebate\b|\bpair\b/', $v))){
				$this->errors[$k] = 'FATAL ERROR';
			}
			//Drilling expected
			elseif (preg_match('/\bDrilling\b/',$k) && (!preg_match('/\bnoLocks\b|\bstandard\b|\bspecial\b/', $v))){
				$this->errors[$k] = 'FATAL ERROR';
			}
			//Glass expected
			elseif (preg_match('/\bGlass\b/',$k) && (!preg_match('/\bnoGlass\b|\bclearGlass\b|\bobscure\b|\btranslucent\b|\betchlite\b|\bdoubleClear\b|\bdoubleObscure\b|\bdoubleTranslucent\b|\bdoubleEtchlite\b|\bdoubleGlazing\b/', $v))){
				$this->errors[$k] = 'FATAL ERROR';
			}
		}
	}
}
?>