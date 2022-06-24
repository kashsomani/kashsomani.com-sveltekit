<script>
  import { fly, fade } from "svelte/transition";
  let visible = false;
</script>

<div class="w-full p-8">
  <div
    class="mockup-code border border-base-300 px-6 min-h-[20%] min-w-full max-w-full "
  >
    {#if !visible}
      <div
        class="absolute bottom-3 right-3"
        transition:fade={{ duration: 1000 }}
      >
        <button
          on:click={() => {
            visible = true;
          }}
          class="btn">start</button
        >
      </div>
    {/if}
    {#if visible}
      <pre data-prefix="$" transition:fly={{ y: 200, duration: 2000 }}><code
          >sudo download kash_somani</code
        ></pre>
      <pre
        data-prefix=">"
        class="text-warning"
        transition:fly={{ y: 200, duration: 4000 }}><code>downloading...</code
        ></pre>
      <pre
        data-prefix=">"
        class="text-success"
        transition:fly={{ y: 200, duration: 8000 }}><code>Done!</code></pre>
    {/if}
  </div>
</div>
