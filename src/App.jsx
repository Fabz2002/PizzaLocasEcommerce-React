import './App.css';
import { useState, useContext } from 'react';
import {
	RiMenuFill,
	RiUser3Line,
	RiAddFill,
	RiPieChartLine,
	RiCloseLine,
	RiShoppingBagLine,
} from 'react-icons/ri';
import SideBar from './components/shared/Sidebar';
import MainSection from './components/shared/MainSection';
import { ProductsContext } from './context/ProductsContext';
import ShoppingCart from './components/shared/ShoppingCart';
function App() {
	const { toggleOrders, toggleMenu, showMenu, countProducts } =
		useContext(ProductsContext);
	return (
		<div className='bg-[#959ea7] w-full  min-h-screen'>
			<SideBar />
			{/* Menu movil */}
			<nav
				className='bg-[#20262E] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl
      '
			>
				<button className='p-2'>
					<RiUser3Line />
				</button>
				<button className='p-2'>
					<RiAddFill />
				</button>
				<button className='p-2 relative'>
					<RiShoppingBagLine className='text-3xl' onClick={toggleOrders} />
					<span className='bg-[#FFC93C] absolute rounded-full px-2 py-[2px] text-sm text-slate-600 -right-2 -mt-4'>
						{countProducts}
					</span>
				</button>
				<button onClick={toggleMenu} className='text-white p-2 '>
					{showMenu ? <RiCloseLine /> : <RiMenuFill />}
				</button>
			</nav>
			<MainSection />
			<ShoppingCart />
		</div>
	);
}

export default App;
