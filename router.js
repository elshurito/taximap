ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [53.1945,45.0195], // Москва
        zoom: 10
    });

    ymaps.route([
        'Пенза',
        'Заречный'
    ]).then(function (route) {
        myMap.geoObjects.add(route);
        console.log(route.getLength());
    }, function (error) {
        alert('Возникла ошибка: ' + error.message);
    });
}