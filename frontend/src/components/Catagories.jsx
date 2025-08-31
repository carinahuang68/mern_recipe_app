import {useState} from 'react';

export default function Catagories({catagories, selectCatagory}) {
    const [selects, setSelects] = useState(catagories.map((_, i) => i === 0));
    const handleSelect = (catagory, idx) => {
        setSelects(selects.map((_, i) => i === idx));
        selectCatagory(catagory);
    }
    
    return (
        <div className="d-flex flex-row gap-3 flex-wrap justify-content-center">
            {catagories.map((catagory, i) => (
                <button key={i}
                    className="catagory-btn rounded-pill" 
                    onClick={() => handleSelect(catagory, i)}
                    style={selects[i] ? {backgroundColor: 'var(--primary-color)', color: 'white'} : {}}
                    >{catagory}</button>
            ))}
        </div>
    )
}