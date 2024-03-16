// // 导入Profile组件
// import Profile from "./Profile";
// // import TodoList from "./TodoList";

// const person = {
//   name: "John Doe",
//   age: 30,
//   city: "New York",
//   country: "USA",
//   bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   skills: ["JavaScript", "React", "Node", "Express"],
//   social: {
//     facebook: "https://www.facebook.com/",
//   },
//   theme: {
//     color: "red",
//     background: "black",
//   },
// };

// // // 导出Gallery组件
// // export default function Gallery() {
// //   return (
// //     <section>
// //       <h1>Gallery</h1>
// //       <Profile />
// //       <Profile />
// //       <Profile />
// //       <TodoList todos={[]} />
// //     </section>
// //   );
// // }

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

import { getImageUrl } from "./utils.js";

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}
