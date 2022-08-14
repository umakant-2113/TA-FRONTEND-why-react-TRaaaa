import work1 from "../images/assets/media/work-image1.jpg"
import work2 from "../images/assets/media/work-image2.jpg"
import work3 from "../images/assets/media/work-image3.jpg"
import work4 from "../images/assets/media/work-image4.jpg"
const Work = ()=>{
    return ( 
        <>
          <section className="work padding">
        <div className="container">
          <header className="sec-header text-center">
            <h2 className="heading">Our Work</h2>
            <div className="dot-wrapper">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </header>
          <div className="flex">
            <div className="flex-23">
              <img
                className="flexible-img"
                src={work1}
                alt="Work Image 1"
              />
            </div>
            <div className="flex-23">
              <img
                className="flexible-img"
                src={work2}
                alt="Work Image 1"
              />
            </div>
            <div className="flex-23">
              <img
                className="flexible-img"
                src={work3}
                alt="Work Image 1"
              />
            </div>
            <div className="flex-23">
              <img
                className="flexible-img"
                src={work4}
                alt="Work Image 1"
              />
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Work;