/*

<div id="parent">
    <div id="child 01">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
 <div id="child 02">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>

*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
      const success = false
      if(success){
        resolve('Operation successful')
      }else {
        reject('Operation failed')
      }
  }, 2000);
})

console.log('hello')

myPromise
  .then((message) => {
    console.log(message)
  })
  .catch((message) => {
    console.log(message)
  })

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child 01" }, [
    React.createElement("h1", { id: "gradson" }, "I am h1 tag"),
    React.createElement("h2", { id: "gradson" }, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child 02" }, [
    React.createElement("h1", { id: "gradson" }, "I am h1 tag"),
    React.createElement("h2", { id: "gradson" }, "I am h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello Word from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // object

console.log(parent);
