import * as React from 'react';
import axios from 'axios';
import Card from '../Card'
import { API_URL } from '../../constants/blog'

export default function Blog(props) {
    const [db, setdb] = React.useState();
    React.useEffect(() => {
        axios.get(API_URL).then((response) => {
            setdb(response.data);
        })
    }, []);
    //db : pk, title, date, author, content
    console.log(db);
    if(!db) return null;

    function dateConverter(raw){
        let dateObj = new Date(raw)
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        return dateObj.toLocaleDateString('en-GB', options);
    }
    return (
        <div className="w-100 d-flex flex-column align-items-center">
            <div className="main-body">
                <div class="alert alert-primary container-sm w-100" role="alert">
                    <img src="emoji_moyai.png" className="bi flex-shrink-0 me-2 emoji" alt="moyai emoji"/>
                    This blog section is under construction (currently working on the backend).
                </div>
                {db.map((element) => (
                <Card customStyle="mb-4">
                    <h1 className="card-title">{element.title}</h1>
                    <h6 
                        className="card-text"
                        style={{
                            fontSize:"0.75rem"
                        }}
                    >
                        {`${dateConverter(element.date)}`}
                    </h6>
                    <hr class="solid" />
                    {element.content}
                </Card>
            ))}
            </div>
            
        </div>
    );
}