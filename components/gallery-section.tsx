import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function GallerySection() {
  const projects = [
    {
      title: "Server Room Setup",
      category: "Infrastructure",
      image: "/server-room-setup-cable-management.jpg"
    },
    {
      title: "CCTV Surveillance Center",
      category: "Security",
      image: "/cctv-monitoring-room-screens.jpg"
    },
    {
      title: "Fire Safety Installation",
      category: "Safety",
      image: "/fire-alarm-system-installation.jpg"
    },
    {
      title: "Corporate Network",
      category: "Networking",
      image: "/office-network-rack-setup.jpg"
    },
    {
      title: "Solar Power System",
      category: "Power Backup",
      image: "/solar-panel-installation-roof.jpg"
    },
    {
      title: "Smart Office IoT",
      category: "Automation",
      image: "/smart-office-automation-system.jpg"
    }
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Work Gallery</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
            Glimpses of our technical excellence and project executions across Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary font-medium text-sm mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</span>
                <h3 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
