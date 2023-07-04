import { useEffect, useState } from "react";

const DATA = () => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        fetchData();
    },[])

    const fetchData = () =>{
        fetch("http://localhost:5500/data").then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })
    }
    return (<div>
        {
            data.map(({username,phone,password,email_id})=><div>
                <div></div>
                <button>submit</button>
                </div>
                )
        }
    </div>)
}
export default DATA;