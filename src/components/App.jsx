import React, { Component } from 'react';
 import { ToastContainer} from 'react-toastify';
import {AppDiv} from './App.styled'
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export class App extends Component  {

  state = {
    searchQuery:''
  };

  

  onFormData = (value) => {
    this.setState({ searchQuery: value });
  }
  
  render() {
    const { searchQuery } = this.state;
    return (
       
      <AppDiv>
        <Searchbar onFormData={this.onFormData}/>  
         <ToastContainer/>
        <ImageGallery searchQuery={searchQuery} />
    </AppDiv>
      
  );
}
};
