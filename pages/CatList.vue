<template>
  <div class="h-screen bg-gray-50 p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-textPrimary">Cat List</h1>
      <button
        @click="goToNewCatForm"
        class="bg-main text-white py-2 px-4 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main"
      >
        New Cat
      </button>
    </div>
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <table class="min-w-full">
        <thead>
          <tr>
            <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Image</th>
            <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
            <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Description</th>
            <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cat in cats" :key="cat.id" class="border-b">
            <td class="px-6 py-4 whitespace-nowrap">
              <img :src="cat.image" alt="Cat Image" class="w-10 h-10 rounded-full object-cover"/>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-textPrimary">{{ cat.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-textSecondary">{{ cat.description }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <button
                @click="editCat(cat.id)"
                class="text-blue-600 hover:text-blue-900 mr-4"
              >
                Edit
              </button>
              <button
                @click="deleteCat(cat.id)"
                class="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cats = ref([
  { id: 1, name: 'Theo', description: 'Curious and playful cat', image: 'cat1.jpg' },
  { id: 2, name: 'Max', description: 'Calm and affectionate cat', image: 'cat2.jpg' },
  { id: 3, name: 'Mimi', description: 'Friendly and sociable cat', image: 'cat3.jpg' },
])

const goToNewCatForm = () => {
  // Redirecionar para a tela de adicionar um novo gato
}

const editCat = (id) => {
  // Lógica para editar gato com id correspondente
}

const deleteCat = (id) => {
  // Lógica para deletar gato com id correspondente
}
</script>

<style scoped>
/* Estilos adicionais, se necessário */
</style>
