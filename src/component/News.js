import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

    static defaultProps = {
        category: 'general',
        country: 'in'
    }

    static propTypes = {
        category: PropTypes.string,
        country: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.state = {
            articles: this.articles,
            page: 1,
            loading: true,
            totalResults: 0
        }

        document.title = `NewsMonkey - ${this.props.category}`;
    }

    articles = []

    

    fetchMoreData = async()=>{
        this.setState({
            page: this.state.page + 1
        })

        const url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=15`;
        
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            loading: false,
            totalResults: parsedData.totalResults
        })
    }

    async componentDidMount() {
        
        const url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=15`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        
        let parsedData = await data.json();
        
        this.setState({
            articles: parsedData.articles,
            page: this.state.page,
            loading: false,
            totalResults: parsedData.totalResults
        })
        
    }

    render() {
        return (
            <div >
                <div className='container head'>
                    <h1>NewsMonkey - Top {this.props.category} headlines</h1>
                </div>

                {this.state.loading ? <Spinner /> : ""}


                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={this.state.articles.length >= this.state.totalResults?"":<Spinner/>}
                    scrollableTarget="scrollableDiv"
                >
                    <div className='parent container'>
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="element" key={element.url}>
                                <NewsItem title={element.title ? element.title.split(0, 40) : ""} description={element.description ? element.description.split(0, 40) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>

            </div>
        )
    }
}

export default News
