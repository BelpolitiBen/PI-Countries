import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import { getCountries, addActivity, getActivities } from "../../redux/actions";
import { StyledForm } from "./styles/Form.styled";
import validator from "../../utils/validator";
import InputButton from "../../components/InputButton";
import { StyledContainer } from "./styles/Container.styled";
import Dropdown from "../../components/Dropdown";
import durationHelper from "../../utils/durationHelper";

const Form = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const activities = useSelector((state) => state?.activities)
    const countries = useSelector((state) => state?.allCountries)
    const countryNames = countries?.map(e => e.name)
    const [errors, setErrors] = useState({activateSubmit : false})
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
    })

    const [input, setInput] = useState({
        activityName: '',
        difficulty: 0,
        duration: 0,
        seasons: [],
        countries: [],
    })
    
    useEffect(() => {
      dispatch(getCountries())
      dispatch(getActivities())
    }, [dispatch])

    useEffect(() => {
      setInput({...input, duration: durationHelper(time)})
    }, [time])
    
    
    

    const handleChange = (e) => {
        const {value, name} = e.target
        if (name === "difficulty") {
            let difficulty = 0
            if (value > 5) difficulty = 5
            else if (value < 0) difficulty = 0
            else difficulty = parseInt(value)
            setInput({
                ...input,
                [name]: difficulty
            })
            setErrors(validator({
                ...input,
                [name]: difficulty
            }))
        } else {
            setInput({
                ...input,
                [name]: value
            })
            setErrors(validator({
                ...input,
                [name]: value
            }))
        }
        
    }
    const handleChangeArrays = (e) => {
        let arr = [...input[e.target.name]]
              if(arr.includes(e.target.value)) {
                  arr = [...arr.filter(x => x !== e.target.value)]
              } else arr.push(e.target.value)
              setInput({
                  ...input,
                  [e.target.name]: arr
              })
              setErrors(validator({...input, [e.target.name] : arr}))
    }
    const handleDuration = (e) => {
        const {name, value} = e.target
        const usefulValue = parseInt(value) < 0 ? 0 : parseInt(value)
        switch (name) {
          case "days":
              setTime({...time, [name]: usefulValue})
              break;
          case "hours": 
              setTime({...time, days: time.days + Math.floor(usefulValue/24), [name]: usefulValue % 24})
              break;
          case "minutes":
              const hours = time.hours + Math.floor(usefulValue/60)
              const days = time.days + Math.floor(hours/24)
              setTime({...time, days: days, hours: hours % 24, [name]: usefulValue % 60})
              break;
          default:
              break;
        }
        setErrors(validator({...input, duration: parseInt(value)}))
        console.log(value)
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.values(errors).length) {
            console.log(errors)
            alert("There is an error in the provided data")
        } else {
            dispatch(addActivity(input))
            alert("Activity added!")
            setInput({
                activityName: '',
                difficulty: 1,
                duration: 1,
                seasons: [],
                countries: [],
            })
            history.push("/home")
        }
    }
    

    return (
        <StyledForm>
            <h1>Add a touristic activity!</h1>
            <form onSubmit={handleSubmit}>
                <StyledContainer>
                    <div className="input">
                        <label >Name </label>
                        <input className="textInput"type="text" name="activityName" onChange={handleChange}/>
                        {errors.activityName && (<p className="error activityName">{errors.activityName}</p>)}
                    </div>
                    <div className="input">
                        <label >Difficulty </label>
                        <input className="numberInput"type="number" value={input.difficulty} name="difficulty" onChange={handleChange}/>
                        <p className={`error difficulty ${errors.difficulty && "visible"}`}>Difficulty rating required</p>
                    </div>
                    <div className="input">
                        <label >Duration (Hs) </label>
                        <div className="duration">
                          <input className="numberInput"type="number" value={time.days} name="days" onChange={handleDuration}/>
                          <label >D</label>
                          <input className="numberInput"type="number" value={time.hours} name="hours" onChange={handleDuration}/>
                          <label >H</label>
                          <input className="numberInput"type="number" value={time.minutes} name="minutes" onChange={handleDuration}/>
                          <label >M</label>
                        </div>
                        {errors.duration && (<p className="error duration">{errors.duration}</p>)}
                    </div>
                    <div className="input">
                      <label>Countries</label>
                      <Dropdown placeholder="Enter country name..." input={input.countries} name="countries" data={countryNames} onClick={handleChangeArrays}/>
                      {errors.countries && (<p className="error countries">{errors.countries}</p>)}
                    </div>
                </StyledContainer>
                <ul>
                    <li className="seasons">
                      <InputButton className={input.seasons.includes("Winter") && "clicked"} name="seasons" value="Winter" onClick={handleChangeArrays} />
                      <InputButton className={input.seasons.includes("Spring") && "clicked"} name="seasons" value="Spring" onClick={handleChangeArrays} />
                      <InputButton className={input.seasons.includes("Summer") && "clicked"} name="seasons" value="Summer" onClick={handleChangeArrays} />
                      <InputButton className={input.seasons.includes("Fall") && "clicked"} name="seasons" value="Fall" onClick={handleChangeArrays} />
                    </li>     
                      {errors.seasons && (<p className="error seasons">{errors.seasons}</p>)}
                </ul>
                <button type="submit" onClick={handleSubmit}>Add Activity</button>
            </form>
            {input.countries.length > 0 && 
                <div className="selected">
                    <h2>Countries selected:</h2>
                    {input.countries.map((c, key) => <p>{c}</p>)}
                </div> 
            }
        </StyledForm>
    );
}; 

export default Form;