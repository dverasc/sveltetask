<script>
  import { toDoItems } from "./store.js"
  import { fade, scale } from "svelte/transition"
  import { onMount} from "svelte"

  let loading = false;
	let todos = '';

    const loadData = async () => {

        loading = true;
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        todos = await response.json();
     
		if (response.ok) {
			loading = false;
		} else {
			throw new Error(text);
		}
    }


  function removeFromList(i) {
    $toDoItems.splice(i, 1)
    $toDoItems = $toDoItems
  }
</script>

{#each $toDoItems as item, index}
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
  <div class="toDoItems" in:fade="{{ duration: 500 }}" out:fade="{{ duration: 500 }}">
    <input bind:checked={item.status} type="checkbox">
    <span class:checked={item.status}>{item.text}</span>
    <button on:click={() => removeFromList(index)}>Delete</button>
    <br/>
  </div>
{/each}

<style>
  .checked {
      text-decoration: line-through;
  }
  .toDoItems {
      text-align: left;
  }
  item1 {
		text-align: left;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
</style>

<item1>
  <button on:click={loadData}>Load Data</button>
  {#if loading === true}
      Loading...
{:else}
{#each todos as item }
  <div>
    <input bind:checked={item.status} type="checkbox">
    <span class:checked={item.status}>{item.title}</span>
  </div>
  {/each}
  {/if}
</item1>

