import React from 'react'
import rahabu from './rahabu.png';
import ab from './ab.png';
import desert from './desert.png';
import whats from './whats.png';
import food from './food.png';
import html from './html.png';
import css from './css.png';
import react from './react.png';
import node from './node.png';
import mysql from './mysql.png';
import mongo from './mongo.png';
import aws from './aws.png';
import java from './java.png';
import note from './note.png';











function New() {
  return (
    <div>
   <nav>
      <div class="container">
        <a href="#"><h3 style= {{ color: "#ffffff;" }} >Rahamadullah  A </h3></a>
        <ul>
          <li><a href="#Home" class="active">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Project">Project</a></li>
      
          <li><a href="#Contact">Contact</a></li>
        </ul>
        <button id="menu-btn">
          <span class="material-icons-sharp" > menu </span>
        </button>
        <button id="close-btn">
          <span class="material-icons-sharp" > close </span>
        </button>
      </div>
    </nav>

{/* Home */}

    <section class="landing" id="Home">
      <div class="container">
        <div class="socials">    
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=rahamadullahbabu@gmail.com"  target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/rahamadullah-babu-15b570196/"  target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://github.com/Rahamadullahbabu"  target="_blank"><i class="fa-brands fa-github"></i></a>
        </div>
        <div className="info"
        >
          <h1 class="typing"> Hello,I'm Rahamadullah</h1>
          <h3 class="typing1">Full Stack-Developer</h3>
          <p>
          Hi, I'm a MERN stack developer with a passion for creating user-friendly web applications. I'm committed to delivering high-quality code that adheres to industry standards and best practices.I enjoy learning and staying up-to-date with the latest web technologies. Let's build innovative web applications together.
          </p>
          <a href="#Contact" class="btn btn-primary">Let's Chat</a>
        </div>
        <div class="profile-area">
          <div class="outer-circle">
           {/* <a href="/"  target="_blank"><i class="fa-brands fa-html5" style= {{ color: "#ffffff;" }} ></i></a>
            <a href="/"  target="_blank"><i class="fa-brands fa-aws" ></i></a>
            <a href="/"  target="_blank"><i class="fa-brands fa-node" ></i></a>
            <a href="/"  target="_blank"><i class="fa-brands fa-react" ></i></a> */}

          </div>
          <div class="inner-circle">

          <img src={rahabu} alt="rahabu" />
          </div>
        </div>
      </div>
    </section>

{/* About */}

<section class="about" id="About" style= {{ backgroundColor: "#252525"}} >
      <h1>About</h1>
      <div class="container" >
        <div class="image">
        <img src={ab} alt="" /> 
        

        </div>
        <div class="info" >
          <p>
          Hi, I'm Rahamadullah, a full stack developer with a passion for creating intuitive, user-friendly web applications.
I am constantly exploring new technologies and expanding my knowledge of Html, Css, JavaScript, Bootstrap, React,Nodejs,MongoDB to stay up-to-date with the latest trends in web development.
. <br />
I believe in delivering high-quality work and strive to create web applications that not only meet but exceed user expectations.
I am a self-motivated learner and am dedicated to mastering the skills required to become an exceptional full stack developer.

          </p>
          <p>
          My ultimate goal is to use my skills to contribute to meaningful projects that have a positive impact on society. 
I am a team player with excellent communication skills and enjoy collaborating with others to achieve great results.
            <br />
            Thank you for taking the time to view my portfolio. 
I am excited about the possibilities that lie ahead and look forward to working with you.
          </p>
          <div class="links">
            <a href="#Contact" class="btn btn-primary">Let's Talk</a>
           
         <a href="https://drive.google.com/file/d/1NcoVnwWTh2DU89Hr3Oszo6t2Ud_5qsKk/view?usp=share_link" class="btn btn-primary" target="_blank" style= {{ color: "black" }}>Download Cv</a>   
          </div>
        </div>
      </div>
    </section>

    {/* <!-- project 1 --> */}
                         

    <section class="recent-work" id="Project">
    <div class="container">
        <h1>My Recent Work</h1>
        <div class="projects">


          <div class="project">
            <div class="thubmnail">
            <img src={desert} alt="" />
            </div>
            <h2>Dress Code Suggestion For Women App </h2>
            <p>
            Get outfit inspiration and dress code suggestions for any occasion with our app. From workwear to formal events, we've got you covered with curated outfit ideas that will make you look and feel confident. Say goodbye to outfit stress and hello to effortless style.[Username-test123@gmail.com PD-12345] 
            </p>
            <div class="links">
              <a href="https://github.com/Rahamadullahbabu/Capstone-Front-End" class="btn btn-primary" target="_blank">Front-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/Rahamadullahbabu/Capstone-Back-End" class="btn btn-primary" target="_blank">Back-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://charming-semolina-d2abb8.netlify.app/"
                class="btn btn-primary"
                target="_blank">View Project</a
              >
            </div>
            
            
          </div>
          <div class="project">
          <div class="thubmnail">
          <img src={food} alt="" />
          </div>
          <h2>Food Delivery App</h2>
          <p>
          Enjoy your favorite meals delivered straight to your doorstep with our app. Browse menus from local restaurants, place your order, and track delivery status in real-time. No more waiting in line or rushing to make it to the restaurant - let us bring the food to you. Download our app now and satisfy your cravings with just a few taps!
          </p>
          <div class="links">
            <a href="https://github.com/Rahamadullahbabu/swigmoto.git" class="btn btn-primary" target="_blank">Front-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/Rahamadullahbabu/swigmato-back-end.git" class="btn btn-primary" target="_blank">Back-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://soft-crisp-859923.netlify.app/"
              class="btn btn-primary"
              target="_blank">View Project</a>
          </div>
        </div>
          
      
          <div class="project">
            <div class="thubmnail">
            




            <img src={whats} alt="" />




            </div>
            <h2>Chat WITH ME App</h2>
            <p>
            Connect with friends, family, and new people around the world with our chat app. Send instant messages, make voice and video calls, and share photos and videos in a secure and user-friendly platform. From one-on-one conversations to group chats, stay connected anytime, anywhere. Download our app now and start chatting with the world at your fingertips![Username-mydemo@gmail.com PD-Mydemo@123]
            </p>
            <div class="links">
              <a href="https://github.com/Rahamadullahbabu/LetschatFE.git" class="btn btn-primary" target="_blank">Front-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/Rahamadullahbabu/LetsChatBE.git" class="btn btn-primary" target="_blank">Back-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://vocal-sundae-8b685a.netlify.app/login"
                class="btn btn-primary"
                target="_blank">View Project</a>
            </div>
          </div>
   
        


        <div class="project">
          <div class="thubmnail">
          <img src={note} alt="" />
          </div>
          <h2>TODO LIST App</h2>
          <p>
          Stay on top of your tasks and boost productivity with our to-do list app. Create customized lists, set reminders, and track progress towards your goals. From daily routines to long-term projects, we've got you covered. Simplify your life and stay organized - download our app now and start achieving your goals one task at a time!
          </p>
          <div class="links">
            <a href="https://github.com/Rahamadullahbabu/todoFE.git" class="btn btn-primary" target="_blank">Front-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/Rahamadullahbabu/todeBE.git" class="btn btn-primary" target="_blank">Back-End</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://beautiful-cuchufli-f6ab05.netlify.app/"
              class="btn btn-primary"
              target="_blank">View Project</a>
          </div>
        </div>


        
     
      </div>
      </div>
      <br />
      <br /><br /> <br /><br />
      </section>
{/*       
skills */}


<div class="inner">
  <div class="header">

    <h1 className='skillset'>Skills</h1>
  </div>
  <div class="container-icons">
    <div class="skill-box">
      <div class="skill-title">
        <div class="img">
        <img src={html} alt="" />
        </div>
        <h3 class="html">Html</h3>
        
      
      </div>
   
    
 
</div>
<div class="skill-box">
  <div class="skill-title">
    <div class="img">
    <img src={css} alt="" />
    </div>
    <h3 class="html" >Css</h3>
    
  
  </div>
</div>
<div class="skill-box">
  <div class="skill-title">
    <div class="img">
    <img src={java} alt="" />
    </div>
    <h3 class="html">JavaScript</h3>
    
  
  </div>
</div>
<div class="skill-box">
  <div class="skill-title">
    <div class="img">
    <img src={react} alt="" />
    </div>
    <h3 class="html">React</h3>
    
    
  
  </div>
</div>
<div class="skill-box">
  <div class="skill-title">
    <div class="img">
    <img src={node} alt="" />
    </div>
    <h3 class="html">Node.js</h3>
    
  
  </div>
</div>
<div class="skill-box">
  <div class="skill-title">
    <div class="img">
    <img src={mongo} alt="" />
    </div>
    <h3 class="html">MongoDB</h3>
    
  
  </div>

</div>
<div class="skill-box">
  <div class="skill-title">
    <div class="img">
    <img src={mysql} alt="" />
    </div>
    <h3 class="html">mySQL</h3>
    
  
  </div>

</div>
<div class="skill-box">
  <div class="skill-title">
    <div class="img">
    <img src={aws} alt="" />
    </div>
    <h3 class="html">Aws</h3>
    
 
  </div></div>

</div>
</div>

{/* contact */}



<section class="contact" id="Contact"  >
<div class="over">
       <h1>CONTACT</h1>
       
          <h1>rahamadullahbabu@gmail.com</h1>
          <h1>OR</h1>
          <h1>+916369141946</h1>
         
          
          
        
      </div>

    </section>

    <footer>
    <div class="container">
      <a href="#"><h3>Rahamadullah A</h3></a>
   
    <div class="socials">
        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=rahamadullahbabu@gmail.com"  target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/rahamadullah-babu-15b570196/"  target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="https://github.com/Rahamadullahbabu"  target="_blank"><i class="fa-brands fa-github"></i></a>

    </div></div>

  
  </footer>




 

       

  </div>
  )
}

export default New

