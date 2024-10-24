import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCartStore = () => {
	const [count, setCount] = useState(0);
	const incrementCount = () => setCount(prevCount => prevCount + 1);
	const decrementCount = () =>
		setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));

	return { count, setCount, incrementCount, decrementCount };
};
// provider
export const CartProvider = ({ children }) => {
	const cart = useCartStore();

	return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

//provider
export const useCart = () => useContext(CartContext);

// Cart context
// 	index
// 	export - CartContext
// 	export - useCArtStore
// 	export - CartProvider
// 	export - useCartContex
