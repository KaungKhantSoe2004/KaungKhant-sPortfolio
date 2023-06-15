import { FaFacebook, FaTwitter } from "react-icons/fa";
import "./index.css";
let Contact = ()=> {
    return(
        <div className="contact">
            <h1 className="ContactMe">Contact Me!</h1>

   <div className="emailphnum">
   <div className="email ep">Email: kaungkhants892@gmail.com</div>
      <div className="phNum ep"> Phone Number: 0979688834</div> 
   </div>

   <div className="fbtw">

    <a className="fb">
        <FaFacebook className="icons  iconsContact"/>
<div className="fbText">To learn more about me and see my new projects 
Friend me(Kaung Khant Soe)</div>
    </a>

   <a className="twt">
    <FaTwitter className="icons iconsContact" />
    <div className="twitterText">For updates on stories , follow @kaungKhant</div>
   </a>
   </div>
        </div>
    )
}
export default Contact;