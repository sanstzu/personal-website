import * as React from 'react';
import Card from '../Card'

export default function Body(props) {
   const about_me_text = `Clayton here, a random-ass software engineer who's currently studying in Singapore `;
   return (
      <div className="w-100 d-flex flex-column align-items-center">
         <div className="main-body">
            <div class="alert alert-primary container-sm w-100" role="alert">
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/moai_1f5ff.png" className="bi flex-shrinkn-0 me-2 emoji" />
               Still, this website is under construction 
            </div>
            <Card title="About me" img="venti.jpg" height="400px" objectPosition='60% 30%' objectPositionMd='50% 25%'>
               <h1 className="card-title">こんにちは!</h1>
               <p className="card-text">
                  {about_me_text}
                  <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/flag-singapore_1f1f8-1f1ec.png" className="bi flex-shrinkn-0 me-2 emoji" />
               </p>
               <div className="mt-3">
                  <h3>Social Media</h3>
               </div>
               <ul>
                  <li>
                     <a href="https://www.instagram.com/cfrnx">Instagram</a>
                  </li>
                  <li>
                     <a href="https://www.linkedin.com/in/clayton-fernalo-812a771ba/">LinkedIn</a>
                  </li>
                  <li>
                     <a href="https://www.github.com/sanstzu/">Github</a>
                  </li>
               </ul>
            </Card>
         </div>
      </div>
      
   );
}
