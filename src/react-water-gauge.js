const WaterGauge = React.createClass({
  propTypes: {
    size: React.PropTypes.number,
    backgroundColor: React.PropTypes.string, 
    liquidColor: React.PropTypes.string,
    percentColor: React.PropTypes.string 
  },
  getDefaultProps: function() {
    return {
      size: 100,
      backgroundColor: 'white', 
      liquidColor: 'blue',
      percentColor: 'white' 
    };
  },
  getInitialState: function(){
    return {
      percentComplete: 0
    };
  },
  componentDidMount: function(){
    this.updateCss();
  },
  componentDidUpdate: function(prevProps, prevState){
    this.updateCss();
  },
  updateCss(){
    document.getElementById("wave").style.top = 
      "" + (this.props.size - this.state.percentComplete*this.props.size/100 - 5) + "px";
    document.getElementById("wave").style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg' width='240' height='600'%3E%3Cg transform='scale(1,0.20000000149011612) '%3E%3Cpath fill='" + this.props.liquidColor + "' d='m425.600824,8090.652986c-161.801,-1.801 -112.507645,211.167255 -271.308645,209.366255c-158.801,-1.80101 -153.908645,-167.958678 -227.308645,-168.559678c-73.4,-0.601 -145.613992,-753.851837 -163.213992,-753.851837l-3.139912,-7341.522536c41.6,0 63.199,28.799 79.199,49.6c15.2,20 23.2,30.4 40.801,30.4c16.8,0 25.6,-10.4 40.8,-30.4c16,-20.8 36.8,-49.6 79.2,-49.6c42.399,0 63.199,28.799 79.199,49.6c15.2,20 23.2,30.4 40.801,30.4c16.8,0 25.6,-10.4 40.8,-30.4c16,-20.8 36.8,-49.6 79.2,-49.6c41.6,0 63.199,28.799 79.199,49.6c15.2,20 23.2,30.4 40.801,30.4l0,48l31.25926,973.48148z'/%3E%3C/g%3E%3C/svg%3E\")";
  },
  changePercentComplete(){
    if( this.state.percentComplete >= 100 ) return;
    this.setState({percentComplete: this.state.percentComplete+5})
  },
  render: function(){
    const { 
      backgroundColor, 
      liquidColor,
      percentColor,
      size
    } = this.props;
    
    const percentComplete = this.state.percentComplete;

    return (
      <div onClick={this.changePercentComplete.bind(this)}>
        <svg width={size} height={size} style={{zIndex: 5, overflow: "visible"}}>
          <circle id="surr-circle" r={(size/2)+3} cx={size/2} cy={size/2} fill="none" stroke={liquidColor} strokeWidth="2"/>
        </svg> 
        <div className="water-level"
          style={{
            backgroundColor: backgroundColor,
            height: size+"px",
            width: size+"px",
          }}>
          <svg id="svg" width={size} height={size}>
            <defs>
              <mask id="hole">
                <rect width="100%" height="100%" fill="white"/>
                <circle id="mask-circle" r={size/2} cx={size/2} cy={size/2}/>
              </mask>
            </defs>

            <rect id="rect" 
              width={size} height={size} 
              x="0" y="0" 
              fill={backgroundColor} mask="url(#hole)" />
          </svg>
          <div id="wave" 
            style={{
              height: size+30+"px",
              width: size+100+"px"
            }}/> 
          <h1 className="percentage" style={{color: percentColor}}>{percentComplete}%</h1>
        </div>
      </div>
      
    )
  }  
});

  