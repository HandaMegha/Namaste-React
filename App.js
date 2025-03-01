/* <div id="parent">
    <div id ="child">
      <h1>I'm an h1 tag</h1>
    </div>
</div> */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm an h1 tag")
//   )
// );

/* <div id="parent">
    <div id ="child">
      <h1>I'm an h1 tag</h1>
      <h2>I'm an h2 tag</h1>
    </div>
</div> */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [
//       React.createElement("h1", {}, "I'm an h1 tag"),
//       React.createElement("h2", {}, "I'm an h2 tag")
//     ]
//   )
// );

/* <div id="parent">
    <div id ="child">
      <h1>I'm an h1 tag</h1>
      <h2>I'm an h2 tag</h1>
    </div>
    <div id ="child2">
      <h3>I'm an h3 tag</h3>
      <h4>I'm an h4 tag</h4>
    </div>
</div> */

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag")
    ]
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [
      React.createElement("h3", {}, "I'm an h3 tag"),
      React.createElement("h4", {}, "I'm an h4 tag")
    ]
  )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

/* <h1 id="heading">Hello World!</h1> */
// const heading = React.createElement("h1", { id: "heading" }, "Hello World!");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
