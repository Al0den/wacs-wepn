import React, { useState } from 'react';
import logo from './logo_wacs.png';
import './App.css';
import Snow from './Snow';

const menuData = [
  {
    id: 'normal',
    name: 'Menu normal',
    items: ['Des poissons', 'Poulet rôti', 'Steak frites', 'Salade Caesar', 'Riz sauté']
  },
  {
    id: 'vg',
    name: 'Menu VG',
    items: ['Du chat', 'Salade de quinoa', 'Tofu grillé', 'Wrap de légumes', 'Soupe de lentilles']
  },
  {
    id: 'noPork',
    name: 'Menu sans porc',
    items: ['Rien', 'Poisson grillé', 'Poulet au curry', 'Salade de fruits', 'Ratatouille']
  }
];

const heuresRepas = ['Petit déjeuner Samedi', 'Déjeuner Samedi', 'Dîner Samedi', 'Petit déjeuner Dimanche', 'Déjeuner Dimanche'];

const useMenuToggle = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const handleMenuToggle = (menuId) => setActiveMenu(menuId === activeMenu ? null : menuId);
  return [activeMenu, handleMenuToggle];
};

const MenuButton = ({ menu, isActive, onClick }) => (
  <button
    className={`table-button ${isActive ? 'active' : ''}`}
    onClick={() => onClick(menu.id)}
  >
    {menu.name}
  </button>
);

const MenuTable = ({ menu }) => (
  <div className="menu-wrapper">
    <table className="menu-table">
      <thead>
        <tr>
          {heuresRepas.map(time => <th key={time}>{time}</th>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          {menu.items.map((item, index) => <td key={index}>{item}</td>)}
        </tr>
      </tbody>
    </table>
  </div>
);

function App() {
  const [activeMenu, handleMenuToggle] = useMenuToggle();

  return (
    <div className="App">
      <header className="App-header">
        <Snow />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Menus du WEPN</h1>

        <div className="button-container">
          {menuData.map(menu => (
            <div className="column" key={menu.id}>
              <MenuButton
                menu={menu}
                isActive={activeMenu === menu.id}
                onClick={handleMenuToggle}
              />
            </div>
          ))}
        </div>

        <div className="table-wrapper">
          {activeMenu && <MenuTable menu={menuData.find(menu => menu.id === activeMenu)} />}
        </div>
      </header>
    </div>
  );
}

export default App;
