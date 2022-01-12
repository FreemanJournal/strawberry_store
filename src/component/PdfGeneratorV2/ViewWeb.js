import React from 'react'

export default function ViewWeb({ poem }) {
   
    return (
        <>
            <section className='poemSection' >
                <h1>{poem?.title}</h1>
                <h3>{poem?.poet.name}</h3>
                <img src="https://picsum.photos/600/300" alt="" />
                <p>{poem?.content}</p>
            </section>

        </>
    )
}
