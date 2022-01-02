const express = require("express");
const app = express();
const cors = require("cors");
const { PythonShell } = require("python-shell");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ status: 200, message: "hello" });
});
app.post("/run", (req, res) => {
  var { regex, text } = req.body;
  console.log(regex);
  PythonShell.runString(
    `import re\nsearch_res = re.finditer(r'${regex}', r'''${text}''')\nfor match in search_res:\n\tprint(match.start(), match.end())`,
    null,
    (err, result) => {
      console.log(result);
      res.json(result);
    }
  );
});

app.listen(process.env.PORT || 8000, () => {
  console.log("listening on port 8000");
});
