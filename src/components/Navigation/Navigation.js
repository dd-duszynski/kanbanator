import React, { useState } from 'react'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box';
import Drawer from './Drawer/Drawer';
import Modal from '../../components/Modal/Modal';
import NewBoardForm from '../../components/Forms/NewBoardForm';
import TopAppBar from './TopAppBar/TopAppBar';

const Navigation = (props) => {
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
            isAuth={props.token}
            handleDrawerOpen={handleDrawerOpen}
            isDrawerOpen={isDrawerOpen}
         />
         <Drawer
            handleDrawerClose={handleDrawerClose}
            isDrawerOpen={isDrawerOpen}
            handleIsModalOpen={handleIsModalOpen}
         />
         <Modal
            isAuth={props.token}
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
      token: state.auth.token !== null,
   };
};

export default connect(mapStateToProps, null)(Navigation)

