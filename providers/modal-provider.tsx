"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   // 이거 없으면 hydration error 발생
   if (!isMounted) {
      return null;
   }

   return (
      <>
         <StoreModal />
      </>
   );
};
