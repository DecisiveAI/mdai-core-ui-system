<script lang="ts">
	import SMUIButton from "@smui/button";
  import './button.css';

  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * What background color to use
   */
  export let backgroundColor: string | undefined = undefined;
  /**
   * How large should the button be?
   */
  export let size: 'small' | 'medium' | 'large' = 'medium';
  /**
   * Button contents
   */
  export let label: string = '';
  /**
   * Should it be disabled?
   */
  export let disabled = false;

  $: mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  $: isDisabled = disabled ? (primary ? 'storybook-button-primary--disabled' : 'storybook-button--disabled') : '';
  $: style = backgroundColor ? `background-color: ${backgroundColor}` : '';
  $: classes = ['storybook-button', `storybook-button--${size}`, mode, isDisabled].join(' ');
</script>

<SMUIButton
  class={classes}
  {style}
  on:click
  {disabled}
>
  {label}
</SMUIButton>
