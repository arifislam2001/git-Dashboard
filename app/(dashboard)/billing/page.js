
import BillingCard from "@/components/ui/BillingCard";
import BillingInformationCard from "@/components/ui/BillingInformationCard";
import CreditBalanceCard from "@/components/ui/CreditBalanceCard ";
import InvoicesCard from "@/components/ui/InvoicesCard ";
import PaymentMethodCard from "@/components/ui/PaymentMethodCard";
import TransactionsCard from "@/components/ui/TransactionsCard ";

export default function BillingPage() {
  return (
    <div className="space-y-6">
      {/* সারি ১: কার্ড + Credit Balance + Invoices */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <BillingCard/>
        <CreditBalanceCard />
        <div className="lg:col-span-1">
          <InvoicesCard />
        </div>
      </div>

      {/* সারি ২: Payment Method (একা, পুরো width) */}
      <PaymentMethodCard />

      {/* সারি ৩: Billing Information + Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <BillingInformationCard />
        </div>
        <TransactionsCard/>
      </div>
    </div>
  );
}
