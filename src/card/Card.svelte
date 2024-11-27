<script lang="ts">
	import SMUICard, {Media, Content, PrimaryAction} from "@smui/card";
  import './card.css';
  import Logo from '../stories/assets/mdai-header-logo-textless.svg';
  import Button from "../button/Button.svelte";

  type CardProps = {
        label: string;
        backgroundColor?: string | undefined;
        width?: string;
        image?: string;
        cardDisabled?: boolean;
        buttonDisabled?: boolean;
        icon?: string | undefined;
        subtitle?: string;
        content?: string | string[];
        buttonLabel?: string;
        buttonVariant?: 'default' | 'outlined' | 'raised';
        footer?: string;
    }

    let {
      label = 'Title',
      backgroundColor = 'transparent',
      width = '360px',
      image = 'https://via.placeholder.com/400x200',
      cardDisabled = false,
      buttonDisabled = false,
      icon = Logo,
      subtitle = 'Subtitle',
      content = 'Content',
      buttonLabel = 'Action',
      buttonVariant = 'default',
      footer = '',
    }: CardProps = $props();

    $effect(() => {
      console.log('Card Props', {label, backgroundColor, width, image, cardDisabled, buttonDisabled, icon, subtitle, content, buttonLabel, footer});
    });
</script>

<div class="mdai-card-container">
  <SMUICard style={`background-color: ${backgroundColor || 'transparent'}; width: ${width}`}>
    <PrimaryAction ripple={cardDisabled} class={cardDisabled ? "mdai-card-disabled" : "mdai-card"} style={`background-color: ${backgroundColor || 'transparent'};`}>
    <!-- Title Section -->
    <div class="mdai-card-header">
      {#if icon}
        <img src={icon} alt="Icon" class="mdai-card-icon" />
      {/if}
      <div>
        <h2 class="mdai-card-title">{label}</h2>
        {#if subtitle}
          <p class="mdai-card-subtitle">{subtitle}</p>
        {/if}
      </div>
    </div>
    <!-- Media (Optional) -->
    {#if image}
      <Media style="background-image: url({image});"></Media>
    {/if}

    <!-- Content -->
    {#if content}
      {#if content === typeof 'array'}
        <Content>
          {#each content as item}
            <p>{item}</p>
          {/each}
        </Content>
      {:else}
      <Content>
        {@html content}
      </Content>
      {/if}
    {/if}
    

    <!-- Action Button -->
    <div class="mdai-card-actions">
      {#if buttonLabel}
        <Button variant={buttonVariant} label={buttonLabel} disabled={buttonDisabled}></Button>
      {/if}
    </div>

    <!-- Footer (Optional) -->
    {@html footer}
  </PrimaryAction>
  </SMUICard>
</div>
