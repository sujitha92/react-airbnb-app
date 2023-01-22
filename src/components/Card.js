function Card(props) {
    /*
    {props.openSpots===0 && <div className="card--soldout">Sold Out</div>}
     */
    let badge;
    if(props.openSpots===0 ){
        badge = "Sold Out";
    }else if(props.location==="Online"){
        badge = "Online";
    }

    return (
        <div className="card">
            {badge && <div className="card--soldout">{badge}</div>}
            <img src={props.url} className="card--image" alt="katie"/>
                <div className="card--ratings">
                    <img src="star.png" className="card--star" alt="katie"/>
                    <small>{props.rating}</small>
                    <small className="grey">({props.reviewCount}) {props.location}</small>
                </div>
            <small>{props.title}</small>
            <small><b>From ${props.price}</b> / person</small>
        </div>
    );
}

export default Card;