<?php

class DoorModel {

	public $match,$replace,$img,$p;
	public $dc1,$dc2,$dc3,$dc4,$dc5,$dc6;
    public $m1,$m2,$m3,$m4,$m5,$m6;

	// public $bot;

	public function __construct($var) {
		$this->match = preg_match('/\bE1\b|\bE152\b|\bAR10\b|\bAR11\b|\bAR12\b|\bAR13\b|\bAR14\b/',$var);
		$this->replace = preg_replace('/\s+|\//', '', $var);

		$this->img = preg_replace('/\//', '-', $var);
		$this->p = ($this->match) ? '' : 'N/A';

		$this->dc1 = ($this->match) ? 'PQC' . $this->replace : 'PQP' . $this->replace;
		$this->dc2 = ($this->match) ? 'SQC' . $this->replace : 'PQC' . $this->replace;
		$this->dc3 = ($this->match) ? 'PQV' . $this->replace : 'SQC' . $this->replace;
		$this->dc4 = ($this->match) ? '' : 'PQV' . $this->replace;
		$this->dc5 = ($this->match) ? '' : 'RO' . $this->replace;
		$this->dc6 = ($this->match) ? '' : 'AA' . $this->replace;

		$this->m1 = ($this->match) ? 'Paint quality Cedar' : 'Paint quality Pine';
		$this->m2 = ($this->match) ? 'Stain quality Cedar' : 'Paint quality Cedar';
		$this->m3 = ($this->match) ? 'Paint quality Vulcan+' : 'Stain quality Cedar';
		$this->m4 = ($this->match) ? '' : 'Paint quality Vulcan+';
		$this->m5 = ($this->match) ? '' : 'Rosewood';
		$this->m6 = ($this->match) ? '' : 'American White Ash';

		// switch (true):
		// case (preg_match('/\bE17\b|\bE19\b|\bE20\b|\bE21\b|\bE9\b|\bFP6\b|\bFP12\b|\bF8\b|\bF9\b|\bF10\b|\bF6\b/',$var)) : $this->bot = 'NO DOUBLE GLAZING FOR THESE DOORS'; break;
		// case (preg_match('/\bE9S\b/',$var)) : $this->bot = 'NO DOUBLE GLAZING'; break;
		// case (preg_match('/\bE12\b|\bE13\b|\bE14\b|\bE15\b/',$var)) : $this->bot = 'Minimum Door width 810mm'; break;
		// case (preg_match('/\bE14S\b/',$var)) : $this->bot = 'Minimum width 375mm'; break;
		// default : $this->bot = ''; break;
		// endswitch;
	}
}
?>