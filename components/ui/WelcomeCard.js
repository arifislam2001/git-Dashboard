export default function WelcomeCard() {
  return (
    <div className="relative overflow-hidden rounded-vision-lg bg-vision-card p-6 h-full min-h-[260px] flex flex-col justify-between">
      <div>
        <p className="text-sm text-vision-text-muted">Welcome back,</p>
        <h2 className="text-2xl font-bold mt-1">Mark Johnson</h2>
        <p className="text-sm text-vision-text-muted mt-2 max-w-[60%]">
          Glad to see you again! Ask me anything.
        </p>
      </div>

   
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-br from-vision-blue/30 to-transparent" />

      <button className="text-sm text-vision-text-muted hover:text-white transition self-start">
        Tap to record →
      </button>
    </div>
  );
}
