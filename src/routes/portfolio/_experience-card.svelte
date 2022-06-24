<script>
    let tabs = [
        {
            index: 0,
            title: "1",
        },
        {
            index: 1,
            title: "1",
        },
        {
            index: 2,
            title: "1",
        },
    ];

    let cards = [
        {
            index: 0,
            title: "experience 1",
            text: ["hi"],
        },
        {
            index: 1,
            title: "experience 2",
            text: ["hello"],
        },
        {
            index: 2,
            title: "experience 3",
            text: ["greetings"],
        },
    ];
    let currentlyActive = 0;
</script>

<div
    class="grid grid-cols-1 place-items-center w-60 m-4 bg-base-300 rounded-2xl"
>
    <div class="tabs min-w-max tab-border">
        {#each tabs as tab}
            <!-- svelte-ignore a11y-missing-attribute -->
            <a
                class="tab tab-bordered {tab.index === currentlyActive
                    ? 'tab-active'
                    : ''}"
                on:click={() => {
                    currentlyActive = tab.index;
                }}>Normal</a
            >
        {/each}
    </div>
    {#each cards as card}
        {#if card.index === currentlyActive}
            <div
                class="card bg-base-100 shadow-xl max-w-full min-w-full rounded-t-none"
            >
                <div class="card-body max-w-prose">
                    <h2 class="card-title">{card.title}</h2>
                    {#each card.text as p}
                        <p>{p}</p>
                    {/each}
                    <!-- <div class="card-actions justify-end">
           <button class="btn btn-sm btn-primary">Buy Now</button>
           </div> -->
                </div>
            </div>
        {/if}
    {/each}
</div>
