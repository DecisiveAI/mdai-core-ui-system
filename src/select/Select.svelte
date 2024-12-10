<script lang="ts">
  import SMUISelect, {Option} from "@smui/select";
  import './select.css';

  type MDAISelectProps = {
        label: string;
        options: string[];
        selected: string;
        // height for sb component to show full dropdown
        height?: number;
        disabled?: boolean;
    }

    let {
      label = 'Select',
      options = ['Apple', 'Banana', 'Cherry'],
      selected = '',
      height = 100,
    }: MDAISelectProps = $props();

    let value = $derived(selected);
</script>

  <div class="columns margins" style="justify-content: flex-start; height: {height}px;">
    <div>
      <SMUISelect variant="filled" {value} label={label}>
        {#each options as option}
          <Option value={option}>{option}</Option>
        {/each}
      </SMUISelect>
    </div>
  </div>
