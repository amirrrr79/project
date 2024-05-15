import './carosel.css'

function Card(){
   return(
      <>

<div className='desktop'>
<div  id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
 
 <div class="carousel-inner">
   <div class="carousel-item active" data-bs-interval="5000">
   <div class="card mb-3"  >
 <div class="row g-0">
   <div class="col-md-5">
       <div className='photo' style={{height:'360px',borderRadius:'1rem'}}>
       <img src="./image/img4.jpg" className='' height={'100%'} width={'100%'} style={{borderRadius:'1rem'}}  alt="..."></img>
       </div>
   </div>
   <div class="col-md-7">
     <div class="card-body" style={{width:'100%'}}>
       <h5 class="card-title mt-5 mb-5" >تور هلند</h5>
       <p class="card-text">هُلَند (به هلندی: Nederland) کشور فراقاره‌ای است کوچک از قلمروهای پادشاهی هلند در شمال غربی اروپا با ۱۷٫۱ میلیون نفر جمعیت[۱] که پایتخت آن شهر آمستردام است، اما به منظور تمرکززدایی بسیاری از وزارتخانه‌ها و سفارتخانه‌ها در شهر لاهه یا پیرامون آن مستقر شده‌اند. </p>
     </div>
   </div>
 </div>
</div>
   </div>
   <div class="carousel-item"  data-bs-interval="5000">
   <div class="card mb-3"  style={{maxWidth: '900px',height:'360px'}}>
 <div class="row g-0">
   <div class="col-md-5">
   <div className='photo' style={{height:'360px',borderRadius:'1rem'}}>
     <img src="./image/img5.jpg" className='d-block w-100' height={'100%'} width={'100%'} style={{borderRadius:'1rem'}}  alt="..."></img>
     </div>
   </div>
   <div class="col-md-7">
     <div class="card-body">
       <h5 class="card-title mt-5 mb-5">تور یونان</h5>
       <p class="card-text">یونان (به یونانی: Ελλάδα, اِلادا) یا گاهی با نام رسمی جمهوری یونان (به یونانی: Ελληνική Δημοκρατία, اِلينيكی ديموكراتيا) یا یونانستان کشوری در اوراسیا واقع در جنوب شرقی اروپا و جنوب شبه‌جزیره بالکان است. این کشور همچنین جزایری بسیاری مانند رودس، جزیره کوس، ساموس، خیوس و لسبوس دارد و یک کشور اوراسیایی محسوب می‌شود. این کشور از شمال با آلبانی، مقدونیه شمالی و بلغارستان، و از شرق با ترکیه دارای مرز مشترک زمینی است.</p>
     </div>
   </div>
 </div>
</div>
   </div>
   <div class="carousel-item" data-bs-interval="5000">
   <div class="card mb-3" style={{maxWidth: '900px' , height:"360px"}}>
 <div class="row g-0">
   <div class="col-md-5">
   <div className='photo' style={{height:'360px',borderRadius:'1rem'}}>
     <img src="./image/img6.jpg" className='d-block w-100'   height={'100%'} width={'100%'} style={{borderRadius:'1rem'}} alt="..."></img>
     </div>
   </div>
   <div class="col-md-7">
     <div class="card-body">
       <h5 class="card-title mt-5 mb-5">تور ایتالیا</h5>
       <p class="card-text">ایتالیا (به ایتالیایی: Italia) با نام رسمی جمهوری ایتالیا (به ایتالیایی: Repubblica Italiana) کشوری فراقاره‌ای است که در اروپای جنوبی و اروپای مرکزی[۱۱] قرار گرفته و پایتخت آن، شهر تاریخی رم است. ایتالیا نهمین اقتصاد بزرگ جهان از نظر تولید ناخالص داخلی است.

این کشور از شبه‌جزیره ایتالیا و دو جزیرهٔ سیسیل و ساردِنی در دریای مدیترانه تشکیل شده‌است.</p>
     </div>
   </div>
 </div>
</div>

   </div>
 </div>
 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
   <span className=""><i class="bi bi-arrow-left-square-fill fs-2" style={{color:'#0092C8'}}></i></span>
   <span class="visually-hidden">Previous</span>
 </button>
 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
 <span className=""><i class="bi bi-arrow-right-square-fill fs-2" style={{color:'#0092C8'}}></i></span>
   <span class="visually-hidden">Next</span>
 </button>
</div>
</div>


<div className='mobile'>
<div id="carouselExampleInterval2" className="carousel slide" data-bs-ride="carousel">
 
 <div class="carousel-inner">
   <div class="carousel-item active" data-bs-interval="5000">
   
   <div class="card" style={{width:'23rem'}}>
 <img src="./image/img4.jpg" class="card-img-top" alt="..."></img>
 <div class="card-body">
   <h5 class="card-title mt-3 mb-3">تور هلند</h5>
   <p class="card-text">هُلَند (به هلندی: Nederland) کشور فراقاره‌ای است کوچک از قلمروهای پادشاهی هلند در شمال غربی اروپا با ۱۷٫۱ میلیون نفر جمعیت[۱] که پایتخت آن شهر آمستردام است، اما به منظور تمرکززدایی بسیاری از وزارتخانه‌ها و سفارتخانه‌ها در شهر لاهه یا پیرامون آن مستقر شده‌اند.</p>
 </div>
   </div>
   </div>
   <div class="carousel-item"  data-bs-interval="5000">
   <div class="card" style={{width:'23rem'}}>
    <img src="./image/img5.jpg" class="card-img-top" alt="..."></img>
 <div class="card-body">
   <h5 class="card-title mt-3 mb-3">تور یونان</h5>
   <p class="card-text">یونان (به یونانی: Ελλάδα, اِلادا) یا گاهی با نام رسمی جمهوری یونان (به یونانی: Ελληνική Δημοκρατία, اِلينيكی ديموكراتيا) یا یونانستان کشوری در اوراسیا واقع در جنوب شرقی اروپا و جنوب شبه‌جزیره بالکان است. این کشور همچنین جزایری بسیاری مانند رودس، جزیره کوس، ساموس، خیوس </p>
 </div>
</div>
   </div>
   <div class="carousel-item" data-bs-interval="5000">
   <div class="card" style={{width:'23rem'}}>
 <img src="./image/img6.jpg" class="card-img-top" alt="..."></img>
 <div class="card-body">
   <h5 class="card-title mt-3 mb-3">تور ایتالیا</h5>
   <p class="card-text">ایتالیا (به ایتالیایی: Italia) با نام رسمی جمهوری ایتالیا (به ایتالیایی: Repubblica Italiana) کشوری فراقاره‌ای است که در اروپای جنوبی و اروپای مرکزی[۱۱] قرار گرفته و پایتخت آن، شهر تاریخی رم است. ایتالیا نهمین اقتصاد بزرگ جهان از نظر تولید ناخالص داخلی است. </p>
 </div>
</div>

   </div>
 </div>
 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="prev">
   <span className=""><i class="bi bi-arrow-left-square-fill fs-2" style={{color:'#0092C8'}}></i></span>
   <span class="visually-hidden">Previous</span>
 </button>
 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="next">
 <span className=""><i class="bi bi-arrow-right-square-fill fs-2" style={{color:'#0092C8'}}></i></span>
   <span class="visually-hidden">Next</span>
 </button>
</div>
</div>


  
  
      
      </>
   )
}


export default Card