import img from "../images/assets/media/home-bg.jpg"
const Contect = ()=>{

    return (
        <>
         <section className="contact padding">
        <div className="container">
          <header className="sec-header text-center">
            <h2 className="heading">Contact Us</h2>
            <div className="dot-wrapper">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </header>
          <div className="flex">
            <form className="flex-60" action="index.html" method="post">
              <fieldset>
                <div className="flex">
                  <input
                    className="form-control flex-48"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                  />
                  <input
                    className="form-control flex-48"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="flex">
                  <input
                    className="form-control flex-48"
                    name="number"
                    type="tel"
                    placeholder="Your Phone"
                  />
                  <select className="form-control flex-48" name="budget">
                    <option value="Budget Level">Budget Level</option>
                    <option value="Budget Level1">Budget Level1</option>
                    <option value="Budget Level2">Budget Level2</option>
                    <option value="Budget Level3">Budget Level3</option>
                  </select>
                </div>
                <textarea
                  className="form-control"
                  name="requirements"
                  placeholder="Your Requirements"
                  id=""
                  rows="6"
                ></textarea>
              </fieldset>
              <input
                type="submit"
                value="Send Message"
                className="btn btn-primary"
              />
            </form>
            <div className="flex-40 map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28785.93927578482!2d79.54489037932397!3d25.59685995754236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399d4332e2baf109%3A0x220d538a5b4be88d!2sRath%2C%20Uttar%20Pradesh%20210431!5e0!3m2!1sen!2sin!4v1660472074813!5m2!1sen!2sin" width="600" height="450" style={{"border" :0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Contect;