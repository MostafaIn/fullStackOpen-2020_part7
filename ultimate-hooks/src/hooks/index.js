import { useState, useEffect } from 'react'
import axios from 'axios'

export const useField = (type) => {
    const [value, setValue] = useState('')
  
    const onChange = (event) => {
      setValue(event.target.value)
    }
  
    return {
      type,
      value,
      onChange
    }
}
  
export const useResource = (baseUrl) => {
    const [resources, setResources] = useState([])
  
    useEffect(() => {
        async function asyncCall(){
            const req = await axios.get(baseUrl)
            return setResources(resources => resources.concat(req.data)) 
        }
        asyncCall()
    },[baseUrl])
  
    const create = async(resource) => {
      const res = await axios.post(baseUrl, resource)
      return setResources(resources => resources.concat(res.data))
    }
  
    const service = {
      create
    }
  
    return [
      resources, service
    ]
}