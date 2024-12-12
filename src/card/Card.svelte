<script lang="ts">
	import SMUICard, {Media, Content, PrimaryAction} from "@smui/card";
  import './card.css';
  import Logo from '../stories/assets/mdai-header-logo-textless.svg';
  import Button from "../button/Button.svelte";

  type CardProps = {
        label: string;
        width?: string;
        image?: string;
        variant?: 'Primary' | 'Outlined' | 'Filled';
        cardDisabled?: boolean;
        buttonDisabled?: boolean;
        icon?: string | undefined;
        subtitle?: string;
        content?: string | string[];
        buttonLabels?: string[];
        buttonsOnClick?: Array<() => void>;
    }

    let {
      label = 'Title',
      width = '360px',
      image = 'https://via.placeholder.com/400x200',
      variant = 'Primary',
      cardDisabled = false,
      buttonDisabled = false,
      icon = Logo,
      subtitle = 'Subtitle',
      content = 'Content',
      buttonLabels = ['Action'],
      buttonsOnClick = [() => {}],
    }: CardProps = $props();

    const makeStyle = (width: string, variant: string) => {
      let backgroundColor;
      let border;
      if (variant === 'Primary' || variant === 'Outlined') {
        backgroundColor = 'transparent';
        if (variant === 'Outlined') {
          border = '1px solid #393939';
        }
      } else {
        backgroundColor = '#313131';
      }
      return `width: ${width}; background-color: ${backgroundColor}; border: ${border}`;
    }

    let style = $derived(makeStyle(width, variant));
</script>

<div class="mdai-card-container">
  <SMUICard style={style}>
    <PrimaryAction ripple={cardDisabled} class={cardDisabled ? "mdai-card-disabled" : "mdai-card"} style={`background-color: 'transparent';`}>
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
      {#if buttonLabels.length > 1}
      <Button variant='Outlined' label={buttonLabels[0]} disabled={buttonDisabled} handleChange={buttonsOnClick[0]?.()}></Button>
      <Button variant='Filled' label={buttonLabels[1]} disabled={buttonDisabled} handleChange={buttonsOnClick[1]?.()}></Button>
      {:else}
      <Button variant='Filled' label={buttonLabels} disabled={buttonDisabled} handleChange={buttonsOnClick[0]?.()}></Button>
      {/if}
    </div>
  </PrimaryAction>
  </SMUICard>
</div>
