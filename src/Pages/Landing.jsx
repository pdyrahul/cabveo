import React from 'react'
import Button from '../Components/Button'
import Logo from "../assets/Logo.png"
import Car from "../assets/car.png"
const Landing = () => {
    return (
        <main>
            <div className='container'>
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="leftLanding">
                            <div className='logo'>
                                <img src={Logo} alt='Logo' />
                            </div>
                            <div className="landingButtons">
                                <Button label="Admin Login" backgroundColor="#FE9E12" color="#fff" />
                                <Button label="Sub admin login" backgroundColor="#fff" color="#FE9E12" />
                            </div>
                            <div className="bottomText">
                                <p>Move with</p>
                                <p><span>safely</span> to your destination</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-12">
                        <div className="carImage my-auto">
                            <img src={Car} alt="" />
                        </div>
                    </div>
                </div>

            </div >
        </main>
    )
}

export default Landing