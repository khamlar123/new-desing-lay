
import './report.scss';


function Report() {
  return (
    <>
    <div className='report-wrapper'>

        <div className='header'>
            <span className="material-symbols-outlined">
                menu
            </span>
        </div>

        <div className='sort-date card'>
            <div className='date-item'>
              <input type="date" />
              <input type="date" />
            </div>

            <div className='rage-item'>
                <div className='item bg-import'>
                  aaa
                </div>
                <div className='item bg-export'>
                  bbb
                </div>
            </div>

        </div>

        {/* <div className='list'>
          <div className='item-list'>
              <div className='item '>
                <div className='name'>aaaaaa</div>
                <div className='date'>10/10/1010</div>
                <div className='price'>100000</div>
              </div>
              <div className='item '>
                <div className='name'>bbbbb</div>
                <div className='date'>10/10/1010</div>
                <div className='price'>100000</div>
              </div>
          </div>
        </div> */}

        <div className='grid'>
            <div className='item-grid'>
                <div className='item card'>
                  
                </div>
            </div>
        </div>

    </div>
    </>
  );
}

export default Report;
