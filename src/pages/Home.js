import './Home.css'
import Card from '../components/Card'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { setAsia } from '../redux/TourAsia/ActionTour';
import { setIran } from '../redux/TourIran/ActionTour';
import { Link } from 'react-router-dom';
function Home(){
  const { tourAsia } = useSelector((state => state. tourAsia));
  const { tourIran } = useSelector((state => state. tourIran))
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(setAsia())
      dispatch(setIran())
  },[dispatch])


    return(
            <>
                <div className='baner'>
                  <div className='text-baner'>
                      <h2 className=''>آژانس مسافرتی رها سیر</h2>
                       <h3 className=''>بهترین گزینه برای یک سفر خوب و دلنشین</h3>

                       <a href='#service' className='btn-baner mt-2'>خدمات</a>
                  </div>
                </div>

                <div className='services' id='service'>
                    <div className='title'>
                        <h2><span style={{color:'#0092C8'}}>خدمات</span> رها <span style={{color:'#512da8'}}>سیر</span></h2>
                    </div>

                    <div className='cards-service'>
                    
                    <article className="cards">
                      <div className="cards-side card-front">
                     <i className="bi bi-heart-pulse icon-card"></i>
                     <p className='mt-4'>تور سلامت</p>
                     </div>
                     <div className="cards-side card-back">
                        <p className='mt-4'>تور مسافرتی سلامت و درمان با آژانس مسافرتی رهاسیر</p>
                     </div>
                    </article>

                    <article className="cards">
                      <div className="cards-side card-front">
                      <i class="bi bi-globe-europe-africa icon-card"></i>
                     <p className='mt-4'>تور اروپا</p>
                     </div>
                     <div className="cards-side card-back">
                        <p className='mt-4'>انواع تورهای مسافرتی و تفریحی اروپا با آژانس مسافرتی رهاسیر</p>
                     </div>
                    </article>

                    <article className="cards">
                      <div className="cards-side card-front">
                      <i class="bi bi-globe-asia-australia icon-card"></i>
                     <p className='mt-4'>تور آسیا</p>
                     </div>
                     <div className="cards-side card-back">
                        <p className='mt-4'>انواع تورهای مسافرتی و تفریحی داخلی با آزانس مسافرتی رهاسیر</p>
                     </div>
                    </article>

                    <article className="cards">
                      <div className="cards-side card-front">
                      <i class="bi bi-mortarboard icon-card" ></i>
                     <p className='mt-4'>ویزای تحصیلی</p>
                     </div>
                     <div className="cards-side card-back">
                        <p className='mt-4'>ایموویزای شرکت رهاسیر مجموعه ویزای اقامتی بلند مدت تحصیلی</p>
                     </div>
                    </article>
                   
                    </div>
                </div>

                <div className='Ajans'>
                <div className='title title-ajans'>
                        <h2><span style={{color:'#0092C8'}}>چرا آژانس</span> رها سیر</h2>
                    </div>

                    <div className='cards-ajans'>
                    <div className='card-colum'>
                    <div className="card mb-3" style={{width: '22rem'}}>
                     <div className="card-body d-flex">
                      <i className="bi bi-clipboard-check icon-card align-self-center ms-3"></i>
                        <div >
                        <h5 className="card-title">تجربه و تخصص</h5>
                        <p className="card-text">داشتن تجربه و تخصص برای افراد با هوش خیلی مهمه؛ مهمترین دلیل انتخاب رهاسیر و شرکت های زیر مجموعه اون داشتن تجربه و تخصص بالای همکاران ماست.</p>
                        </div>
                      
                        </div>
                      </div>

                      <div className="card mb-3" style={{width: '22rem'}}>
                     <div className="card-body d-flex">
                      <i className="bi bi-bullseye icon-card align-self-center ms-3"></i>
                        <div >
                        <h5 className="card-title">استفاده از مزایای هولدینگ</h5>
                        <p className="card-text">با توجه به مشترک بودن برخی فعالیت های شرکت های هولدینگ رهاسیر، سعی در ارائه کامل ترین خدمات گردشگری و ویزا برای شما عزیزان داریم</p>
                        </div>
                      
                        </div>
                      </div>
                      </div>

                    <div className='card-colum'>
                    <div className="card mb-3" style={{width: '22rem'}}>
                     <div className="card-body d-flex">
                      <i className="bi bi-headset icon-card align-self-center ms-3"></i>
                        <div >
                        <h5 className="card-title">سیستم پاسخ گویی منسجم</h5>
                        <p className="card-text">هر فردی که از ما خدماتی اخذ میکنه یک شماره قرارداد داره و در تمام مراحل کارهاش در سیستم اتوماسیون ثبت میشه و کارشناسان ما خیلی سریع مشتریها رو راهنمایی میکنن</p>
                        </div>
                      
                        </div>
                      </div>

                      <div className="card mb-3" style={{width: '22rem'}}>
                     <div className="card-body d-flex  ">
                      <i className="bi bi-person-fill icon-card align-self-center ms-3"></i>
                        <div >
                        <h5 className="card-title">تیم حرفه ای و فوق العاده</h5>
                        <p className="card-text">علاوه بر همه اینها یه تیم فوق العاده پر انرژی و حرفه ای شما رو همراهی میکنن.حتما روی تیم حرفه ای ما حساب کنید.</p>
                        </div>
                      
                        </div>
                      </div>
                      </div>
                  </div>
                </div>

                <div className='carosels'>
                   <Card />
                </div>


                <div className='tourAsia'>
                    <div className='title'>
                       <h2><span style={{color:'#0092C8'}}>تور های آسیایی</span> رها <span style={{color:'#512da8'}}>سیر</span></h2>
                    </div>

                    <div className='card-tour'>
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
                </div>


                <div className='tourIran'>
                    <div className='title'>
                       <h2><span style={{color:'#0092C8'}}>تور های داخلی</span> رها <span style={{color:'#512da8'}}>سیر</span></h2>
                    </div>

                    <div className='card-tour'>
                         {tourIran && tourIran.map(Tour=>(
                            <div className='cards'>
                            <Link to={`/tourIran/${Tour.id}`} className="card text-bg-dark" key={Tour.id}>
                              <div className='photo'>
                               <img src={Tour.image} className="card-img"  alt="..."></img>
                             </div>
                            <div className="card-img-overlay">
                              <h3 className="card-title">{Tour.name}</h3>
                            </div>
                          </Link>
                          </div>
                         ))}
                    </div>
                </div>

                <div className='contact'>
                <div className='titleContact'>
                       <span>عضویت در خبرنامه</span>
                    </div>
                    <div className='textContact'>
                    <span>از آخرین اخبار تورها با خبر باشید</span>
                    </div>
                    <form>
                        <input type='email' className='form-control' placeholder='ایمیل'></input>
                        <br></br>
                        <button type='submit' className='btnForm'>اشتراک</button>
                    </form>

                </div>



               
            </>
    )
}

export default Home;