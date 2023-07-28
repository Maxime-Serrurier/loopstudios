// Libraries
import { SocialIcon } from 'react-social-icons';

function Footer() {
  // JSX
  return (
    <>
      <section className='py-16 text-center bg-primaryBlack text-primaryWhite font-alata'>
        <h3 className='text-2xl font-semibold'>loopstudios</h3>
        <ul className='flex flex-col py-8 text-sm gap-y-6'>
          <li>About</li>
          <li>Carrers</li>
          <li>Event</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
        {/* socials */}
        <SocialIcon
          url='https://facebook.com'
          fgColor='white'
          bgColor='transparent'
          style={{ width: '40px', height: '40px' }}
        />
        <SocialIcon
          url='https://twitter.com'
          fgColor='white'
          bgColor='transparent'
          style={{ width: '40px', height: '40px' }}
        />
        <SocialIcon
          url='https://pinterest.com'
          fgColor='white'
          bgColor='transparent'
          style={{ width: '40px', height: '40px' }}
        />
        <SocialIcon
          url='https://instagram.com'
          fgColor='white'
          bgColor='transparent'
          style={{ width: '40px', height: '40px' }}
        />
        <p className='pt-4 text-sm text-darkGray'>
          © 2021 Loopstudios. All rights reserved
        </p>
      </section>
    </>
  );
}

export default Footer;
