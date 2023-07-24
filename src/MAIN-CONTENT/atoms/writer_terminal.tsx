import Typewriter from 'typewriter-effect';

interface Writer_Terminal {
  props : {
    text_string : string,
    cursor : string,
    delay : number,
    pause : number
  }
}

export default function Writer_Terminal({props} : Writer_Terminal ) {
  const {text_string,cursor,delay,pause} = props
  return (

    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(text_string)
          .callFunction(() => {
            // console.log('String typed out!');
          })
          .pauseFor(pause)
          .callFunction(() => {
            // console.log('All strings were deleted');
          })
          
          .start();
      }}
      options={{
        loop : true,
        delay : delay,
        cursor : cursor,
        deleteSpeed : 5
      }}
      
    />
  )
}
