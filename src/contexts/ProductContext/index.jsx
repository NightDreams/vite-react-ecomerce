import { createContext, useContext, useState } from 'react';

// Crear contexto
export const ProductDetailContext = createContext();

export const useProductDetail = () => {
	const [showDetail, setShowDetail] = useState(false);

	// Product controls: open, close
	const openDetail = () => setShowDetail(true);
	const closeDetail = () => setShowDetail(false);

	// store propduct data
	const [productToShow, setProductToShow] = useState({});

	// render product detail
	const showProduct = productDetail => {
		openDetail();
		setProductToShow(productDetail);
	};

	return {
		showDetail,
		setShowDetail,
		openDetail,
		closeDetail,
		productToShow,
		setProductToShow,
		showProduct,
	};
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
