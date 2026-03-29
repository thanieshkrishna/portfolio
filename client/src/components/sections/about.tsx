import { type FC } from "react"

import { Heading, Paragraph, List, ListItem } from "@/components/ui/typography"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"

const About: FC = () => {
  return (
    <Container>
      <div className="py-8 px-4">
        <Heading>About Me</Heading>
        <Paragraph>I'm a full-stack developer with passion for creating beautiful and functional web applications.</Paragraph>

        <Heading as="h3">Journey</Heading>
        <Paragraph>Starting with HTML and CSS, I've evolved into a full-stack developer. The persecution of excellence in code accessibility and performance is what drives me.</Paragraph>
      </div>
    </Container>
  
  