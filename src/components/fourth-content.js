import React from 'react'
import '../assets/scss/fourthcontent.scss'

export default function fourthContent(){
    return(
        <div>
            <div className="section-content">
                <div className="content image-container">
                    <img className="image" src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-1-img.png" alt='' />
                </div>
                <div className="content content-container">
                    <h3>A Digital Agency That Helps You Succeed.</h3>
                    <p>Quisque ac dolor nec nisl pellentesque ulla ve stibu de sed per ultric mi mori.</p>
                    <button>
                        <span className="btn-text">READ MORE</span>
                    </button>
                </div>
            </div>
        </div>
    )
}