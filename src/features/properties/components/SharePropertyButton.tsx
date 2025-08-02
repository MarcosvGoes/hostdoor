"use client";

import { useEffect, useState } from "react";
import { Button } from "@/shared/components/Shadcn-ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/Shadcn-ui/dialog";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
  RedditShareButton,
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
  EmailIcon,
  RedditIcon,
} from "react-share";
import { Copy, CopyCheck, Share2 } from "lucide-react";
import { Input } from "@/shared/components/Shadcn-ui/input";
import { toast } from "sonner";

interface SharePropertyButtonProps {
  id: string;
}

export default function SharePropertyButton({ id }: SharePropertyButtonProps) {
  const [shareUrl, setShareUrl] = useState("https://dommi-one.vercel.app");
  const [copied, setCopied] = useState(false);
  const shareText = "Dá uma olhada nesse imóvel que encontrei!";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(`${window.location.origin}/catalog/${id}`);
    }
  }, [id]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Link copiado!");
      setTimeout(() => setCopied(false), 20000);
    } catch {
      toast.error("Erro ao copiar link.");
    }
  };

  const ShareButtons = () => (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 justify-center p-4 flex-wrap">
        <FacebookShareButton url={shareUrl} title={shareText}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>

        <WhatsappShareButton url={shareUrl} title={shareText}>
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>

        <TelegramShareButton url={shareUrl} title={shareText}>
          <TelegramIcon size={40} round />
        </TelegramShareButton>

        <RedditShareButton url={shareUrl} title={shareText}>
          <RedditIcon size={40} round />
        </RedditShareButton>

        <EmailShareButton url={shareUrl} subject="Veja esse imóvel" body={shareText}>
          <EmailIcon size={40} round />
        </EmailShareButton>
      </div>
      <div className="flex items-center gap-x-2 mt-4 w-full px-4">
        <Input value={shareUrl} readOnly className="flex-1" />
        <Button variant="outline" onClick={handleCopy}>
          {copied ? <CopyCheck className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );

  return (
    <Dialog>
      <DialogTrigger asChild >
          <Share2 size={16}  />
      </DialogTrigger>
      <DialogContent className="max-w-[90%] mx-auto">
        <DialogTitle className="text-center font-medium text-lg mt-2">
          Compartilhar imóvel
        </DialogTitle>
        <ShareButtons />
      </DialogContent>
    </Dialog>
  );
}
