import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg: w-[9rem] lg: h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22143844/2023/3/6/4200c59f-b121-4208-805e-083f260f5aa31678097771116-Anayna-Womens-Angrakha-Kurta-4291678097770436-1.jpg" alt="" />

            </div>
            <div className='ml-5 space-y-1'>
            <p className='font-semibold'>Womens Pink Kurta</p>
            <p className='opacity-70'>Size: L,White</p>
            <p className='opacity-70 mt-2'>Seller:  abcd</p>
            <div className="flex space-x-5 items-center text-gray-900 pt-6">
                <p className="font-semibold">Rs 199</p>

                <p className="opacity-50 line-through">Rs. 211</p>
                <p className="text-green-600 font-semibold">5% off</p>
              </div>
            </div>
           
        </div>
        <div className='lg: flex items-center lg: space-x-10 pt-4'> 
                <div className='flex items-center space-x-2'>
                    <IconButton><RemoveCircleOutlineIcon/></IconButton>
                    <span className='py-1 px-7 border rounded'>3</span>
                    <IconButton sx={{color:"RGB(145 85 253)"}}><AddCircleOutlineIcon/></IconButton>
                    

                </div>
                <div>
                    <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
                </div>
            </div>
    </div>
  )
}

export default CartItem
