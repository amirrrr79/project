import './Asia.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { setAsia } from '../redux/TourAsia/ActionTour';
import { Link } from 'react-router-dom';
function Asia(){
    const { tourAsia } = useSelector((state => state. tourAsia));
    const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(setAsia())
  },[dispatch])
        return(
            <>
                <div className='imageAsia'>
                     <div className='titleTour'>
                        <span>تور های آسیایی</span>
                     </div>
                </div>

                <div className='card-tour mt-5'>

                    {tourAsia && tourAsia.map(Tour=>(
                          <div className='cards'>
                          <Link to={`/asia/tourAsia/${Tour.id}`} className="card text-bg-dark" key={Tour.id}>
                            <div className='photo'>
                             <img src={Tour.image} className="card-img" alt="..."></img>
                           </div>
                          <div className="card-img-overlay">
                            <h3 className="card-title">{Tour.name}</h3>
                          </div>
                        </Link>
                        </div>
                    ))}
                     
                </div>
            </>
        )
}

export default Asia