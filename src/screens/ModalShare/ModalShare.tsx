import { GlobeIcon, LinkIcon, LockIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const shareOptions = [
  {
    id: "private",
    icon: LockIcon,
    title: "Private",
    description: "Viewable by yourself only",
    selected: false,
  },
  {
    id: "public",
    icon: GlobeIcon,
    title: "Public access",
    description: "Anyone with a link can view",
    selected: true,
  },
];

export const ModalShare = (): JSX.Element => {
  return (
    <Card className="inline-flex flex-col items-start gap-8 p-8 bg-[#272729] rounded-2xl overflow-hidden shadow-modal border-0">
      <CardContent className="inline-flex gap-8 flex-col items-start p-0 w-full">
        <header className="flex w-full items-center justify-between">
          <h2 className="font-title-24-emphasized font-[number:var(--title-24-emphasized-font-weight)] text-textwhite-100 text-[length:var(--title-24-emphasized-font-size)] tracking-[var(--title-24-emphasized-letter-spacing)] leading-[var(--title-24-emphasized-line-height)] [font-style:var(--title-24-emphasized-font-style)]">
            Share Chat
          </h2>
          <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
            <XIcon className="w-3.5 h-3.5 text-textwhite-100" />
          </Button>
        </header>

        <div className="flex w-full gap-3 flex-col items-start">
          {shareOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <button
                key={option.id}
                className={`flex items-center gap-3 p-3 w-full bg-fillfill-1 rounded-xl border-[1.5px] border-solid transition-colors ${
                  option.selected ? "border-[#6254ff]" : "border-borderborder-2"
                }`}
              >
                <IconComponent className="w-4 h-4 text-textwhite-100 flex-shrink-0" />
                <div className="flex flex-col items-start gap-0.5 flex-1 text-left">
                  <div className="font-title-16-emphasized font-[number:var(--title-16-emphasized-font-weight)] text-[#ffffff] text-[length:var(--title-16-emphasized-font-size)] tracking-[var(--title-16-emphasized-letter-spacing)] leading-[var(--title-16-emphasized-line-height)] [font-style:var(--title-16-emphasized-font-style)]">
                    {option.title}
                  </div>
                  <div className="font-body-14 font-[number:var(--body-14-font-weight)] text-[#ffffffb2] text-[length:var(--body-14-font-size)] tracking-[var(--body-14-letter-spacing)] leading-[var(--body-14-line-height)] [font-style:var(--body-14-font-style)]">
                    {option.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </CardContent>

      <div className="flex w-full items-center gap-4 pl-4 pr-2 py-2 bg-surfacebackground-3 rounded-[10px] overflow-hidden border border-solid border-borderborder-2">
        <Input
          defaultValue="https://agent.topview.ai/?sessionId=f42ab43504314229b3127f506fbcc92e"
          readOnly
          className="flex-1 border-0 bg-transparent p-0 h-auto text-[#ffffffb2] font-body-13 font-[number:var(--body-13-font-weight)] text-[length:var(--body-13-font-size)] tracking-[var(--body-13-letter-spacing)] leading-[var(--body-13-line-height)] [font-style:var(--body-13-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button className="h-auto gap-0.5 pl-2 pr-3 py-[7px] bg-[#4e40f3] hover:bg-[#4e40f3]/90 rounded-lg flex-shrink-0">
          <LinkIcon className="w-3 h-3" />
          <span className="font-semibold text-[#ffffff] text-sm leading-[21px]">
            Copy link
          </span>
        </Button>
      </div>
    </Card>
  );
};
