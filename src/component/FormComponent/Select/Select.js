import React, { useState } from 'react'
import './select.css'

export default function Select() {
    const [active, SetActive] = useState(false)
    const [selectedTitle, setSelectedTitle] = useState('Select Video Category')
    const categories = [
        { id: 'automobiles', title: 'Automobiles' },
        { id: 'music', title: 'Music' },
        { id: 'travel', title: 'Travel & Events' },
        { id: 'art', title: 'Art' },
        { id: 'food', title: 'Food' },
        { id: 'tutorial', title: 'Tutorials' },
        { id: 'news', title: 'News & Politics' },
        { id: 'sports', title: 'Sports' },
        { id: 'romantic', title: 'Romantic' },
    ]

    const onCLickHandler = (id, title) => {
        console.log(id,title);
        setSelectedTitle(title)
        SetActive(false)
    }
    return (
        <>
            <section className="container">
                
                <div
                    className="select_box"
                    onMouseEnter={() => SetActive(true)}
                    onMouseLeave={() => SetActive(false)}
                >
                    <div className={`option_container ${active ? 'active' : ''}`}>
                        {categories.map(({ id, title }, index) => (
                            <div
                                className="option"
                                key={index}
                                onClick={() => onCLickHandler(id, title)}
                            >
                                <input type="radio" className="radio" id={id} name="category" />
                                <label htmlFor={id}>{title}</label>
                            </div>
                        ))}
                    </div>
                    <div className="selected">{selectedTitle}</div>
                </div>
            </section>
        </>
    )
}
