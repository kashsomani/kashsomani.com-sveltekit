<script>
  import ExperienceCard from "./_experience-card.svelte"
  import { cards } from "./experiences"
</script>

<!-- <div
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-stretch p-0 m-0 gap-2 auto-rows-fr outer"
> -->
<div
  class="grid grid-rows-6 md:grid-rows-3 grid-flow-col-dense place-items-stretch p-0 m-0 gap-4 outer rounded-2xl"
>
  {#each cards as card}
    <ExperienceCard cards={card} />
  {/each}
</div>

<style>
  .outer {
    overflow-x: hidden;
    overflow-y: hidden;
  }
</style>
