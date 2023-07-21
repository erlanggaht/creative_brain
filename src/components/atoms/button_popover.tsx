
import { Button } from "flowbite-react";

interface Button_Popover {
    props : {
        text : String
    }
}

export default function Button_Gradient({props} : Button_Popover) {
    const {text} = props
  return (
    
    <Button gradientDuoTone="purpleToPink">
    {text}
     </Button>
  )
}
