import Footer from "./../shared/Footer";
import Header from "./../shared/Header";
import TopPost from "./../TopPost";

const CoffeeLayout = ({Children}) => {
    return ( 
        <>
            <Header/>
            <TopPost/>
            {Children}
            <Footer/>
        </>
     );
}
 
export default CoffeeLayout;