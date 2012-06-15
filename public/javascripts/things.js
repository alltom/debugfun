function Thing(id) {
    'use strict';
    this.id = id;
    this.dom = $('<li class="thing">' + this.id + ' <button thing-id="' + this.id + '">Do!</button></li>');
    this.dom.data('obj', this);
}
Thing.prototype.handlerTheHandler = function () {
    'use strict';
    this.dom.find('button').toggleClass('active', false);
    alert('done ' + this.id);
};
