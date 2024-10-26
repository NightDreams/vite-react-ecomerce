import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCartStore = () => {
	const [count, setCount] = useState(0);

	const incrementCount = e => {
		e.stopPropagation();
		setCount(prevCount => prevCount + 1);
	};
	const decrementCount = () =>
		setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));

	const [cardProducts, setcardProducts] = useState([]);

	const addProductsToCart = productData => {
		setCount(count + 1);
		setcardProducts(e => [...e, productData]);
		console.log('CART: ', cardProducts);
	};

	return {
		count,
		setCount,
		incrementCount,
		decrementCount,
		cardProducts,
		addProductsToCart,
	};
};
// provider
export const CartProvider = ({ children }) => {
	const cart = useCartStore();

	return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

//provider
export const useCart = () => useContext(CartContext);
