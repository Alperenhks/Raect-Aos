import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import '../styles/home.css'
import logo from "../assets/react.svg"

export default function Home() {
    useScrollAnimation()

  return (
    <section className="home">
      <div className="home__content" data-aos="fade-up">
        <h1>React AOS Animasyon kullanımı</h1>
        <p>Örnek Sayfa </p>
      </div>
      <div className="home__image" data-aos="flip-left">
        <img src={logo} alt="logo" />
      </div>
    </section>
  );
}
