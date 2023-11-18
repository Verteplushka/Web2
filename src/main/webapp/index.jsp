<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="server.Dot" %>
<%@ page import="java.util.ArrayList" %>

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
    Колбасин Владислав Ильич, P3216, Вариант 23918
</header>
    <div class="block-container">
        <div class="block">
            <form onsubmit="checkAllFields()">
                X:
                <input type="button" name="x" value="-4">
                <input type="button" name="x" value="-3">
                <input type="button" name="x" value="-2">
                <input type="button" name="x" value="-1">
                <input type="button" name="x" value="0">
                <input type="button" name="x" value="1">
                <input type="button" name="x" value="2">
                <input type="button" name="x" value="3">
                <input type="button" name="x" value="4">
                <br>

                <label for="y">Y:</label>
                <input type="text" name="y" id="y" placeholder="от -5 до 5" maxlength="17">
                <br>

                <label for="r">R:</label>
                <input type="text" name="r" id="r" placeholder="от 1 до 4" maxlength="17">
                <br>

                <span id="error"></span>
                <br>
                <br>

                <input type="button" id="submit" value="отправить">
                <input type="button" id="clear" value="очистить таблицу">
            </form>
        </div>

        <div class="block">
            <canvas id="myCanvas" width="300" height="300"></canvas>
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
                <tbody id="tbody">
                <%
                    ServletContext servletContext = pageContext.getServletContext();
                    ArrayList<Dot> dotsList = (ArrayList<Dot>) servletContext.getAttribute("dotsList");
                    if (dotsList != null) {
                        for (Dot dot : dotsList) {
                %>
                <tr>
                    <td><%= dot.getX() %></td>
                    <td><%= dot.getY() %></td>
                    <td><%= dot.getR() %></td>
                    <td><%= dot.getCurrentTime() %></td>
                    <td><%= dot.getScriptTime() %></td>
                    <td><%= dot.getResult() %></td>
                </tr>
                <%
                        }
                    }
                %>
                </tbody>
            </table>
        </div>
    </div>

    <script>
        function drawAllDots(){
            let r = $("#r").val();
            if (r === "") {
                return;
            }
            <c:forEach var="dot" items="${dotsList}">
                drawDot(${dot.getX()}/${dot.getR()}*r, ${dot.getY()/dot.getR()}*r, '${dot.getResult()}');
            </c:forEach>
        }
    </script>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="js/main.js"></script>
    <script src="big.js-master/big.js"></script>
    <script src="js/canvas.js"></script>
    <script src="js/checkAllFields.js"></script>
    <script src="js/clear.js"></script>
    <script src="js/contextMethods.js"></script>
</body>

</html>