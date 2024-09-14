<script>
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../../stores/toDoStore.ts'

export default {
  props: {
    todo: {
      type: Object,
      required: true,
      default: () => ({ text: 'Default Entry', completed: false })
    }
  },
  setup() {
    const store = useTodoStore()

    const { editIndex } = storeToRefs(store)
    const { toggleCompleted, deleteTodo, setEditIndex, submitEdit } = store

    return {
      deleteTodo,
      toggleCompleted,
      setEditIndex,
      editIndex,
      store,
      submitEdit
    }
  }
}
</script>

<template>
  <td class="border px-4 py-4">
    <span v-if="editIndex !== todo.id" :class="{ completed: todo.completed }">
      {{ todo.text }}
    </span>
    <input
      v-else
      class="bg-blue-900 p-2 px-5 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-900"
      :value="(editIndex && store.formValue) || ``"
      @input="
        (e) => {
          if (Boolean(editIndex)) store.formValue = e.target.value
        }
      "
    />
  </td>
  <td class="cursor-pointer border px-4 py-4" @click.stop="toggleCompleted(todo.id)">
    <div v-if="todo.completed" class="iconContainer">✅</div>
    <div v-else class="iconContainer">❌</div>
  </td>
  <td class="border px-4 py-4">
    <div class="flex flex-row gap-3">
      <button v-if="editIndex !== todo.id" @click="setEditIndex(todo.id)" class="todoButton">
        <span class="block"> Edit </span>
      </button>
      <button v-else @click="submitEdit(todo.id)" class="todoButton">
        <span class="block"> Submit </span>
      </button>
      <button
        :disabled="editIndex"
        @click="deleteTodo(todo.id)"
        class="todoButton disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-900"
      >
        <span class="block"> Delete </span>
      </button>
    </div>
  </td>
</template>
