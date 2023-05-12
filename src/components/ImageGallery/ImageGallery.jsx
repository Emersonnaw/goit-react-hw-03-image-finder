import React, { Component } from 'react';
import { Ul } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import {PixabayApi} from '../Services/PixabayApi';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
export  class ImageGallery extends Component {
    state = {
        searchSet: null,
        error: null,
        page: 1,
        status: 'idle'

    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.searchQuery.search;
        const nextName = this.props.searchQuery.search;
        const { page } = this.state;
        
        if ( prevName !== nextName ) {
            this.setState({status:'pending', searchSet: null});
            PixabayApi(nextName, page)
                .then(resp => {
                    if (resp.ok) {
                        return resp.json();
                    }
                    return Promise.reject(
                        new Error(`Нема запроса з ${nextName}`),
                    );
                
                })
                .then(search => {
                    this.setState({ status: 'resolved', searchSet: search.hits })
                })
                .catch(error => this.setState({ status: 'rejected', error }));
        }  
        }

    onLoadMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1,  }));
        
    };
    


    render() {
        const {searchSet,error, status} = this.state;
    console.log(this.state.page);
        if (status === 'idle') {
            return <div><h1>Будь ласка введіть щось, що ви б хотіли переглянути</h1></div>;
        }

        if (status === 'pending') {
            return (
                <Loader />
            );
        }

        if (status === 'rejected') {
            return <h1> { error.message}</h1>;
        }


        if (status === 'resolved') {
             return (
            <>
                {searchSet &&
                    <Ul> 
                        {searchSet.map(({ id, webformatURL, tags, largeImageURL } ) => (
                            <ImageGalleryItem
                                key={id}
                                webformatURL={webformatURL}
                                tags={tags}
                                largeImageURL={largeImageURL}
                            />
                        ))} 
                    </Ul >
                     }

                     <Button onClick={this.onLoadMore } />
             </>       
            );
        }
    };
};

//  constructor() {
//     this.search_query = '';
//      this.page = 2; // increment number of page need to put om then(data)
//      this.markup =''; 
//   }

//   get query() {
//     return this.search_query;
//   }

//   set query(newQuery) {
//     this.search_query = newQuery; 
//   }

//   resetPage(){
//      this.page = 1;
//   }
  
//   incrementPage(){
//     this.page += 1;
//   }
  
//   getReadyMarkup(){
//     return this.markup;
//    }

//  async fetchImage() {
//     const BASE_URL = 'https://pixabay.com/api/';
//     const key = '34586692-ed7cb8a238ccde585a263c879';
//     const searchTypePhoto = '&image_type=photo';
//     const searchOrientation = '&orientation="horizontal"';
//     const ageFilter = '&safesearch="true"';
//     const perPage ='&per_page=40';
//     const page = `&page=${this.page}`;
  
//    const object =  await axios.get(`${BASE_URL}?key=${key}&q=${this.search_query}${searchTypePhoto}${searchOrientation}${ageFilter}${perPage}${page}`);
//    return object.data;
//   }