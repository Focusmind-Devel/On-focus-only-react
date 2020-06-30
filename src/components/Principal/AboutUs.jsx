import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/AboutUs.scss';

import Teacher from './Teachers/Teacher'
import Arrows from './Teachers/Arrows'

const AboutUs = () => {
  
  const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.'

  const [ValueX,setX] = useState(0)
  
  const goRight = () =>{
    ValueX === 0 ? setX(-100* (sliderArr.length - 3)) : setX(ValueX+100);
    // setX(ValueX - 100)
  }
  
  const goLeft = () =>{
    ValueX === -100 * (sliderArr.length - 3) ? setX(0) : setX(ValueX-100)
    // setX(ValueX + 100)
  }
  
  let sliderArr = [
    <Teacher name={"Jose"}   text={text} profession={'Emprendedor'} ValueX={ValueX}/>,
    <Teacher name={"Maria"}  text={text} profession={'Profesora'} ValueX={ValueX}/>,
    <Teacher name={"Juan"}   text={text} profession={'Desarrollador'} ValueX={ValueX}/>,
    <Teacher name={"Pedro"}  text={text} profession={'Técnico'} ValueX={ValueX}/>,
    <Teacher name={"Camilo"} text={text} profession={'Físico'} ValueX={ValueX}/>
  ]

  // https://www.youtube.com/watch?v=Tdpq-9XYoNM
    return(
  
      <section className="about__us none-second">
      <h1 className="about__us__title">
        Ut wisi enim ad minim exerci tation ullamcorper.
      </h1>
      <div className="flex">
          <div className="slide">
            {sliderArr.map((item,index)=>{
              return(
                <div key={index} className="slider">
                {item}
                </div>
              )
            })}
            
          </div>
            <Arrows goRight={goRight} goLeft={goLeft}/>
        </div>
    </section>
    )}
export default AboutUs;