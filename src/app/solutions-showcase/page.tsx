"use client"

import { useState } from 'react'
// import { Metadata } from 'next'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PageTransition from '@/components/page-transition'
import DataVisualization from '@/components/data-visualization'
import TaskManagementDemo from '@/components/task-management-demo'
import DataAnalyticsDemo from '@/components/data-analytics-demo'
import CloudSolutionsDemo from '@/components/cloud-solutions-demo'
import CybersecurityDemo from '@/components/cybersecurity-demo'

// export const metadata: Metadata = {
//   title: 'Solutions Showcase - Q3M Wanda Solutions',
//   description: 'Explore interactive data visualizations and product demos showcasing Q3M Wanda Solutions capabilities.',
// }

export default function SolutionsShowcasePage() {
  const [activeTab, setActiveTab] = useState("visualization")

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">Solutions Showcase</h1>
        <p className="text-xl mb-12 text-center max-w-2xl mx-auto">
          Explore interactive demonstrations of our data analysis capabilities and product features.
        </p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="visualization">Data Visualization</TabsTrigger>
            <TabsTrigger value="taskManagement">Task Management</TabsTrigger>
            <TabsTrigger value="dataAnalytics">Data Analytics</TabsTrigger>
            <TabsTrigger value="cloudSolutions">Cloud Solutions</TabsTrigger>
            <TabsTrigger value="cybersecurity">Cybersecurity</TabsTrigger>
          </TabsList>
          <TabsContent value="visualization">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Data Visualization</CardTitle>
                <CardDescription>
                  Explore our sample dataset to see how Q3M Wanda Solutions can help you gain insights from your data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DataVisualization />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="taskManagement">
            <Card>
              <CardHeader>
                <CardTitle>Task Management Demo</CardTitle>
                <CardDescription>
                  Experience a hands-on demonstration of our task management system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TaskManagementDemo />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="dataAnalytics">
            <Card>
              <CardHeader>
                <CardTitle>Data Analytics Platform</CardTitle>
                <CardDescription>
                  Discover how our advanced analytics can uncover hidden patterns in your data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DataAnalyticsDemo />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="cloudSolutions">
            <Card>
              <CardHeader>
                <CardTitle>Cloud Solutions Simulator</CardTitle>
                <CardDescription>
                  Simulate cloud infrastructure management and scaling with our intuitive interface.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CloudSolutionsDemo />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="cybersecurity">
            <Card>
              <CardHeader>
                <CardTitle>Cybersecurity Threat Detection</CardTitle>
                <CardDescription>
                  See how our AI-powered system detects and responds to potential security threats in real-time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CybersecurityDemo />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  )
}