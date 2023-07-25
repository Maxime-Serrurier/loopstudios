// Libraries

import Image from 'next/image';

function Interactive() {
  // JSX
  return (
    <>
      <section className='h-screen px-6 py-20'>
        <Image
          src='/assets/image-interactive.jpg'
          width={500}
          height={500}
          alt='interactive image'
        ></Image>
        <div className='px-6 mt-6 text-center'>
          <h2 className='py-4 text-3xl uppercase font-josefin'>
            the leader in interactive vr
          </h2>
          <p className='text-sm font-semibold text-darkGray'>
            Founded in 2011, Loopstudios has been producing
            world-class virtual reality projects for some of the best
            companies around the globe. Our award-winning creations
            have transformed businesses through digital experiences
            that bind to their brand
          </p>
        </div>
      </section>
    </>
  );
}

export default Interactive;
