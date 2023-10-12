import React from 'react'


const AboutPage = () => {
  return (
    <section id="about-page" className='p-8'>
            <h2 className='text-center text-2xl font-semibold'>About</h2>
            <div className='flex flex-row items-center gap-4'>
                <input type="text" placeholder='send email' />
                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare finibus neque, quis lacinia mauris condimentum in. Phasellus tellus est, ultrices eu feugiat ac, consectetur eu felis. Fusce ultricies magna sem. Duis sapien lorem, egestas sed posuere at, bibendum sit amet neque. Nulla efficitur tempor libero, eget rhoncus erat venenatis mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta magna lacus, ac porta odio ornare at. Ut blandit sodales pharetra. Suspendisse convallis vel lorem vel fringilla. Proin porttitor sodales magna vel laoreet. Maecenas pellentesque nec orci ac lacinia. Aenean id placerat quam. Sed a scelerisque ante, at auctor dui. In sem sem, euismod et euismod ac, sagittis vitae felis.</p>
            </div>
            
        </section>
  )
}

export default AboutPage