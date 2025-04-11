import { createFileRoute } from "@tanstack/solid-router";
import { createForm } from "@tanstack/solid-form";
import { createEffect, createSignal } from "solid-js";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RerenderCountComponent(props: { value: string }) {
  const [count, setCount] = createSignal(0);
  createEffect(() => {
    console.log("passed value", props.value);
    console.log("rerender");
    setCount((c) => c + 1);
  });
  return (
    <div>
      Rerender count: {count()} Provided value: {props.value}
    </div>
  );
}

function RouteComponent() {
  const form = createForm(() => ({
    defaultValues: {
      value: "never changes...",
      text: "type something here",
    },
  }));

  return (
    <main>
      <form.Field name="value">
        {(field) => <RerenderCountComponent value={field().state.value} />}
      </form.Field>
      <form.Field name="text">
        {(field) => (
          <button
            onClick={() => field().handleChange(Math.random().toString())}
          >
            {field().state.value}
          </button>
        )}
      </form.Field>
    </main>
  );
}
