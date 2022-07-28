const TopPost = () => {
    return ( 
        <section className="video-sec-area pb-100 pt-40" id="about">
        <div className="container">
          <div className="row justify-content-start align-items-center text-right">
            <div
              className="col-lg-6 video-right justify-content-center align-items-center d-flex"
            >
              <div className="overlay overlay-bg"></div>
              <a className="play-btn" href="#"
                ><img className="img-fluid" src="img/play-icon.png" alt=""
              /></a>
            </div>
            <div className="col-lg-6 video-left">
              <h6>لورم ایپسوم طرحی ساختگی</h6>
              <h1>
                لورم ایپسوم طرحی ساختگی <br />
                متن طراحی لورم ایپسوم
              </h1>
              <p>
                <span
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.</span>
              </p>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی
                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
              <img className="img-fluid" src="img/signature.png" alt="" />
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default TopPost;