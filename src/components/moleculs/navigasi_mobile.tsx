'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { style_hover } from '@/utility/gradient_color';

const {text_gradient} = style_hover()

export default function Navigasi_Mobile() {
  return (
    <Navbar
      fluid
      rounded
      className='bg-transprent '

    >
      <Navbar.Brand href="#">
        <h1 className='uppercase text-2xl text-ping font-[700]'>Erlan<span className='text-white'>gga</span></h1>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img="https://res.cloudinary.com/djsizjaee/image/upload/v1684489838/erlangga_etodo4.png" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Erlanggaht
            </span>
            <span className="block truncate text-sm font-medium">
              erlanggahidayat.md@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Projects
          </Dropdown.Item>
          <Dropdown.Item>
            Portofolio
          </Dropdown.Item>
          <Dropdown.Item>
            Guthub
          </Dropdown.Item>
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
          className={`bg-ungu hover:text-gray-300  md:hover:text-ping`}
          
        >
          <p className={`${text_gradient}  md:hover:text-ping`}>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#" className='text-white hover:bg-white hover:text-ping border-[#666] md:hover:text-ungu'>
          About
        </Navbar.Link>
        <Navbar.Link href="#" className='text-white hover:bg-white hover:text-ping border-[#666] md:hover:text-ungu'>
          Instagram
        </Navbar.Link>
        <Navbar.Link href="#" className='text-white hover:bg-white hover:text-ping border-[#666] md:hover:text-ungu'>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


