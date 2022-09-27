import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import { getCountries, addActivity, getActivities, clearDetail } from "../../redux/actions";
import { StyledForm } from "./styles/Form.styled";
import validator from "../../utils/validator";
import InputButton from "../../components/InputButton";
import { StyledContainer } from "./styles/Container.styled";
import durationHelper from "../../utils/durationHelper";
import CustomSelect from "../../components/CustomSelect";

const Form = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const countries = useSelector((state) => state?.allCountries)
    const activities = useSelector((state) => state?.activities)
    const activityNames = activities?.map(e => e.activityName)
    const countryNames = countries?.map(e => e.name)
    const sortedCountryNames = countryNames?.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });
    const [errors, setErrors] = useState({activateSubmit : false})
    const [flag, setFlag] = useState(false)
    
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

    const clearCountries = () => {
        setInput({...input, countries: []})
        setErrors(validator(activityNames, {
                ...input,
                countries: []
            }))
    }
    
    useEffect(() => {
        dispatch(clearDetail())
        dispatch(getCountries())
        dispatch(getActivities())
    }, [dispatch])

    useEffect(() => {
      setInput({...input, duration: durationHelper(time)})
    }, [time])

    useEffect(() => {
        setErrors(validator(activityNames, {...input}))
    }, [input])
    

    const handleChange = (e) => {
        setFlag(true)
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
            /* setErrors(validator(activityNames, {
                ...input,
                [name]: difficulty
            })) */
        } else {
            setInput({
                ...input,
                [name]: value
            })
            /* setErrors(validator(activityNames, {
                ...input,
                [name]: value
            })) */
        }
    }

    const handleChangeArrays = (e) => {
        setFlag(true)
        let arr = [...input[e.target.name]]
              if(arr.includes(e.target.value)) {
                  arr = [...arr.filter(x => x !== e.target.value)]
              } else arr.push(e.target.value)
              setInput({
                  ...input,
                  [e.target.name]: arr
              })
              /* setErrors(validator(activityNames, {...input, [e.target.name] : arr})) */
    }

    const handleDuration = (e) => {
        setFlag(true)
        const {name, value} = e.target
        const parsedValue = parseInt(value)
        const usefulValue = parsedValue <= 0 || isNaN(parsedValue) ? 0 : parsedValue
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
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.values(errors).length) {
            console.log(errors)
            alert("There is an error in the provided data")
        } else {
            dispatch(addActivity(input))
            setInput({
                activityName: '',
                difficulty: 1,
                duration: 1,
                seasons: [],
                countries: [],
            })
            history.push("/home")
            alert("Activity added!")
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
                        {errors.activityName && flag ? (<p className="error activityName">{errors.activityName}</p>) : <></>}
                    </div>
                    <div className="input">
                        <label >Difficulty </label>
                        <input className="numberInput"type="number" value={input.difficulty} name="difficulty" onChange={handleChange}/>
                        <p className={`error difficulty ${errors.difficulty && flag ? "visible" : ""}`}>Difficulty rating required</p>
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
                        {errors.duration && flag ? (<p className="error duration">{errors.duration}</p>) : <></>}
                    </div>
                    <div className="input">
                      <label>Countries</label>
                      <CustomSelect clear={clearCountries} placeholder="Select countries" values={input.countries} name="countries" options={sortedCountryNames} onClick={handleChangeArrays}/>
                      {errors.countries && flag ? (<p className="error countries">{errors.countries}</p>) : <></>}
                    </div>
                </StyledContainer>
                <ul>
                    <li className="seasons">
                      <InputButton className={input.seasons.includes("Winter") && "clicked"} name="seasons" value="Winter" onClick={handleChangeArrays} />
                      <InputButton className={input.seasons.includes("Spring") && "clicked"} name="seasons" value="Spring" onClick={handleChangeArrays} />
                      <InputButton className={input.seasons.includes("Summer") && "clicked"} name="seasons" value="Summer" onClick={handleChangeArrays} />
                      <InputButton className={input.seasons.includes("Fall") && "clicked"} name="seasons" value="Fall" onClick={handleChangeArrays} />
                    </li>     
                      {errors.seasons && flag ? (<p className="error seasons">{errors.seasons}</p>) : <></>}
                </ul>
                <button type="submit" className="submit" onClick={handleSubmit}>Add Activity</button>
            </form>
            {input.countries.length > 0 && 
                <div id="selectedCountries">
                    <h2>Countries selected:</h2>
                    {input.countries.map((c, key) => <p>{c}</p>)}
                </div> 
            }
        </StyledForm>
    );
}; 

export default Form;