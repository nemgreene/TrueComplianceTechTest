<script>
import { defineComponent } from 'vue'
import ToDoList from './components/ui/ToDoList.vue'

export default defineComponent({
  components: { ToDoList }
})
</script>

<template>
  <div class="bg-red h-screen w-screen flex justify-center items-center">
    <div class="rounded shadow-lg w-fit">
      <ToDoList />
    </div>
  </div>
</template>
