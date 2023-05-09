import Image from 'next/image';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Section from './components/Section/Section';
import BreakCard from './components/BreakCard/BreakCard';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between lg:p-24 sm:max-w-screen ">
        <Section
          title="¿Que es CoffIA?"
          description="CoffIA es una aplicación web que te ayuda a encontrar tu café ideal. Para 
          ello, te pedimos que respondas un cuestionario de 5 preguntas sobre 
          tus gustos y preferencias. Con esta información, 
          CoffIA utiliza un algoritmo de aprendizaje automático para recomendarte el 
          café que más se adapta a ti."
          imagePath="/coffIALatte.svg"
          alt="Latte Coffe"
          height={500}
          width={500}
        />
        <BreakCard
          imagePath="/coffee-beans.jpg"
          alt="coffe beans"
          height={500}
          width={500}
          title="Apoya a nuestros orgullosos campesinos."
          description="Todos nuestros cafes son cultivados cuidadosamente
            por nuestros campesinos para que puedas disfrutar del sabor mas autentico del café."
        />
        <Section
          title="Innovamos el comercio del café artesanal."
          description="Queremos innovar la forma en la que se comercializa el café artesanal con las nuevas tecnologias."
          imagePath="/bartender.jpg"
          alt="bartender"
          height={700}
          width={700}
        />
      </main>
      <Footer />
    </>
  );
}
