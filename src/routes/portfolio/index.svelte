<script>
  import { fly, fade } from "svelte/transition";
  import ExperienceGrid from "./_experience-grid.svelte"
  let visible = false;
  import { onMount } from 'svelte';
	onMount(async () => {
		visible = true
	});
</script>

<div class="w-full p-8 bg-base-200">
  <div
    class="mockup-code border border-base-300 px-6 min-h-[20%] min-w-full max-w-full "
  >
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
    <ExperienceGrid/>
  </div>
</div>
