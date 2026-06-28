import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ProfileInfoCard() {
  return (
    <div className="rounded-vision-lg bg-vision-card p-4 h-full">
      <h3 className="text-sm font-semibold">Profile Informations</h3>
      <p className="text-xs text-vision-text-muted mt-2 leading-relaxed">
        Hi, I'm Mark Johnson. Decisions: If you can't decide, the answer is no.
        If two equally difficult paths, choose the one more painful in the
        short term (pain avoidance is creating an illusion of equality).
      </p>

      <div className="mt-4 space-y-2 text-sm">
        <p>
          <span className="text-vision-text-muted">Full Name: </span>
          Mark Johnson
        </p>
        <p>
          <span className="text-vision-text-muted">Mobile: </span>
          (44) 1231234123
        </p>
        <p>
          <span className="text-vision-text-muted">Email: </span>
          mark@simmmple.com
        </p>
        <p>
          <span className="text-vision-text-muted">Location: </span>
          United States
        </p>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <p className="text-xs text-vision-text-muted">Social Media</p>
        <FaFacebook size={16} className="text-vision-text-muted cursor-pointer hover:text-white" />
        <FaTwitter size={16} className="text-vision-text-muted cursor-pointer hover:text-white" />
        <FaInstagram size={16} className="text-vision-text-muted cursor-pointer hover:text-white" />
      </div>
    </div>
  );
}