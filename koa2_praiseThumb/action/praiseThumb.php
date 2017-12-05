<?php
$con = mysqli_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysqli_error());
  }
  mysqli_select_db( $con,'phptest');
  //先添加了一条数据到数据库里面了，id=1，number=0;
  $sql="SELECT * FROM `praiseThumb` WHERE `id`=1";
  $result=mysqli_query($con,$sql);
  // echo mysqli_fetch_array($result)['number'];
  $praiseNum=mysqli_fetch_array($result)['number'];
  $updataQuery="UPDATE `praiseThumb` SET `number`=".($praiseNum+1)." WHERE `id`=1";
  $resultUpdate=mysqli_query($con,$updataQuery);
  if($resultUpdate){
    echo "ok";
  }else{
    echo "error";
  }
  mysqli_close($con);
?>