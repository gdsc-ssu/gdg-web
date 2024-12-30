'use client';

import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      {/* 여기에 전역 프로바이더들을 추가할 수 있습니다 */}
      {/* 예: ThemeProvider, StateProvider 등 */}
      {children}
    </>
  );
} 