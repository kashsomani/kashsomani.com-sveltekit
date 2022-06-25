<script>
    import ExperienceCard from "./_experience-card.svelte"
    import {cards} from "./experiences"
</script>

<div class="grid grid-cols-3 place-items-stretch p-0 m-0 gap-2">
   {#each cards as card}
        <ExperienceCard cards={card}/>
   {/each}
</div>

<style>
    div{
        overflow-x:hidden;
    }
</style>