import React from 'react'
import classData from "../class.json"

const Homepage = () => {
    console.log(classData);

    const scrollToTop=()=>{
        window.scrollTo({
            top:0
        })
    }
    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-md-12 bg-light" style={{backgroundImage:"linear-Gradient(to right,blue,purple)",color:"wheat"}}>
                    <div className="p-5">
                        <h3>Title</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, eius!</p>
                        <button className='btn btn-outline-secondary'>Read More</button>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 mb-4">
                        <h3>Classes</h3>
                    </div>
                    {
                        classData && classData?.map((el) => {
                            return <div key={el.ID} className="col-md-4 mb-4">
                                <div className="card">
                                    <img src={el.ImageUrl} alt="" />
                                    <div className="card-body text-start">
                                        <h3>{el.Name}</h3>
                                        <p>{el.ShortDesc.substring(0,150)}..</p>
                                        <button className='btn btn-outline-secondary'>View</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>

            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>Copyright © 2021. All right reserved </p>
                    </div>
                    <div className="col-md-6">
                        <a href="" style={{textDecoration:"none"}} onClick={scrollToTop}>Back to Top</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
