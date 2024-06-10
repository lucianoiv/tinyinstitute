import React from 'react'
import { Data } from './Data'


export const Grammar = () => {

    const grammar = Data.filter(e => e.skill === "grammar")

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>TEMA</td>
                        <td>TIPO</td>
                        <td>DIFICULTAD</td>
                    </tr>
                    {grammar.map((e) => (
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

export default Grammar
