import CoffeeBlog from './component/CoffeeBlog';
import CoffeeGallery from './component/CoffeeGallery';
import CoffeePrice from './component/CoffeePrice';
import CoffeeReview from './component/CoffeeReview';
import CoffeeLayout from './component/Layouts/CoffeeLayout';


const App = () => {
  return (

    <CoffeeLayout>
        <CoffeePrice/>
        <CoffeeGallery/>
        <CoffeeReview/>
        <CoffeeBlog/>
    </CoffeeLayout>


  )
}

export default App;
