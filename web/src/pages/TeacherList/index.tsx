import React from 'react';

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select
                        name="name"
                        label="Matéria"
                        options={[
                            { value: "Artes", label: "Artes" },
                            { value: "Biologia", label: "Biologia" },
                            { value: "Geografia", label: "Geografia" },
                            { value: "Matematica", label: "Matematica" },
                            { value: "Ingles", label: "Ingles" },
                            { value: "Historia", label: "Historia" },
                            { value: "Fisica", label: "Fisica" },
                            { value: "Portugues", label: "Portugues" },
                            { value: "Quimica", label: "Quimica" },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        options={[
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda" },
                            { value: "2", label: "Terça" },
                            { value: "3", label: "Quarta" },
                            { value: "4", label: "Quinta" },
                            { value: "5", label: "Sexta" },
                            { value: "6", label: "Sábado" },
                        ]}
                    />

                    <Input name="time" type="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;