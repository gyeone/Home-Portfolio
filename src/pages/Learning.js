import '../styles/Learning.css';
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";



function Learning() {
    return(
        <>
        <div className='learning-develop'> 
            <h1><b>Develop Tech</b></h1>
                <div className='learning-develop-detail'>
                    <div className='learning-develop-detail-html' style={{position: 'relative'}}>
                        <CircularProgressBar
                            colorCircle="#dadada"
                            colorSlice="#E44D26"
                            percent={60}
                            fontColor="#050204"
                            round={true}
                            fontSize="15px"
                            textPosition="1.5rem">

                                <div className='html-detail'>
                                <img 
                                src={require('../assets/images/html.png')}
                                style={{width: "60px", position: "absolute", left: "70px", top: "50px"}}
                                alt='html'/>
                                </div>
                        </CircularProgressBar>
                    </div>
                    <div className='learning-develop-detail-css' style={{position: 'relative'}}>
                        <CircularProgressBar
                            colorCircle="#dadada"
                            colorSlice="#1572B6"
                            percent={35}
                            fontColor="#050204"
                            round={true}
                            fontSize="15px"
                            textPosition="1.5rem">

                            <div className='css-detail'>
                            <img src={require('../assets/images/css.png')}                                 
                                style={{width: "73px", position: "absolute", left: "65px", top: "43px" }}
                                alt='css'/>
                            </div>
                        </CircularProgressBar>
                    </div>
                   
                    <div className='learning-develop-detail-js' style={{position: 'relative'}}>
                        <CircularProgressBar
                            colorCircle="#dadada"
                            colorSlice="#E4A126"
                            percent={30}
                            fontColor="#050204"
                            round={true}
                            fontSize="15px"
                            textPosition="1.5rem">


                            <div className='js-detail'>
                            <img 
                            src={require('../assets/images/js.png')} 
                            alt='js'
                            style={{width: "113px", position: "absolute", left: "43px", top: "43px" }}/>
                            </div> 
                        </CircularProgressBar>
                    </div>

                    <div className='learning-develop-detail-react' style={{position: 'relative'}}>
                        <CircularProgressBar
                            colorCircle="#dadada"
                            colorSlice="#61DAFB"
                            percent={60}
                            fontColor="#050204"
                            round={true}
                            fontSize="15px"
                            textPosition="1.5rem">

                            <div className='react-detail'>
                            <img src={require('../assets/images/react.png')}
                                style={{width: "60px", position: "absolute", left: "70px", top: "45px"}} 
                                alt='react'/>
                            </div>
                        </CircularProgressBar>
                    </div>

                </div>
        </div>

        <div className='learning-design'>
        <h1><b>Design Tech</b></h1>
                <div className='learning-develop-detail'>
                <div className='learning-develop-detail-figma' style={{position: 'relative'}}>
                        <CircularProgressBar
                            colorCircle="#dadada"
                            colorSlice="#A259FF"
                            percent={1}
                            fontColor="#050204"
                            round={true}
                            fontSize="15px"
                            textPosition="1.5rem">

                            <div className='figma-detail'>
                                <img src={require('../assets/images/figma.png')}
                                 style={{width: "90px", position: "absolute", left: "57px", top: "70px"}}
                                 alt='figma' />
                                 
                            </div>
                        </CircularProgressBar>
                    </div>
                </div>
        </div>
        </>
    ) 

}
export default Learning;