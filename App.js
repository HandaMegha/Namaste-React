import React from "react";
import ReactDOM from "react-dom/client";

//React Element => React.createElement => Object => HTmlElement(render)

//const heading = React.createElement("h1", { id: "heading" }, "Hello!!");

//JSX - is not HTML inside JS - It is HTMl like syntax or XML like syntax (using JSX)
//JSX (transpiled before it is sent to the browser & parcel transpiles it which is done by babel)
//JSX => React.createElement => React Elemnt - JS Object => HTmlElement(render) (Babel converts JSX to React.createElement)

const Title = () => {
  return <h1>Title!!</h1>;
};
//React functional component
const HeadingComponent = () => {
  return <h1>Hello!!</h1>;
};
//OR
const HeadingComponent2 = () => (
  <div>
    <h1>Hello!!</h1>
  </div>
);

//Component Composition
const HeadingComponent3 = () => {
  return (
    <div>
      <Title />
      <HeadingComponent />
    </div>
  );
};

//Adding JS expressions inside JSX
const name = "ReactJS";
const HeadingComponent4 = () => {
  return (
    <div>
      <h1>Hello {name}!!</h1>
      <h2>Welcome to {name} world!!</h2>
    </div>
  );
};

//Adding JS elements inside JSX
const title = <h1>Title!!</h1>;

const HeadingComponent5 = () => {
    return (
        <div>
        {title}
        <h2>Welcome to ReactJS world!!</h2>
        </div>
    );
}

const jsxHeading = <h1 id="heading">Hello!!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);

root.render(<HeadingComponent5 />);
