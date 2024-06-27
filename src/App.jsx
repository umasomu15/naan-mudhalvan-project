import React, { useState } from "react";
import Card from './compontes/Card'
import Card1 from "./compontes/Card1";
import Card2 from "./compontes/Card2";
import Card3 from "./compontes/Card3";
import Card4 from "./compontes/Card4";
import TopBar from "./compontes/TopBar";
import Header from "./compontes/Header";
import Footer from "./compontes/Footer";
import Card5 from "./compontes/Card5";
import Card6 from "./Card6";

function App() {
  let [cart, setCart] = useState(0)
  return <>
  <TopBar cart={cart} setCart={setCart}/>
  <Header />
  <section className="py-5">
    <div ClassName="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <Card cart={cart} setCart={setCart}/>
        <Card1 cart={cart} setCart={setCart}/>
        <Card2 cart={cart} setCart={setCart}/>
        <Card3 cart={cart} setCart={setCart}/>
        <Card4 cart={cart} setCart={setCart}/>
        <Card5 cart={cart} setCart={setCart}/>
        <Card1 cart={cart} setCart={setCart}/>
        <Card4 cart={cart} setCart={setCart}/>
        <Card3 cart={cart} setCart={setCart}/>
        <Card2 cart={cart} setCart={setCart}/>
        <Card6 cart={cart} setCart={setCart}/>
      </div>
    </div>
    <Footer/>
  </section>
  </>
}
export default App;