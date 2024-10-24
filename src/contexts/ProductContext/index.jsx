import { createContext, useContext, useState } from 'react';

// Crear contexto
export const ProductDetailContext = createContext();

export const useProductDetail = () => {
	const [showDetail, setShowDetail] = useState(false);

	const toggleDetail = () => setShowDetail(prev => !prev);

	return { showDetail, setShowDetail, toggleDetail };
};

export const ProductDetailProvider = ({ children }) => {
	const productDetail = useProductDetail();
	return (
		<ProductDetailContext.Provider value={productDetail}>
			{children}
		</ProductDetailContext.Provider>
	);
};

export const useProductDetailContext = () => useContext(ProductDetailContext);
