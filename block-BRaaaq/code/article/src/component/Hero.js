import img from "../images/baiq.jpg"

function Hero(){
    return (
        <>
        <main>
            <section className="hero">
        <figure className="flex-30">
            <img  src={img} alt="" width="100%" height="300px"/>
        </figure>
        <div className="flex-60">
            <h2 className="heading">Balanced meals for busy lives </h2>
            <p className="para"> Each Freshly meal is perfectly sized for 1 person to enjoy at 1 sitting.
                 Our fully-prepared meals are delivered fresh, and ready to eat in 3 minutes.
                 
                 No, your gift cards recipient does not need to have a Freshly subscription in order to redeem.
                  Upon redeeming their gift card, they ll be prompted to create an account, which will jump start their subscription.

                  If the gift card balance exceeds the amount of your order when redeemed,
                   your remaining gift card balance will be converted to stored credit and 
                   automatically applied to future orders. If your order amount is greater than
                    the amount on your gift card, your provided payment method will be charged for the
                     difference..
                  </p>
            <a className="details" href="https://www.freshly.com/"> Read More</a>
        </div>
        </section>
        </main>
        <h2 className="article"> All Article </h2>
        
        </>
    )
}

export default Hero;
