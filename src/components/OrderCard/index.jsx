import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = ({ data }) => {
	return (
		<div className=" relative flex gap-2 m-2 p-4 w-6/6 rounded-lg 	   bg-gray-300">
			<figure className="relative w-3/6 h-22 ">
				<img
					className="object-cover rounded-lg h-full cursor-pointer"
					src={data?.image}
					alt={data?.title}
				/>
			</figure>
			<p className="grid justify-between w-5/6 text">
				<span className="text-sm font-light line-clamp-3">{data?.title}</span>
				<span className="text-lg font-medium">${data?.price}</span>
			</p>
			<XMarkIcon className="h-6 w-6 text-black cursor-pointer " />
		</div>
	);
};
export default OrderCard;
