import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { H1, Ul } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import {PixabayApi} from '../Services/PixabayApi';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import PropTypes from 'prop-types';
import { Searchbar } from 'components/Searchbar';

export  class ImageGallery extends Component {
    state = {
        finishRenderList: null,
        error: null,
        page: 1,
        status: 'idle',
        query: '',
    }
    async componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevState.query;
        const prevPage = prevState.page;
        const {page, query} = this.state;

        if (prevQuery !== query || prevPage !== page) {

            this.FetchingSevrice(query, page);
        }
    };  
    FetchingSevrice = async (searchWord, page) => {
        try {
            this.setState({ status: 'pending' });    
            const reciveSetPIcture = await PixabayApi(searchWord, page); 
            if (reciveSetPIcture.total === 0) {
                                toast.error(`there is no  query with  "${searchWord}"`, {
                                position: "top-right",
                                autoClose: 2000,
                                theme: "colored",
                                });
                                this.setState({ status: 'reject'}); 
                                return;
                        } 
                        this.setState(prevState => ({ finishRenderList:[...prevState.finishRenderList, ...reciveSetPIcture.hits],status: 'resolved'})); 
            }catch(error) {
                toast.error(`"${error}" Something were wrong `, {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored",
                });       
            }
    }
    onFormData = (value) => {
        this.setState({ query: value.search, page: 1, finishRenderList: [] });
    }    
    onLoadMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1  }));
    };
    render() {
        const { error, status, finishRenderList } = this.state;
        return (
            <>
                <Searchbar onFormData={this.onFormData} />  
              {(status === 'idle') && (<div><H1>Please make a request and press enter </H1></div>)}  
              { (status === 'pending') &&  <Loader /> }
            {(status === 'rejected') && (<h1> {error.message} </h1>)}
                {(status === 'resolved' && finishRenderList) &&  (<>
                   <Ul> 
                        {finishRenderList.map(({ id, webformatURL, tags, largeImageURL } ) => (
                            <ImageGalleryItem
                                key={id}
                                webformatURL={webformatURL}
                                tags={tags}
                                largeImageURL={largeImageURL}
                            />
                        ))} 
                    </Ul >  
                    <Button onClick={this.onLoadMore} />
                    </>
                )     
            }
            </>
            );
    };
    };



ImageGallery.propTypes = {
    reciveSetPIcture: PropTypes.objectOf(PropTypes.object)
    
};
