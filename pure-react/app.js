/* eslint-disable no-undef */
const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 1 }, props.name),
    React.createElement("p", { key: 2 }, props.occupation),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",
      { className: "title", key: 2 },
      "React is Rendered"
    ),
    React.createElement(
      Person,
      {
        name: "Elsherbiny",
        occupation: "instructor",
        key: 1,
      },
      null
    ),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));