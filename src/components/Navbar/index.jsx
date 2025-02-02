import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useAppContext } from '@/contexts';

let DStyle = ({ isActive }) => {
	const activeStyle = 'underline underline-offset-4';
	return isActive ? activeStyle : undefined;
};

const Navbar = () => {
	const ctx = useAppContext();
	const cartCount = ctx?.cart?.count;

	return (
		<nav className="flex justify-between items-center fixed z-10  w-full py-5 px-8 top-0 text-sm font-light">
			{
				/// [Links: Home & Product]
			}
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink to="/">Shopi</NavLink>
				</li>
				<li>
					<NavLink to="/" className={DStyle}>
						All
					</NavLink>
				</li>

				<li>
					<NavLink to="/clothes" className={DStyle}>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink to="/electronics" className={DStyle}>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink to="/furnitures" className={DStyle}>
						Furnitures
					</NavLink>
				</li>
				<li>
					<NavLink to="/toys" className={DStyle}>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink to="/others" className={DStyle}>
						Others
					</NavLink>
				</li>
			</ul>
			{
				/// [Links: Profile]
			}
			<ul className="flex items-center gap-3">
				<li className="text-black/60">yayodcv@gmail.com</li>
				<li>
					<NavLink to="/my-orders" className={DStyle}>
						My Orders
					</NavLink>
				</li>
				<li>
					<NavLink to="/my-account" className={DStyle}>
						My Account
					</NavLink>
				</li>
				<li>
					<NavLink to="/sing-in" className={DStyle}>
						Sign In
					</NavLink>
				</li>
				<li className="flex items-center gap-1">
					<ShoppingBagIcon className="h-6 w-6 text-gray-500" />
					<p>{cartCount}</p>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
