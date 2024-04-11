import '../Assests/Css/Home.css'
import home from '../Assests/Img/home.jpg';
import Grid from '@mui/material/Grid';
import Caurosel from './Caurosel'
const Item = ({ children }) => {
  return <div>{children}</div>;
};
const Home = () => {
  return (
    <>
      <div className='contain'>
        {/* <div className='text-home'>
          <h2>Elevate Your Home, Inspire Living</h2>
          <p className='inner-text'>Transform your space with our personalized interior design services, blending modern elegance and individual style. From residential makeovers to commercial transformations, we specialize in crafting timeless and sophisticated environments. Elevate your surroundings with us.</p>
        </div> */}
          <div className='row'>
        <div className='column'>
          <img
            src={home}
            alt="no img"
          />
          </div>
        </div>
      </div>
      <h1>Our achievements...</h1>

      {/* <div className="main-content">
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <Item><img className="dash-img" src="https://pngimg.com/uploads/award/award_PNG58.png" alt="Achievement Image" />
              <p>Acknowledged as the "Best Interior Design Company" in 2022, our commitment to creating aesthetically pleasing and functional spaces has been recognized by industry experts.</p>
            </Item>
          </Grid>
          <Grid item xs={4} md={4}>
            <Item><img className="dash-img" src="http://clipart-library.com/image_gallery/n751255.png" alt="Achievement Image" ></img>
              <p>With an unwavering commitment to excellence, our company has successfully completed over 500 distinctive home interior projects, showcasing our dedication to quality and innovation.</p></Item>
          </Grid>
          <Grid item xs={4} md={4}>
            <Item>
              <img className="dash-img" src="https://covers.magazinecloner.com/covers/212097/mid/0000.jpg" alt="Achievement Image" />
              <p>Our company's magazines showcase the latest trends and innovations in home interior design, providing inspiration for creating personalized and stylish living spaces.</p>
            </Item>
          </Grid>
        </Grid>
      </div> */}
      <Caurosel />
      </>
      )
}
      export default Home;