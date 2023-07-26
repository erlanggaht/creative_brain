
import { Button } from "flowbite-react";

interface Button_Popover {
    props : {
        text : String,
        classN : String
    }
}

export default function Button_Gradient({props} : Button_Popover) {
    const {text,classN} = props
  return (
    
    <Button gradientDuoTone="purpleToPink"  className={classN}>
    {text}
     </Button>
  )
}
