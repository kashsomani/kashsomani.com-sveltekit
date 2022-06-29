<script>
    export let name = "";
    export let email = "";
    export let message = "";
    import { sendEmail } from "../../firebase";

    // let errors = {
    //     email: false,
    //     name: false,
    //     message: false,
    // };
    let showError = false;
    let showSuccess = false;
    const testEmail = () => {
        let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return email.match(regex);
    };

    const testName = () => {
        return name.length > 0;
    };
    const testMessage = () => {
        return message.length > 0;
    };

    const send = () => {
        const docData = {
            to: "kash@kashsomani.com",
            message: {
                subject: "kashsomani.com contact form",
                text: `Message form sender: Name:${name}; Email:${email}, Message:${message}`,
            },
        };
        sendEmail(docData);
    };

    const handleSend = () => {
        if (testEmail() && testName() && testMessage) {
            showError = false;
            showSuccess = true;
            send();
        } else {
            showError = true;
        }
    };
</script>

{#if showSuccess}
    <div class="alert alert-success shadow-lg">
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                /></svg
            >
            <span>Email sent successfully</span>
        </div>
    </div>
{/if}
{#if showError}
    <div class="alert alert-error shadow-lg">
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                /></svg
            >
            <span>Please enter a valid email, name and message!</span>
        </div>
    </div>
{/if}
<div class="grid grid-cols-1 place-items-center p-16 bg-base-100">
    <div class="form-control w-full max-w-xs ">
        <label class="label">
            <span class="label-text ">Name</span>
            <!-- <span class="label-text-alt">Alt label</span> -->
        </label>
        <input
            type="text"
            on:change={testEmail}
            bind:value={name}
            placeholder="Enter Name"
            class="input input-bordered w-full max-w-xs"
        />
        <label class="label">
            <!-- <span class="label-text-alt">Alt label</span> -->
            <!-- <span class="label-text-alt">Alt label</span> -->
        </label>
    </div>
    <div class="form-control w-full max-w-xs">
        <label class="label">
            <span class="label-text">Email</span>
        </label>
        <input
            on:change={testName}
            type="text"
            bind:value={email}
            placeholder="Enter Email"
            class="input input-bordered w-full max-w-xs"
        />
    </div>
    <div class="form-control w-full max-w-xs">
        <label class="label">
            <span class="label-text">Message</span>
        </label>
        <textarea
            bind:value={message}
            on:change={testMessage}
            class="textarea textarea-bordered h-24"
            placeholder="Enter message here!"
        />
    </div>
    <div class="pt-4">
        <button
            class="btn   btn-outline  modal-button"
            for="my-modal"
            on:click={handleSend}>Send</button
        >
    </div>
</div>

<!-- <input type="text" placeholder="Type here" class="input input-bordered input-error w-full max-w-xs" /> -->
