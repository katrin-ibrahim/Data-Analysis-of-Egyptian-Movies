import React, { Component } from 'react'
import Navbar from '../components/Navbar'

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
                                <div className="background pic1">p1</div>
                                <div className="background pic2">p2</div>
                            </div>
                            


                        <div className="flex-col" style={{marginRight:"2.5%",alignItems:'flex-end',width:"45%"}}>
                            <div className="title-2" style={{color:"black"}}>إحصائيات الحقبة </div>
                            <div className="sub-text" style={{color:"black",marginBottom:"2rem"}}>اختار السنة لتري أكثر الممثلين ظهورا  بها</div>
                            <div className="flex-row">
                                <button className="round-button" onClick={this.handleClick1940.bind(this)}>1940</button>
                                <button className="round-button" onClick={this.handleClick1950.bind(this)}>1950</button>
                                <button className="round-button"onClick={this.handleClick1960.bind(this)}>1960</button>
                                <button className="round-button"onClick={this.handleClick1970.bind(this)}>1970</button>
                            </div>
                            <div style={{width:"100%"}}>
                                {click1940?
                               
                                 
                                 <div className="actorEra50s">its 1940</div>
                                
                                :click1950?
                              
                               
                                <div style={{width:"100%",height:"35vh"}}>
                                    <div className="actorEra50s" > its 1950</div>
                                </div>
                                :
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
                            
                        </div>

                        </div>

                    <div style={{width:"100%",height:"80vh"}}>
                        <div className="flex-row" style={{height:"100%",width:"100%",gap:"20px"}}>
                            <div className="flex-row" style={{height:"100%",width:"65%"}}>
                                <div className="background pic3">p1</div>
                                <div className="background pic4">p2</div>
                            </div>
                            


                            <div className="flex-col" style={{marginRight:"2.5%",alignItems:'flex-end',width:"45%"}}>
                            <div className="title-2" style={{color:"black"}}>   إحصائيات النوع الأدبي </div>
                            <div className="sub-text" style={{color:"black",marginBottom:"2rem"}}>اختار النوع لتري أكثر الممثلين ظهورا  به</div>
                            <div className="flex-row">
                                <button className="round-button" onClick={this.handleClickDrama.bind(this)}>  دراما </button>
                                <button className="round-button" onClick={this.handleClickRomance.bind(this)}> رومانسي  </button>
                                <button className="round-button"onClick={this.handleClickComedy.bind(this)}> كوميديا </button>
                                
                            </div>
                            <div>
                                {clickDrama?
                                <div >
                                its drama
                                </div>
                                :clickRomance?
                                <div >
                                its romance
                                </div>:
                                clickComedy?
                                <div >
                                its comedy
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
