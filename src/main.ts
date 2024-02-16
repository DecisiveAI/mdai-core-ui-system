import "./demos.css";
import Demos from "./Demos.svelte";

const app = new Demos({
  target: document.getElementById("app")!,
});

export default app;
