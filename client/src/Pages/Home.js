import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import { Outlet, Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div className="flex-col">
                <Navbar/>
                <div className="flex-row intro-container">
                    <div className="intro-txt-wrapper"> <div className="intro-txt">
                        <p>
في 5 نوفمبر 1896 ، تم عرض الأفلام القصيرة الأولى للأخوة لوميير في الإسكندرية, في بورصة توسون باشا ، بعد أقل من عام واحد من العرض الأول في باريس, جعل مصر رائدة السينما في المنطقة. القاهرة يجب أن تنتظر حتى 28 نوفمبر 1896 لعقد أول عرض سينمائي لها في حمام السباحة شنايدر. أدى نجاح هذه العروض المبكرة إلى افتتاح قاعات سينما صغيرة في أحياء مختلفة من الإسكندرية والقاهرة. استمر احتكار الإخوة لوميير حتى عام 1906 ، عندما باثي الفرنسية و حصلت شركات إيرنابورا الإيطالية على امتيازات في مصر وانضمت إلى السوق. ومع ذلك ، مع وصول تقنيات جديدة مثل المؤثرات الصوتية ، مشاهد النار على الموقع ونظام الترجمة, أصبحت الصناعة "مصرية" تدريجيا ، وجذبت الجماهير المحلية والمصريين المحليين للعمل فيها. في عام 1923 ، أسس محمد بيومي أول استوديو للسينما أنشأه مصري في شبرا ، القاهرة
                        </p>
                        
                         <button className="intro-button"> <Link to="/movie">    اعرف مزيد</Link> </button>
                    </div></div>
                    <div className="intro-img"><p style={{margin:"30px"}}>تاريخ السينما <br/>في مصر</p></div>
                </div>

                <div className="flex-col about-container ">
                    <div className="flex-row "style={{width:"90%",gap:"5rem"}}>

                        <div className="flex-col about-txt">
                            <p className="title" >من نحن</p>
                            <div className="sub-text">نحن مجموعة من الطلاب في هندسة وتكنولوجيا الإعلام في الجامعة الألمانية بالقاهرة</div>
                        </div>
                        <div className="flex-col about-txt">
                            <p className="title">هدف الموقع</p>
                            < div className="sub-text">موقع إحصائي لمساعدة الباحثين المستقبليين في تحليل الأفلام المصرية القديمة ويسهل طريقهم مع مفهوم تحليل معالجة اللغة الطبيعية. </div>
                        </div>
                    </div>

                     <div className="flex-row "style={{width:"90%",gap:"5rem"}}>

                     <div>
                        <p className="title"> هل مازلت تريد ان تعرف المزيد؟</p>
                            <div className="sub-text">  : يمكنك العثور على عملنا هنا <br/> 
                            <a target="_blank" href="https://www.kaggle.com/mahmoudjobeel/data-analysis-of-egyptian-arabic-movies">kaggle.com/mahmoudjobeel/data-analysis-of-egyptian-arabic-movies</a>
                          
                            </div>
                            
                        </div>


                         <div className="members-txt">
                            <p className="title">أعضاء المجموعة</p>
                            <div className="sub-text flex-row">
                         
                                <p style={{margin:"0"}}>محمد يوسف </p>
                                <p style={{margin:"0"}}>هايدي تحفة  </p>
                                <p style={{margin:"0"}}>محمود على </p>
                                <p style={{margin:"0"}}>كاترين عماد</p>
                         
                            </div>
                            
                                             
                        </div>
                         
                        
                     </div>



                </div>
            </div>
        )
    }
}
