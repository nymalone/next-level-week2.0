import React from 'react';

import PageHeader from '../../components/PageHeader'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
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
            </main>
        </div>
    )
}

export default TeacherList;