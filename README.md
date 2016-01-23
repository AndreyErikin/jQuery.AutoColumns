# jQuery.AutoColumns
jQuery plugin for splitting a list of items into columns.

##Function parameters
* **columns** - number of columns *(default: 2)*
* **delimiter** - element is inserted between the elements of the column *(default: "\<div class=\\"delimiter\\" /\>")*
* **min** - minimum number of elements in a column except the last *(default: 1)*

###Example
Splits the list into 3 columns, each column except the last at least 2 elements.

###HTML
```html
<ul class="catalog">
    <li class="catalog-item">Element1</li>
    <li class="catalog-item">Element2</li>
    <li class="catalog-item">Element3</li>
    <li class="catalog-item">Element4</li>
    <li class="catalog-item">Element5</li>
    <li class="catalog-item">Element6</li>
    <li class="catalog-item">Element7</li>
    <li class="catalog-item">Element8</li>
</ul>
```

###Script
```javascript
(function ($) {
    $(document).ready(function () {
        $('ul.catalog').autocolumns({
            columns: 3,
            delimiter: '<li class="catalog-delimiter"><ul class="catalog-column" /></li>',
            min: 2
        });
    });
})(jQuery);
```

###Result
```html
<ul class="catalog">
    <li class="catalog-delimiter">
        <ul class="catalog-column">
            <li class="catalog-item">Element1</li>
            <li class="catalog-item">Element2</li>
            <li class="catalog-item">Element3</li>
        <ul>
    </li>
    <li class="catalog-delimiter">
        <ul class="catalog-column">
            <li class="catalog-item">Element4</li>
            <li class="catalog-item">Element5</li>
            <li class="catalog-item">Element6</li>
        <ul>
    </li>
    <li class="catalog-delimiter">
        <ul class="catalog-column">
            <li class="catalog-item">Element7</li>
            <li class="catalog-item">Element8</li>
        <ul>
    </li>
</ul>
```

