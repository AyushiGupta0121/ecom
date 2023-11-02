import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem';
import { Button } from "@mui/material";
const OrderSummary = () => {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md-border'>
            <AddressCard/>

        </div>
        <div>
      <div className="lg: grid grid-cols-3  relative">
        <div className="col-span-2">
          {[1,1,1,1].map((item)=><CartItem />)}
        </div>
        <div className="px-5 sticky h-[100vh] mt-5">
          <div className="border">
            <p className="upperacase font-bold opacity-60 pb-4">
              Price Details
            </p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>Rs 4697</span>
              </div>

              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 ">
                  <span>Discount</span>
                  <span className="text-green-600">-1349</span>
                </div>

                <div className="space-y-3 font-semibold">
                  <div className="flex justify-between pt-3 ">
                    <span>Delivery Charge</span>
                    <span className="text-green-600">free</span>
                  </div>
                </div>
                <div className="space-y-3 font-semibold">
                  <div className="flex justify-between pt-3 ">
                    <span>Total Amount</span>
                    <span className="text-green-600">Rs 1278</span>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="contained" className="w-full" sx={{px:"2.5rem",py:"0.7rem",bgcolor:'#9155fd'}}>
                Checkout
                </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary