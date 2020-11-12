import React from 'react';
import Form_ from './form'
import useFetch from '../../hooks/usefetch'
// check if the data of the fetch hook its ok and send data of this request to the Form component
const ContainerForm = () => {
    const {data , loading, error} = useFetch('https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json')
    if (error){
        return(
            <div>Error</div>
        )
    }
    if (loading){
        return(
            <div>Loading</div>
        )
    }
    if (data){
        // send data to form component of the departments and cities
        return(
            <Form_ data={data}/>
        )
    }  
}

export default ContainerForm