import React,{Component} from 'react';
import {connect} from 'react-redux';
import {latestNews,articleNews,galleryNews} from '../actions';

import ArticleNews from '../components/Home/ArticleNews';
import GalleryNews from '../components/Home/GalleryNews';
import LatestNews from '../components/Home/LatestNews';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.dispatch(latestNews());
        this.props.dispatch(articleNews());
        this.props.dispatch(galleryNews());
    }
    render(){
        return(
            <div>
                <LatestNews latestData={this.props.articledata.latest}/>
                <ArticleNews articleNews={this.props.articledata.article}/>
                <GalleryNews galData={this.props.gallerydata.galdata}/>
            </div>
        )
    }
};
function mapStateToProps(state){
    return{
        articledata:state.articles,
        gallerydata:state.gallery

    }
}
Home.protoType = {
    dispatch:PropTypes.func
}
export default connect(mapStateToProps)(Home);