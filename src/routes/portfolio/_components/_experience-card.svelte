<script>
    import { fly } from "svelte/transition";
    export let tabs = [
        {
            index: 0,
            title: "General",
        },
        {
            index: 1,
            title: "Tech",
        },
        // {
        //     index: 2,
        //     title: "Soft-Skills",
        // },
    ];
    export let cards;
    let currentlyActive = 0;
</script>

<div
    class="flex flex-col place-items-stretch gap-0 max-w-1/3 mt-4 bg-base-300 rounded-2xl"
    in:fly={{ x: 200, duration: 4000, delay: 3000 }}
>
    <!-- grid-cols-3 -->
    <div
        class="tabs tab-border m-0 p-0 grid grid-cols-2 place-items-stretch gap-0"
        id="tabs"
    >
        {#each tabs as tab}
            <!-- svelte-ignore a11y-missing-attribute -->
            <a
                class="tab tab-bordered tab-sm text-primary {tab.index ===
                currentlyActive
                    ? 'tab-active'
                    : ''}"
                on:click={() => {
                    currentlyActive = tab.index;
                }}>{tab.title}</a
            >
        {/each}
    </div>
    <div id="cards">
        {#each cards as card}
            {#if card.index === currentlyActive}
                {#if card.index === 0}
                    <div
                        class="card bg-base-100 shadow-xl max-w-full min-w-full rounded-t-none max-h-80 h-80 md:h-96 "
                    >
                        <div class="card-body max-w-prose">
                            <h2 class="card-title">{card.title}</h2>
                            {#each card.text as p}
                                <p class="text-primary">{p}</p>
                            {/each}
                        </div>
                    </div>
                {/if}
                {#if card.index === 1}
                    <div
                        class="card bg-base-100 shadow-xl max-w-full min-w-full rounded-t-none max-h-80 h-80 md:h-96"
                    >
                        <div class="card-body max-w-prose">
                            <h2 class="card-title ">
                                {card.title}
                            </h2>
                            {#each card.tech as p}
                                <p class="text-primary">{p}</p>
                            {/each}
                        </div>
                    </div>
                {/if}
                {#if card.index === 2}
                    <div
                        class="card bg-base-100 shadow-xl max-w-full min-w-full rounded-t-none max-h-80 h-80 md:h-96"
                    >
                        <div class="card-body max-w-prose">
                            <h2 class="card-title ">
                                {card.title}
                            </h2>
                            {#each card.skills as p}
                                <p class="text-primary">{p}</p>
                            {/each}
                        </div>
                    </div>
                {/if}
            {/if}
        {/each}
    </div>
</div>

<style>
    #cards {
        width: 100%;
        height: 100%;
        margin-top: 0;
        padding-top: 0;
    }
    a {
        height: full;
    }
</style>
