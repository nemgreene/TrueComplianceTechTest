<script>
import { useTodoStore } from '../../stores/toDoStore.ts'
import { storeToRefs } from 'pinia'
import { computed, onMounted, onUpdated, reactive, ref, watch } from 'vue'
import ToDoItem from './ToDoItem.vue'

export default {
  components: {
    ToDoItem
  },
  setup() {
    const store = useTodoStore()

    watch(
      [store],
      (state) => {
        localStorage.setItem('piniaState', JSON.stringify(state))
      },
      { deep: true }
    )
    const { todoList, editIndex } = storeToRefs(store)
    const { toggleCompleted, deleteTodo, addTodo, loadState, clearComplete } = store

    const thClass = 'bg-blue-900 border text-center px-8 py-4'

    onMounted(() => {
      let read = JSON.parse(localStorage.getItem('piniaState'))[0]
      loadState(read || {})
    })

    return {
      store,
      addTodo,
      clearComplete,
      deleteTodo,
      store,
      thClass,
      todoList,
      toggleCompleted,
      editIndex
    }
  }
}
</script>

<style>
.completed {
  text-decoration: line-through;
}
.iconContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.todoButton {
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.246);
  padding: 0.6rem 2.2rem;
}
</style>

<template>
  <div class="text-4xl">
    <div class="py-3" @click="clearComplete()">
      <button class="todoButton">Clear Completed</button>
    </div>
    <table class="shadow-lg bg-black border-collapse table-auto">
      <thead v-if="todoList.length > 0">
        <tr>
          <th :class="thClass">Title</th>
          <th :class="thClass">Completed</th>
          <th :class="thClass">Actions</th>
        </tr>
      </thead>
      <div v-else>No Todos Found</div>
      <tbody>
        <tr v-for="todo in todoList" :key="todo.id" class="p-10">
          <ToDoItem :todo="todo" />
        </tr>
      </tbody>
    </table>
    <br />
    <div class="flex flex-row items-center justify-center gap-5">
      <input
        :disabled="editIndex"
        class="bg-blue-900 p-2 px-5 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-900"
        :value="(!editIndex && store.formValue) || ``"
        @input="
          (e) => {
            if (!Boolean(editIndex)) store.formValue = e.target.value
          }
        "
      />
      <button
        :disabled="editIndex"
        @click="addTodo()"
        class="flex flex-row items-center justify-center todoButton disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-900"
      >
        Add to list
      </button>
    </div>
  </div>
</template>
