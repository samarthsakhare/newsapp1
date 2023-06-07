import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        let { title, imageUrl, newsUrl, description, author, publishedAt, source } = this.props;

        return (
            <div>
                <div className="card" style={{ width: "18rem"}}>
                    <img src={imageUrl?imageUrl:"https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} className="card-img-top" alt="404" style={{height:'200px'}}/>
                    <span className="badge text-bg-danger badge">{source.name}</span>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">Author: {author?author:"Unknown"}</p>
                        <p className="card-text">Published At: {publishedAt}</p>
                        <a href={newsUrl} target='_blank'rel='noreferrer' className="btn btn-primary">read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
