import React from 'react'
import { Header, Footer } from '../components'

const Home = () => {
  return (
    <>
    <Header />
      <div className="container bgcolor" style={{padding:'120px 0px 120px 0'}}>
        <div className="row  m-auto">
          <div className="col-md-6 mt-5">
                <div className="row mt-4">
                  <div className="col-2">
                  <span className="w-50">
              <i className="fas fa-laptop fa-3x"></i>
               </span>
                  </div>
                  <div className="col-md-10">
                      
                  <h6 className='fw-bold'>New Batch Start</h6>
                  <p>Febuary,1,2024</p>

                  </div>
                </div>
                    <p style={{ fontWeight: 900, fontSize: '35px', lineHeight: '57px' }} className='mt-2'>
                    Learn Professional, Digital Skills & Become Job Ready
                    </p>
                    <p style={{fontWeight: 400 , font: '18px' }} className='mt-2'>Revolutionize your education with our innovative learning platform.</p>
                    <div className="mt-5">
                     <span className='mt-2'>
                    <button type="button" style={{border:'purple 2px solid' , borderRadius: '9px', background: 'white', height: "43px" , width: "180px" }}>Meet Our Teachers</button>
                    </span>
                    <span style={{marginLeft: "35px"}}>
                    <button type="button" style={{border:'purple 2px solid' , borderRadius: '9px', background: 'white', height: "43px" , width: "123px" }}>Check Alumni
                    </button>
                    </span>
                    </div>

             
          </div>
          <div className="col-md-6 mt-5">
            <img className='w-100 zoom-in ' src="https://careerengine.in/wp-content/uploads/2023/02/slider-1.png" alt="" />
          </div>

        </div>
        
      </div>
      <section className="">
        <div className="elementor-container elementor-column-gap-default">
          <div className="row blue-section">
            <div className="col-md-6 text-end">
              <img src="https://careerengine.in/wp-content/uploads/2023/02/web-e1675753588691.png" alt=""  className='pt-5 slide-in-from-left '/>
              
            </div>  

            <div className="col-md-6 text-white pt-5">
               <h5 className='fw-bold pt-5'>
                Duration: 7 Months
                </h5>
                <h1 className='fw-bold py-4'>Full Stack Developer Course​</h1>
                    <div >
                      <div className='w-75'>
                <p className=' pfonts'>                
                    Unlock your creativity and build stunning websites with our comprehensive, full stack web development course. Gain hands-on experience and industry-relevant skills to launch your web design career. Build your own projects and show case them on your resume.
                </p>
                </div>
                </div>

                <div className="pt-5">
                  <p>You Will Learn</p>
                </div>
                <div style={{borderRadius:'15px'}} >
                  <img src="src/pages/img/Untitled_design__36_-removebg-preview.png" alt=""  className='bg-light ' style={{width:"44%", borderRadius:'17px'}}/>
                </div>
           
              <div className='pb-5 pt-5'>
                  <button  style={{background:"transparent", height:"45px", width:"115px", border:"5px white solid", borderRadius:'50px', color:"white",}}>Learn More</button>
              </div>
              
              
            </div>           
 
          </div>
        </div>
      </section>

    
     <Footer /> 
    </>
  )
}

export default Home