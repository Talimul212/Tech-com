
import About from '../About/About';
import Advertising from '../Advertising/Advertising';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import ShowCategory from '../ShowCategory/ShowCategory';
import Testimonial from '../Testimonial/Testimonial';
import TopSection from '../TopSection/TopSection';


const Home = () => {
    return (
        <div>
            <TopSection></TopSection>
            <ShowCategory></ShowCategory>
          <Services></Services>
          <Testimonial></Testimonial>
          <InfoCards></InfoCards>
        </div>
    );
};

export default Home;