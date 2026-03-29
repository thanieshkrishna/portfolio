import { type FC } from "react"

import { Heading, Paragraph, List, ListItem } from "@/components/ui/typography"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Experience {
  title: string
  company: string
  date: string
  description: string
  skills: string[]
}

const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "TecNCo",
    date: "2020 - Present",
    description: "Built scalable web applications using React, TypeScript, Node.js and theweb. Responsible for eire stack from design to deployment.",
    skills: ["React", "TypeScript", "Node.js", "PostgresQL"]
  }
  
  