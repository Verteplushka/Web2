var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Рисование оси X с стрелкой на конце
ctx.beginPath();
ctx.moveTo(20, canvas.height / 2);
ctx.lineTo(canvas.width - 20, canvas.height / 2);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width - 20, canvas.height / 2);
ctx.lineTo(canvas.width - 30, canvas.height / 2 - 5);
ctx.lineTo(canvas.width - 30, canvas.height / 2 + 5);
ctx.fillStyle = "black";
ctx.fill();

// Рисование делений на оси X
for (var x = 40; x < canvas.width - 30; x += 20) {
  ctx.moveTo(x, canvas.height / 2 - 3);
  ctx.lineTo(x, canvas.height / 2 + 3);
  ctx.stroke();
}

// Рисование оси Y с стрелкой на конце
ctx.beginPath();
ctx.moveTo(canvas.width / 2, 20);
ctx.lineTo(canvas.width / 2, canvas.height - 20);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width / 2, 20);
ctx.lineTo(canvas.width / 2 - 5, 30);
ctx.lineTo(canvas.width / 2 + 5, 30);
ctx.fillStyle = "black";
ctx.fill();

// Рисование делений на оси Y
for (var y = 40; y < canvas.height - 30; y += 20) {
  ctx.moveTo(canvas.width / 2 - 3, y);
  ctx.lineTo(canvas.width / 2 + 3, y);
  ctx.stroke();
}

// Добавление меток
ctx.fillStyle = "black";
ctx.fillText("X", canvas.width - 10, canvas.height / 2 - 10);
ctx.fillText("Y", canvas.width / 2 + 10, 10);

ctx.fillText("R", canvas.width / 2 + 60, canvas.height / 2 + 20);

ctx.fillStyle = "rgba(20, 60, 200, 0.5)"; // Голубой с прозрачностью 0.5
ctx.fillRect(canvas.width / 2, canvas.height / 2 - 30, 60, 30); // Координаты (50, 50) и размеры (200x100)

ctx.beginPath();
ctx.moveTo(canvas.width / 2, canvas.height / 2); // Перемещение в точку (200, 50)
ctx.lineTo(canvas.width / 2+60, canvas.height / 2); // Линия к точке (100, 200)
ctx.lineTo(canvas.width / 2, canvas.height / 2+60);// Линия к точке (200, 200)
ctx.lineTo(canvas.width / 2, canvas.height / 2);
ctx.closePath(); // Замкнуть треугольник
ctx.fill();


ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 30, Math.PI / 2, Math.PI ); // Координаты (200, 200), радиус 100, угол от 0 до Pi/2 (четверть круга)
ctx.lineTo(canvas.width / 2, canvas.height / 2); // Соединить с центром для закрытия фигуры
ctx.closePath(); // Завершить четверть круга
ctx.fill();