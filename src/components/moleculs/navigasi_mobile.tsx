'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { style_hover } from '@/utility/gradient_color';

const {text_gradient} = style_hover()

export default function Navigasi_Mobile() {

 
  function glitch(e : any) {
    const dataTitle = document.querySelector('[data-text]')
    if(e.type === 'mouseenter') dataTitle?.classList.add('glitch')
    else dataTitle?.classList.remove('glitch')

  
  }

  return (
    <Navbar
      fluid
      rounded
      className='bg-transprent '

    >
      <Navbar.Brand href="#">
      <div className="glitch-wrapper">
      <div className="text-[30px] text-ping" data-text="Erlanggaht" onMouseEnter={(e) => glitch(e)} onMouseLeave={(e) => glitch(e)} tabIndex={-1}>Brain<span className='text-white'>./Me</span></div>
      </div>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img="https://res.cloudinary.com/djsizjaee/image/upload/f_auto,q_auto/v1/sinarasih/galeri/kzbh5qbwofe7hbeftsvo" rounded/>}
        >
          <Dropdown.Header className='z-[999]'>
            <span className="block text-sm">
              Erlanggaht
            </span>
            <span className="block truncate text-sm font-medium">
              erlanggahidayat.md@gmail.com
            </span>
          </Dropdown.Header>
          <a href='https://erlanggaht.vercel.app/projects'>
            <Dropdown.Item>
            Projects
          </Dropdown.Item>
          </a>
          <a href='https://erlanggaht93.vercel.app'>
            <Dropdown.Item>
            Portofolio
          </Dropdown.Item>
          </a>
          <a href='https://github.com/erlanggaht'>
            <Dropdown.Item>
            Github
          </Dropdown.Item>
          </a>
          <Dropdown.Divider />
          <Dropdown.Item>
            LightMode
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
          className={`bg-white hover:text-gray-300  md:hover:text-ping`}
          
        >
          <p className={`${text_gradient}  md:hover:text-ping`}>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="https://erlanggaht.vercel.app" className='text-white hover:bg-white hover:text-ping border-[#666] md:hover:text-ungu'>
          LinkBio
        </Navbar.Link>
        <Navbar.Link href="https://instagram.com/erlanggaht93" className='text-white hover:bg-white hover:text-ping border-[#666] md:hover:text-ungu'>
          Instagram
        </Navbar.Link>
        <Navbar.Link href="#" className='text-white hover:bg-white hover:text-ping border-[#666] md:hover:text-ungu'>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


