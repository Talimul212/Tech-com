import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React from 'react';
import Loading from '../../Shered/Loading/Loading';
import AppointmenOption from './AppointmenOption';
import UseTitle from '../../../hooks/UseTitle';

const AvailableAppointments = ({ selectedDate }) => {
    UseTitle('All-Products')
    const date = format(selectedDate, 'PP');
    const { data: appointmenOptions = [], isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch('https://tech-com-server.vercel.app/appointmentOptions')
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section className='my-16'>
            <div className='mt-10 grid gap-8 lg:grid-cols-3 md:grid-cols-2'>
                {
                    appointmenOptions.map(appointmenOption => <AppointmenOption key={appointmenOption._id} appointmenOption={appointmenOption}
                    ></AppointmenOption>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;