import "./Card.css";

function Card(props){
    //Tomar en cuenta el espacio entre card y las otras clases
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card; 

