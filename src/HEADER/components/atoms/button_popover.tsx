
import { Button } from "flowbite-react";

interface Button_Popover {
    props : {
        text : String,
        classN : String,
        ActiveStar? : (e : MouseEvent) => void
    }
};function not_function() {
  return
}

export default function Button_Gradient({props} : Button_Popover) {
    const {text,classN,ActiveStar = () => not_function()} = props
  return (
    
    <Button gradientDuoTone="purpleToPink"  className={classN} onClick={(e : MouseEvent) => ActiveStar(e)}>
        {text}
     </Button>
  )
}
