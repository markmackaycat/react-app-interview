"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(express_1["default"].static("dist"));
var PORT = process.env.PORT || 5800;
// Simple GET API endpoint
app.get('/api/hello', function (req, res) {
    res.json({ message: 'Hello from Checkatrade!' });
});
// Start the server
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
