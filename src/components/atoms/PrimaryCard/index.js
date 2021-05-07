import React from 'react';
import Card from '@material-ui/core/Card';


const PrimaryCard = (props) => {
    return (
        <Card
            color="primary"
            raised={true}
            {...props}
        >
        </Card>
    );
};

export default PrimaryCard;