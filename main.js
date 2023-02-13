const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            message: "Ciao belli!",
        };
    },
});

app.mount("#app");