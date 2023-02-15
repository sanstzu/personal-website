import * as React from 'react';
import Card from '../Card'

const about_me_text = ` `;

const contacts = [
   {name: "Email", url:"mailto:claytonfernalo@gmail.com", icon:"icons/mail.png"},     
   {name: "GitHub", url:"https://www.github.com/sanstzu/", icon:"icons/github.png"},
   {name: "LinkedIn", url:"https://www.linkedin.com/in/clayton-fernalo-812a771ba/", icon:"icons/linkedin.png"},
   {name: "Twitter", url:"https://www.twitter.com/sansmomento/", icon:"icons/twitter.png"}
]
export default function Body(props) {
   return (
      <div className="w-100 d-flex flex-column align-items-center">
         <div className="main-body">
            <div className="landing d-flex align-items-center">
               <Card img="background/venti.jpg" height="100px" align="right" objectPosition='60% 30%' objectPositionMd='50% 25%' customStyle="mb-5 mt-3 text-md-end" customStyleChild="py-md-5">
                  <h1 className="card-title">こんにちは!</h1>
                  <p className="card-text">
                     <span><b>Clayton</b></span> here! 
                     <br />
                     a random programmer on web-development
                     <br /> 
                     currently a freshmen @ Nanyang Technological University, Singapore {' '} 
                     <img src="emoji_singapore.png" className="bi flex-shrink-0 emoji"/>
                  </p>
                  <div className="d-flex flex-row justify-content-md-end justify-content-start mt-3">
                     {contacts.map((element) => (
                        <button 
                           className="border-0 p-0 me-4"
                           style={{
                              background:"none",
                           }}
                        >
                           <a className="icon-button" href={element.url} target="_blank">
                              <img 
                                 src={element.icon}
                                 height="35px" 
                                 width="35px"
                                 style={{
                                    filter:"invert(100%)"
                                 }}
                                 alt={`${element.name} icon`}
                              />
                           </a>
                        </button>
                     ))}
                  </div>
               </Card>
            </div>
            
            <div className="landing d-flex align-items-center">
               <Card img="background/basil.jpeg" height="100px"  objectPosition='60% 45%' objectPositionMd='50% 25%' customStyleChild="py-md-2" customStyle="my-5">
                  <h1 className="card-title">Experiences</h1>
                  <p className="card-text">
                     <ul>
                        <li>Competitive Programming <br /><em className="text-white-50">(Bronze in National Olimpiad of Informatics)</em></li>
                        <li>Front-end Development <br /><em className="text-white-50">(React, Bootstrap, Tailwind, CSS)</em></li>
                        <li>Back-end Development <br /><em className="text-white-50">(Django REST Framework)</em></li>
                        <li>Video, Image and Graphic Editor <br /><em className="text-white-50">(Premiere Pro, Illustrator, Photoshop)</em></li>
                        <li>ASEAN Scholarship Awardee in Nanyang Technological University</li>
                        <li>Two-year High School Student Council President</li>
                        <li>500-hours in Brawlhalla and CS:GO</li>
                     </ul>
                  </p>
               </Card>
            </div>
         </div>
      </div>
   );
}
