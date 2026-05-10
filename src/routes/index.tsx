import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MR·STEM — Experience STEM Like Never Before with Mixed Reality" },
      {
        name: "description",
        content:
          "An immersive Mixed Reality learning platform for Grades 6–9 covering Physics, Mathematics, ICT and Astronomy.",
      },
      { property: "og:title", content: "MR·STEM — Mixed Reality STEM Learning" },
      {
        property: "og:description",
        content: "Immersive STEM education for Grades 6–9 through Mixed Reality.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    // Redirect to the standalone single-file HTML site
    window.location.replace("/ProjectShilpaAR/stem-ar.html" + window.location.hash);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0e1a",
        color: "#e8ecf5",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <p>Loading MR·STEM…</p>
    </div>
  );
}
