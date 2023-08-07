
import './home.scss';
import moneyIcon from './money.png'


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
                    <label>
                        <img src={moneyIcon} alt="my image" />
                        ຍອດເງີນທັງໝົດ
                    </label>
                    <span className="material-symbols-outlined">
                        chevron_right
                    </span>
                </div>
                <div className='total-number export'>
                    100000
                </div>
            </div>

            <div className='grid-item'>
                <div className='grid-import card bg-import'>
                    <div className='coulmn'>
                        <div className='grid-title'>
                            ລາຍຮັບ
                            <span>10000</span>
                        </div>

                        <div className='grid-ctn'>
                            ລາຍຮັບ
                            <span>10000</span>
                        </div>

                    </div>
                    <div className='coulmn'>
                        <div className='persent'>
                            <div className='persent-item bg-import'>
                            60%
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid-export card bg-export'>
                <div className='coulmn'>
                        <div className='grid-title'>
                            ລາຍຮັບ
                            <span>10000</span>
                        </div>

                        <div className='grid-ctn'>
                            ລາຍຮັບ
                            <span>10000</span>
                        </div>

                    </div>
                    <div className='coulmn'>
                        <div className='persent'>
                            <div className='persent-item bg-export'>
                                60%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='totl-item card'>
                <div className='title'>
                    <label>ແຜນການຈ່າຍ</label>
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
                        ປະເພດ
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

            <div className='btn-item'>
                <button className='bg-import'>ຮັບ</button>
                <button className='bg-export'>ຈ່າຍ</button>
            </div>

        </div>
    </>
  );
}

export default Home;
