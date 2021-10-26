var React = require("react");
var ReactDOM = require("react-dom");

var d = new Date();
var hour = d.getHours();
var displayMsg = "";
var msgstyle = {};
if (hour >= 0 && hour <= 12) {
  displayMsg = "good-morning";
  msgstyle = { color: "red" };
} else if (hour > 12 && hour <= 18) {
  displayMsg = "good-afternoon";
  msgstyle = { color: "green" };
} else {
  displayMsg = "good-night";
  msgstyle.color = "blue";
}
ReactDOM.render(
  <div>
    <h1 className="heading" style={msgstyle}>
      {displayMsg}
    </h1>
  </div>,
  document.getElementById("root")
);
