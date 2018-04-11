const { send } = require("micro");
const micro = require("micro");
const { router, get } = require("microrouter");

const hello = (req, res) => send(res, 200, `Hello ${req.params.who}`);

const notfound = (req, res) => send(res, 404, "Not found route");

const routes = router(get("/hello/:who", hello), get("/*", notfound));

const server = micro(routes);

server.listen(7000);
