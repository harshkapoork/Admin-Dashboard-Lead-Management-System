// src/stores/itemStore.js
import { defineStore } from 'pinia'
const api=""



export const useItemStore = defineStore('itemStore', {
  state: () => ({
    items: []  // This will be accessible in all components
  }),
  actions: {
    async fetchItems() {
      try {
        const response = await api.get('/items')
         this.items = response.data
      } catch (error) {
        console.error('Error fetching items:', error)
      }
    }
  }

})
