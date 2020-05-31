import React from 'react'
import {ProgressBar}  from './ProgressBar'
import './FifthPage.scss'

export default function FifthPage() {
    
        return(
            <div id="fifthpage">
                <div id="fifthmid">
                    <div id="fifthleft" >
                        <h3>Creative App Display</h3>
                        <h5>
                            <span>Information Architecture</span>
                            <ProgressBar
                                percentage="53"
                                color="rgb(123, 185, 255)"
                            />
                            <div className="progressDiv"><span/></div>
                            <span>App Development</span>
                            <ProgressBar
                                percentage="97"
                                color="rgb(85, 128, 255)"
                            />
                            <div className="progressDiv"><span/></div>
                            <span>User Interface</span>
                            <ProgressBar
                                percentage="92"
                                color="#ff8a73"
                            />
                        </h5>
                        
                    </div>
                    <div id="fifthright">
                        <img width="100%" src="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-img-2-1.png" className="vc_single_image-img attachment-full" alt="j" srcSet="https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-img-2-1.png 926w, https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-img-2-1-300x219.png 300w, https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-img-2-1-768x561.png 768w, https://foton.qodeinteractive.com/wp-content/uploads/2018/06/home-img-2-1-600x438.png 600w" sizes="(max-width: 926px) 100vw, 926px" />
                    </div>
                </div>
            </div>
            
        )
    


}


