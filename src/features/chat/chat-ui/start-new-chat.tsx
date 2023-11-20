import Typography from "@/components/typography";
import { Card } from "@/components/ui/card";
import { AI_NAME } from "@/features/theme/customise";
import Image from "next/image";
import { FC } from "react";
import { NewChat } from "../chat-menu/new-chat";

interface Prop {}

export const StartNewChat: FC<Prop> = (props) => {
  return (
    <div className="grid grid-cols-5 w-full items-center container mx-auto max-w-6xl justify-center h-full gap-9">
      <div className="col-span-4 gap-5 flex flex-col flex-1">
        <Image width={300} height={150} alt="" src="/logo.png" />
      
      <Card className="col-span-3 flex flex-col gap-5 p-5 ">
        <Typography variant="h4" className="text-primary">
          {AI_NAME}
        </Typography>
        <div className="flex flex-col gap-2">
          <p className="">
            Welcome to {AI_NAME}.
          You should interact in a friendly manner with the AI assistant and refrain from participating in any harmful activities. Any employee found to be misusing the AI Bot will be subjected to disciplinary action, up to and including termination of employment. Misuse includes unauthorized access, disclosure of confidential information, or any other violation of the usage policy.
 

          </p>

          <li>
              Do not enter confidential information or names/contact information into GenAI tools.
          </li>
          <li>  Output of GenAI tools may not be used in work product unless       specifically approved by genai@enphase.com.
          </li>
          <p>You can start a new chat with AI Bot by clicking the button below.</p>
        </div>
        <div className="-mx-5 -mb-5 p-5 flex flex-col border-t bg-muted">
          <NewChat />
        </div>
      </Card>
      </div>
    </div>
  );
};
