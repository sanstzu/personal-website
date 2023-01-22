import * as React from 'react'

export default function Card(props){
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    var bs_md = 768;

    React.useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(window.innerWidth)
          });
        
    },[])
    
    var img_html
    var img_class = "col-md-3 col-xl-2 col-xxl-2";
    var text_class = "col-md-9 col-xl-10 col-xxl-10";
    if(!props.img){
        img_html = '';
        img_class = '';
        text_class = 'col-12';
    }

    return (
    <div className="card semi-transparent overflow-hidden">
        <div className="row g-0">
            <div className={`${img_class}`}>
                <div 
                    className='card-image-container h-100'
                    style={{
                        backgroundImage: `url(${props.img})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        minHeight: '100px',
                        backgroundPosition: windowWidth < bs_md ? props.objectPosition : props.objectPositionMd, 
                    }}
                >
                    
                </div>
            </div>
            <div className={`${text_class}`}>
                <div className="card-body flex-column d-flex flex-wrap">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
 );
}