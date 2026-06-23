import AuthorsTable from "@/components/ui/AuthorsTable";
import ProjectsTable from "@/components/ui/ProjectsTable";

export default function TablesPage() {
  return (
    <div className="space-y-6">
      <AuthorsTable />
      <ProjectsTable />
    </div>
  );
}
