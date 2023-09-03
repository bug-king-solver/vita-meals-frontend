import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useFlash } from "../common/useFlash";
import { Ref, computed, ref } from "vue";
import useAuthStore from "./auth";
import Api from "../apis";

interface CartItem {
    product_id: number;
    user_id: number;
    quantity: number;
  }
  
  export const useCartStore = defineStore('cart', () => {
    const router = useRouter();
    const { flash } = useFlash();
  
    const cart: Ref<CartItem[]> = ref([]);
  
    const authStore = useAuthStore();
  
    const itemCount = computed(() => {

    });
  
    const subtotalAmount = computed(() => {

    });
  
    function redirectUnauthenticatedUser() {
      if (!authStore.token || !authStore.user) {
        router.push('/');
      }
    }
  
    function fetchCartItems() {
      let errorStatus = '';
  
      redirectUnauthenticatedUser();
  
      const config = authStore.getHeadersConfig();
  
      Api
        .get('cart/' + authStore.user?.id, config)
        .then((response) => {
          if (!response.data.error) {
            cart.value = response.data.cart;
          }
        })
        .catch((error) => {
            if (!error.response) {
                // network error
                errorStatus = 'Network Error';
            } else {
                errorStatus = error.response.data.message;
            }
            flash({
                iconType: "error",
                title: "Auth Error",
                message: errorStatus
            })
        });
    }
  
    function addItemToCart(productId: number, qty: number) {
      let errorStatus = '';
  
      if (!authStore.token || !authStore.user) {
        flash({
            iconType: "error",
            title: "Auth Error",
            message: "User seems to be unauthenticated!"
        })
        return;
      }
  
      const config = authStore.getHeadersConfig();
  
      const payload: CartItem = {
        product_id: productId,
        user_id: authStore.user.id,
        quantity: qty,
      };
  
      Api
        .post('cart/store', payload, config)
        .then((response) => {
          if (!response.data.error) {
            flash({
                iconType: "success",
                title: "Add Item",
                message: response.data.message
            })
            router.push('/cart');
          } else {
            flash({
                iconType: "error",
                title: "Item Add Error",
                message: response.data.message
            })
          }
        })
        .catch((error) => {
            if (!error.response) {
                // network error
                errorStatus = 'Network Error';
            } else {
                errorStatus = error.response.data.message;
            }          
            flash({
                iconType: "error",
                title: "Auth Error",
                message: errorStatus
            })
        });
    }
  
    // Define the rest of your functions in a similar way
  
    return {
      cart,
      itemCount,
      subtotalAmount,
      fetchCartItems,
      addItemToCart,
      // Add the rest of your functions here
    };
  });