<script lang="ts">
  // import SMUICheckbox from '@smui/checkbox';
  import SMUIMenu, { SelectionGroup, SelectionGroupIcon } from '@smui/menu';
  import { Item, Text } from '@smui/list';
  import Button from '../button/Button.svelte';
  import './multiselect.css';

  let menuOpen: boolean = false;
  const toggle = () => {
    menuOpen = !menuOpen;
    console.log(menuOpen);
  };
  
  type MultiSelectProps = {
        label: string;
        noSelectionsLabel: string;
        options: string[];
        selections: string[];
        toggleMenu?: () => void;
    }

    let {
      label = 'Please select some options',
      noSelectionsLabel = 'MultiSelect',
      options = ['Apple', 'Banana', 'Cherry'],
      selections = [],
      toggleMenu = toggle,
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

  //  let selectionsToLabel = $derived(selections.join(',')); 
</script>

  <div class="drawer-inner-options multi-select">
    <div style="min-width: 100px; min-height: 200px">
      <!-- {#if label}
        <div class="top-label">{label}</div>
      {/if}
      <Button variant="Filled" label={selections.length ? selectionsToLabel : noSelectionsLabel} onClick={toggleMenu} icon={'keyboard_arrow_down'}>
      </Button>
      <SMUIMenu
        style={`min-height: ${Math.min(options.length, 4) * listItemHeight}px`}
        class="custom-select-menu"
        bind:this={menu}
      >
        <SMUIList>
          <SelectionGroup>
            {#each options as option}
              <Item
                style="padding-left: 8px;"
                selected={selections.includes(option)}
                on:SMUI:action={() => toggleSelection(option)}
              >
                <SMUICheckbox checked={selections.includes(option)} value={option} />
                <ItemLabel>{option}</ItemLabel>
              </Item>
            {/each}
          </SelectionGroup>
        </SMUIList>
      </SMUIMenu> -->
      <Button label={label} onClick={toggleMenu}/>
      <SMUIMenu open={menuOpen}>
          <SelectionGroup>
            {#each options as item}
              <Item
                onSMUIAction={() => toggleSelection(item)}
                selected={selections.includes(item)}
              >
                <SelectionGroupIcon>
                  <i class="material-icons">check</i>
                </SelectionGroupIcon>
                <Text>{item}</Text>
              </Item>
            {/each}
          </SelectionGroup>
      </SMUIMenu>
    </div>
  </div>