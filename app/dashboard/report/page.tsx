"use client";

import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const reportData = {
  user: {
    name: "John Doe",
    doctor: "Dr. Ahmed Hassan",
    medicine: "Metformin",
    adherence: 85,
    missedDoses: 2,
    comment: "You have to be careful about your dose.",
  },
  progress: [
    { date: "Feb 1", score: 60 },
    { date: "Feb 5", score: 70 },
    { date: "Feb 10", score: 80 },
    { date: "Feb 15", score: 65 },
  ],
  bloodPressure: [
    { date: "Feb 1", systolic: 120, diastolic: 80 },
    { date: "Feb 5", systolic: 125, diastolic: 82 },
    { date: "Feb 10", systolic: 118, diastolic: 78 },
    { date: "Feb 15", systolic: 130, diastolic: 85 },
  ],
  bloodSugar: [
    { date: "Feb 1", sugar: 95 },
    { date: "Feb 5", sugar: 110 },
    { date: "Feb 10", sugar: 105 },
    { date: "Feb 15", sugar: 98 },
  ],
};

const handlePrint = () => {
  window.print();
};

const UserReport = () => {
  return (
    <div className="p-6 print-section">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">User Report</h1>

      {/* User Details Card */}
      <Card className="mb-4 p-4">
        <CardContent>
          <p><strong>Patient:</strong> {reportData.user.name}</p>
          <p><strong>Doctor:</strong> {reportData.user.doctor}</p>
          <p><strong>Medicine:</strong> {reportData.user.medicine}</p>
          <p><strong>Missed Doses:</strong> <span className="text-red-500">{reportData.user.missedDoses}</span></p>
          <p><strong>Adherence:</strong> {reportData.user.adherence}%</p>
          <p><strong>Comment:</strong> {reportData.user.comment}</p>
        </CardContent>
      </Card>

      {/* Patient Progress Chart */}
      <Card className="mb-4 p-4">
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Patient Progress</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={reportData.progress}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Blood Pressure Chart */}
      <Card className="mb-4 p-4">
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Blood Pressure (Systolic & Diastolic)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={reportData.bloodPressure}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="systolic" stroke="#ef4444" strokeWidth={2} name="Systolic" />
              <Line type="monotone" dataKey="diastolic" stroke="#10b981" strokeWidth={2} name="Diastolic" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Blood Sugar Chart */}
      <Card className="p-4">
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Blood Sugar Levels</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={reportData.bloodSugar}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sugar" stroke="#f59e0b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Print Button */}
      <div className="mt-5">
        <Button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
          🖨️ Print Report
        </Button>
      </div>
    </div>
  );
};

export default UserReport;
