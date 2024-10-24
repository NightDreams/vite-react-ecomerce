import { createContext, useContext } from 'react';
// import { useCartStore } from './useCart/useCart';

// import { useProductDetail } from './productContext/useProductDetails';
import { useProductDetail } from './ProductContext';
import { useCartStore } from './CartContext';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const cart = useCartStore();
	const productDetail = useProductDetail();

	const initialState = {
		cart,
		productDetail,
	};

	return (
		<AppContext.Provider value={initialState}>{children}</AppContext.Provider>
	);
};
export const useAppContext = () => useContext(AppContext);
