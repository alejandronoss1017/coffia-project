import Image from 'next/image';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Section from './components/Section/Section';
import BreakCard from './components/BreakCard/BreakCard';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <Section
          title="¿Que es CoffIA?"
          description="CoffIA es una aplicación web que te ayuda a encontrar tu café ideal. Para 
          ello, te pedimos que respondas un cuestionario de 5 preguntas sobre 
          tus gustos y preferencias. Con esta información, 
          CoffIA utiliza un algoritmo de aprendizaje automático para recomendarte el 
          café que más se adapta a ti.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua."
          imagePath="/coffee-latte.png"
          alt="Latte Coffe"
          width={420}
          height={250}
        />
        <BreakCard
          imagePath="/coffee-beans.jpg"
          alt="coffe beans"
          width={1049}
          height={699}
          title="Apoya a nuestros orgullosos campesinos"
          description="Todos nuestros granos de cafe son cultivados cuidadosamente
            por nuestros campesinos para que puedas disfrutar del sabor mas autentico del café."
          direction="left"
        />
        <Section
          title="Innovamos el comercio del café artesanal"
          description="Queremos innovar la forma en la que se comercializa el café artesanal con las nuevas tecnologias.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imagePath="/bartender.jpg"
          alt="bartender"
          width={700}
          height={1008}
        />
      </main>
      <Footer />
    </>
  );
}
