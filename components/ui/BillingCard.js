export default function BillingCard() {
  return (
    <div className="rounded-vision-lg bg-gradient-to-br from-vision-blue via-blue-600 to-purple-700 p-5 h-full flex flex-col justify-between min-h-[180px]">
      <div className="flex items-center justify-between">
        <p className="font-semibold">Vision UI</p>
        <div className="w-8 h-6 rounded bg-white/20" />
      </div>

      <p className="text-xl tracking-widest font-medium mt-4">
        7812 2139 0823 XXXX
      </p>

      <div className="flex items-center justify-between text-xs text-white/70 mt-2">
        <div>
          <p className="uppercase">Valid Thru</p>
          <p className="text-white">05/24</p>
        </div>
        <div>
          <p className="uppercase">CVV</p>
          <p className="text-white">09X</p>
        </div>
      </div>
    </div>
  );
}