import React from "react";
import { deepPurple } from "@mui/material/colors";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className="space-y-5" container>
        {[1,1,1,1,1].map((item)=><Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img className="h-[5rem] w-[5rem] object-cover object-top"
                src="https://assets.ajio.com/medias/sys_master/root/20231006/DIPX/651ffc02ddf7791519259404/-473Wx593H-463928195-black-MODEL.jpg"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>Color: Pink </span> <span>Size: M</span>
                </p>
                <p>Seller: Linaria</p>
                <p>Rs 1099</p>
              </div>
            </div>
          </Grid>

          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderIcon sx={{ fontSize: "2rem"}} className='px-2' />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>)}
        
      </Grid>
    </div>
  );
};

export default OrderDetails;
