const app = Vue.createApp({
    data() {
        return {
            product: " Socks",
            image: './assets/images/socks_blue.jpg',
            InStock: true,
            inventory: 0,
            details: ['50% Cotton','30% wool', '20% Polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ],
            cart:0,
        };

    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateImage(variantImage) {
            this.image = variantImage;
        }
    }
}).mount('#app');