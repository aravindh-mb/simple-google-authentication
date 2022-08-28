import React,{ useState , useEffect} from 'react'
import { Button ,Badge,Card,CardSubtitle,CardLink,CardText,CardBody,CardTitle,CardImg} from 'reactstrap';
// import './App.css'
import axios from 'axios'
import '../src/styles/Shop.scss'
function Shop() {

const[item,setItem] =  useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(response=> response.data)
           .then((data)=> {
               setItem(data)
               console.log(item)
            });
        
    })

  return (
   <React.Fragment>
    <div className="container ">     
    
{
  item.map((item,index)=>(
    
            <Card 
        style={{
            width: '18rem',
        }}
            >
        <img
            alt="Sample"
            src={`https://picsum.photos/200/300`}
        />
        <CardBody>
            <CardTitle tag="h5">
            {item.title}
            </CardTitle>
        
            <CardText>
            {item.body}
            </CardText>

        </CardBody>
        </Card> 
       
  ))
    }
    </div>
   </React.Fragment>
);
}

export default Shop;
