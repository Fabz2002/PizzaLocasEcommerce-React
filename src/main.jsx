import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductsContextProvider } from './context/ProductsContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ProductsContextProvider>
			<App />
		</ProductsContextProvider>
	</React.StrictMode>
);
