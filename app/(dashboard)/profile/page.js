import ProfileHeader from "@/components/ui/ProfileHeader";
import WelcomeBackCard from "@/components/ui/WelcomeBackCard";
import CarInfoCard from "@/components/ui/CarInfoCard";
import ProfileInfoCard from "@/components/ui/ProfileInfoCard";
import PlatformSettingsCard from "@/components/ui/PlatformSettingsCard";
import ProjectsCard from "@/components/ui/ProjectsCard";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      {/* হেডার */}
      <ProfileHeader />

      {/* সারি ১: Welcome back / Car info / Profile info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <WelcomeBackCard />
        <div className="lg:col-span-1">
          <CarInfoCard />
        </div>
        <ProfileInfoCard />
      </div>

      {/* সারি ২: Platform Settings + Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1">
          <PlatformSettingsCard />
        </div>
        <div className="lg:col-span-2">
          <ProjectsCard />
        </div>
      </div>
    </div>
  );
}
