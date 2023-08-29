import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import apptData from '../data/appartement.json';
import '../styles/Appartements.scss';
import '../styles/Collapse.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../pages/NotFound';
import Collapse from '../components/Collapse'; 

const Appartements = () => {
  const { id } = useParams();
  const appartement = apptData.find((appartement) => appartement.id === id);

  if (!appartement) {
    return <NotFound />;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const generateStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= rating ? faStarSolid : faStarEmpty}
          className="star-icon"
        />
      );
    }
    return stars;
  };

  return (
    <div>
      <Header />
      <main className='apptMain'>
        <section className='apptContent'>
          <Slider {...settings} className='slider-container'>
            {appartement.pictures.map((picture, index) => (
              <div key={index}>
                <img className="slider-image" src={picture} alt={`Appartement ${index + 1}`} />
              </div>
            ))}
          </Slider>
          <div className='apptTxt'>
            <div className='detail'>
            <div className='title-host'>
              <div className='title-loc'>
                <h2>{appartement.title}</h2>
                <p>Location: {appartement.location}</p>
              </div>
              <ul className='tags'>
                {appartement.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className='tags-rate'>
            <div className='host'>
                <p>{appartement.host.name}</p>
                <img className='hostpict' src={appartement.host.picture} alt={appartement.host.name} />
              </div>
              <div className="rating-stars">
                {generateStars(appartement.rating)}
              </div>
            </div>
            </div>
            <div className='description-equipement'>
              <Collapse title="Description" >
                <p>{appartement.description}</p>
              </Collapse>
              <Collapse title="Equipements">
                <ul>
                  {appartement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </Collapse>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Appartements;
