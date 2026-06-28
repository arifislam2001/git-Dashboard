export default function WelcomeBackCard() {
  return (
    <div className="relative overflow-hidden rounded-vision-lg bg-gradient-to-br from-vision-blue via-blue-600 to-purple-700 p-6 h-full min-h-[260px] flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold">Welcome back!</h2>
        <p className="text-sm text-white/80 mt-2">Nice to see you, Mark Johnson!</p>
      </div>

  
      <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-white/10 rounded-full blur-2xl" />

      <button className="text-sm text-white/80 hover:text-white transition self-start">
        Turn on your car →
      </button>
    </div>
  );
}
