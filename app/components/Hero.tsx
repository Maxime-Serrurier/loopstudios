// Component
import Navbar from './Navbar';

function Hero() {
  // JSX
  return (
    <>
      <section className='flex flex-col h-screen bg-cover bg-hero'>
        <Navbar />
        <div className='h-full px-6 py-32'>
          <h1 className='px-6 py-5 text-4xl uppercase border-2 text-primaryWhite font-josefin border-primaryWhite'>
            immersive experiences that <br /> deliver
          </h1>
        </div>
      </section>
    </>
  );
}

export default Hero;
