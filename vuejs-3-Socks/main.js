const app = Vue.createApp({
    data() {
        return {
            product: " Socks",
            image: './assets/images/socks_blue.jpg',
            InStock: true,
            inventory: 0,
            details: ['50% Cotton','30% wool', '20% Polyester'],
            variants: [
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'}
            ]
        };

    }
}).mount('#app');