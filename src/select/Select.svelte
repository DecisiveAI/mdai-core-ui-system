<script lang="ts">
  import SMUISelect, { Option } from "@smui/select";
  import "./select.css";

  type MDAISelectProps = {
    label: string;
    options: string[];
    selected: string;
    // height for sb component to show full dropdown
    height?: number;
    disabled?: boolean;
  };

  let {
    label = "Select",
    options = ["Apple", "Banana", "Cherry"],
    selected = "",
  }: MDAISelectProps = $props();

  let value = $derived(selected);
</script>

<SMUISelect class="shaped-outlined" variant="outlined" {value} {label}>
  {#each options as option}
    <Option value={option}>{option}</Option>
  {/each}
</SMUISelect>
