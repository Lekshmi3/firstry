import React, { Component } from 'react';

import Assets from './Images/Assets';

class Blog extends Component {

    render() {
        return (
            <div className="container mt-5">
                <h3>Image Gallery</h3>
                
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={Assets.images} alt="Picture 1" className="card-img-top" style={{ height: '250px' }} />
                            <div className="card-body">
                                <p className="card-text">Picture 1</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <br/><br/><br/>
                        <div className="card">
                            <img src={Assets.images2} alt="Picture 2" className="card-img-top" style={{ height: '250px' }} />
                            <div className="card-body">
                                <p className="card-text">Picture 2</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={Assets.images1} alt="Picture 3" className="card-img-top" style={{ height: '250px' }} />
                            <div className="card-body">
                                <p className="card-text">Picture 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Blog;