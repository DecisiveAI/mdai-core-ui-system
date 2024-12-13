<script lang="ts">
  import Checkbox from "../checkbox/Checkbox.svelte";
  import SMUIMenu, { SelectionGroup } from "@smui/menu";
  import SMUIList, { Item, Label as ItemLabel } from "@smui/list";
  import Button from "../button/Button.svelte";
  import "./multiselect.css";

  let menu: SMUIMenu;
  let toggleMenu = () => {
    menu.setOpen(!menu.isOpen());
  };
  let selections = $state([]);

  type MultiSelectProps = {
    variant: "Checkboxes" | "Text";
    label: string;
    noSelectionsLabel: string;
    options: string[];
  };

  let {
    variant = "Text",
    label = "Please select some options",
    noSelectionsLabel = "MultiSelect",
    options = ["Apple", "Banana", "Cherry"],
  }: MultiSelectProps = $props();

  const toggleSelection = (option: string) => {
    const oldSelections = selections.slice();
    let newSelections: string[] = [];
    if (oldSelections.includes(option)) {
      newSelections = oldSelections.filter((o) => o !== option);
    } else {
      newSelections = oldSelections.concat([option]);
    }
    selections = newSelections;
  };

  const selectionsToLabel = $derived(selections.join(", "));
</script>

{#if label}
  <div>{label}</div>
{/if}
<Button
  variant="Outlined"
  label={selectionsToLabel ? selectionsToLabel : noSelectionsLabel}
  handleClick={toggleMenu}
  icon={"keyboard_arrow_down"}
/>
<SMUIMenu
  style={`min-height: ${Math.min(options.length, 4)}px`}
  bind:this={menu}
  class="mdai-multiselect"
  anchorCorner="BOTTOM_LEFT"
>
  <SMUIList>
    <SelectionGroup>
      {#each options as option}
        <Item
          style="padding-left: 15px; display: flex; justify-content: space-between;"
          selected={selections.includes(option)}
          onSMUIAction={() => toggleSelection(option)}
        >
          <ItemLabel>{option}</ItemLabel>
          {#if variant === "Checkboxes"}
            <Checkbox checked={selections.includes(option)} value={option} />
          {/if}
        </Item>
      {/each}
    </SelectionGroup>
  </SMUIList>
</SMUIMenu>
