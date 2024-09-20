import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DailyComponent() {
  const loanData = [
    { amount: 10000, installment: 110 },
    { amount: 25000, installment: 275 },
    { amount: 50000, installment: 550 },
    { amount: 100000, installment: 1100 },
  ]

  return (
    <Card className="w-full max-w-6xl mx-auto dark:bg-background shadow-xl ">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-primary">How Daily Installment Works</CardTitle>
        <p className="text-muted-foreground mt-2">
          The loan amount will be recovered daily from the person according to the time & amount of loan they have.
        </p>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="dark:hover:bg-slate-400 ">
              <TableHead className="text-left dark:hover:text-white">Loan Amount (100 days)</TableHead>
              <TableHead className="text-right dark:hover:text-white">Daily Installment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loanData.map((loan, index) => (
              <TableRow className="dark:hover:bg-slate-400" key={index}>
                <TableCell className="text-left font-medium">{loan.amount.toLocaleString()}</TableCell>
                <TableCell className="text-right">{loan.installment.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-6 bg-primary/10 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-2">Key Benefits</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Flexible repayment schedule</li>
            <li>Lower daily payments for easier budgeting</li>
            <li>No hidden fees or charges</li>
            <li>Transparent loan terms and conditions</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}