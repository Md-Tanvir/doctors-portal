import React from 'react';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import Navigation from '../../Shared/Navigation/Navigation';
import AvaiableAppointment from '../AvailableAppoitnment/AvaiableAppointment';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            <AvaiableAppointment date={date}></AvaiableAppointment>
        </div>
    );
};

export default Appoinment;