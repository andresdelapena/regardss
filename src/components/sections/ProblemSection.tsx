import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="container py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Professional Emails Take Too Much Time.
        </h2>
        <div className="mx-auto max-w-[800px] grid gap-8 md:grid-cols-2">
          <Card className="border-primary bg-transparent">
            <CardContent className="p-6 space-y-4 bg-transparent">
              <h3 className="font-bold text-xl">Regardss</h3>
              <ul className="space-y-3 text-left">
                {[
                  "Sounds Like You: Emails match your tone perfectly.",
                  "Saves Time: No long prompts or edits needed.",
                  "Understands Your Role: Knows your tasks and relationships.",
                  "Easy to Use: Turn bullet points into polished emails.",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-transparent">
            <CardContent className="p-6 space-y-4 bg-transparent">
              <h3 className="font-bold text-xl">Other AI Tools</h3>
              <ul className="space-y-3 text-left">
                {[
                  "Robotic Tone: Emails feel generic and fake.",
                  "Time Wasted: You tell it what to do each time.",
                  "No Context: Doesn't adapt to your role.",
                  "Complicated: Requires detailed, time-consuming prompts.",
                ].map((limitation, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{limitation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}