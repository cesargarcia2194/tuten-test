import {useState, useEffect} from 'react'
import { getData } from '../services/apiServices';

export const useFetchData = ({
        adminemail,
        email,
        current,
        tkn,
        app
    }) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })
    
    useEffect(() => {
        const fetchData = async ( ) => {
            const res = await getData({adminemail,email, current, tkn, app})
            const data = res.map((el, i) =>{
                const {tutenUserClient:{firstName, lastName}} = el;
                const {locationId:{streetAddress}} = el;
                return {
                    id: i+1,
                    bookingId: el.bookingId,
                    client: firstName + ' '+ lastName,
                    createDate: el.bookingTime,
                    direction: streetAddress,
                    price: el.bookingPrice
                }
            })
            setState({
                data,
                loading: false
            })
        }
        fetchData(); 
        
    }, [setState, adminemail,email, current, tkn, app]);

    return state
}
