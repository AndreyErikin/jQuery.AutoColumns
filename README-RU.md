# jQuery.AutoColumns
jQuery плагин для разбивания списка элементов на столбцы.

##Параметры функции
* **columns** - количество колонок *(по умолчанию: 2)*
* **delimiter** - элемент вставляемый между элементами столбца *(по умолчанию: "\<div class=\\"delimiter\\" /\>")*
* **min** - минимальное количество элементов в столбце, кроме последнего *(по умолчанию: 1)*

##Пример
Разбивает список на 3 столбца, в каждом столбце, кроме последнего минимум 2 элемента.

###HTML
```html
<ul class="catalog">
    <li class="catalog-item">Элемент1</li>
    <li class="catalog-item">Элемент2</li>
    <li class="catalog-item">Элемент3</li>
    <li class="catalog-item">Элемент4</li>
    <li class="catalog-item">Элемент5</li>
    <li class="catalog-item">Элемент6</li>
    <li class="catalog-item">Элемент7</li>
    <li class="catalog-item">Элемент8</li>
</ul>
```

###Скрипт
```javascript
(function ($) {
    $(document).ready(function () {
        $('ul.catalog').autocolumns({
            columns: 3,
            wrapper: '<li class="catalog-delimiter"><ul class="catalog-column" /></li>',
            min: 2
        });
    });
})(jQuery);
```

###Результат
```html
<ul class="catalog">
    <li class="catalog-delimiter">
        <ul class="catalog-column">
            <li class="catalog-item">Элемент1</li>
            <li class="catalog-item">Элемент2</li>
            <li class="catalog-item">Элемент3</li>
        <ul>
    </li>
    <li class="catalog-delimiter">
        <ul class="catalog-column">
            <li class="catalog-item">Элемент4</li>
            <li class="catalog-item">Элемент5</li>
            <li class="catalog-item">Элемент6</li>
        <ul>
    </li>
    <li class="catalog-delimiter">
        <ul class="catalog-column">
            <li class="catalog-item">Элемент7</li>
            <li class="catalog-item">Элемент8</li>
        <ul>
    </li>
</ul>
```