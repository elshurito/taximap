function init () {
    // Создаем модель мультимаршрута.
    var multiRouteModel = new ymaps.multiRouter.MultiRouteModel([
        "Заречный",
        "Пенза"
    ], {
        // Путевые точки можно перетаскивать.
        // Маршрут при этом будет перестраиваться.
        wayPointDraggable: true,
        boundsAutoApply: true
    });


    ymaps.modules.require([
        'MultiRouteCustomView'
    ], function (MultiRouteCustomView) {
        // Создаем экземпляр текстового отображения модели мультимаршрута.
        // см. файл custom_view.js
        new MultiRouteCustomView(multiRouteModel);
    });

    // Создаем карту с добавленной на нее кнопкой.
    var myMap = new ymaps.Map('map', {
        center: [53.1945,45.0195],
        zoom: 10
    }, {
        buttonMaxWidth: 300
    });

    // Создаем на основе существующей модели мультимаршрут.
    var multiRoute = new ymaps.multiRouter.MultiRoute(multiRouteModel, {
        // Путевые точки можно перетаскивать.
        // Маршрут при этом будет перестраиваться.
        wayPointDraggable: true,
        boundsAutoApply: true
    });

    // Добавляем мультимаршрут на карту.
    myMap.geoObjects.add(multiRoute);
}

ymaps.ready(init);
