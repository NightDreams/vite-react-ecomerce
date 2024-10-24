import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './pages/App/App';
import './index.css';
import { AppProvider } from './contexts';
// import { CartProvider } from './contexts/useCart/useCart';

createRoot(document.getElementById('root')).render(
	<AppProvider>
		<StrictMode>
			<App />
		</StrictMode>
	</AppProvider>
);
