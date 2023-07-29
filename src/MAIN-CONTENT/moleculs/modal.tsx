'use client';

import Button_Gradient from '@/HEADER/components/atoms/button_popover';
import { Button, Modal } from 'flowbite-react';
import {useState} from 'react'
import Tack_Stack from './tack_stack';


interface Modal_Button {
  props_modal : {
    project_detail : Array<String>
  }
}

export default function Modal_Button({props_modal} : Modal_Button) {
  const {project_detail} =  props_modal
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <>
      <div  onClick={() => props.setOpenModal('default')}><Button_Gradient props={{text:'Project Detail',classN:'rounded '}} /></div>
      <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Detail Project</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
           <Tack_Stack stack={project_detail} 
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)} color='light' >Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}


