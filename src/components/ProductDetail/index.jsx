import { useAppContext } from '@/contexts';
import { XMarkIcon } from '@heroicons/react/24/outline';

const ProductDetail = () => {
	const { productDetail } = useAppContext();
	return (
		<aside
			className={`${
				productDetail.showDetail ? 'flex' : 'hidden'
			} w-[360px] h-[calc(100vh-68px)] t-[68px]  flex-col fixed right-0 border border-black rounded-lg bg-white `}
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">Detail</h2>
				<button type="button">
					<XMarkIcon className="h-6 w-6 text-gray-500" />
				</button>
			</div>
		</aside>
	);
};
export default ProductDetail;
