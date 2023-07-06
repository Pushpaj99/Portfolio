import React from 'react'
import vg from "../assets/2.webp"
import {AiFillFacebook,AiFillGithub,AiFillLinkedin,AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai"

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
        <main>
            <h1>Welcome</h1>
            <p>The only thing I know about the future is that it will be different.</p>
        </main>
        </div>

        <div className='home2'>
            <img src={vg} alt="Graphics" />
            <div>
                <p>
                    Hello, I'm Pushpaj Bhausaheb Kanwade, a <span>Frontend Developer</span> in my final year at SGGSIE&T, Nanded, where I'm also majoring in Computer Science and Engineering.
                </p>
            </div>
        </div>

        <div className='home3' id='about'>
            <div>
                <h1>About me</h1>
                <p> Greetings to all. 
                <br /> <br />
                    I'm <span>Pushpaj Bhausaheb Kanwade</span> from Sangamner Nagar district. <br /> <br/>

                    I completed my 10th from Sangamner i.e Hometown and 12th from Pune through the state board, additionally pursuing a B.Tech in CSE at Nanded's Government Engineering College.
                    <br/> 

                    My family has four people. Including my father, mother, older brother, and myself. Father works for the government. My mother is a stay-at-home mom. Playing badminton and vadan are two of my pastimes.
                    My ability to be self-motivated, trustworthy, and diligent is a strength. My short-term objective is to find a good work, and my long-term objective is to advance in the organisation.
                </p>
            </div>
        </div>

        <div className="home4" id='social media'>
            <div>
                <h1>Connect With Me</h1>

                <article>
                    <div style={{
                        animationDelay: "1.5s"
                    }}>
                        <a href='https://github.com/Pushpaj99'>
                            <AiFillGithub />
                        </a>
                        <p>Github</p>
                    </div>

                    <div style={{
                        animationDelay: "0.3s"
                    }}>
                        <a href='https://www.linkedin.com/in/pushpaj-kanwade-346240228/'>
                            <AiFillLinkedin />
                            <p>Linkedin</p>
                        </a>
                    </div>

                    <div style={{
                        animationDelay: "1.3s"
                    }}>
                        <a href='https://twitter.com/KanwadePushpaj'>
                            <AiFillTwitterCircle />
                            <p>Twitter</p>
                        </a>
                    </div>

                    <div style={{
                        animationDelay: "0.7s"
                    }}>
                        <a href='https://www.instagram.com/pushpaj_kanwade/'>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </a>
                    </div>

                    {/* <div style={{ 
                        animationDelay: "1s" 
                    }}>
                        <a href="https://www.facebook.com/pushpaj.kanwade.1">
                            <AiFillFacebook />
                            <p>Facebook</p>
                        </a>
                    </div> */}
                </article>
            </div>
        </div>
        
        <div className='skills' id='skills'>
            <div>
                <h1>Skills</h1>
                <p>Professional versatile and passionate in <span>C++</span>, <span>JavaScript</span> (intermediate), <span>React</span>, <span>Data structures & Algorithms</span> (intermediate), <span>Web Developement</span> (Intermediate), and <span>Python</span> (beginning). 
                C++ knowledge allows for effective problem solving, but JavaScript knowledge drives interactive web application development. Data structures are excellent for optimising code performance.
                I am proficient in Marathi, Hindi, and English.
                I'm eager to improve my web development skills. <span>Committed to pushing the boundaries of technological innovation</span>.
                </p>
            </div>
        </div>
        <div className='projects' id='projects'>
            <div>
                <h1>Projects</h1>
                <article>

                    <div style={{
                        animationDelay: "0.3s"
                    }}>
                        <a href=''> 
                            <p>Rock Paper Scissor</p>
                        </a>
                    </div>

                    <div style={{
                        animationDelay: "1.3s"
                    }}>
                        <a href=''>
                            <p>Project1</p>
                        </a>
                    </div>

                    <div style={{
                        animationDelay: "0.7s"
                    }}>
                        <a href=''>
                            <p>Project2</p>
                        </a>
                    </div>

                    <div style={{ 
                        animationDelay: "1s" 
                    }}>
                        <a href="">
                            <p>Project3</p>
                        </a>
                    </div>
                </article>
            </div>
        </div>
        
    </>
  )
}

export default Home
