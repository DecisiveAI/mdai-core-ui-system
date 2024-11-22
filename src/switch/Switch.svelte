<script lang="ts">
    import Switch from '@smui/switch';
    import './switch.css';

    type SwitchProps = {
        onClick: () => void;
        class?: string;
        disabled?: boolean;
        checked: boolean;
        icons?: boolean;
    }

    let {
        onClick,
        class: className,
        disabled,
        checked,
        icons = true,
    }: SwitchProps = $props();

</script>

<Switch {checked} {disabled} {icons} class={className} {onClick}/>

