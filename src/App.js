import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}

export default function App() {
  return <Greeting name="Sara" />;
}
