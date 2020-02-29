require('ncp').ncp('./Backend', './Published', function (err) {
    if (err) return console.error(err);
    console.log('done!');
});