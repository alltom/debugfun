/*jslint devel: true */
/*globals $, document */

var things = [];

function request(id) {
    'use strict';
    poolAjax('th2', {
        data: JSON.stringify({ id: id }),
        type: 'post',
        contentType: 'application/json',
        success: things[id].handleTheHandler
    });
}

$(function () {
    'use strict';
    var i, list, all;
    
    list = $('<ul></ul>').appendTo('body');
    all = $('<button>All</button>').appendTo('body');
    
    // all button
    all.click(function () {
        for (i = 0; i < 5; i += 1) {
            $($(list).children()[i]).find('button').toggleClass('active', true);
            poolAjax('thl', {
                data: JSON.stringify({ id: i }),
                type: 'post',
                contentType: 'application/json',
                success: function (result) {
                    request(i);
                }
            });
        }
    });
    
    for (i = 0; i < 5; i += 1) {
        list.append((things[i] = new Thing(i)).dom);
    }
    
    // all other buttons
    $(document).on('click', 'button', function () {
        var i = $(this).attr('thing-id');
        $(this).toggleClass('active', true);
        poolAjax('th1', {
            data: JSON.stringify({ id: i }),
            type: 'post',
            contentType: 'application/json',
            success: function (result) {
                request(i);
            }
        });
    });
});
