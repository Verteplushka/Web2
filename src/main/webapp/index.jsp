<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab1</title>
    <link rel="stylesheet" type="text/css" href="styles/main_style.css">
</head>

<body>

<header>
    Колбасин Владислав Ильич, P3216, Вариант 2613
</header>
<div class="block-container">
    <div class="block">
        <form onsubmit="checkAllFields()">
            X:
            <input type="button" name="x" id="-4" value="-4">
            <input type="button" name="x" id="-3" value="-3">
            <input type="button" name="x" id="-2" value="-2">
            <input type="button" name="x" id="-1" value="-1">
            <input type="button" name="x" id="0" value="0">
            <input type="button" name="x" id="1" value="1">
            <input type="button" name="x" id="2" value="2">
            <input type="button" name="x" id="3" value="3">
            <input type="button" name="x" id="4" value="4">
            <br>
            
            <label for="y">Y:</label>
            <input type="text" name="y" id="y" placeholder="от -5 до 5"  maxlength="17">
            <br>

            <label for="r">R:</label>
            <input type="text" name="r" id="r" placeholder="от 1 до 4"  maxlength="17">
            <br>

            <span id="error"></span>
            <br>
            <br>

            <input type="button" id="submit" value="отправить">
            <input type="button" id="clearM" value="очистить таблицу">
        </form>
    </div>

    <div class="block">
        <canvas id="myCanvas" width="400" height="200"></canvas>
    </div>


    <div class="block" id="table">
        <table border="1">
            <thead>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>current time</th>
                <th>script time (nanosec)</th>
                <th>result</th>
            </tr>
            </thead>
            <tbody id="tbody"></tbody>

        </table>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="js/main.js"></script>
<script src="big.js-master/big.js"></script>
<script src="js/canvas.js"></script>
<script src="js/checkAllFields.js"></script>
<script src="js/clearM.js"></script>
</body>

</html>