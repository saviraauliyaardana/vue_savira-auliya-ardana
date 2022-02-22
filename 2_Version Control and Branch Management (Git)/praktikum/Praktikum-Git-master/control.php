<?php

include("profile.php");

$title = "Biodata";
$home = "index.php";
$portofolio = "portofolio.php";
$about = "about.php";
// echo $curPageName;
// echo $home;
function isActive($target){
	$currentRoute = substr($_SERVER["SCRIPT_NAME"], strrpos($_SERVER["SCRIPT_NAME"], "/") + 1);
	if ($currentRoute == $target) {
		echo " active";
	}
}
function hitung_umur($tanggal_lahir,$tanggal_sekarang)
{
	$hasil1=$tanggal_sekarang-$tanggal_lahir;
	hasil1(2022-2001);
	return$hasil1;
}
?>