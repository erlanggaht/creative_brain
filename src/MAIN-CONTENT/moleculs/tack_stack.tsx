
import { Card } from 'flowbite-react';

interface Tack_Stack {
  stack : Array<Object>,
}


export default function Tack_Stack({stack} : Tack_Stack) {

  return (
    <Card>
      <h5 className="mb-3 text-base font-semibold text-gray-900 dark:text-white lg:text-xl">
        Tack Stack
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        <span>
          technology used in this project.
        </span>
      </p>
      <ul className="my-4 space-y-3">

            {/* @ts-ignore */}
            {stack && stack.map((m,i) : any => {
              
             return <li className='group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500' key={i}>
                <div className=" flex-1 whitespace-normal flex flex-nowrap items-center gap-2">
                              {/* @ts-ignore */}
                <img src={m.split('  ')[1]} alt='icon' width={24} height={24} /> <p className='break-words'> {m.split('  ')[0]} </p>
                </div>
            </li>  

      })}
      </ul>
      <div>
        <a
          className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
          href="#" target={'_blank'}
        >
          
          <p className='hover:cursor-text'>
          thank you for creating this technology
          </p>
        </a>
      </div>
    </Card>
  )
}


