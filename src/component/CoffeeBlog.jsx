const CoffeeBlog = () => {
    return ( 
        <section className="blog-area section-gap" id="blog">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-10">
            <div className="title text-center">
              <h1 className="mb-10">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </h1>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 single-blog">
            <img className="img-fluid" src="img/b1.jpg" alt="" />
            <ul className="post-tags">
              <li><a href="#">سفر</a></li>
              <li><a href="#">سبک زندگی</a></li>
            </ul>
            <a href="#"><h4>لورم ایپسوم طراحان ساختگی نامفهوم</h4></a>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
            <p className="post-date">
              10 فروردین 1398
            </p>
          </div>
          <div className="col-lg-6 col-md-6 single-blog">
            <img className="img-fluid" src="img/b2.jpg" alt="" />
            <ul className="post-tags">
              <li><a href="#">سفر</a></li>
              <li><a href="#">سبک زندگی</a></li>
            </ul>
            <a href="#"><h4>لورم ایپسوم طراحان ساختگی نامفهوم</h4></a>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
            <p className="post-date">
              10 فروردین 1398
            </p>
          </div>
        </div>
      </div>
    </section>
     );
}
 
export default CoffeeBlog;