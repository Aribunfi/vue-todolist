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
    methods: {},
});

app.mount("#app");

