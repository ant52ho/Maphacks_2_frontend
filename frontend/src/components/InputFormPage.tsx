import * as React from 'react';
import { Component, useState, useEffect} from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function InputFormPage() {
    const [age, setAge] = useState<String>();
    const [name, setName] = useState<String>();
    const [desc, setDesc] = useState<String>();
    const [projectNames, setprojectNames] = useState<String>("comma seperated please");
    const [email, setemail] = useState<String>();
    const [tel, settel] = useState<String>();
    const [getMessage, setGetMessage] = useState({} as any)
    const navigate = useNavigate()

    const submitButton = () =>{
        alert(desc)

        const userData = {
            description: desc
        };

        //make api call
        //redirect to generated page

        axios.post('http://localhost:5000/flask/hello', userData).then(response => {
            console.log("POST SUCCESS", response)
            navigate('/home', {state : response.data, replace : false})
          }).catch(error => {
            console.log("ERROR")
          })
    }

    return (
        <div>
            <input 
            type="text" 
            name="name" 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            placeholder="Name" 
            value={name?.toString()}/>

            <br/>

            <input
            name="age"
            type="number"
            value={age?.toString()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value)} />

            <br/>

            <textarea name="desc"  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDesc(e.target.value)}>
                {desc}
            </textarea>

            <br/>

            <textarea name="project_name"  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setprojectNames(e.target.value)}>
                {projectNames}
            </textarea>

            <br/>

            <input
            name="email"
            value={email?.toString()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setemail(e.target.value)}
            type="email" />

            <br/>

            <input 
            type="tel" 
            name="phone" 
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
            value={tel?.toString()} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => settel(e.target.value)}/>     


            <button onClick={submitButton}>Submit Now</button>
        </div>
    )
}


export default InputFormPage;
