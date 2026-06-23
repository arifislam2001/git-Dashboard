import { profileProjects } from "@/lib/data";

export default function ProjectsCard() {
  return (
    <div className="rounded-vision-lg bg-vision-card p-4 ring-1 ring-vision-blue/30">
      <h3 className="text-sm font-semibold">Projects</h3>
      <p className="text-xs text-vision-text-muted mt-1">Architects design houses</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {profileProjects.map((project) => (
          <div key={project.id} className="flex flex-col">
            {/* TODO: project.image দিয়ে আসল ছবি বসান (next/image) */}
            <div className="w-full h-32 rounded-lg bg-gradient-to-br from-vision-blue/40 to-purple-600/40" />

            <p className="text-xs text-vision-text-muted mt-3">Project #{project.id}</p>
            <h4 className="font-semibold mt-1">{project.title}</h4>
            <p className="text-xs text-vision-text-muted mt-1 line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center justify-between mt-3">
              <button className="text-xs px-3 py-1.5 rounded-lg bg-vision-card-light hover:bg-white/10 transition">
                VIEW ALL
              </button>
              {/* TODO: টিম মেম্বার avatar গুলো বসান */}
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-red-400 border-2 border-vision-card" />
                <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-vision-card" />
                <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-vision-card" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
