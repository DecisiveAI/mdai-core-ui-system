<script lang="ts">
	import SMUICard, {Media, Content, PrimaryAction} from "@smui/card";
  import './card.css';
  import Logo from '../assets/mdai-header-logo-textless.svg'
  import Button from "../button/Button.svelte";
  import type { SvelteComponent } from "svelte";

  /**
   * What background color to use
   */
  export let backgroundColor: string | undefined = undefined;
  /**
   * Title of the card
   */
  export let label: string = ''; //label because title used for storybook
  /**
   * Should the card click be disabled?
   */
  export let cardDisabled = false;
  /**
   * Should the button click be disabled?
   */
   export let buttonDisabled = false;
  /**
   * Add image
   */
   export let image = 'https://via.placeholder.com/400x200';
  /**
   * Add Icon
   */
   export let icon: string = Logo;
   /**
   * Add a subtitle
   */
  export let subtitle = 'Subtitle';
  /**
   * Add content
   */
  export let content: SvelteComponent | string | string[] = 'Content';
  /**
   * Button label
   */
  export let buttonLabel = 'Action';

</script>

<div
  class="storybook-card-container"
>
  <SMUICard class="storybook-card" style={`background-color: ${backgroundColor || 'transparent'};`}>
    <PrimaryAction ripple={!cardDisabled} class={cardDisabled ? "storybook-card-disabled" : "storybook-card-primary-action"} style={`background-color: ${backgroundColor || 'transparent'};`}>
    <!-- Title Section -->
    <div class="storybook-card-header">
      {#if icon}
        <img src={icon} alt="Icon" class="storybook-card-icon" />
      {/if}
      <div>
        <h2 class="storybook-card-title">{label}</h2>
        {#if subtitle}
          <p class="storybook-card-subtitle">{subtitle}</p>
        {/if}
      </div>
    </div>
    <!-- Media (Optional) -->
    {#if image}
      <Media class="storybook-card-media" style="background-image: url({image});"></Media>
    {/if}

    <!-- Content -->
    {#if content}
      {#if content === typeof 'array'}
        <Content class="storybook-card-content">
          {#each content as item}
            <p>{item}</p>
          {/each}
        </Content>
      {:else}
      <Content class="storybook-card-content">
        <slot name="content">{content}</slot>
      </Content>
      {/if}
    {/if}
    

    <!-- Action Button -->
    <div class="storybook-card-actions">
      {#if buttonLabel}
        <Button primary label={buttonLabel} disabled={buttonDisabled}></Button>
      {/if}
    </div>

    <!-- Footer (Optional) -->
    <slot name="footer"></slot>
  </PrimaryAction>
  </SMUICard>
</div>
