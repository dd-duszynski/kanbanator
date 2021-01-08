import React, { useState } from 'react'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box';
import Drawer from './Drawer/Drawer';
import Modal from '../../components/Modal/Modal';
import NewBoardForm from '../../components/Forms/NewBoardForm';
import TopAppBar from './TopAppBar/TopAppBar';

const Navigation = ({isToken}) => {
   const [isDrawerOpen, setIsDrawerOpen] = useState(true);
   const [isModalOpen, setModalOpen] = useState(false)

   const handleIsModalOpen = () => {
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
            isAuth={isToken}
            handleDrawerOpen={handleDrawerOpen}
            isDrawerOpen={isDrawerOpen}
         />
         <Drawer
            handleDrawerClose={handleDrawerClose}
            isDrawerOpen={isDrawerOpen}
            handleIsModalOpen={handleIsModalOpen}
         />
         <Modal
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

const mapStateToProps = (state) => {
   return {
      isToken: state.auth.token !== null,
   };
};

export default connect(mapStateToProps, null)(Navigation)

