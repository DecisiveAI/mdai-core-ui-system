<script lang="ts">
  import type { Snippet } from "svelte";

  
    let { children }: { children: Snippet } = $props();
  </script>
  
<div class={"full-view"}>
  <div>
    {@render children()}
  </div>
</div>
  
  <style>
    .full-view {
      height: 300px
    }
  </style>