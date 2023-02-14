const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            todoList: [
                {
                    text: "Mangiare",
                    done: true
                },

                {
                    text: "Dormire",
                    done: false
                },

                {
                    text: "Giocare",
                    done: true
                }
            ]
        };
    },
    methods: {
        removeTodo(index) {
            this.todoList.splice(index, 1);

        }
    },
});

app.mount("#app");

