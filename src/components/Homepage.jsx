import React from 'react'





const Top = () => {
  return (
    <div>
      {/* Home contaniner */}
      <img className='pb-10 pt-12' src="img/background.png" alt="" />
      <div className='flex items-center mt-10 absolute top-40'>
        <div className='pl-20 pr-20'>
          <h1 className='text-4xl font-bold leading-normal'>No 1 Online Party <br/>Marketplace.</h1>
          <p className='mt-2 text-2xl leading-normal font-serif'>Everyone deserves to be celebrated.<br/>That's why at Paatee, we make it <br/>extremely easy to  organise parties.
          </p>
          <div className='flex pt-10 pb-10 pl-7 pr-12 absolute left-12 justify-center grid-cols-2 gap-5'>
            <div className='btn bg-[#A50044] leading-normal text-[#fff]'>Sign Up</div>
            <div className='btn border border-[#A50044] text-[#A50044] hover:text-[#fff] leading-normal'>Log In</div>
          </div>
        </div>
        <img className='w-43 relative left-20 pt-5' src="img/party1.png" alt="" />
      </div>

      {/* Paatee customers companies logo */}
      <div className='pb-16'>
        <img src="img/logos.png" alt="" />
      </div>


      {/* Services that we Offer */}
      <h3 className='text-2xl font-bold text-center'><u>Services That We Offer</u></h3>
      <div className='p-12'>
        {/* Add content here if needed */}
      </div>

      <div className='relative'>
      <img className=' mt-40 mb-10 h-96 w-full' src="img/rectangle 3.png" alt="" />
      <div className=' absolute bottom-0 pl-20 pr-20 pt-16 grid lg:grid-cols-3 gap-5 md:grid-cols-2'>
        <div className='service text-center '>
          <img className='w-72 h-64 ml-12' src="img/planner.png" alt="" />
          <div>
            <span><h3 className='header leading-normal'>Hire a Party Planner</h3></span>
            <span className='text p-4'>
              Planning a special event or celebration but feeling overwhelme by the daunting task of organizing everything? Consider hiring our party planners to ease the stress.
            </span>
            <div className='btn-service text-center ml-4 mr-4'><img className='w-4 absolute right-36 bottom-8' src="img/vector2.png" alt="" />Hire </div>
          </div>   
        </div>

        <div className='service text-center'>
          <img className='w-72 h-64 ml-12' src="img/orderparty.png" alt="" />
          <div>
            <span><h3 className='header leading-normal'>Order a Party</h3></span>
            <span className='text p-4'>
              Imagine your dream party. Now select what you want in your party, provide the date, venue if your party and go to sleep and get your party delivered to any location that you chose.
            </span>
            <div className='btn-service ml-4 mr-4'><img className='w-4 absolute right-36 bottom-8' src="img/vector2.png" alt="" />Order</div>
          </div>   
        </div>

        <div className='service text-center justify-center'>
          <img className='w-72 h-64 ml-12 pt-10' src="img/explore.png" alt="" />
          <div>
            <span><h3 className='header leading-normal'>Explore Party Products</h3></span>
            <span className='text p-5'>
              Browse our array of party products and select all you need. Get your party products in good quality, speed and cost efficiency all delivered at your doorstep when you need it the most.
            </span>
            <div className='btn-service ml-4 mr-4 mb-4'><img className='w-4 absolute right-32 bottom-8' src="img/vector2.png" alt="" />Explore</div>
          </div>   
        </div>
      </div>
      </div>
      
      
      {/* Check out our best selling products */}
      <h3 className='text-2xl font-bold text-center pt-5' ><u>Check Out Our Best Selling Party Products</u></h3>
      <div className='pl-20 pr-20 mb-12 mt-7 grid lg:grid-cols-3 gap-5'>
        <div className=' p-2 bg-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]'>
          <div className='bg-[#D9D9D9] p-28 mb-7 rounded-md'>
            <div className='btn w-28 h-8 bg-[#EEC89F] hover:text-[#fff] absolute right-4 top-48'>Cakes</div>
          </div>
          <span className='font-semibold text-gray-700'>Vanilla Flavoured Cake</span>
          <span className='text-xs text-[#000000] ml-36'>4 Layers</span>
          <p className='text-xs text-[#484848] font-semibold pt-2 flex'>4.5 <img className='w-6 h-4 pl-1 pr-1' src="img/star.png" alt="" /> <u className='hover:text-[#2B2BFF] cursor-pointer'>Reviews</u></p>
          <h4 className='font-bold pt-2 pb-2'>#70,000</h4>
          <p className=' text-xs pb-3 flex'><img className='w-12 h-3 pt-1' src="img/140,000.png" alt="" /><span className='text-[#FF0000] font-bold pl-1'>-50%</span></p>
          <div className='bg-[#A50044] hover:bg-[#890039] rounded-md py-2 px-3 text-[#fff] text-xs font-bold cursor-pointer tracking-wider text-center'>
            <img className='w-5 m-2 inline-block' src="img/shoppingcart2.png" alt="" />
            Add To Cart
            </div>
        </div>

        <div className=' p-2 bg-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]'>
          <div className='bg-[#808080] p-28 mb-7 rounded-md'>
            <div className='btn w-28 h-8 bg-[#EEC89F] hover:text-[#fff] absolute right-4 top-48'>Cakes</div>
          </div>
          <span className='font-semibold text-gray-700'>Vanilla Flavoured Cake</span>
          <span className='text-xs text-[#000000] ml-36'>4 Layers</span>
          <p className='text-xs text-[#484848] font-semibold pt-2 flex'>4.5 <img className='w-6 h-4 pl-1 pr-1' src="img/star.png" alt="" /> <u className='hover:text-[#2B2BFF] cursor-pointer'>Reviews</u></p>
          <h4 className='font-bold pt-2 pb-2'>#70,000</h4>
          <p className=' text-xs pb-3 flex'><img className='w-12 h-3 pt-1' src="img/140,000.png" alt="" /><span className='text-[#FF0000] font-bold pl-1'>-50%</span></p>
          <div className='bg-[#A50044] hover:bg-[#890039] rounded-md py-2 px-3 text-[#fff] text-xs font-bold cursor-pointer tracking-wider text-center'>
          <img className='w-5 m-2 inline-block' src="img/shoppingcart2.png" alt="" />
            Add To Cart
            </div>
        </div>

        <div className=' p-2 bg-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]'>
          <div className='bg-[#8F8585] p-28 mb-7 rounded-md'>
            <div className='btn w-28 h-8 bg-[#EEC89F] hover:text-[#fff] absolute right-4 top-48'>Cakes</div>
          </div>
          <span className='font-semibold text-gray-700'>Vanilla Flavoured Cake</span>
          <span className='text-xs text-[#000000] ml-36'>4 Layers</span>
          <p className='text-xs text-[#484848] font-semibold pt-2 flex'>4.5 <img className='w-6 h-4 pl-1 pr-1' src="img/star.png" alt="" /> <u className='hover:text-[#2B2BFF] cursor-pointer'>Reviews</u></p>
          <h4 className='font-bold pt-2 pb-2'>#70,000</h4>
          <p className=' text-xs pb-3 flex'><img className='w-12 h-3 pt-1' src="img/140,000.png" alt="" /><span className='text-[#FF0000] font-bold pl-1'>-50%</span></p>
          <div className='bg-[#A50044] hover:bg-[#890039] rounded-md py-2 px-3 text-[#fff] text-xs font-bold cursor-pointer tracking-wider text-center'>
          <img className='w-5 m-2 inline-block' src="img/shoppingcart2.png" alt="" />
            Add To Cart
            </div>
        </div>

      </div>

      {/* Our customer's testimonies */}
      <h3 className='text-2xl font-bold text-center pt-12'><u>Our Customer's Testimonies</u></h3>
      <div className='relative'>
      <img className='pt-8 pb-20 h-96 w-full' src="img/rectangle.png" alt="" />
      <div className=' pl-4 pr-4 grid lg:grid-cols-2 gap-0 absolute bottom-24'>
        <div className='p-6 pb-10 bg-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)] rounded-md m-10 relative left-7'>
          <img className='w-7 absolute left-0 top-0' src="img/quoteup.png" alt="" />
          <p className='font-semibold text-center text-lg'>
            Paatee is really who they claim to be. I was having a bad day and i felt like throwing a party to cool off the stress, i used the 'order a party' feeture and in no time, My place was lit with party vibes and products.
          </p>
          <span className='text-gray-300 absolute right-6 bottom-2 mb-2 mr-4'>Onyedika, Lagos State</span>
          <img className='w-7 absolute right-0 bottom-10' src="img/quotedown.png" alt="" />
        </div>


        <div className='p-6 pb-10 bg-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)] rounded-md m-10 relative right-7'>
          <img className='w-7 absolute left-0 top-0' src="img/quoteup.png" alt="" />
          <p className='font-semibold text-center text-lg'>
            Paatee is really who they claim to be. I was having a bad day and i felt like throwing a party to cool off the stress, i used the 'order a party' feeture and in no time, My place was lit with party vibes and products.
          </p>
          <span className='text-gray-300 absolute right-6 bottom-2 mb-3 mr-5'>Onyedika, Lagos State</span>
          <img className='w-7 absolute right-0 bottom-10' src="img/quotedown.png" alt="" />
        </div>

      </div>
      </div>

        {/* Contact paatee container */}
      <div className='relative bottom-0'>
        <div className='bg-[#000000] p-8 pl-11 pr-11 grid lg:grid-cols-2 gap-5'>
          
            <div className='pl-12 pt-5 pb-5'>
            
              <div className=''>
                <img className='w-52' src="img/rectangle1.png" alt="" />
              </div>
              <h4 className='text-[#FFFFFF] text-2xl mb-1 leading-normal'>Party Meets Technology ...</h4>
              <p className='text-[#AAAAAA] mb-8'>Say bye bye to traditional way of <br/> planning a party .</p>
              <h3 className='text-[#FFFFFF] text-3xl font-semibold leading-normal'>Sign Up To Our Newsletter</h3>
              
              <div className='relative'>
                <input className='p-2 rounded-l-md' type="Email" placeholder='Email Adress' />
                <input className='bg-[#A50044] p-2 w-10 mt-3 rounded-r-md cursor-pointer' type="text" />
                <img className='pl-0 absolute left-52 top-6 cursor-pointer w-5' src="img/arrow.png" alt="" />
              </div>
            
              <div className='flex pt-4'>
                <img className='w-7 h-7 cursor-pointer hover:bg-[#890039]' src="img/likedin.png" alt="" />
                <img className='w-7 h-7 ml-5 cursor-pointer hover:bg-[#890039]' src="img/instagram.png" alt="" />
                <img className='w-7 h-7 ml-5 cursor-pointer hover:bg-[#890039]' src="img/twitter.png" alt="" />
              </div>
            </div>

            <div className='pr-12 p-5'>
              <div className='flex justify-around'>
                <ul className='text-[#AAAAAA]'>
                <h2 className='text-[#FFF] leading-normal text-xl font-semibold'>Company</h2>
                  <li className='pt-2 hover:border-b'>About Us</li>
                  <li className='pt-2 hover:border-b'>FAQS</li>
                  <li className='pt-2 hover:border-b'>Contact Us</li>
                  <li className='pt-2 hover:border-b'>Blog</li>
                  <li className='pt-2 hover:border-b'>Privacy Policy</li>
                </ul>
                
                <ul className='text-[#AAA] grid-cols-4 gap-5'>
                <h2 className='text-[#FFF] leading-normal text-xl font-semibold'>Features</h2>
                <li className='pt-2 hover:border-b'>Order a party</li>
                <li className='pt-2 hover:border-b'>Explore party products</li>
                <li className='pt-2 hover:border-b'>Hire a panner</li>
                </ul>
              </div>
            </div>
          <div className='pl-20'>
            {/* <img className='w-96' src="img/frame 2.png" alt="" /> */}
            
              <div className='flex pr-20'>
                <img className='h-1' src="img/vector 9.png" alt="" />
                <img className='w-5 h-5 relative bottom-2 left-2' src="img/frame1.png" alt="" />
                <img className='w-32 h-4 relative bottom-1 left-2' src="img/paatee 2.png" alt="" />
                <img className='h-1 relative left-4' src="img/vector 9.png" alt="" />
              </div>
              
              

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;

