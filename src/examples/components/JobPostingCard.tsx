/**
 * This is a sample component made from the @unclub/react-ui library components
 */

/**
 * This component is not bundled in library
 */

import React from 'react';
import {Card, CardBody, Badge, Button, Avatar} from '../../index';

const JobPostingCard = () => {
    return (
        <Card>
            <CardBody>
                <div className="flex flex-row">
                    <Avatar
                        className="mb-4 mr-2.5"
                        src="https://www.freepnglogos.com/uploads/tesla-logo-red-png-0.png"
                    />
                    Associate Service Manager <br /> Tesla in london
                </div>
                <div className="mt-6 mb-2">
                    <Badge>Responsive Employer</Badge>
                    <Badge className="ml-2" type="danger">
                        Urgent hiring
                    </Badge>
                </div>
                <p className="mt-6">
                    Tesla's Associate Service Managers are responsible for driving excellent results
                    in customers service and operational efficiency in our service centers
                </p>
                <div className="m-1 flex justify-end mt-4">
                    <Button size="regular">See more</Button>
                </div>
                <p className="opacity-50 text-sm mt-4">August 31, 2021. 6:43 AM</p>
            </CardBody>
        </Card>
    );
};

export default JobPostingCard;
