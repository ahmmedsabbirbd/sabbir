import BannerImage from '../../Assets/Images/home-main.svg';

const Home = ()=> {
    return (
        <section className='banner'> 
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-7' >
                        <div className='banner__content'>
                            <h1 className='title'>Doing it all, in all new ways.</h1>
                            <p>Experience remarkable WordPress products with a new level of power, beauty, and human-centered designs. Think you know WordPress products? Think deeper!</p>
                            <button>Scroll down</button>
                        </div>
                    </div>

                    <div className='col-md-5' >
                        <div className='banner__media'>
                            <img src={BannerImage} alt='Banner' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    )
}

export default Home;