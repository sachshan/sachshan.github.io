import { useRef } from 'react';
import './App.scss';
import { BsLinkedin, BsGithub, BsPersonCircle } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';




const App = ()=>{

    const work = useRef(null);
    const contact = useRef(null);

    const scrollDown = (ref) => {
        window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
        });
    };

    return (<div className='main'>

        <div className='header'>
            <p className='hName'>Shantanu Sachdeva</p>
            <button className='hLink' onClick={()=>scrollDown(work)}>Work</button>
            <a className='hLink' href='resume.pdf' target='blank'>Resume</a>
            <button className='hLink' onClick={()=>scrollDown(contact)}>Contact</button>
           
        </div>

        <hr className='line'></hr>

        <div className='intro'>
            <img  className='iPic' src="310420925_1762450334148009_7619859612996784866_n.jpg" alt="Profile Picture" width={"30%"} height={"30%"}></img>

            <div className='iText'>
                <h1>Hello! My name is Shantanu Sachdeva. I am a hard-working and diligent Software Engineering Systems graduate student at Northeastern University.</h1>
                <p>I like to challenge myself and take up projects outside my comfort zone, as they push me to develop new skills and improve my understanding of Software engineering knowledge. I am skilled in enterprise web development. I am proficient in Angular, Node.js, and Spring MVC. I have excellent command over the Java, Python, and JavaScript languages. In addition, I am well-versed in foundational topics such Object Oriented Design, Algorithms & Data Structures, and Computer Networks. I am a team player and believe in maintaining a positive environment for the team with the help of collaboration. Communication is essential for the smooth functioning of a team, and I am always open to constructive criticism to improve myself. </p>
            </div>
        </div>

       

        <hr className='line'></hr>

        <div className='work' ref={work}>

            <h1>Recent Work</h1>

            <div className='project'>

                <div className='projectText'>
                    <h2>Food Delivery Application</h2>
                    <ul>
                        <li>Developed an application that allows customers to easily connect with restaurants, place their orders and receive deliveries, making ordering food more convenient and efficient</li>
                        <li>Combined React for the front end, Express.JS for the back end, and MongoDB for data persistence to ensure a responsive and scalable application that can handle a significant number of users and requests</li>
                        <li>Implemented a real-time chat feature, driven by WebSockets executed via Socket.io & Express.js</li>  
                    </ul>

                    <a href='https://github.com/sachshan/fooddelivery' target='blank'>Github Repo</a>

                </div>
                <div className='projectImg'>

                    <img src='food-delivery-5217579_1280.png'></img>

                </div>
                

            </div>

            <div className='project'>

                <div className='projectText'>
                    <h2>Hospital Information Management System</h2>
                    <ul>
                        <li>Created a micro-services-based hospital information management application to book appointments, view procedure status, access final reports, and allow physicians to cancel appointments and upload results</li>
                        <li>Utilized Spring Boot for implementation and Hibernate ORM for data persistence, resulting in a user-friendly, efficient, and reliable solution for managing hospital operation</li>
        
                    </ul>

                    <a href='https://github.com/sachshan/hospitalMIS' target='blank'>Github Repo</a>

                </div>
                <div className='projectImg'>

                    <img src='OIG.jpeg'></img>

                </div>
                

            </div>

        </div>

        <hr className='line'></hr>

        <div className='contact' ref={contact}>
            <h1 className='contactHeading'>Contact</h1>
            <div className='contactLinks'>

                <div className='contactIcon'>
                    <h3>Email</h3>
                    <a href = "mailto: sachdeva.sh@northeastern.edu"> <AiOutlineMail size={"3rem"} color='rgb(28, 38, 116)'/> </a>
                </div>

                <div className='contactIcon'>
                    <h3>LinkedIn</h3>
                    <a href='https://www.linkedin.com/in/ssachdeva257/' target='blank'> <BsLinkedin size={"3rem"} color='rgb(28, 38, 116)'/> </a>
                </div>

                <div className='contactIcon'>
                    <h3>Github</h3>
                    <a href='https://github.com/sachshan' target='blank'> <BsGithub size={"3rem"} color='rgb(28, 38, 116)'/> </a>
                </div>

                <div className='contactIcon'>
                    <h3>Resume</h3>
                    <a className='hLink' href='resume.pdf' target='blank'> <BsPersonCircle size={"3rem"} color='rgb(28, 38, 116)'/> </a>
                </div>

                
            </div>
        </div>

        <div className='copyright'>
            <p >© 2023 Shantanu Sachdeva</p>
        </div>

        

    </div>)

}

export default App;

