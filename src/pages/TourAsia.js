import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import './Tour.css'
function TourAsia(){
    const { tourAsia } = useSelector((state => state.tourAsia));
  const {Id}=useParams()
   const TourAsia=tourAsia.find(p=> p.id==Id ? true : false)
      return(
        <>
        <div className="section" >

            <div className="tourImage">
                <img src={TourAsia.image} width={'42%'}></img>
                <div className="tour-title">
                    <h3>{TourAsia.name}</h3>
                    <p>{TourAsia.description}</p>
                </div>
            </div>

            <div className="tourImageMobile mb-5">
            <div class="card" style={{width: '24rem'}}>
              <img src={TourAsia.image} class="card-img-top" alt="..."></img>
            <div class="card-body">
            <h5 class="card-title mt-3 mb-4" style={{color:'#0092c8',textAlign:'center', borderBottom:'2px solid #0092c8',margin:'0 3rem'}}>{TourAsia.name}</h5>
            <p class="card-text">{TourAsia.description}</p>
            </div>
            </div>
            </div>

            <div className="tourText">
            <div class="accordion" id="accordionExample">
  <div class="accordion-item mb-3">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        جاذبه‌های گردشگری
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{color:'#0092c8'}}>
        {TourAsia.place}
      </div>
    </div>
  </div>
  <div class="accordion-item mb-3">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        مدت زمان تور
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{color:'#0092c8'}}>
        {TourAsia.day}
      </div>
    </div>
  </div>
  <div class="accordion-item mb-3">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            قیمت تور
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{color:'#0092c8'}}>
            {TourAsia.price}
      </div>
    </div>
  </div>

  <div class="accordion-item mb-3">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
            خدمات تور
      </button>
    </h2>
    <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{color:'#0092c8'}}>
            {TourAsia.service}
      </div>
    </div>
  </div>

  <div class="accordion-item mb-3">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
            رزرو تور
      </button>
    </h2>
    <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{color:'#0092c8'}}>
            برای رزرو {TourAsia.name} با شماره 021-844255835 تماس حاصل فرمایید
      </div>
    </div>
  </div>
</div>
            </div>



                 

        </div>
            
        </>
    )
}

export default TourAsia;