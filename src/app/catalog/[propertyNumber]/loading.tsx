import { Card } from "@/shared/components/Shadcn-ui/card";
import { Skeleton } from "@/shared/components/Shadcn-ui/skeleton";
import { motion } from "framer-motion";
import { ChevronRight, Share2 } from "lucide-react";

export default function PropertyDetailsLoadingSkeleton() {
  return (
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
    <div className="max-w-[90%] lg:max-w-[1200px] lg:px-10 mx-auto w-full mb-10 mt-20">
      {/* Breadcrumb */}
      <div className="flex justify-between items-center py-5" id="breadcumb-pages">
        <div className="flex gap-x-1 items-center">
          <Skeleton className="w-12 h-3" />
          <ChevronRight size={16} />
          <Skeleton className="w-6 h-3" />
          <ChevronRight size={16} />
          <Skeleton className="w-6 h-3" />
        </div>
        <div className="cursor-pointer bg-accent p-2 rounded-full hover:bg-accent/50 transition duration-100">
          <Share2 size={16} />
        </div>
      </div>

      {/* Container principal com duas colunas */}
      <div className="flex flex-col lg:flex-row gap-10 w-full">
        {/* Coluna esquerda (conteúdo principal) */}
        <div className="w-full lg:flex-1 grid gap-x-4">
          {/* Imagem / Carrossel */}
          <Skeleton className="h-60 lg:h-80 w-full p-0 rounded-none" />

          {/* Título e detalhes */}
          <div className="mt-5">
            <Skeleton className="w-full h-6" />

            <div
              className="flex flex-wrap gap-x-4 gap-y-3 my-3 text-xs lg:text-md"
              id="icons-data"
            >
              <Skeleton className="w-1/5 h-4" />
              <Skeleton className="w-1/5 h-4" />
              <Skeleton className="w-1/5 h-4" />
              <Skeleton className="w-1/5 h-4" />
              <Skeleton className="w-1/5 h-4" />
            </div>

            <div className="mb-5 text-sm space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>

          {/* Mapa */}
          <div className="lg:sticky top-24 w-full">
            <Skeleton className="h-60 w-full p-0 rounded-none" />
          </div>
        </div>

        {/* Coluna direita (card de preço) */}
        <div className="w-full lg:w-[280px] shrink-0" id="price-card">
          <div className="lg:sticky top-24">
            <Card className="h-fit rounded-xs shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 gap-0 space-y-5">
              <Skeleton className="w-2/3 h-3" />

              <div className="w-full justify-between flex items-center">
                <Skeleton className="w-3/10 h-4" />
                <Skeleton className="w-5/10 h-4" />
              </div>
              <div className="w-full justify-between flex items-center">
                <Skeleton className="w-3/10 h-4" />
                <Skeleton className="w-5/10 h-4" />
              </div>
              <div className="w-full justify-between flex items-center">
                <Skeleton className="w-3/10 h-4" />
                <Skeleton className="w-5/10 h-4" />
              </div>
              <div className="w-full justify-between flex items-center">
                <Skeleton className="w-3/10 h-4" />
                <Skeleton className="w-5/10 h-4" />
              </div>
              <hr className="my-3 border-dashed" />
              <div className="w-full justify-between flex items-center">
                <Skeleton className="w-4/10 h-6" />
                <Skeleton className="w-5/10 h-6" />
              </div>
              <Skeleton className="w-full h-8 rounded-full mt-5" />
            </Card>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
