<script lang="ts">
  import SMUIFormfield from "@smui/form-field";
  import SMUICheckbox from "@smui/checkbox";
  import "./checkbox.css";

  export type CheckboxProps = {
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    name?: string;
    value?: string;
    error?: boolean;
  };
  let {
    checked,
    disabled,
    indeterminate,
    name,
    value,
    error,
  }: CheckboxProps = $props();

</script>

{#if name}
  <SMUIFormfield {disabled}>
    {#snippet label()}
      {name}
    {/snippet}
    <SMUICheckbox class={error ? "mdai-checkbox-error" : ""} {checked} {disabled} {indeterminate} {value} />
  </SMUIFormfield>
{:else}
  <SMUIFormfield>
    <SMUICheckbox class={error ? "mdai-checkbox-error" : ""} {checked} {disabled} {indeterminate} {value}/>
  </SMUIFormfield>
{/if}
