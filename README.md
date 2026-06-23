# Vision UI Dashboard — Plain JavaScript ভার্সন

এই ভার্সনটা সম্পূর্ণ প্লেইন JavaScript (.js / .mjs) দিয়ে বানানো — কোনো TypeScript সিনট্যাক্স নেই,
যাতে আপনার `create-next-app` (জেনারেট করা `jsconfig.json` প্রজেক্ট) এর সাথে সরাসরি মিলে যায়।

## ইনস্টল করার নিয়ম

আপনার পুরোনো প্রজেক্টের `node_modules` আর `package.json` রেখে দিয়ে শুধু বাকি ফাইলগুলো বদলাতে চাইলে:

1. এই zip এর সব ফাইল আপনার প্রজেক্ট ফোল্ডারে কপি করুন (replace করুন যদি জিজ্ঞেস করে)
2. টার্মিনালে:
   ```
   npm install
   npm run dev
   ```

নতুন করে শুরু করতে চাইলে:
```bash
unzip vision-dashboard-js.zip
cd vision-dashboard-js
npm install
npm run dev
```

তারপর `http://localhost:3000` খুললে `/dashboard` এ রিডাইরেক্ট হবে।

## গুরুত্বপূর্ণ — এই ভার্সনে যা ঠিক করা আছে

- **সব ফাইল `.js`** — কোনো `interface`, `: Type` টাইপ অ্যানোটেশন নেই
- **`postcss.config.mjs`** — `export default` সিনট্যাক্স (ES Module), `module.exports` না
- **`next.config.mjs`** — একই কারণে `export default`
- **`app/globals.css`** — Tailwind v4 এর নতুন নিয়মে লেখা (`@import "tailwindcss"` + `@theme` ব্লক), পুরোনো `tailwind.config.js` + `@tailwind base/components/utilities` সিস্টেম (v3) ব্যবহার করা হয়নি
- **`tailwind.config.js` ফাইলের প্রয়োজন নেই** — v4 তে কালার থিম সরাসরি CSS এ (`@theme` এর ভেতরে) সংজ্ঞায়িত

## ফোল্ডার স্ট্রাকচার

```
app/
├── layout.js
├── page.js                     → "/" → "/dashboard" রিডাইরেক্ট
├── globals.css                 → Tailwind v4 থিম + dark base style
└── (dashboard)/
    ├── layout.js                → Sidebar + Topbar wrap করে
    ├── dashboard/page.js        → মূল dashboard (পুরোপুরি বানা)
    ├── tables/page.js           → placeholder
    ├── billing/page.js          → placeholder
    ├── rtl/page.js              → placeholder
    ├── profile/page.js          → placeholder
    ├── signin/page.js           → placeholder
    └── signup/page.js           → placeholder

components/
├── layout/
│   ├── Sidebar.js
│   └── Topbar.js
└── ui/
    ├── StatCard.js
    ├── WelcomeCard.js
    ├── CircularProgress.js
    ├── ReferralCard.js
    ├── SalesChart.js
    ├── ActiveUsersChart.js
    ├── ProjectsTable.js
    └── OrdersOverview.js

lib/
├── data.js                      → সব ডামি ডেটা এক জায়গায়
└── utils.js                     → cn() হেল্পার
```

## যদি এখনো রঙ/স্টাইল না আসে

1. `npm list tailwindcss` চালিয়ে দেখুন v4.x আছে কিনা
2. `npm list @tailwindcss/postcss` চালিয়ে দেখুন প্যাকেজ ইনস্টল আছে কিনা — না থাকলে:
   ```
   npm install @tailwindcss/postcss tailwindcss
   ```
3. dev server বন্ধ করে (Ctrl+C) আবার চালান (`npm run dev`) — Tailwind config বদলালে রিস্টার্ট লাগে, শুধু রিফ্রেশে কাজ হয় না

## বাকি যা করতে হবে (TODO)

- [ ] `WelcomeCard.js` এ hero/jellyfish ইমেজ বসানো
- [ ] Sidebar/Topbar এ আসল avatar ইমেজ
- [ ] `tables`, `billing`, `rtl`, `profile`, `signin`, `signup` এর আসল কন্টেন্ট লেখা
- [ ] `lib/data.js` এর ডামি ডেটা আসল API দিয়ে রিপ্লেস করা
