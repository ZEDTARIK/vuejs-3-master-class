const app = Vue.createApp({
    data() {
        return {
            product: " Socks",
            image: './assets/images/socks_blue.jpg',
            InStock: true,
            inventory: 0,
        }
    }
}).mount('#app');