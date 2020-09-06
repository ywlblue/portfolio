var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use('/blog', express.static(path.join(__dirname, 'hexo/public')));

var indexRouter = require("./routes/index");
var projectRouter = require("./routes/projects");

app.use("/", indexRouter);
app.use("/projects", projectRouter);
// The path that you provide to the express.static 
// function is relative to the directory from where 
// you launch your node process.


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
module.exports = app;
