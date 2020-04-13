



module.exports = async function (context, req) {
    // context.log('JavaScript HTTP trigger function processed a request.');
    const http = require('http');

    const fn_url = "https://req-handler.azurewebsites.net/microsoft/graph/";

    const dummy_a_query_code = "dummy-a?code=N7u0QKE/VtpqK3RjZjygSzGWk1aWWJWCvZn3t5WMCXHczBDJmWYtKA==";
    const dummy_a = fn_url + dummy_a_query_code;

    let my_data = "";

    http.get(dummy_a, function (response) {
        response.setEncoding('utf-8');
        let body = "";
        response.on("data", function (data) {
            body += data;
        });
        response.on("end", function () {
            my_data = JSON.parse(body);

        });
        response.on('error', function (error) {

        });
    });

    context.res = {
        body: "my_data"
    };

}



// const df = require("durable-functions");
// const t = yield context.df.callActivity("dummy-a")

/** Draft */
/**
http.get('someUrl', function (success) {
    if (success) {
        http.get('someOtherUrl', function (array) {
            array.forEach(element => {
                element.http.get('someAPI')
                    .then(() => {
                        context.res = {
                            status: 200,
                            body: "Success"
                        };
                    })
                    .catch(() => {
                        context.res = {
                            status: 400,
                            body: "An error has occured"
                        };
                    });
            });
        });
    }
}).on("error", (error) => {
    console.log(`Error: ${error.message}`);
    context.res = {
        status: 400,
        body: "An error has occured"
    };
});
 */