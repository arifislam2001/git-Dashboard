import { authors } from "@/lib/data";

function StatusBadge({ status }) {
  const isOnline = status === "Online";
  return (
    <span
      className={`text-xs px-3 py-1 rounded-full ${
        isOnline ? "bg-vision-cyan/20 text-vision-cyan" : "bg-white/10 text-vision-text-muted"
      }`}
    >
      {status}
    </span>
  );
}

function Avatar({ name, avatar }) {
  if (avatar) {
    return (
      <img
        src={avatar}
        alt={name}
        className="w-9 h-9 rounded-full object-cover"
      />
    );
  }

  const initial = name?.charAt(0).toUpperCase() || "?";
  return (
    <div className="w-9 h-9 rounded-full bg-vision-blue flex items-center justify-center text-xs font-semibold">
      {initial}
    </div>
  );
}

export default function AuthorsTable() {
  return (
    <div className="rounded-vision-lg bg-vision-card p-4">
      <h3 className="text-sm font-semibold">Authors Table</h3>

      <table className="w-full mt-4 text-sm">
        <thead>
          <tr className="text-left text-xs text-vision-text-muted">
            <th className="pb-2">AUTHOR</th>
            <th className="pb-2">FUNCTION</th>
            <th className="pb-2">STATUS</th>
            <th className="pb-2">EMPLOYED</th>
            <th className="pb-2"></th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.email} className="border-t border-white/5">
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <Avatar name={author.name} avatar={author.avatar} />
                  <div>
                    <p className="font-medium">{author.name}</p>
                    <p className="text-xs text-vision-text-muted">{author.email}</p>
                  </div>
                </div>
              </td>
              <td className="py-3">
                <p>{author.role}</p>
                <p className="text-xs text-vision-text-muted">{author.department}</p>
              </td>
              <td className="py-3">
                <StatusBadge status={author.status} />
              </td>
              <td className="py-3 text-vision-text-muted">{author.employed}</td>
              <td className="py-3 text-right">
                <button className="text-xs text-vision-text-muted hover:text-white transition">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}