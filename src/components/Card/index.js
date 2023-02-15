import * as React from 'react'

export default function Card(props){
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    var bs_md = 768;

    React.useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(window.innerWidth)
          });
        
    },[])
    
    var img_class = "col-md-3 col-xl-2 col-xxl-2";
    var text_class = "col-md-9 col-xl-10 col-xxl-10";
    if(!props.img){
        img_class = '';
        text_class = 'col-12';
    }

    var imageContainer = (<>
        <div className={`${img_class}  ${props.img ? '': 'd-none'}`}>
            <div 
                className='card-image-container h-100'
                style={{
                    backgroundImage: `url(${props.img})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    minHeight: props.height,
                    backgroundPosition: windowWidth < bs_md ? props.objectPosition : props.objectPositionMd, 
                }}
            >
                
            </div>
        </div>
    </>);

    var childContainer = (<>
        <div className={`${text_class} ${props.customStyleChild}`}>
            <div className="card-body flex-column d-flex flex-wrap">
                {props.children}
            </div>
        </div>
    </>);
    return (
    <div className={`card semi-transparent overflow-hidden ${props.customStyle}`}>
        <div className={`row g-0 d-flex flex-row${props.align === 'right' ? '-reverse' : ''} `}>
            {imageContainer}
            {childContainer}
        </div>
    </div>
 );
}