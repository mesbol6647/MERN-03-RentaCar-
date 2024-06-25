
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import useAuthCalls from "../service/useAuthCalls";
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import MenuListItems from "../components/MenuListItems";
import Section1 from "../components/Section1";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const { logout } = useAuthCalls();

  // const [open, setOpen] = React.useState(false);

  // const toggleDrawer = (newOpen) => () => {
  //   setOpen(newOpen);
  // };

  // const DrawerList = (
  //   <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
  //    <MenuListItems/>
  //   <Divider />     
  //   </Box>
  // );

  return (
    <> 
    
    {/* // <Box sx={{ flexGrow: 1 }}>
    //   <CssBaseline />
    //   <AppBar position="static"  sx={{ backgroundColor: '#be123c' }}>
    //     <Toolbar  >
    //       <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
    //         <Button variant="contained" color="inherit"  sx={{color: '#be123c', fontWeight: 'bold'}}
    //             onClick={toggleDrawer(true)}>
    //           MENU
    //         </Button>
    //       </Box>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
    //         RENT A CAR
    //       </Typography>
    //       <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
    //         {user && <Button variant="contained" color="inherit" sx={{color: 'black'}}  onClick={() => logout()}>Logout</Button>}
    //       </Box>
    //     </Toolbar>
    //   </AppBar>
    //   <Drawer anchor="right" open={open}  onClose={toggleDrawer(false)} PaperProps={{
    //       sx: {
    //         backgroundColor: '#be123c',
    //         color:'white'
    //       }
    //     }}>
    //     {DrawerList}
    //   </Drawer>
    // </Box>  */}
  

<section
  className="relative bg-[url(https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/tsvtcmfpxqigasqocsrf)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Let us find your

        <strong className="block font-extrabold text-rose-700"> Forever Home. </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >

          Learn More
        </a>
      </div>
    </div>
  </div> 
</section>
<Section1/>
<Testimonials/>
<Stats/>
<Footer/>

</>
  );
}

export default Dashboard;

