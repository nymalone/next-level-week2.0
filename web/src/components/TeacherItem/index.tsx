import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (

        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/54912285?s=460&u=137cc853fca83655d59fc8d2fb95dbf21a3d496d&v=4" alt="Nykolle Malone" />
                <div>
                    <strong>
                        Nykolle Malone
                </strong>
                    <span>Biologia</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, commodi excepturi.
        <br /> <br />
        Sapiente cum optio inventore nihil, obcaecati exercitationem ratione maiores at, magni quia error? Molestias nisi architecto eum provident nihil!
        </p>

            <footer>
                <p>Preço/hora
             <strong>R$ 100,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp icon" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem;