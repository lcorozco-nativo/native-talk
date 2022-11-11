module.exports = async function (context, req) {
    context.bindings.signalRMessages = [{
        // "userId": req.query.userId,
        "target": "newMessage",
        "arguments": [req.body]
    }];
}