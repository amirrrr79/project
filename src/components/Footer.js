import './Footer.css'

function Footer(){

    return(
        <>
             <div className="footer">
                <div className="footer-center">
                     <div className="col">
                         <div className="title-col">
                            <span>دسترسی سریع</span>
                         </div>
                         <ul className="footer-ul">
                            <li>ویدئوها</li>
                            <li>تور سلامت</li>
                            <li>ایموویزا</li>
                            <li>سنگاپور</li>
                         </ul>
                     </div>

                     <div className="col">
                         <div className="title-col">
                            <span>دسترسی کاربر</span>
                         </div>
                         <ul className="footer-ul">
                            <li>استخدام</li>
                            <li>گواهینامه ها</li>
                            <li>تیم ما</li>
                            <li>درباره ما</li>
                         </ul>
                     </div>

                     <div className="col">
                         <div className="title-col">
                            <span>تور اروپا</span>
                         </div>
                         <ul className="footer-ul">
                            <li>فرانسه</li>
                            <li>ایتالیا</li>
                            <li>هلند</li>
                            <li>یونان</li>
                         </ul>
                     </div>

                     <div className="col">
                         <div className="title-col">
                            <span>تور آسیا</span>
                         </div>
                         <ul className="footer-ul">
                            <li>دبی</li>
                            <li>مالزی</li>
                            <li>گرجستان</li>
                            <li>ارمنستان</li>
                         </ul>
                     </div>
                </div>

                <div className="footer-center2">
                    <div className="text-footer">
                        <h5>آدرس دفتر میرداماد:</h5>
                        <br></br>
                        <p>تهران – میرداماد – پلاک ۲۵۵ – ساختمان آریا – طبقه دوم</p>
                        <br></br>

                        <h5>آدرس دفتر ستاری:</h5>
                        <br></br>
                        <p>تهران – اتوبان ستاری – نبش بلوار فردوس  –  پلاک 440 – طبقه اول – واحد ۳</p>
                        <br></br>
                        <p>ساعات کاری: شنبه تا چهارشنبه 9 الی 17 – پنجشنبه ها: 9 الی 13</p>
                    </div>

                    <div className="logo-footer">
                        <img src="./image/logo.png" width={'400rem'}></img>
                    </div>
                </div>

                <div className="icon-footer">
                    <p className="mb-3">© 2024 رهاسیر. تمامی حقوق محفوظ است</p>
                    
                    <i className="bi bi-telegram fs-2"></i>
                    <i className="bi bi-whatsapp fs-2"></i>
                    <i className="bi bi-instagram fs-2"></i>
                    <i className="bi bi-twitter fs-2"></i>
                </div>
             </div>
        </>
    )
}

export default Footer