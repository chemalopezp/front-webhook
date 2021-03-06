module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    res = 'Test';
    if (req.query.name || (req.body && req.body.name)) {
        res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    console.log(res);
    context.done(null, res);
};