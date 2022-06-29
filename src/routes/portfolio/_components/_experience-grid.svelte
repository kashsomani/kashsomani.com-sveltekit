<script>
    import ExperienceCard from "./_experience-card.svelte";
    import { cards } from "./experiences";
</script>

<div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-stretch p-0 m-0 gap-2 auto-rows-fr"
>
    {#each cards as card}
        <ExperienceCard cards={card} />
    {/each}
</div>

<style>
    div {
        overflow-x: hidden;
    }
</style>
