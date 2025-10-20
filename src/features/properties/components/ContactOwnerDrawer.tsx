"use client";

import { useEffect, useState } from "react";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/shared/components/Shadcn-ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/Shadcn-ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/shared/components/Shadcn-ui/drawer";
import Image from "next/image";

interface ContactOwnerProps {
  email: string;
  phone: string;
  whatsapp: string;
}

export function ContactOwner({ email, phone, whatsapp }: ContactOwnerProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Evita erro de hydration
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // 'lg' do Tailwind
    };

    handleResize(); // set inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const content = (
    <>
      <p className="text-sm text-muted-foreground mb-5">
        Ao entrar em contato, você estará falando diretamente com o proprietário do imóvel.
      </p>
      <div className="grid gap-2">
        <a
          href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Olá! Vi seu imóvel na Hostdoor e gostaria de saber mais detalhes.")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full justify-start py-5">
            <Image
              width={18}
              height={18}
              className="mr-1 -ml-1"
              alt="whatsapp-icon"
              src="/assets/icons/whatsapp-icon.svg"
            />
            WhatsApp
          </Button>
        </a>

        <a href={`tel:${phone}`}>
          <Button variant="outline" className="w-full justify-start py-5">
            <Phone className="mr-2 h-4 w-4" />
            Telefone
          </Button>
        </a>
        <a href={`mailto:${email}`}>
          <Button variant="outline" className="w-full justify-start py-5">
            <Mail className="mr-2 h-4 w-4" />
            E-mail
          </Button>
        </a>
      </div>
    </>
  );

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full mt-8" variant="secondary">
            Entrar em contato
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-left">Fale com o proprietário</DialogTitle>
          </DialogHeader>
          <div>{content}</div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="rounded-full mt-8" variant="secondary">
          Entrar em contato
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mb-5">
        <DrawerHeader className="pb-0">
          <DrawerTitle>Fale com o proprietário</DrawerTitle>
        </DrawerHeader>
        <div className="p-4">{content}</div>
      </DrawerContent>
    </Drawer>
  );
}
