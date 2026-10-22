// npm start

import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";

export default function App() {

  // Сюда собираем компоненты

  return (
    <div className="App">

      <Header />
      <Promo />
      <Brands />

    </div>
  );
}
