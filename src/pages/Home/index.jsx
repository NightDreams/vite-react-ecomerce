import Card from '@/components/Card';
import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';
import ProductDetail from './../../components/ProductDetail/index';
export default function Home() {
	const [items, setItems] = useState(null);

	useEffect(() => {
		fetch('https://api.escuelajs.co/api/v1/products')
			.then(response => response.json())
			.then(data => setItems(data));
	}, []);

	return (
		<Layout>
			<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
				{items?.map(item => (
					<Card key={item.id} data={item} />
				))}
			</div>
			<ProductDetail />
		</Layout>
	);
}
