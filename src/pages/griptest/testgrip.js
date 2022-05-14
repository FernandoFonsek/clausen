import { faCheck, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./testGrip.scss";

const GripTest = () => {
  return (
    <div className="container-box">
      <div className=" logo">
        <h3>ESPACIO PARA EL LOGO</h3>
      </div>
      <div className=" header-content">
        <div>
          <h3>Curso Virtual</h3>
          <p>lorem ipsum dolor sit amet</p>
          <p>lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className=" header-free">
        <div>
          <h2>ESPACIO LIBRE HEADER</h2>
        </div>
      </div>
      <div className="content">
        <div className="flex-content">
          <div className="content-info">
            <h3>
              Capacítate <span>gratis</span>
            </h3>
            <h3>Lorem ipsum</h3>
            <hr className="color-hr-check" />
            <h4>Incribete ahora</h4>
          </div>
          <div className="flex-content-check">
            <div className="flex-check">
              <FontAwesomeIcon className="icon" icon={faCheck} />
              <p>Lorem ipsum</p>
            </div>
            <div className="flex-check">
              <FontAwesomeIcon className="icon" icon={faCheck} />
              <p>Lorem ipsum</p>
            </div>
            <div className="flex-check">
              <FontAwesomeIcon className="icon" icon={faCheck} />
              <p>Lorem ipsum</p>
            </div>
            <div className="flex-check items">
              <p>Lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" form">
        <div className="flex-col">
          <div>
            <h4>
              ¡Inscribase <span className="color-Orange">GRATIS</span>
            </h4>
            <hr className="color-hr" />
            <hr className="accessory" />
          </div>
          <form className="container-form">
            <input type="text" placeholder="Nombre"></input>
            <input type="text" placeholder="Número de documento"></input>
            <input type="text" placeholder="Profesión"></input>
            <input type="text" placeholder="Entidad donde labora"></input>
            <input type="text" placeholder="Celular"></input>
            <input type="email" placeholder="Email"></input>
          </form>
          <button className="button-form">Enviar Inscripción</button>
        </div>
      </div>
      <div className="free-content">
        <FontAwesomeIcon icon={faGraduationCap} />
        <h2>Espacio libre para incluir contenido</h2>
      </div>
      <div className=" slider ">
        <div className="flx">
          <div>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              typesetting industry.
            </p>
          </div>
          <div>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
      <div className=" contact">
        <p>ESPACIO INFORMACION DE CONTACTO</p>
      </div>
      <div className="item publicity-footer">
        <p>ESPACIO LIBRE PARA INCLUIR FOOTER</p>
      </div>
      <div className="item footer">
        <p>
          Copyright&copy; 2008 - Página creada por Juanma - Todos los derechos
          reservados
        </p>
      </div>
    </div>
  );
};

export default GripTest;
