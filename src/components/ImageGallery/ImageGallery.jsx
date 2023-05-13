import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { H1, Ul } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import {PixabayApi} from '../Services/PixabayApi';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import PropTypes from 'prop-types';


export  class ImageGallery extends Component {
    state = {
        searchSet: null,
        renderList:[],
        error: null,
        page: 1,
        status: 'idle',
       
    }
    
   async componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.searchQuery.search;
        const nextName = this.props.searchQuery.search;
        const prevPage = prevState.page;
        const nextPage = this.state.page;
       let reciveSetPIcture = null;
       
       
       
       if (prevName !== nextName || prevPage !== nextPage) {
           try {
            this.setState({status:'pending'});
             reciveSetPIcture = await PixabayApi(nextName, nextPage);
                if (reciveSetPIcture.hits.length === 0) {
                    toast.error(`there is no  query with  "${nextName}"`, {
                    position: "top-right",
                    autoClose: 2000,
                    theme: "colored",
                    });
                     this.setState({ status: 'reject', searchSet: [] }); 
                     return;
                 } 
                 this.setState({ status: 'resolved', searchSet: reciveSetPIcture.hits }) 
              this.setState(prevState => ({renderList:[...prevState.renderList, ...reciveSetPIcture.hits]}));
      
            } catch(error) {
                    toast.error(`"${error}" Something were wrong `, {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored",
                    });
            }
       }  
       
       if (prevName !== nextName && nextPage !== 1) {
           this.setState({ renderList: [], page: 1 });
       }
        }

    onLoadMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1  }));
     
    };
    
  
    render() {
        const { error, status, renderList } = this.state;
      
        if (status === 'idle') {
            return <div><H1>Please make a request and press enter </H1></div>;
        }

        if (status === 'pending') {
            return (
                <Loader />
            );
        }

        if (status === 'rejected') {
            return (<> <h1> {error.message}</h1>
           
            </> );
        }

        if (status === 'resolved') {
             return (
            <>
                {renderList &&
                    <Ul> 
                        {renderList.map(({ id, webformatURL, tags, largeImageURL } ) => (
                            <ImageGalleryItem
                                key={id}
                                webformatURL={webformatURL}
                                tags={tags}
                                largeImageURL={largeImageURL}
                            />
                        ))} 
                    </Ul >
                    }
                <Button onClick={this.onLoadMore} />
            </>       
            );
        }
    };
    };

ImageGallery.propTypes = {
     prevName: PropTypes.string  
    }