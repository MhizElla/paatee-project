import React from 'react'


const Navbar = () => {
  return (
    <div>
      <div className='grid grid-cols-3 shadow-lg items-center' >
        <img className=' pl-3 ml-20' src="img/paatee.png" alt="" />
          <div>
            <ul className='flex flex-row items-center gap-2 '>
              <li>
                <a className='p-7' href="#">
                  <span><img className='h-8 ' src="img/faqs.png" alt="" /></span>
                </a>
              </li>
              <li>
                <a className='p-10' href="#">
                    <span className='text-[#484848] font-semibold text-lg hover:text-[#FFD700]'>About Us</span>
                </a>
              </li>
              <li>
                <a className='p-7' href="#">
                  <span className='text-[#484848] font-semibold text-lg hover:text-[#FFD700]'>Contact Us</span>
                 </a>
            </li>
        </ul>
          </div>
          <div className='flex  relative items-center mr-20'>
             <img className='pl-40 cursor-pointer' src="img/shoppingcart.png" alt="" />
             <img className='pl-20 cursor-pointer' src="img/user.png" alt="" />
              
          </div>
      </div>
    </div>
  )
}

export default Navbar
