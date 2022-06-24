<script>
  import { fly, fade } from "svelte/transition";
  import ExperienceCard from "./experience-card.svelte"
  let visible = false;
</script>

<div class="w-full p-8 bg-base-200">
  <div
    class="mockup-code border border-base-300 px-6 min-h-[20%] min-w-full max-w-full "
  >
    {#if !visible}
      <div
        class="absolute bottom-3 right-3"
        in:fade={{ duration: 1000 }}
      >
        <button
          on:click={() => {
            visible = true;
          }}
          class="btn">Run</button
        >
      </div>
    {/if}
    {#if visible}
      <pre data-prefix="$" in:fly={{ y: 200, duration: 2000 }}><code
          >sudo download kash_somani</code
        ></pre>
      <pre
        data-prefix=">"
        class="text-warning"
        in:fly={{ y: 200, duration: 4000 }}><code>downloading...</code
        ></pre>
      <pre
        data-prefix=">"
        class="text-success"
        in:fly={{ y: 200, duration: 8000 }}><code>Done!</code></pre>
    {/if}
  </div>
  <div>
    <ExperienceCard/>
  </div>
</div>
