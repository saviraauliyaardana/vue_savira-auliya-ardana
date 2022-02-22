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
    <h2 style="text-align: center;">About</h2>
    <div class="profile">
        <img class="profile-image" src="./img.jpg" alt="img.jpg" class="profile-photo">
        <div class="profile-text">
        <br>
            <table>
                <tr>
                    <td><b>Nama</b></td>
                    <td>: </td>
                    <td><?php echo $array1[0]; ?></td>
                </tr>
                <tr>
                    <td><b>JK</b></td>
                    <td>: </td>
                    <td><?php echo $array1[1]; ?></td>
                </tr>
                <tr>
                    <td><b>Alamat</b></td>
                    <td>: </td>
                    <td><?php echo $array1[2]; ?></td>
                </tr>
                <tr>
                    <td><b>Tanggal lahir</b></td>
                    <td>: </td>
                    <td><?php echo $array1[3]; ?></td>
                </tr>
            </table>
        </div>
    </div>
</body>

</html>