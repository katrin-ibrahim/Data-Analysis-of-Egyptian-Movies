import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export default class MovieStats extends Component {
    state={
        click1940 : false,
        click1950 : false,
        click1960 : false,
        click1970 : false,
    }

    
    handleClick1940(){
    
        this.setState({
            click1940: !this.state.click1940 
        });
        this.setState({click1950:false});
        this.setState({click1960:false});
        this.setState({click1970:false});
    }
    handleClick1950(){
    
        this.setState({
            click1950: !this.state.click1950 
        });
        this.setState({click1940:false});
        this.setState({click1960:false});
        this.setState({click1970:false});
    }
    handleClick1960(){
    
        this.setState({
            click1960: !this.state.click1960 
        });
        this.setState({click1950:false});
        this.setState({click1940:false});
        this.setState({click1970:false});
    }
    handleClick1970(){
    
        this.setState({
            click1970: !this.state.click1970 
        });
        this.setState({click1950:false});
        this.setState({click1960:false});
        this.setState({click1940:false});
    }
    render() {
        const{click1940,click1950,click1960,click1970} = this.state;
        return (
            <div className="flex-col">
                <Navbar/>
                {/*  */}
                <div className="flex-row actor-genre-container" >

                <div className="actor-genre-wrapper">
                        <div className="actor-genre">
                            <div className ="flex-col" style={{width:"80%",gap:"1rem"}}>
                                <div className="title-2"> إحصائيات النوع الأدبي</div>
                                <div className="sub-text" style={{alignSelf:"flex-end",paddingRight:"5rem"}}> تردد النوع الأدبي في الافلام </div>
                                <div className="genre-table">
                                    <table>
                                        <tr>
                                            <th>العدد</th>
                                            <th >النوع</th>
                                        </tr>
                                        <tr>
                                            <td>570</td>
                                            <td>دراما     </td>
                                    
                                        </tr>
                                        <tr>
                                            <td>249</td>
                                            <td>رومانسي</td>
                                    
                                        </tr>
                                        <tr>
                                            <td>127</td>
                                            <td>كوميدي</td>
                                    
                                        </tr>
                                        <tr>
                                            <td>109</td>
                                            <td>تشويق و أثارة</td>
                                    
                                        </tr>
                                        <tr>
                                            <td>60</td>
                                            <td>مغامرات</td>
                                    
                                        </tr>
                                        <tr>
                                            <td>19</td>
                                            <td>استعراضي</td>
                                    
                                        </tr>
                                        <tr>
                                            <td>18</td>
                                            <td>تاريخ</td>
                                    
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>سيرة ذاتية</td>
                                    
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td>جريمة</td>
                                        </tr>
                                        <tr>
                                              <td>10</td>
                                              <td>عائلي </td>
                                    
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>حرب</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>قصير</td>
                                        </tr>
                                        <tr>
                                                <td>5</td>
                                                <td>وثائقي</td>
                                    
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>خيال علمي</td>
                                    
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>رياضي</td>
                                    
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>رعب</td>
                                    
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>رسوم متحركة</td>
                                    
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>خيال</td>
                                    
                                            </tr>
                                    
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="actor-genre-img"></div>

                    

                </div>


                {/* era stats */}
                <div className="flex-col era-stats-container">
                    <div className="flex-row" style={{justifyContent:"space-evenly",width:"100%"}}>
                        <div className="button-grid">
                            <button className="round-button" onClick={this.handleClick1940.bind(this)}>1940</button>
                            <button className="round-button" onClick={this.handleClick1950.bind(this)}>1950</button>
                            <button className="round-button"onClick={this.handleClick1960.bind(this)}>1960</button>
                            <button className="round-button"onClick={this.handleClick1970.bind(this)}>1970</button>
                        </div>
                        <div className="flex-col">
                            <div className="title-2" style={{color:"black"}}>إحصائيات الحقبة </div>
                            <div className="sub-text" style={{color:"black"}}>اختار السنة لتري عدد الأفلام حسب النوع بها</div>
                        </div>
                    </div>

                    {click1940?
                    <div className="img-display" >

                        <div className="background genre-1940">its 1940</div>
                    </div>
                   :click1950?
                   <div >
                   its 1950
                   </div>:
                   click1960?
                   <div >
                   its 1960
                   </div>:
                   click1970?
                   <div >
                   its 1970
                   </div>:""
                }
                </div>
               
            </div>
        )
    }
}
