import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('servives.json')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setLoading(false)
        })
    })
    return [services, loading]
}