<script lang="ts">
	import SMUIButton, {Icon} from "@smui/button";
  import './button.css';

  const buttonModeAliasMap = { Filled: 'raised', Outlined: 'outlined' }

  type ButtonProps = {
        label: string;
        variant?: 'Filled' | 'Outlined' | 'Text';
        disabled?: boolean;
        /**
        * Material icon name
        */
        icon?: string
        handleClick?: () => void;
    }

    let {
      label = 'Button',
      variant = 'Text',
      disabled,
      icon,
      handleClick,
    }: ButtonProps = $props();

    let mode = $derived(variant === 'Text' ? '' : buttonModeAliasMap[variant]);
    
</script>

<SMUIButton
  variant={mode}
  onclick={handleClick}
  action={'click'}
  {disabled}
>
{#if icon}
<Icon class="material-icons">{icon}</Icon>
{/if}
  {label}
</SMUIButton>
