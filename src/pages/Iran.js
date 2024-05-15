import { useDispatch, useSelector } from "react-redux"
import './Iran.css'
import { useEffect } from 'react';
import { setIran } from "../redux/TourIran/ActionTour";
import { Link } from 'react-router-dom';
function Iran(){
    const { tourIran } = useSelector((state => state.tourIran));
    const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(setIran())
  },[dispatch])
    return(
        <>
        
               <div className='imageIran'>
                     <div className='titleTour'>
                        <span>تور داخلی</span>
                     </div>
                </div>
                     <div className='card-tour mt-5'>

                        {tourIran && tourIran.map(Tour=>(
                          <div className='cards'>
                          <Link to={`/iran/tourIran/${Tour.id}`} className="card text-bg-dark" key={Tour.id}>
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

export default Iran