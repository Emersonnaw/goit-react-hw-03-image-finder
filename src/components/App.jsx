import React, { Component } from 'react';
import { Searchbar } from './Searchbar';
// import { Modal } from './Modal';
// import { Vortex } from  'react-loader-spinner'
export class App extends Component  {

  state = {
  showModal: true,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    })); 
   
  };




  render() {

    // const { showModal } = this.state;
  
    return (
       
      <div>
        
      <Searchbar />

      {/* <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/> */}

     {/* <button type="button" onClick={this.toggleModal}>Open</button>
        {showModal && <Modal onClose={this.toggleModal} />} */}
    </div>
      
  );
}
};
