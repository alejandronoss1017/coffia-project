import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Card from '../components/Card/Card';
import OurClients from '../components/OurClients/OurClients';
import Section from '../components/Section/Section';
import BreakCard from '../components/BreakCard/BreakCard';
import ImageOverlay from '../components/ImageOverlay/ImageOverlay';
import { clientsData } from '../data/clientsData';

function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section>
          <ImageOverlay
            title="¿Por qué CoffIA?"
            description="CoffIA es una aplicación web que te ayuda a encontrar tu café ideal.
            Para ello, te pedimos que respondas un cuestionario de 5 preguntas
            sobre tus gustos y preferencias. Con esta información, CoffIA
            utiliza un algoritmo de aprendizaje automático para recomendarte el
            café que más se adapta a ti. Nuestro objetivo es que puedas
            disfrutar de una taza de café personalizada y que puedas apoyar a
            nuestros orgullosos campesinos colombianos."
            imageUrl="/coffee-wallpaper.png"
          />
        </section>

        <div className="flex flex-col items-center my-5">
          <BreakCard
            title="¿De donde surgio?"
            description="CoffIA es un proyecto que nació en el curso de Inteligencia
          Artificial de la Universidad Javeriana. El objetivo del proyecto es
          aplicar los conocimientos adquiridos en el curso para crear una
          aplicación web que utilice un algoritmo de aprendizaje automático
          para recomendar un café personalizado."
          />
        </div>

        <div className="flex flex-col items-center">
          <Section
            title="¿Cómo funciona?"
            description="CoffIA utiliza un algoritmo de aprendizaje automático para
          recomendar un café personalizado. Para ello, CoffIA te pide que
          respondas un cuestionario de 5 preguntas sobre tus gustos y
          preferencias. Con esta información, CoffIA utiliza un algoritmo de
          aprendizaje automático para recomendarte el café que más se adapta a
          ti."
            imagePath="/coffee-wallpaper.png"
            alt="Background image"
            height={700}
            width={700}
          />
        </div>

        <section>
          <OurClients clients={clientsData} />
        </section>
        <section>
          <h1 className="text-center">Conoce al equipo</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card
              title="Juan"
              description="CEO de CoffIA"
              imagePath="/Juan.png"
              alt="CEO de CoffIA"
              height={100}
              width={100}
            />
            <Card
              title="Camilo"
              description="CTO de CoffIA"
              imagePath="/Camilo.png"
              alt="CTO"
              height={200}
              width={200}
            />
            <Card
              title="Frank"
              description="CFO de CoffIA"
              imagePath="/Frank.jpg"
              alt="CFO"
              height={200}
              width={200}
            />
            <Card
              title="Kevin"
              description="CMO de CoffIA"
              imagePath="/Kevin.jpg"
              alt="CMO"
              height={200}
              width={200}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AboutPage;
