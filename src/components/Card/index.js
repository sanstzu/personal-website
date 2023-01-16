import * as React from 'react'

export default function Card(props){
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    var bs_md = 768;

    React.useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(window.innerWidth)
          });
        
    },[])

    var img_html  = (
        <img 
            src={props.img} 
            class="rounded-start card-image" 
            alt="image"
            style={{
                objectFit:'cover',
                objectPosition: windowWidth < bs_md ? props.objectPosition : props.objectPositionMd,
            }} 
        />
    );

    var img_class = "col-md-4 col-xl-3 col-xxl-3";
    var text_class = "col-md-8 col-xl-9 col-xxl-9";
    if(!props.img){
        img_html = '';
        img_class = '';
        text_class = 'col-12';
    }
    return (
    <div className="card semi-transparent overflow-hidden">
        <div className="row g-0">
            <div className={`${img_class}`}>
                <div className='card-image-container'
                    style={{
                        height: windowWidth < bs_md ? "125px" : props.height,
                    }}
                >
                    {img_html}
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