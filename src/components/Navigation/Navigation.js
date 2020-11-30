import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import Drawer from './Drawer/Drawer';
import Modal from '../../components/Modal/Modal';
import NewBoardForm from '../../components/Forms/NewBoardForm';
import TopAppBar from './TopAppBar/TopAppBar';

const Navigation = ({ isAuth }) => {
   const [isDrawerOpen, setIsDrawerOpen] = useState(true);
   const [isModalOpen, setModalOpen] = useState(false)

   const handleIsModalOpen = () => {
      console.log(isModalOpen);
      setModalOpen(!isModalOpen);
   }

   const handleDrawerOpen = () => {
      setIsDrawerOpen(true);
   };

   const handleDrawerClose = () => {
      setIsDrawerOpen(false);
   };

   return (
      <Box>
         <TopAppBar
            handleDrawerOpen={handleDrawerOpen}
            isDrawerOpen={isDrawerOpen}
            isAuth={isAuth}
         />
         <Drawer
            isAuth={isAuth}
            handleDrawerClose={handleDrawerClose}
            isDrawerOpen={isDrawerOpen}
            handleIsModalOpen={handleIsModalOpen}
         />
         <Modal
            isAuth={isAuth}
            isModalOpen={isModalOpen}
            handleIsModalOpen={handleIsModalOpen}
         >
            <NewBoardForm
               handleIsModalOpen={handleIsModalOpen}
            />
         </Modal>
      </Box>
   )
}

export default Navigation

