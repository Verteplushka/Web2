let x = getX();
console.log(x);
function getX() {
    var xhr = new XMLHttpRequest();

// Отправка GET-запроса к серверу
    xhr.open('GET', 'Controller', true);

// Отправка запроса на сервер
    xhr.send();

// Обработка ответа от сервера
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Обработка ответа от сервера
                return xhr.responseText;
                // Дальнейшая обработка ответа
            } else {
                return "error";
            }
        }
    };
}