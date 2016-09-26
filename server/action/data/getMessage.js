var MessageList = [

    { "Message":"Hello asdas"},

    { "Message":"Hello Webpack"},

    { "Message":"Hello Nodejs"},

    { "Message":"Hello Express"}

];

var   getMessageList = function (callback) {
    callback(MessageList);
};

exports.execute = function (req, res) {
    getMessageList(function (data) {
        res.send(data);
    });
};