"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"

interface Server {
  id: number
  load: number
}

export default function CloudSolutionsDemo() {
  const [servers, setServers] = useState<Server[]>([
    { id: 1, load: 50 },
    { id: 2, load: 30 },
  ])
  const [totalLoad, setTotalLoad] = useState(80)

  const addServer = () => {
    const newServer = { id: servers.length + 1, load: 0 }
    setServers([...servers, newServer])
    redistributeLoad()
  }

  const removeServer = (id: number) => {
    const updatedServers = servers.filter(server => server.id !== id)
    setServers(updatedServers)
    redistributeLoad()
  }

  const redistributeLoad = () => {
    const serverCount = servers.length
    const loadPerServer = Math.floor(totalLoad / serverCount)
    const remainder = totalLoad % serverCount

    const updatedServers = servers.map((server, index) => ({
      ...server,
      load: loadPerServer + (index < remainder ? 1 : 0)
    }))

    setServers(updatedServers)
  }

  const handleLoadChange = (newLoad: number[]) => {
    setTotalLoad(newLoad[0])
    redistributeLoad()
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Cloud Infrastructure Simulator</h3>
        <p>Total Load: {totalLoad}%</p>
        <Slider
          value={[totalLoad]}
          onValueChange={handleLoadChange}
          max={100}
          step={1}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Servers</h3>
        {servers.map(server => (
          <div key={server.id} className="flex items-center space-x-4">
            <span className="w-24">Server {server.id}</span>
            <Progress value={server.load} className="flex-grow" />
            <span className="w-16 text-right">{server.load}% load</span>
            <Button variant="destructive" onClick={() => removeServer(server.id)}>Remove</Button>
          </div>
        ))}
        <Button onClick={addServer}>Add Server</Button>
      </div>
    </div>
  )
}