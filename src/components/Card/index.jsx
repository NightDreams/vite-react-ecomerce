import { useAppContext } from '@/contexts';
import { CheckIcon, PlusIcon } from '@heroicons/react/24/outline';

const Card = ({ data }) => {
	const { cart, productDetail } = useAppContext();

	const addProductsToCart = (event, productData) => {
		event.stopPropagation();

		cart?.setCount(e => e + 1);
		cart?.setcardProducts(e => [...e, productData]);

		productDetail?.openCheckoutSideMenu();
		productDetail?.closeDetail();
	};

	const renderIcon = id => {
		const isInCart =
			cart?.cardProducts?.filter(product => product?.id === id)?.length > 0;

		if (isInCart) {
			return (
				<div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
					<CheckIcon className="h-6 w-6 text-white"></CheckIcon>
				</div>
			);
		} else {
			return (
				<button
					onClick={event => addProductsToCart(event, data)}
					type="button"
					className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
				>
					<PlusIcon className="h-6 w-6 text-black"></PlusIcon>
				</button>
			);
		}
	};

	return (
		<div
			className="w-56 h-60 rounded-lg cursor-pointer p-4 bg-gray-300 "
			onClick={() => productDetail?.showProduct(data)}
		>
			<figure className="relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 bg-gray-200 rounded-lg text-black text-xs m-2 px-3 py-0.5">
					{data?.category}
				</span>
				<img
					className="w-full h-full object-cover rounded-lg"
					src={data?.image}
					alt={data?.title}
				/>
				{/* aqui quitamos  */}
				{renderIcon(data?.id)}
			</figure>
			<p className="flex justify-between">
				<span className="text-sm font-light truncate ">{data?.title}</span>
				<span className="text-lg font-medium">${data?.price}</span>
			</p>
		</div>
	);
};

export default Card;
