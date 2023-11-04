import React from "react";
import Grid from "@mui/material/Grid";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=> navigate('/account/order/${5}')} className="p-5 shadow-md hover:shadow-2xl">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item sx={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://assets.ajio.com/medias/sys_master/root/20230524/shT2/646e3154d55b7d0c63d62212/-473Wx593H-460789301-blue-MODEL.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>Men SLim Mid Rise Black Jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>Rs 1099</p>
        </Grid>
        <Grid item xs={4}>
            {true &&<div><p>
                <AdjustIcon sx={{width:"15px", height:"15px"}} className="text-green-600 mr-2 text-sm"/>
                <span>
                    Delivered on March 03
                </span>
                
            </p>
            <p className="text-xs">
                   Your Item has been delivered
                </p>
            </div>}

            {false &&<p>
                <span>
                    Expected Delivery on March 03
                </span>
            </p>}

        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
