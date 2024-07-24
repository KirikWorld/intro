"use client";
import { Avatar, Box, Card, Fade } from "@mui/material";
import { useState } from "react";
import projects from "./projects.ts";

export function Project({ project }: { project: (typeof projects)[number] }) {
  const [isMouseIn, setIsMouseIn] = useState(false);

  return (
    <>
      <Card
        sx={{
          width: 300,
          height: 180,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 2,
          border: "1px solid #ccc",
          overflow: "hidden",
          position: "relative"
        }}
        onMouseEnter={() => setIsMouseIn(true)}
        onMouseLeave={() => setIsMouseIn(false)}
        component={"a"}
        href={project.url}
        target="_blank"
      >
        <Avatar
          src={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            height: "100%",
            transition: "transform 0.2s ease-in-out",
            transform: isMouseIn ? "scale(1.1)" : "scale(1)"
          }}
          variant="square"
        />
        <Fade in={isMouseIn} timeout={200} style={{ transitionTimingFunction: "ease-in-out" }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          />
        </Fade>
      </Card>
    </>
  );
}
