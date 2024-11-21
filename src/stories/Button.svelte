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

  export let disable: boolean = false;

  $: mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  $: style = backgroundColor ? `background-color: ${backgroundColor}` : '';
</script>

<SMUIButton
  class={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
  {style}
  on:click
  disabled={disable}
>
  {label}
</SMUIButton>
