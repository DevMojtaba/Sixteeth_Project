const CoffeeReview = () => {
    return ( 
        <section className="review-area section-gap" id="review">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-60 col-lg-10">
              <div className="title text-center">
                <h1 className="mb-10">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                </h1>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 single-review">
              <img src="img/r1.png" alt="" />
              <div className="title d-flex flex-row">
                <h4>لورم ایپسوم</h4>
                <div className="star">
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
            </div>
            <div className="col-lg-6 col-md-6 single-review">
              <img src="img/r2.png" alt="" />
              <div className="title d-flex flex-row">
                <h4>لورم ایپسوم</h4>
                <div className="star">
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
            </div>
          </div>
          <div className="row counter-row">
            <div className="col-lg-3 col-md-6 single-counter">
              <h1 className="counter">2536</h1>
              <p>مشتری ها راضی</p>
            </div>
            <div className="col-lg-3 col-md-6 single-counter">
              <h1 className="counter">7562</h1>
              <p>کل محصولات</p>
            </div>
            <div className="col-lg-3 col-md-6 single-counter">
              <h1 className="counter">2013</h1>
              <p>فنجون قهوه</p>
            </div>
            <div className="col-lg-3 col-md-6 single-counter">
              <h1 className="counter">10536</h1>
              <p>تعداد کل</p>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default CoffeeReview;