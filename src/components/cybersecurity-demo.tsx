"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface ThreatEvent {
  id: number
  type: string
  severity: 'Low' | 'Medium' | 'High'
  status: 'Detected' | 'Analyzing' | 'Mitigated'
}

const threatTypes = ['Malware', 'Phishing', 'DDoS', 'SQL Injection', 'XSS']
const severities: ('Low' | 'Medium' | 'High')[] = ['Low', 'Medium', 'High']

export default function CybersecurityDemo() {
  const [events, setEvents] = useState<ThreatEvent[]>([])
  const [securityScore, setSecurityScore] = useState(100)

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {  // 30% chance of new threat
        const newThreat: ThreatEvent = {
          id: Date.now(),
          type: threatTypes[Math.floor(Math.random() * threatTypes.length)],
          severity: severities[Math.floor(Math.random() * severities.length)],
          status: 'Detected'
        }
        setEvents(prev => [...prev, newThreat])
        updateSecurityScore(newThreat.severity, 'decrease')
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const updateSecurityScore = (severity: 'Low' | 'Medium' | 'High', action: 'decrease' | 'increase') => {
    const change = severity === 'Low' ? 5 : severity === 'Medium' ? 10 : 15
    setSecurityScore(prev => Math.max(0, Math.min(100, prev + (action === 'decrease' ? -change : change))))
  }

  const handleThreat = (id: number) => {
    setEvents(prev => prev.map(event => {
      if (event.id === id) {
        if (event.status === 'Detected') {
          return { ...event, status: 'Analyzing' }
        } else if (event.status === 'Analyzing') {
          updateSecurityScore(event.severity, 'increase')
          return { ...event, status: 'Mitigated' }
        }
      }
      return event
    }))
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Security Dashboard</h3>
        <div className="flex items-center space-x-4">
          <span>Security Score:</span>
          <Progress value={securityScore} className="flex-grow" />
          <span>{securityScore}%</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Threat  Events</h3>
        {events.map(event => (
          <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <p className="font-semibold">{event.type}</p>
              <Badge variant={event.severity === 'Low' ? 'secondary' : event.severity === 'Medium' ? 'outline' : 'destructive'}>
                {event.severity}
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant={event.status === 'Detected' ? 'destructive' : event.status === 'Analyzing' ? 'outline' : 'secondary'}>
                {event.status}
              </Badge>
              {event.status !== 'Mitigated' && (
                <Button onClick={() => handleThreat(event.id)}>
                  {event.status === 'Detected' ? 'Analyze' : 'Mitigate'}
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}