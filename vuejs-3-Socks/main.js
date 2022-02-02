const app = Vue.createApp({
    data() {
        return {
            product: " Socks",
            selectedVariant: 0,
            details: ['50% Cotton','30% wool', '20% Polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity:0}
            ],
            cart:0,
        };

    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateVariant(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        InStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        }
    }
}).mount('#app');