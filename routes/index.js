exports.index = function (req, res) {
    res.render('index', { title: 'Express' });
};

exports.th1 = function (req, res) {
    res.send();
};

exports.th2 = function (req, res) {
    res.send();
};
