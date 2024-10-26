import { useAppContext } from '@/contexts';
import { XMarkIcon } from '@heroicons/react/24/outline';

const ProductDetail = () => {
	const { productDetail } = useAppContext();
	// console.log('🚀 ~ ProductDetail ~ productDetail:', productDetail);

	return (
		<aside
			className={`${productDetail.showDetail ? 'flex' : 'hidden'}
				overflow-y-scroll w-[360px] h-[calc(90vh-68px)] top-[68px]  flex-col fixed right-4 border border-black rounded-lg bg-white `}
		>
			{/* controls y title */}
			<div className="flex justify-between items-center p-6 ">
				<h2 className="font-medium text-xl">Detail</h2>
				<button onClick={productDetail?.closeDetail}>
					<XMarkIcon className="h-6 w-6 text-gray-500 " />
				</button>
			</div>
			{/* pdata */}
			<figure className="px-6">
				<img
					className="w-full h-full rounded-lg"
					src={productDetail?.productToShow?.image}
					alt={productDetail?.productToShow?.title}
				/>
			</figure>
			<p className="flex flex-col p-6">
				<span className="font-medium text-2xl mb-2">
					${productDetail?.productToShow?.price}
				</span>
				<span className="font-medium text-md">
					${productDetail?.productToShow?.title}
				</span>
				<span className="font-light text-sm">
					${productDetail?.productToShow?.description}
				</span>
			</p>
		</aside>
	);
};
export default ProductDetail;
