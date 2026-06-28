

import { Wallet, Globe2, Users, ShoppingCart } from "lucide-react";

export const statCards = [
  { title: "Today's Money", value: "$53,000", change: "+55%", positive: true, icon: "wallet" },
  { title: "Today's Users", value: "2,300", change: "+5%", positive: true, icon: "globe" },
  { title: "New Clients", value: "+3,052", change: "-14%", positive: false, icon: "users" },
  { title: "Total Sales", value: "$173,000", change: "+8%", positive: true, icon: "cart" },
];

export const salesData = [
  { month: "Jan", value: 280 },
  { month: "Feb", value: 200 },
  { month: "Mar", value: 220 },
  { month: "Apr", value: 380 },
  { month: "May", value: 330 },
  { month: "Jun", value: 250 },
  { month: "Jul", value: 280 },
  { month: "Aug", value: 380 },
  { month: "Sep", value: 350 },
  { month: "Oct", value: 280 },
  { month: "Nov", value: 220 },
  { month: "Dec", value: 360 },
];

export const activeUsersData = [
  { day: "Mon", value: 200 },
  { day: "Tue", value: 350 },
  { day: "Wed", value: 150 },
  { day: "Thu", value: 380 },
  { day: "Fri", value: 280 },
  { day: "Sat", value: 420 },
  { day: "Sun", value: 250 },
];

export const activeUsersStats = [
  { label: "Users", value: "32,984" },
  { label: "Clicks", value: "2.42m" },
  { label: "Sales", value: "2,400$" },
  { label: "Items", value: "320" },
];

export const projects = [
  {
    name: "Chakra Soft UI Version",
    icon: "Xd",
    iconColor: "#ff61f6",
    budget: "$14,000",
    status: "Working",
    completion: 60,
  },
  {
    name: "Add Progress Track",
    icon: "▲",
    iconColor: "#0075ff",
    budget: "$3,000",
    status: "Canceled",
    completion: 10,
  },
  {
    name: "Fix Platform Errors",
    icon: "✦",
    iconColor: "#01b574",
    budget: "Not set",
    status: "Done",
    completion: 100,
  },
  {
    name: "Launch our Mobile App",
    icon: "●",
    iconColor: "#01b574",
    budget: "$32,000",
    status: "Done",
    completion: 100,
  },
  {
    name: "Add the New Pricing Page",
    icon: "◆",
    iconColor: "#0075ff",
    budget: "$400",
    status: "Working",
    completion: 25,
  },
  {
    name: "Redesign New Online Shop",
    icon: "■",
    iconColor: "#ff6b6b",
    budget: "$7,600",
    status: "Working",
    completion: 40,
  },
];

export const orders = [
  { title: "$2400. Design changes", time: "22 DEC 7:20 PM" },
  { title: "New order #4219423", time: "21 DEC 11:21 PM" },
  { title: "Server Payments for April", time: "21 DEC 9:28 PM" },
  { title: "New card added for order #3210145", time: "20 DEC 3:52 PM" },
  { title: "Unlock packages for Development", time: "19 DEC 11:35 PM" },
  { title: "New order #9851258", time: "18 DEC 4:41 PM" },
];

// Tables পেজের "Authors Table" এর ডামি ডেটা
// avatar না দিলে UI অটো প্লেসহোল্ডার (নামের প্রথম অক্ষর) দেখাবে
export const authors = [
  {
    name: "Esthera Jackson",
    email: "esthera@simmmple.com",
    avatar: null,
    role: "Manager",
    department: "Organization",
    status: "Online",
    employed: "14/06/21",
  },
  {
    name: "Alexa Liras",
    email: "alexa@simmmple.com",
    avatar: null,
    role: "Programmer",
    department: "Developer",
    status: "Offline",
    employed: "14/06/21",
  },
  {
    name: "Laurent Michael",
    email: "laurent@simmmple.com",
    avatar: null,
    role: "Executive",
    department: "Projects",
    status: "Online",
    employed: "14/06/21",
  },
  {
    name: "Freduardo Hill",
    email: "freduardo@simmmple.com",
    avatar: null,
    role: "Manager",
    department: "Organization",
    status: "Online",
    employed: "14/06/21",
  },
  {
    name: "Daniel Thomas",
    email: "daniel@simmmple.com",
    avatar: null,
    role: "Programmer",
    department: "Developer",
    status: "Offline",
    employed: "14/06/21",
  },
  {
    name: "Mark Wilson",
    email: "mark@simmmple.com",
    avatar: null,
    role: "Designer",
    department: "UI/UX Design",
    status: "Offline",
    employed: "14/06/21",
  },
];
// Billing পেজের ডামি ডেটা — lib/data.js এর শেষে যুক্ত করুন

export const invoices = [
  { date: "March, 01, 2020", id: "#MS-415646", amount: "$180" },
  { date: "February, 10, 2021", id: "#RV-126749", amount: "$250" },
  { date: "April, 05, 2020", id: "#FB-212562", amount: "$560" },
  { date: "June, 25, 2019", id: "#QW-103578", amount: "$120" },
  { date: "March, 01, 2019", id: "#AR-803481", amount: "$300" },
];

export const paymentMethods = [
  { type: "mastercard", number: "7812 2139 0823 XXXX" },
  { type: "visa", number: "7812 2139 0823 XXXX" },
];

export const billingInfo = [
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@bburito.com",
    vat: "FRB1235476",
  },
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@bburito.com",
    vat: "FRB1235476",
  },
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@bburito.com",
    vat: "FRB1235476",
  },
];

export const transactions = [
  {
    group: "NEWEST",
    items: [
      { name: "Netflix", time: "27 March 2020, at 12:30 PM", amount: "-$2500", type: "expense" },
      { name: "Apple", time: "27 March 2020, at 12:30 PM", amount: "+$2500", type: "income" },
    ],
  },
  {
    group: "YESTERDAY",
    items: [
      { name: "Stripe", time: "26 March 2020, at 13:45 PM", amount: "+$800", type: "income" },
      { name: "HubSpot", time: "26 March 2020, at 12:30 PM", amount: "+$1700", type: "income" },
      { name: "Webflow", time: "26 March 2020, at 05:00 AM", amount: "Pending", type: "pending" },
      { name: "Microsoft", time: "25 March 2020, at 16:30 PM", amount: "-$987", type: "expense" },
    ],
  },
];

// Profile পেজের ডামি ডেটা — lib/data.js এর শেষে যুক্ত করুন

export const profileProjects = [
  {
    id: "01",
    title: "Modern",
    description: "As Uber works through a huge amount of internal management turmoil.",
    image: null, // পরে আসল ছবি/URL দিয়ে বদলান
  },
  {
    id: "02",
    title: "Scandinavian",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: null,
  },
  {
    id: "03",
    title: "Minimalist",
    description: "Different people have different taste, and various types of music.",
    image: null,
  },
];

export const platformSettings = {
  account: [
    { label: "Email me when someone follows me", enabled: true },
    { label: "Email me when someone answers to...", enabled: false },
    { label: "Email me when someone mentions me", enabled: true },
  ],
  application: [
    { label: "New launches and projects", enabled: false },
    { label: "Monthly product updates", enabled: false },
    { label: "Subscribe to newsletter", enabled: true },
    { label: "Receive mails weekly", enabled: true },
  ],
};