/*
 * jQuery AutoColumns Plugin
 * Version: 1.0.0 (23/01/2016)
 * Requires: jQuery v1.3.2 or later
 * Repository: https://github.com/AndreyErikin/jQuery.AutoColumns
 * License: MIT, http://www.opensource.org/licenses/mit-license.php
 * Copyright (c) 2016 Andrey Erikin
 */
(function ($) {
    var defaults = {
        columns: 2,
        delimiter: "<div class=\"delimiter\" />",
        min: 1
    };

    $.fn.autocolumns = function (params) {
        var options = $.extend({}, defaults, params);

        return this.each(function () {
            var elements = $(this).children(),
                amountOfElements;

            if (!(amountOfElements = elements.size())) {
                return;
            }

            var elementsOfColumn = Math.ceil(amountOfElements / options.columns);

            if (elementsOfColumn < options.min) {
                elementsOfColumn = options.min;
            }

            var start = 0,
                end = elementsOfColumn;

            for (var i = 0; i < options.columns; i++, start += elementsOfColumn, end += elementsOfColumn) {
                elements.slice(start, end)
                    .wrapAll(options.delimiter);
            }
        });
    };
})(jQuery);