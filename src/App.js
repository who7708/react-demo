// 导入Profile组件
import Profile from "./Profile";
import TodoList from "./TodoList";

// 导出Gallery组件
export default function Gallery() {
  return (
    <section>
      <h1>Gallery</h1>
      <Profile />
      <Profile />
      <Profile />
      <TodoList todos={[]} />
    </section>
  );
}
