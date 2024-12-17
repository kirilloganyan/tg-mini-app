import {useQuery} from "react-query";
import axios from "axios";

export function getUsers() {
    useQuery({
        queryKey: ['users'],
        queryFn: () => {return axios.get('http://91.197.98.228:8080/api/user', {
            headers: { 'Content-Type': 'application/json' },
        });},
    });

}
