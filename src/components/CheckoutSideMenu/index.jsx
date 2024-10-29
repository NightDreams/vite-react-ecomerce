import { XMarkIcon } from '@heroicons/react/24/solid';

import { useAppContext } from '@/contexts';
import OrderCard from '../OrderCard';
import './styles.css';

const CheckoutSideMenu = () => {
	const { cart, productDetail } = useAppContext();

	return (
		<aside
			className={`${
				productDetail.isCheckoutSideMenuOpen ? 'flex' : 'hidden'
			} checkout-side-menu flex-col fixed right-0  border border-black rounded-lg bg-white`}
		>
			<div className="flex justify-between items-center p-6 ">
				<h2 className="font-medium text-xl">My Order</h2>
				<div>
					<XMarkIcon
						className="h-6 w-6 text-black cursor-pointer"
						onClick={() => productDetail?.closeCheckoutSideMenu()}
					></XMarkIcon>
				</div>
			</div>
			<div className="grid justify-center overflow-y-scroll  w-full max-w-screen-lg">
				{cart?.cardProducts?.map((item, i) => (
					<OrderCard key={`${item?.id}-${i}`} data={item} />
				))}
			</div>
		</aside>
	);
};
export default CheckoutSideMenu;
