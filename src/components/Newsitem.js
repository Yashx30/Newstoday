// import { getByTitle } from '@testing-library/dom'
import React, { Component } from 'react'

export class Newsitem extends Component {
  
    render() {
        let {title,description,imageUrl,newsUrl,author,date}=this.props
        return (
            <div className="my-3">
                <div className="card" style={{width: "18"}}>
                    <img src={!imageUrl?"https://images.livemint.com/img/2021/10/19/600x338/stock-kItE--621x414@LiveMint_1634615351112.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className ="card-body">
                    <h5 className ="card-title">{title}...</h5>
                    <p className ="card-text">{description}</p>
                    <p className="card-text"><small class="text-muted">By {!author?"Unknown":author} and {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" className ="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Newsitem
