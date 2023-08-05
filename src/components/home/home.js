
import './home.scss';


function Home() {
  return (
    <>
        <div className='home-wrapper'>

            <div className='header'>
                <span className="material-symbols-outlined">
                    menu
                </span>
            </div>

            <div className='totl-item card'>
                <div className='title'>
                    <label>Total</label>
                    <span className="material-symbols-outlined">
                        chevron_right
                    </span>
                </div>
                <div className='total-number export'>
                    100000
                </div>
            </div>

            <div className='grid-item'>
                <div className='grid-import card'>
                    grid-import
                </div>
                <div className='grid-export card'>
                    grid-import
                </div>
            </div>

            <div className='totl-item card'>
                <div className='title'>
                    <label>Plan</label>
                    <span className="material-symbols-outlined">
                        chevron_right
                    </span>
                </div>
                <div className='total-number'>
                    100000
                </div>
            </div>

            <div className='catgory-tem card'>
                <div className='title'>
                    <label id='cat'>
                        <span className="material-symbols-outlined">
                            grid_view
                        </span>
                        Catgory
                    </label>
                    <span className="material-symbols-outlined">
                        chevron_right
                    </span>
                </div>

                <div className='cat-list'>
                    <div className='cat-item'>
                        <div className='color'></div>
                        <div className='cat-name'>
                            aaaaaaa
                        </div>
                        <div className='price'>100000</div>
                    </div>
                    <div className='cat-item'>
                        <div className='color'></div>
                        <div className='cat-name'>
                            bbbbbbb
                        </div>
                        <div className='price'>100000</div>
                    </div>
                    
                </div>

            </div>

        </div>
    </>
  );
}

export default Home;
