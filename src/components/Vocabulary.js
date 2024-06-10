import React from 'react'
import { Data } from './Data'

const Vocabulary = () => {

const vocabulary = Data.filter(e => e.skill === "vocabulary")


return (
    <div>
        <table>
            <tbody>
                <tr>
                    <td>TEMA</td>
                    <td>TIPO</td>
                    <td>DIFICULTAD</td>
                </tr>
                {vocabulary.map((e) => (
                <tr key={e}>
                    <td><a href={e.link}>{e.name}</a></td>
                    <td>{e.type}</td>
                    <td>{e.level}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default Vocabulary