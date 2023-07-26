interface Line_Gradient {
  props : {
    via : string,
    positionY : string,
    positionX : string
  }
}


export default function Line_Gradient({props} : Line_Gradient) {
  const {via,positionX} = props
  return (
    <div className={`before:h-full before:w-1 before:bg-gradient-to-t   before:from-transparent ${via} before:to-transparent before:block before:absolute md:px-4 ${positionX}`}>
        
    </div>
  )
}
