
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/Components/ui/card";
import bahget from '../../../public/images/body1.png'
import Link from "next/link";

const TopRatedDoctors = [
  {
    id: 1,
    name: "Dr. Ahmed Hassan",
    rating: 4.8,
    field: "Cardiologist",
    image: bahget,
  },
  {
    id: 2,
    name: "Dr. Sarah Ali",
    rating: 4.6,
    field: "Neurologist",
    image: bahget,
  },
  {
    id: 3,
    name: "Dr. Mohamed Youssef",
    rating: 4.9,
    field: "Dermatologist",
    image: bahget,
  },
  {
    id: 4,
    name: "Dr. Lina Khaled",
    rating: 4.7,
    field: "Pediatrician",
    image: bahget,
  },
];

const doctors = [
  {
    id: 1,
    name: "Dr. Ahmed Hassan",
    rating: 4.8,
    field: "Cardiologist",
    image: bahget,
  },
  {
    id: 2,
    name: "Dr. Sarah Ali",
    rating: 4.6,
    field: "Neurologist",
    image: bahget,
  },
  {
    id: 3,
    name: "Dr. Mohamed Youssef",
    rating: 4.9,
    field: "Dermatologist",
    image: bahget,
  },
  {
    id: 4,
    name: "Dr. Lina Khaled",
    rating: 4.7,
    field: "Pediatrician",
    image: bahget,
  },
  {
    id: 5,
    name: "Dr. Mohammed emmad",
    rating: 4.7,
    image: bahget,
  },
  {
    id: 6,
    name: "Dr. AboTarek",
    rating: 4.7,
    field: "Pediatrician",
    image: bahget,
  },
  {
    id: 7,
    name: "Dr. Fady",
    rating: 4.7,
    field: "Pediatrician",
    image: bahget,
  },
  {
    id: 8,
    name: "Dr. AbdelRaf3",
    rating: 4.7,
    field: "Pediatrician",
    image: bahget,
  },
];

const DoctorsPage= () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Top Rated Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {TopRatedDoctors.map((doctor) => (
          <Link href={'/dashboard/doctor/doctordetails'} key={doctor.id} >
          <Card className="p-4 shadow-md hover:shadow-lg transition-all">
            <CardContent className="flex flex-col items-center">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={60}
                height={60}
                className="rounded-full border-4 border-blue-500"
              />
              <h2 className="text-lg font-semibold mt-3">{doctor.name}</h2>
              <p className="text-sm text-gray-600">{doctor.field}</p>
              <div className="flex items-center mt-2 text-yellow-500">
                <div>😆</div>
                <span className="ml-1 text-gray-700 font-medium">{doctor.rating}</span>
              </div>
            </CardContent>
          </Card>
          </Link>
        ))}
      </div>

        <h1 className="my-5">Doctors</h1>
        <div className="grid grid-cols-1 gap-6">
        {doctors.map((doctor) => (
          <Link href={`/dashboard/doctor/${doctor.id}`} key={doctor.id} >
          <Card className="p-4 shadow-md hover:shadow-lg transition-all">
            <CardContent className="flex flex-col items-start">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={60}
                height={60}
                className="rounded-full border-4 border-blue-500"
              />
              <h2 className="text-lg font-semibold mt-3">{doctor.name}</h2>
              <p className="text-sm text-gray-600">{doctor.field}</p>
              <div className="flex items-center mt-2 text-yellow-500">
                <div>😆</div>
                <span className="ml-1 text-gray-700 font-medium">{doctor.rating}</span>
              </div>
            </CardContent>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;
