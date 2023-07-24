import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';

interface Button_Default {
    props : {
        text : String,
        icon : Boolean,
        className : String,
        link : string | any
    }
}

export default function Button_Default({props} : Button_Default ) {
    const {text,icon,className,link} = props
    return (
    <>
      <a href={link}>
      <Button className={className}>
        <p>
          {text}
        </p>
        {!icon ? "" :  
        <HiOutlineArrowRight className="h-5 w-5" />
        }
      </Button>
      </a>
    </>
  )
}


