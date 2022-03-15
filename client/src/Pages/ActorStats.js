import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import actors1940s from '../images/actors1940s.png'
import actors1950s from '../images/actors1950s.png'
import actors1960s from '../images/actors1960s.png'
import actors1970s from '../images/actors1970s.png'
import actorsRomance from '../images/actorsRomance.png'
import actorsDrama from '../images/actorsDrama.png'
import actorsComedy from '../images/actorsComedy.png'
// import {Link} from 'react-scroll'


export default class ActorStats extends Component {
    state={
        click1940 : false,
        click1950 : false,
        click1960 : false,
        click1970 : false,
        clickComedy:false,
        clickDrama:false,
        clickRomance:false,
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



    handleClickRomance(){
    
        this.setState({
            clickRomance: !this.state.clickRomance 
        });
        this.setState({clickDrama:false});
        this.setState({clickComedy:false});
    }

    handleClickDrama(){
    
        this.setState({
            clickDrama: !this.state.clickDrama 
        });
        this.setState({clickRomance:false});
        this.setState({clickComedy:false});
    }

    handleClickComedy(){
    
        this.setState({
            clickComedy: !this.state.clickComedy
        });
        this.setState({clickRomance:false});
        this.setState({clickDrama:false});
    }

  
    render() {
        const{click1940,click1950,click1960,click1970,clickDrama,clickRomance,clickComedy} = this.state;
        return (
            <div className="flex-col" style={{backgroundColor: "#FFFBF6"}}>
                <Navbar/>
                <div className="flex-col"style={{width:"100%",gap:"15px"}}>

                <div style={{width:"100%",height:"90vh"}}>
                        <div className="flex-row" style={{height:"100%",width:"100%",gap:"20px"}}>
                            <div className="flex-row" style={{width:"65%",height:"100%"}}>
                                <div className="background pic1"></div>
                                <div className="background pic2"></div>
                            </div>
                            


                        <div className="flex-col" style={{marginRight:"2.5%",alignItems:'flex-end',width:"45%"}}>
                            <div className="title-3" >إحصائيات الحقبة </div>
                            <div className="sub-text" style={{color:"black",marginBottom:"2rem"}}>اختار السنة لتري أكثر الممثلين ظهورا  بها</div>
                            <div className="flex-row">
                                <button className="round-button" onClick={this.handleClick1940.bind(this)}>1940</button>
                                <button className="round-button" onClick={this.handleClick1950.bind(this)}>1950</button>
                                <button className="round-button"onClick={this.handleClick1960.bind(this)}>1960</button>
                                <button className="round-button"onClick={this.handleClick1970.bind(this)}>1970</button>
                            </div>
                            <div style={{width:"100%"}}>
                                {click1940?
                               
                                 
                               <div className="flex-row" style={{height:"60vh"}}>
                               <img src={actors1940s}  style={{width:"90%"}} />
                              </div>
                                
                                :click1950?
                              
                               
                                <div className="flex-row" style={{height:"60vh"}}>
                                 <img src={actors1950s}  style={{width:"90%"}} />
                                </div>
                                :
                                click1960?
                                <div className="flex-row" style={{height:"60vh"}}>
                                 <img src={actors1960s}  style={{width:"90%"}} />
                                </div>:
                                click1970?
                                <div className="flex-row" style={{height:"60vh"}}>
                                 <img src={actors1970s}  style={{width:"90%"}} />
                                </div>:""
                                }
                            </div>
                        </div>
                            
                        </div>

                        </div>

                    <div style={{width:"100%",height:"90vh"}}>
                        <div className="flex-row" style={{height:"100%",width:"100%",gap:"20px"}}>
                            <div className="flex-row" style={{height:"100%",width:"65%"}}>
                                <div className="background pic3"></div>
                                <div className="background pic4"></div>
                            </div>
                            


                            <div className="flex-col" style={{marginRight:"2.5%",alignItems:'flex-end',width:"45%"}}>
                            <div className="title-3">   إحصائيات النوع الأدبي </div>
                            <div className="sub-text" style={{color:"black",marginBottom:"2rem"}}>اختار النوع لتري أكثر الممثلين ظهورا  به</div>
                            <div className="flex-row">
                                <button className="round-button" onClick={this.handleClickDrama.bind(this)}>  دراما </button>
                                <button className="round-button" onClick={this.handleClickRomance.bind(this)}> رومانسي  </button>
                                <button className="round-button"onClick={this.handleClickComedy.bind(this)}> كوميديا </button>
                                
                            </div>
                            <div>
                                {clickDrama?
                                <div className="flex-row" style={{height:"60vh"}}>
                                 <img src={actorsDrama}  style={{width:"90%"}} />
                                </div>
                                :clickRomance?
                                <div className="flex-row" style={{height:"60vh"}}>
                                 <img src={actorsRomance}  style={{width:"90%"}} />
                                </div >:
                                clickComedy?
                                <div className="flex-row" style={{height:"60vh"}}>
                                 <img src={actorsComedy}  style={{width:"90%"}} />
                                </div>:""
                                }
                            </div>
                        </div>
                            
                        </div>
                        
                
                    </div>

 
                 
                </div>

              
              
             </div>


        )
    }
}
