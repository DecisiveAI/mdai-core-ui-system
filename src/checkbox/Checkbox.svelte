<script lang="ts">
    import SMUICheckbox from '@smui/checkbox';
    
    import './checkbox.css';

    type CheckboxProps = {
        checked?: boolean;
        disabled?: boolean;
        indeterminate?: boolean;
    }

    let {
        checked,
        disabled,
        indeterminate,
    }: CheckboxProps = $props();

</script>

<SMUICheckbox
    {checked}
    {disabled}
    {indeterminate}
/>

