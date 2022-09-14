import React, {useState} from 'react'
import InputButton from './InputButton';
import { StyledDropdown } from './styles/Dropdown.styled';

function Dropdown({placeholder, data, onClick, name, input}) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState("")

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === "") {
      setFilteredData([])
    } else setFilteredData(newFilter)
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }
  return (
    <StyledDropdown>
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
      </div>
      { filteredData.length !== 0 &&
        <div className="dataResult">
        {filteredData.slice(0, 15).map((value, key) => {
          return <InputButton key={key} className={`dataItem ${input.includes(value) && "clicked"}`} name={name} value={value} onClick={onClick}/>
        })}
      </div>
      }
    </StyledDropdown>
  )
}

export default Dropdown