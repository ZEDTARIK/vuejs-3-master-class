app.component('product-display', {
    template:
        /*html*/
        ` <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img v-bind:src="image">
                </div>

                <div class="product-info">
                    <h1> {{ product }} </h1>

                    <p v-if="!InStock"> Out Of Stock </p>
                    <p v-else>In Stock </p>

                    <ul>
                        <li v-for="detail in details">
                            {{ detail }}
                        </li>
                    </ul>

                    <div v-for="(variant, index) in variants" :key="variant.id" 
                        @mouseover="updateVariant(index)"
                        class="color-circle" 
                        :style="{ backgroundColor: variant.color }">
                    </div>

                    <button class="button" 
                        @click="addToCart" 
                        :class="{ disabledButton: !InStock }"
                        :disabled="!InStock">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            product: " Socks",
            selectedVariant: 0,
            details: ['50% Cotton','30% wool', '20% Polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity:0}
            ],
        }
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
})