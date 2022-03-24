import { writable, derived } from "svelte/store"

export const toDoItems = writable([
  {text: "Take out trash", status: true},
  {text: "Study programming", status: false},
  {text: "Text Lucy", status: false}
])

export const apiData = writable([]);

export const tdoItemsAPI = derived(apiData, ($apiData) => {

})