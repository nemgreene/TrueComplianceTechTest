import { defineStore } from 'pinia'

type ToDoItem = {
  text: string
  completed: boolean
  id: number
}

type Store = {
  todoList: ToDoItem[]
  formValue: string
  editIndex: number | undefined
}
export const useTodoStore = defineStore('todoList', {
  state: (): Store => ({
    todoList: [],
    formValue: '',
    editIndex: undefined
  }),

  actions: {
    setEditIndex(itemId: number) {
      this.editIndex = itemId
      let insert = [...this.todoList].filter((v: ToDoItem) => v.id === itemId)[0]?.text
      if (insert) this.formValue = insert
    },
    submitEdit() {
      if (Boolean(this.editIndex) && Boolean(this.formValue)) {
        const todo = this.todoList.find((obj) => obj.id === this.editIndex)
        if (todo) {
          todo.text = this.formValue
        }
        this.formValue = ''
        this.editIndex = undefined
      }
    },
    addTodo() {
      if (!(this.formValue.length > 0)) return
      this.todoList.push({
        text: this.formValue,
        id:
          this.todoList
            .map((v: ToDoItem) => v.id)
            .sort()
            .reverse()[0] + 1 || 1,
        completed: false
      })
      this.formValue = ''
    },

    loadState({ todoList }: { todoList: ToDoItem[] }) {
      if (todoList.length > 0) {
        this.todoList = todoList
      }
    },
    clearComplete() {
      this.todoList = this.todoList.filter((object) => {
        return !object.completed
      })
    },
    deleteTodo(itemID: number) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID
      })
      this.editIndex = undefined
    },
    toggleCompleted(itemID: number) {
      const todo = this.todoList.find((obj) => obj.id === itemID)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})
