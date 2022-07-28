const CoffeeGallery = () => {
    return ( 
        <section className="gallery-area section-gap" id="gallery">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-60 col-lg-10">
              <div className="title text-center">
                <h1 className="mb-10">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </h1>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <a href="img/g1.jpg" className="img-pop-home">
                <img className="img-fluid" src="img/g1.jpg" alt="" />
              </a>
              <a href="img/g2.jpg" className="img-pop-home">
                <img className="img-fluid" src="img/g2.jpg" alt="" />
              </a>
            </div>
            <div className="col-lg-8">
              <a href="img/g3.jpg" className="img-pop-home">
                <img className="img-fluid" src="img/g3.jpg" alt="" />
              </a>
              <div className="row">
                <div className="col-lg-6">
                  <a href="img/g4.jpg" className="img-pop-home">
                    <img className="img-fluid" src="img/g4.jpg" alt="" />
                  </a>
                </div>
                <div className="col-lg-6">
                  <a href="img/g5.jpg" className="img-pop-home">
                    <img className="img-fluid" src="img/g5.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     );
}
 
export default CoffeeGallery;