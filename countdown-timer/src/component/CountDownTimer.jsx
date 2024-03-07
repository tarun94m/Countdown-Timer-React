const CountDownTimer=({duration=0})=>{
    const hh=parseInt(duration/3600);
    const mm=parseInt((duration%3600)/60);
    const ss=parseInt((duration%3600)%60);
    
    return(
        <div>
            {hh<10 && '0'}{hh}:{mm<10 && '0'}{mm}:{ss<10 && '0'}{ss}
        </div>
    )
}

export default CountDownTimer;