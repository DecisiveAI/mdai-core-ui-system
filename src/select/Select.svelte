<script lang="ts">
  import SMUISelect, { Option } from "@smui/select";
  import "./select.css";

  type MDAISelectProps = {
    label: string;
    options: string[];
  };

  let {
    label = "Select",
    options = ["Apple", "Banana", "Cherry"],
  }: MDAISelectProps = $props();
</script>

<SMUISelect class="shaped-outlined" variant="outlined" {label}>
  {#each options as option}
    <Option value={option}>{option}</Option>
  {/each}
</SMUISelect>
