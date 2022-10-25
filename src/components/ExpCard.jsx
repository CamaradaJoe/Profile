import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function getLI(items){
    var x=[];
    for(var i = 0; i < items.length; i++){        
        x.push(<li id="expLI">
            {items[i]}
        </li>)
    }

     return(x);
}



function ExpCard(props){
    return(
        <Card id="expCard" >
            <Card.Header id="expCardHead">{props.title}<p id="expCardSubHead">{props.subTitle}</p></Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item id="expCardItem">
                    <ul id="expUL">
                        {getLI(props.items)}
                    </ul> 
                </ListGroup.Item>                            
            </ListGroup>
        </Card>
    );
}

export default ExpCard;