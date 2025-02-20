'use client'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, XAxis, YAxis, CartesianGrid, Bar, Legend, LineChart, Line } from "recharts";
import { Card, CardContent } from "../ui/card"; 

// Sample data
const adherenceData = [
  { name: "Took Medicine", value: 70 },
  { name: "Missed Medicine", value: 30 },
];

const userAdherenceData = [
  { day: "Monday", adherence: 80 },
  { day: "Tuesday", adherence: 70 },
  { day: "Wednesday", adherence: 90 },
  { day: "Thursday", adherence: 60 },
  { day: "Friday", adherence: 75 },
];

const weeklyComparisonData = [
  { day: "Monday", current: 80, previous: 75 },
  { day: "Tuesday", current: 70, previous: 65 },
  { day: "Wednesday", current: 90, previous: 85 },
  { day: "Thursday", current: 60, previous: 70 },
  { day: "Friday", current: 75, previous: 80 },
];

const COLORS = ["#82ca9d", "#ff726f"];

const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {/* Pie Chart for Medicine Adherence */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-2 text-green-700">Medicine Adherence</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={adherenceData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {adherenceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Bar Chart for Weekly User Adherence */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-2 text-blue-700">Weekly Adherence Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userAdherenceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="adherence" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Line Chart for Weekly Comparison */}
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-2 text-purple-700">Weekly Adherence Comparison</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyComparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="current" stroke="#8884d8" name="Current Week" />
              <Line type="monotone" dataKey="previous" stroke="#82ca9d" name="Previous Week" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCharts;
