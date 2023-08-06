export default function InputFooter() {
    return (
      <form className={'flex items-center justify-end gap-2  '}>
          <input id={'Inputemail'} placeholder={'asep@gmail.com'} className={'ml-2 py-3 px-4 bg-transparent border rounded-sm w-40 md:w-60'} />
          <button className={'py-3 border border-transparent px-4  bg-ungu hover:bg-ping'}>Submit</button>
      </form>
    )
  }
  