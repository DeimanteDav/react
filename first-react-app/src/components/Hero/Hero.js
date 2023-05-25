import LargeButton from '../Partials/LargeButton/LargeButton'
import woman from './woman.png'

const Hero = (props) => {
    let button = props.buttonTitle && <LargeButton text={props.buttonTitle} link={props.buttonLink}></LargeButton>

  return (
    <div className="main">
        <div className="content">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {button}
            <svg className="ellipse-svg" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="42" cy="42" r="42" fill="url(#paint0_linear_1_215)"/>
                <defs>
                <linearGradient id="paint0_linear_1_215" x1="126.5" y1="-239" x2="19" y2="93.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EF8031"/>
                <stop offset="0.692955" stopColor="#EF8031" stopOpacity="0.307045"/>
                <stop offset="1" stopColor="#EF8031" stopOpacity="0"/>
                </linearGradient>
                </defs>
                </svg>
        </div>
        <div className="woman-svg">
            <svg className="ellipse-svg" width="185" height="185" viewBox="0 0 185 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="92.5471" cy="92.5471" r="91.9069" transform="rotate(-150 92.5471 92.5471)" fill="url(#paint0_linear_1_358)"/>
                <defs>
                <linearGradient id="paint0_linear_1_358" x1="277.455" y1="-522.354" x2="42.2172" y2="205.242" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EF8031" stopOpacity="0"/>
                <stop offset="0.692955" stopColor="#EF8031" stopOpacity="0.15"/>
                <stop offset="1" stopColor="#EF8031" stopOpacity="0"/>
                </linearGradient>
                </defs>
                </svg>
            <img src={woman} alt='woman svg'></img>
        </div>
        </div>  
  )
}

export default Hero

