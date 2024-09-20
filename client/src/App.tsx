import { createEffect, createSignal, Show, type Component } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount((prevCount) => prevCount + 1);

  createEffect(() => {
    console.log(count());
  });

  return (
    <div class="flex align-middle justify-center">
      <span>{count()}</span>

      <button onClick={increment}>Increment</button>

      <Show when={count() > 5}>
        <div>Count is greater than 5</div>
      </Show>
    </div>
  );
};

export default App;
