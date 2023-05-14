import React, { Component } from 'react';
 import { ToastContainer} from 'react-toastify';
import {AppDiv} from './App.styled'
import { ImageGallery } from './ImageGallery';

export class App extends Component  {

  state = {
    searchQuery:''
  };

  render() {
    const { searchQuery } = this.state;
    return (
       
      <AppDiv>

         <ToastContainer/>
        <ImageGallery searchQuery={searchQuery} />
    </AppDiv>
      
  );
}
};
