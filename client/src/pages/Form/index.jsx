import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, addActivity, getActivities, clearDetail } from "../../redux/actions";
import { StyledForm } from "./styles/Form.styled";
import validator from "../../utils/validator";
import InputButton from "../../components/InputButton";
import { StyledContainer } from "./styles/Container.styled";
import durationHelper from "../../utils/durationHelper";
import CustomSelect from "../../components/CustomSelect";

const Form = () => {
    const dispatch = useDispatch()
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

    const [errors, setErrors] = useState({activateSubmit : false}) //Se inicia con un valor para que el usuario no pueda tocar el botón al entrar a la página.
    const [flag, setFlag] = useState(false) //Es para que no se muestren los errores hasta que el usuario empieze a interactuar.
    
    /* Estados de input */
    const [input, setInput] = useState({
        activityName: '',
        difficulty: 0,
        duration: 0,
        seasons: [],
        countries: [],
    })
    const [time, setTime] = useState({ //Esto despues se pasa todo a minutos, que es la unidad de tiempo que cuenta input.duration
        days: 0,
        hours: 0,
        minutes: 0,
    })

    const clearCountries = () => {
        setInput({...input, countries: []})
        setErrors(validator(activityNames, {
                ...input,
                countries: []
            }))
    }
    
    //Dispara las actions que necesita cuando se monta el componente

    useEffect(() => {
        dispatch(clearDetail())
        dispatch(getCountries())
        dispatch(getActivities())
    }, [dispatch])

    //Setea la duración en minutos cada vez que se actualiza time

    useEffect(() => {
      setInput(i => ({...i, duration: durationHelper(time)}))
    }, [time])

    /* Setea los errores cada vez que se actualiza el input. Me pide que agregue activityNames al array, 
    pero se rompe cuando lo agrego y ademas no sería la intención. ¿Supongo que es un tema de buenas prácticas? */

    useEffect(() => {
        setErrors(validator(activityNames, {...input}))
    }, [input])
    

    /* Handler del nombre y dificultad. No permite que el usuario ingrese numeros menores a 0, decimales, o mayores a 5 en la dificultad. 
    O valores que no sean numeros, porque parseInt los convierte en NaN. */

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
        } else {
            setInput({
                ...input,
                [name]: value
            })
        }
    }

    /* Handler de los países y temporadas. */

    const handleChangeArrays = (e) => {
        setFlag(true)
        const {value, name} = e.target
        let arr = [...input[name]]
              if(arr.includes(value)) {
                  arr = [...arr.filter(x => x !== value)]
              } else arr.push(value)
              setInput({
                  ...input,
                  [name]: arr
              })
    }

    /* Handler de la duración. Para que se mantenga dentro de los valores que me interesany que las horas y los dias 
    se modifiquen a partir de las unidades mas pequeñas de forma correcta, tuve que usar condiciones varias veces. 
    No permite que el usuario ingrese decimales, caracteres especiales, numeros menores a 0 o letras.*/

    const handleDuration = (e) => {
        setFlag(true)
        const {name, value} = e.target
        const parsedValue = parseInt(value)
        const oneYearMax = parsedValue > 365 ? 365 : parsedValue
        const usefulValue = oneYearMax <= 0 ? 0 : oneYearMax
        switch (name) {
          case "days":
              setTime({...time, [name]: usefulValue})
              break;
          case "hours": 
              setTime({...time, days: (time.days ? time.days : 0) + (isNaN(usefulValue) ? 0 : Math.floor(usefulValue/24)), [name]: usefulValue % 24})
              break;
          case "minutes":
              const hours = (time.hours ? time.hours : 0) + (isNaN(usefulValue) ? 0 : Math.floor(usefulValue/60))
              const days = (time.days ? time.days : 0) + Math.floor(hours/24)
              setTime({...time, days: days, hours: hours % 24, [name]: usefulValue % 60})
              break;
          default:
              break;
        }
    }
    /* Handler del submit. Previene el submit si hay errores, si no despacha la accion, limpia el input, setea el flag en falso y tira una alerta de éxito.
    Tambien debería manejar los errores que pueden llegar a venir de la acción, pero cuando intenté hacer eso no pude y no volví a intentar.*/
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.values(errors).length) {
            alert("There is an error in the provided data")
        } else {
            dispatch(addActivity(input))
            setInput({
                activityName: '',
                difficulty: 0,
                duration: 0,
                seasons: [],
                countries: [],
            })
            setTime({
                days: 0,
                hours: 0,
                minutes: 0
            })
            setFlag(false)
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
                        <input className="textInput"type="text" value={input.activityName} name="activityName" onChange={handleChange}/>
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