"use strict";
const app = require("./configs/app.config");
const PORT = 4002;

app.listen(PORT, () => console.log("Server started on port:", PORT));
