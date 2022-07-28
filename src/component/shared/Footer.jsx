const Footer = () => {
    return ( 
        <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6 footer">
              <div className="single-footer-widget">
                <h6>درباره ما</h6>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
                <p className="footer-text text-center">
                  
                 کپی رایت &copy;
                  <script>
                    document.write(new Date().getFullYear());
                  </script>
                  
                  
                  
                </p>
              </div>
            </div>
            <div className="col-lg-5  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>خبرنامه</h6>
                <p>از آخرین خبرهای ما مطلع باشید</p>
                <div className="" id="mc_embed_signup">
                  <form
                    target="_blank"
                    novalidate="true"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get"
                    className="form-inline"
                  >
                    <input
                      className="form-control"
                      name="EMAIL"
                      placeholder="ایمیل"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'ایمیل خود را وارد کنید '"
                      required=""
                      type="email"
                    />
                    <button className="click-btn btn btn-default">
                      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </button>
                    <div style= {{position: "absolute", left: "-5000px"}}>
                      <input
                        name="b_36c4fd991d266f23781ded980_aefe40901a"
                        tabindex="-1"
                        value=""
                        type="text"
                      />
                    </div>
  
                    <div className="info pt-20"></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
              <div className="single-footer-widget">
                <h6>ما را دنیال کنید</h6>
                
                <div className="footer-social d-flex align-items-center">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-dribbble"></i></a>
                  <a href="#"><i className="fa fa-behance"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;