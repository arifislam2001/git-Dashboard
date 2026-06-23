import SidebarRTL from "@/components/layout/SidebarRTL";
import TopbarRTL from "@/components/layout/TopbarRTL";

export default function RTLPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-vision-gradient flex flex-row-reverse -m-4 md:-m-6">
      
      <SidebarRTL />

      <div className="flex-1 flex flex-col min-h-screen">
        <TopbarRTL />

        <main className="flex-1 p-4 md:p-6 space-y-6" dir="rtl">
       
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "أموال اليوم", value: "53,000$", change: "+55%" },
              { title: "مستخدمو اليوم", value: "2,300", change: "+5%" },
              { title: "عملاء جدد", value: "3,052+", change: "-14%" },
              { title: "المبيعات الإجمالية", value: "173,000$", change: "+8%" },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-vision-lg bg-vision-card p-4 text-right"
              >
                <p className="text-xs text-vision-text-muted">{card.title}</p>
                <div className="flex items-center justify-end gap-2 mt-1">
                  <span className="text-vision-cyan text-xs">{card.change}</span>
                  <span className="text-lg font-semibold">{card.value}</span>
                </div>
              </div>
            ))}
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1 rounded-vision-lg bg-vision-card p-6 min-h-[200px] flex flex-col justify-between text-right">
              <div>
                <p className="text-sm text-vision-text-muted">مرحباً بعودتك،</p>
                <h2 className="text-2xl font-bold mt-1">مارك جونسون</h2>
                <p className="text-sm text-vision-text-muted mt-2">
                  سعيد برؤيتك مرة أخرى! اسألني أي شيء.
                </p>
              </div>
              <button className="text-sm text-vision-text-muted hover:text-white transition self-end">
                ← اضغط للتسجيل
              </button>
            </div>

            <div className="rounded-vision-lg bg-vision-card p-4 flex flex-col items-center justify-center text-right">
              <h3 className="text-sm font-semibold self-end">معدل الرضا</h3>
              <p className="text-xs text-vision-text-muted self-end">من جميع المشاريع</p>
              <p className="text-3xl font-bold mt-4 text-vision-blue">95%</p>
              <p className="text-xs text-vision-text-muted mt-1">بناءً على الإعجابات</p>
            </div>

            <div className="rounded-vision-lg bg-vision-card p-4 text-right">
              <h3 className="text-sm font-semibold">تتبع الإحالة</h3>
              <div className="flex gap-2 mt-4 flex-row-reverse">
                <div className="flex-1 rounded-lg bg-vision-card-light p-3">
                  <p className="text-xs text-vision-text-muted">تمت دعوتهم</p>
                  <p className="font-semibold mt-1">145 شخص</p>
                </div>
                <div className="flex-1 rounded-lg bg-vision-card-light p-3">
                  <p className="text-xs text-vision-text-muted">مكافأة</p>
                  <p className="font-semibold mt-1">1,465</p>
                </div>
              </div>
              <div className="flex flex-col items-center mt-4">
                <p className="text-2xl font-bold text-vision-cyan">9.3</p>
                <p className="text-xs text-vision-text-muted">النتيجة الإجمالية</p>
              </div>
            </div>
          </div>

          <div className="rounded-vision-lg bg-vision-card p-5 text-right">
            <h3 className="text-sm font-semibold">المشاريع</h3>
            <p className="text-xs text-vision-cyan mt-1">تم إنجاز 30 هذا الشهر</p>

            <table className="w-full mt-4 text-sm" dir="rtl">
              <thead>
                <tr className="text-right text-xs text-vision-text-muted">
                  <th className="pb-2">الشركات</th>
                  <th className="pb-2">الميزانية</th>
                  <th className="pb-2">الإنجاز</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "نسخة Chakra Soft UI", budget: "14,000$", completion: 60 },
                  { name: "إضافة تتبع التقدم", budget: "3,000$", completion: 10 },
                  { name: "إصلاح أخطاء المنصة", budget: "غير محدد", completion: 100 },
                ].map((p) => (
                  <tr key={p.name} className="border-t border-white/5">
                    <td className="py-3">{p.name}</td>
                    <td className="py-3 text-vision-text-muted">{p.budget}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2 flex-row-reverse">
                        <div className="w-24 h-1.5 rounded-full bg-vision-card-light overflow-hidden">
                          <div
                            className="h-full bg-vision-blue ml-auto"
                            style={{ width: `${p.completion}%` }}
                          />
                        </div>
                        <span className="text-xs text-vision-text-muted">{p.completion}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
