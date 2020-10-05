<script lang="ts" context="module">
	import { define } from 'uce';
	import { MyCounter } from "../uceElements/MyCounter";

  // Create the Custom Element so that we can use
  // <my-counter></my-counter>
  define('my-counter', MyCounter);
</script>
  
<script lang="ts">
  import type { Props } from "../uceElements/MyCounter";
  
  export let count: Props["count"] = 0;
</script>

<my-counter count={count} />
