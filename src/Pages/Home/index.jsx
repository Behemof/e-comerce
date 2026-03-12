import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home (){
    const [items, setItems] = useState([]);
    useEffect (()=> {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(datos => setItems(datos))
    },[])
    return(

        <Layout>
            Home
            <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">

                {items?.map(item=> ( <Card key={item.id} data={item} />))}
            

            </div>
            
        </Layout>
    )
}

export default Home;