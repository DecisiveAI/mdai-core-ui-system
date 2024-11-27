<script lang="ts">
	import SMUIButton, {Icon} from "@smui/button";
  import './button.css';

  type ButtonProps = {
        label: string;
        variant?: 'default' | 'outlined' | 'raised';
        backgroundColor?: string | undefined;
        disabled?: boolean;
        square?: boolean;
        /**
        * Material icon name
        */
        icon?: string
    }

    let {
      label = 'Button',
      variant = 'default',
      backgroundColor,
      disabled,
      square,
      icon
    }: ButtonProps = $props();

    let style = $derived(`${backgroundColor ? `background-color: ${backgroundColor};` : ''} ${square ? 'border-radius: 5px !important;' : ''}`);
    let mode = $derived(variant === 'default' ? '' : variant);
</script>

<SMUIButton
  {style}
  variant={mode}
  on:click
  {disabled}
>
{#if icon}
<Icon class="material-icons">{icon}</Icon>
{/if}
  {label}
</SMUIButton>
