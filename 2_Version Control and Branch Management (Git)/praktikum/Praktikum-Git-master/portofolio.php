<!DOCTYPE html>
<html lang="en">

<head>
	<?php include "control.php" ?>

	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php echo $title ?></title>
	<link rel="stylesheet" href="style.css">
</head>

<body>
	<?php include "navbar.php" ?>
	<h2 style="text-align: center;">List Biodata</h2>
	<div class="porto-content">
		<?php for($i = 0; $i < 10; $i++) { ?>
			<div class="porto-item">
				<div class="porto-title"><b>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</b></div>
				<div class="porto-desc">
				"The goal is to have a pipeline of small companies growing here that can help sustain the local economy." One niche for Chattanooga would be to figure out a way to make manufacturing more innovative, says Ryan,
				</div>
				<a class="button" href="#detail">Detail</a>
			</div>

		<?php } ?>
	</div>
</body>

</html>