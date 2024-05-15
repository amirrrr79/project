import { setEropa } from '../redux/TourEropa/ActionTour';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import './Eropa.css'
import { Link } from 'react-router-dom';


function Eropa(){
    const { tourEropa } = useSelector((state => state. tourEropa));
    const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(setEropa())
  },[dispatch])
     return(
        <>

                <div className='imageEropa'>
                     <div className='titleTour'>
                        <span>تور اروپا</span>
                     </div>
                </div>
                     <div className='card-tour mt-5'>

                        {tourEropa && tourEropa.map(Tour=>(
                          <div className='cards'>
                          <Link to={`/eropa/tourEropa/${Tour.id}`} className="card text-bg-dark" key={Tour.id}>
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

export default Eropa