import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Card from '../components/Card/Card';

import Image from 'next/image';

function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h1>¿Por qué CoffIA?</h1>
          <p>
            CoffIA es una aplicación web que te ayuda a encontrar tu café ideal.
            Para ello, te pedimos que respondas un cuestionario de 5 preguntas
            sobre tus gustos y preferencias. Con esta información, CoffIA
            utiliza un algoritmo de aprendizaje automático para recomendarte el
            café que más se adapta a ti. Nuestro objetivo es que puedas
            disfrutar de una taza de café personalizada y que puedas apoyar a
            nuestros orgullosos campesinos colombianos.
          </p>
        </section>

        <div className="h-32 w-screen relative overflow-hidden">
          <Image
            src="/coffee-wallpaper.png"
            fill={true}
            quality={100}
            alt="Background image"
            className="object-cover"
          />
        </div>

        <section>
          <h1> ¿De donde surgio?</h1>
          <p>
            CoffIA es un proyecto que nació en el curso de Inteligencia
            Artificial de la Universidad Javeriana. El objetivo del proyecto es
            aplicar los conocimientos adquiridos en el curso para crear una
            aplicación web que utilice un algoritmo de aprendizaje automático
            para recomendar un café personalizado.
          </p>
        </section>

        <section>
          <h1>¿Cómo funciona?</h1>
          <p>
            CoffIA utiliza un algoritmo de aprendizaje automático para
            recomendar un café personalizado. Para ello, CoffIA te pide que
            respondas un cuestionario de 5 preguntas sobre tus gustos y
            preferencias. Con esta información, CoffIA utiliza un algoritmo de
            aprendizaje automático para recomendarte el café que más se adapta a
            ti.
          </p>
        </section>

        <section>
          <h1>Nuestros Clientes</h1>
        </section>
        <section>
          <h1 className="text-center">Conoce al equipo</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card
              title="Juan"
              description="CEO"
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
