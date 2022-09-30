import { useState } from 'react'
import { StyledCustomSelect } from './styles/CustomSelect.styled'

function CustomSelect({options, placeholder, values, onClick, name, clear}) {
    const [open, setOpen] = useState(false)
    const clicked = (o) => {
        return values?.includes(o)
    }

    return (
        <StyledCustomSelect onClick={() => setOpen(prev => !prev)}tabIndex={0}>
            <span className='values'>{values?.length <= 2 ? values.map(v => (
                <button type='button' key={v} className="optionButton" value={v} name={name} onClick={onClick}>{v} &times;</button>
            )) :<>
                    <button type='button' className="optionButton" value={values[0]} name={name} onClick={onClick}>{values[0]} &times;</button>
                    <button type='button' className="optionButton" value={values[1]} name={name} onClick={onClick}>{values[1]} &times;</button>
                    <button type='button' className="optionButton">+{values.length - 2}</button>
                </>
            }
            {values?.length === 0 && <p className='placeholder'>{placeholder}</p>}
            </span>
            <button type='button' onClick={e => {
                e.stopPropagation()
                clear(name)
            }}className='clearBtn'>&times;</button>
            <div className='divider'></div>
            <div className='caret'></div>
            <ul className={`options ${open ? "show" : ""}`}>
                {options?.map((option, key) => (
                    <button type='button' className={`option ${clicked(option) ? "selected" : ""}`} value={option} name={name} onClick={onClick}
                    key={`${key}${option}`}>{option}</button>
                ))}
            </ul>
        </StyledCustomSelect>
    )
}

export default CustomSelect