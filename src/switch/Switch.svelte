<script lang="ts">
    import Switch from '@smui/switch';
    import './switch.css';

    type SwitchProps = {
        onClick: () => void;
        class?: string;
        disabled?: boolean;
        checked: boolean;
    }

    let {
        onClick,
        class: className,
        disabled,
        checked,
    }: SwitchProps = $props();

</script>

<Switch {checked} {disabled} icons={false} class={className} {onClick}/>

