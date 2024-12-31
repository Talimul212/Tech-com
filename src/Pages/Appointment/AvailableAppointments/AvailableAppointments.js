import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React from "react";
import Loading from "../../Shered/Loading/Loading";
import AppointmenOption from "./AppointmenOption";
import UseTitle from "../../../hooks/UseTitle";

const AvailableAppointments = ({ selectedDate }) => {
  UseTitle("All-Products");
  const date = format(selectedDate, "PP");
  const { data: appointmenOptions = [], isLoading } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        "https://tech-com-server.vercel.app/appointmentOptions"
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="my-7">
      <div className=" flex flex-col gap-9">
        {appointmenOptions.map((appointmenOption, i) => (
          <AppointmenOption
            key={appointmenOption._id}
            num={i}
            appointmenOption={appointmenOption}
          ></AppointmenOption>
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointments;
