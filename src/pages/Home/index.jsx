import Card from '@/components/Card';
import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';
import ProductDetail from './../../components/ProductDetail/index';
export default function Home() {
	const [items, setItems] = useState([]);
	const GetData = () => {
		const urls = {
			platzi: 'https://api.escuelajs.co/api/v1/products',
			fakeStore: 'https://fakestoreapi.in/api/products',
		};

		try {
			fetch(urls.platzi)
				.then(response => response.json())
				.then(data => setItems(data?.products || data));
		} catch (error) {
			console.log('🚀 ~ GetData ~ error:', error);
		}
	};

	useEffect(() => {
		GetData();
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
