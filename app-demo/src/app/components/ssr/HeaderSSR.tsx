export default function HeaderSSR () {
  return(
    <header className="bg-[url('./images/escheresque_@2X.png')] w-full bg-[length:46px_29px] h-[130px] static">
      <nav className="max-w-[1290px] h-auto w-full absolute top-[24px] left-0 right-0 mx-auto">
          <div className="absolute left-[36px] top-[6px] z-[100]">
            <a href="#" className="block text-transparent bg-[url('./images/logo.png')] bg-no-repeat bg-center bg-[length:60px_60px] border-none w-[60px] h-[60px] ">Author</a>
          </div>
          <nav className="h-[78px] table float-right">
            <ul className="table-cell align-middle list-none *:relative *:inline-block *:float-left *:mr-[22px] *:p-0">
              <li><a href="#" className="text-lg">Home</a></li>
              <li className="group">
                <a href="#" className="group-hover:text-[#000000] text-lg">Category</a>
                <ul className="hidden absolute top-full left-0 m-0 bg-[#f4f4f4] rounded-br-[3px_3px] z-500 group-hover:block shadow-md *:block *:p-0 *:m-0 *:text-left *:w-full *:min-h-[48px] *:border-b-[1px] *:border-b-black/5 *:border-solid">
                  <li>
                    <a href="#" className="block p-[16.5px_25px] whitespace-normal text-[#8E8E8E] text-md border-b-2 border-solid border-b-transparent">Wordpress</a>
                  </li>
                  <li>
                    <a href="#" className="block p-[16.5px_25px] whitespace-normal text-[#8E8E8E] text-md border-b-2 border-solid border-b-transparent">HTML</a>
                  </li>
                  <li>
                    <a href="#" className="block p-[16.5px_25px] whitespace-normal text-[#8E8E8E] text-md border-b-2 border-solid border-b-transparent">Photography</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="text-lg">Contract</a>
              </li>
              <li>
                <a href="#" className="text-lg" >About</a>
              </li>
            </ul>
          </nav>
      </nav>
    </header>
  );
}