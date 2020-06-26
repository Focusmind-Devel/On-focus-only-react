import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/CoursePlus.scss';

import Perfil from '../../assets/static/images/svg/perfil.svg';
import Reloj from '../../assets/static/images/svg/reloj.svg';
import Media from '../../assets/static/images/svg/media.svg';
import Check from '../../assets/static/images/svg/check.svg';
import Calendary from '../../assets/static/images/svg/calendary.svg';


const CourseInfoOnlyInfo = (props) => (
 <div className={"course__information" + " " + props.onlyDesktop}>

        <div className={"flex" + " " + props.onlyMobile}>

            <div className={"flex" + " " + props.margin}>
                <img className={props.logoMobile} src={Perfil} alt="perfil"/>
                <p className={props.width ? 'course__information__students--fix' :"course__information__students"}>150 alumnos.</p>
            </div>
            <div className={"flex" + " " + props.margin}>
                <img className={props.logoMobile} src={Reloj} alt="perfil"/>
                <p className={"course__information__text" + " " + props.width}>Duración del curso: 1 hora, 30 minutos. </p>
            </div>
            <div className={"flex" + " " + props.margin}>
                <img className={props.logoMobile} src={Media} alt="perfil"/>
                <p className={"course__information__text" + " " + props.width}>Cantidad de módulos: 6.</p>
            </div>
            
        </div>
        <div className={"flex" + " " + props.onlyMobile}>
            <div className={"flex" + " " + props.margin}>
                <img className={props.logoMobile} src={Check} alt="perfil"/>
                <p className={"course__information__text" + " " + props.width}>Empezás y terminás cuando querés.</p>
            </div>
            <div className={"flex" + " " + props.margin}>
                <img className={props.logoMobile} src={Calendary} alt="perfil"/>
                <p className={"course__information__text" + " " + props.width}>Hacelo las veces que quieras.</p>
            </div>
        </div>
    </div>
)
export default CourseInfoOnlyInfo;