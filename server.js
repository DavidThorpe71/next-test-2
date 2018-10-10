// This code is from https://nextjs.org/learn/basics/server-side-support-for-clean-urls/create-a-custom-server

const express = require("express");
const next = require("next");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const proxy = require("express-http-proxy");

const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cookieParser());

    server.use(
      "/graphql",
      proxy("http://localhost:4000", {
        proxyReqPathResolver: function(req) {
          return require("url").parse("/graphql" + req.url).path;
        }
      })
    );

    // server.use('/static', express.static('static'))
    // var corsOptions = {
    //   origin: "http://localhost:7777",
    //   credentials: true // <-- REQUIRED backend setting
    // };
    // server.use(cors(corsOptions));
    // Define custom routes for server side clean urls
    server.get("/signup", (req, res) => {
      const actualPage = "/signup";
      app.render(req, res, actualPage, {});
    });

    server.get("/:eventName", (req, res) => {
      const actualPage = "/event";
      const queryParams = { eventName: req.params.eventName };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/:eventName/agenda", (req, res) => {
      const actualPage = "/agenda";
      const queryParams = { eventName: req.params.eventName };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/:eventName/attendees", (req, res) => {
      const actualPage = "/event/attendees";
      const queryParams = { eventName: req.params.eventName };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/:eventName/performers", (req, res) => {
      const actualPage = "/event/performers";
      const queryParams = { eventName: req.params.eventName };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/:eventName/location", (req, res) => {
      const actualPage = "/event/location";
      const queryParams = { eventName: req.params.eventName };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(7777, err => {
      if (err) throw err;
      console.log(">>> Ready on http://localhost:7777");
    });
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
