import { type FC } from "react"
import Image from "next/image"

import { Heading, Paragraph } from "@/components/ui/typography"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Work: FC = () => {
  return (
    <Container>
      <div className="py-8 px-4">
        <Heading>Work</Heading>
        <Paragraph>Here is a collection of recent work I've done.</Paragraph>

        <div className="grid gap-6 sy-8">
  
  