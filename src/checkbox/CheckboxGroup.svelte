<script lang="ts">
  import SMUIFormfield from "@smui/form-field";
  import Checkbox, { type CheckboxProps } from "./Checkbox.svelte";
  import "./checkbox.css";

  let selected = $state([]);

  type CheckboxGroupProps = {
    options?: CheckboxProps[];
  };

  let {
    options = [
      {
        name: "Option 1",
        value: "1",
        disabled: false,
        indeterminate: false,
        error: false,
      },
    ],
  }: CheckboxGroupProps = $props();
</script>

{#each options as option}
  <SMUIFormfield style="display: flex; width: fit-content;">
    {#snippet label()}
      {option.name}
    {/snippet}
    <Checkbox
      value={option.value}
      disabled={option.disabled}
      checked={selected.includes(option.value) || option.checked}
      indeterminate={option.indeterminate}
    />
  </SMUIFormfield>
{/each}
