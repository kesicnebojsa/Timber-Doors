<?php
#######################################################################################################################

//		file system
define('DS', DIRECTORY_SEPARATOR);
define('PROJECT',dirname(__DIR__) . DS);
define('PUBLIC_PATH', PROJECT . 'public_html' . DS);
define('SRC', PROJECT . 'src' . DS);
define('CLASSES', SRC . 'classes' . DS);
define('INC', SRC . 'inc' . DS);

//		site root
define('MYSITE', 'https://localhost/Timber-Doors/public_html/');

//		email constants
define('MAILHOST','smtp.gmail.com');  			//  set smtp server host
define('MAILPORT',587); 						//  set smtp server port (usually 465 for ssl, 587 for tls)
define('MAILAUTH',true); 			 			//  whether to use SMTP authentication, false otherwise
define('MAILUSERNAME','ikactest@gmail.com');	//  set server email username for authentication
define('MAILPASSWORD','wefrbhlwnpobyxsp');		    //  set server email password for authentication
define('MAILFROM','ikactest@gmail.com');		//  set who the message appears to be sent from (part of mail headers)
define('MAILORDERSTO','ikactest@gmail.com');	//  !!! this e-mail will receive ORDERS e.g. orders@parkwooddoors.co.nz

#######################################################################################################################

require_once 'func.php';
spl_autoload_register(function($class){
	$ClassFileName = str_replace('\\', DS, $class) . '.php';
	if(file_exists(CLASSES . $ClassFileName)){
		require_once CLASSES . $ClassFileName;
	} else {
		require_once CLASSES . 'dompdf/autoload.inc.php';
	}
});
?>