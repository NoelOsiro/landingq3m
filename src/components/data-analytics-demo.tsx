"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const initialData = [
  { name: 'Jan', sales: 4000, customers: 2400 },
  { name: 'Feb', sales: 3000, customers: 1398 },
  { name: 'Mar', sales: 2000, customers: 9800 },
  { name: 'Apr', sales: 2780, customers: 3908 },
  { name: 'May', sales: 1890, customers: 4800 },
  { name: 'Jun', sales: 2390, customers: 3800 },
]

export default function DataAnalyticsDemo() {
  const [data, setData] = useState(initialData)
  const [prediction, setPrediction] = useState<number | null>(null)
  const [selectedMonth, setSelectedMonth] = useState('')
  const [salesInput, setSalesInput] = useState('')

  const runPrediction = () => {
    // This is a simplified prediction model for demonstration purposes
    const averageSales = data.reduce((sum, item) => sum + item.sales, 0) / data.length
    const predictedCustomers = Math.round(averageSales * 0.6 + Math.random() * 1000)
    setPrediction(predictedCustomers)
  }

  const addDataPoint = () => {
    if (selectedMonth && salesInput) {
      const newData = [...data, { name: selectedMonth, sales: parseInt(salesInput), customers: 0 }]
      setData(newData)
      setSelectedMonth('')
      setSalesInput('')
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Historical Data</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#8884d8" />
              <Line yAxisId="right" type="monotone" dataKey="customers" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Add New Data Point</h3>
        <div className="flex space-x-4">
          <div className="space-y-2">
            <Label htmlFor="month-select">Month</Label>
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger id="month-select" className="w-[180px]">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Jul">July</SelectItem>
                <SelectItem value="Aug">August</SelectItem>
                <SelectItem value="Sep">September</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="sales-input">Sales</Label>
            <Input
              id="sales-input"
              type="number"
              value={salesInput}
              onChange={(e) => setSalesInput(e.target.value)}
              placeholder="Enter sales amount"
            />
          </div>
          <Button onClick={addDataPoint} className="mt-8">Add Data</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Customer Prediction</h3>
        <Button onClick={runPrediction}>Predict Next Month&apos;s Customers</Button>
        {prediction !== null && (
          <p className="text-lg">Predicted customers for next month: <strong>{prediction}</strong></p>
        )}
      </div>
    </div>
  )
}