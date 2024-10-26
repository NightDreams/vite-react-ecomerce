import { useAppContext } from '@/contexts';
import { PlusIcon } from '@heroicons/react/24/outline';

const Card = ({ data }) => {
	const { cart, productDetail } = useAppContext();
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
				<button
					onClick={cart?.incrementCount}
					type="button"
					className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
				>
					<PlusIcon className="h-6 w-6 text-black"></PlusIcon>
				</button>
			</figure>
			<p className="flex justify-between">
				<span className="text-sm font-light truncate ">{data?.title}</span>
				<span className="text-lg font-medium">${data?.price}</span>
			</p>
		</div>
	);
};

export default Card;
