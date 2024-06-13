import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItemText from '@mui/material/ListItemText';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import InfoIcon from '@mui/icons-material/Info';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Navigate, useNavigate } from 'react-router-dom';


const icons=()=>[
    {
    title:"Home",
    icon: <DashboardIcon/>,
    url:"/home",
     },
    {
    title:"Cars",
    icon: <DirectionsCarFilledIcon/>,
    url:"/cars",
    },
   
    {
    title:"Reservations",
    icon: <BookOnlineIcon/>,
    url:"/reservations",
    },
    {
    title:"About",
    icon: <InfoIcon/>,
    url:"/about",
    },
    {
    title:"FAQ",
    icon: <LiveHelpIcon/>,
    url:"/faq",
    },

]

const MenuListItems = () => {
    const navigate=useNavigate()
  return (    
         <List>
        {icons().map((item, index) => (
          <ListItem 
        sx={{
            color:"white",
             "&:hover": {color:"greenyellow"}, 
             "&:hover .MuiSvgIcon-root": {color:"greenyellow"},
             "& .MuiSvgIcon-root": {color:"white"},
          }} 
          key={index} disablePadding onClick={()=>navigate(item.url)}>
            <ListItemButton>
              <ListItemIcon >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>    
  )
}

export default MenuListItems