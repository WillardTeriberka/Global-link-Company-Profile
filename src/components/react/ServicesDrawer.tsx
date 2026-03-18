import * as Dialog from '@radix-ui/react-dialog';
import { ChevronRight, X } from 'lucide-react';
import { SERVICES } from '../../config/site';

type Props = {
  className?: string;
};

export default function ServicesDrawer({ className }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={
            className ??
            'px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all relative group'
          }
        >
          <span>Our services</span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <Dialog.Content className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 border-l border-slate-200 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right duration-200">
          <Dialog.Title className="sr-only">Our services</Dialog.Title>
          <Dialog.Description className="sr-only">Navigate to service pages</Dialog.Description>

          <div className="h-20 px-6 flex items-center justify-between border-b border-slate-200">
            <div>
              <div className="text-xs font-semibold text-slate-500 tracking-wider uppercase">Our services</div>
              <div className="text-lg font-bold text-slate-900">Choose a service</div>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Close services drawer"
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          <div className="p-3">
            {SERVICES.map((item) => (
              <Dialog.Close asChild key={item.href}>
                <a
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  <span className="text-sm font-semibold">{item.name}</span>
                  <ChevronRight className="h-4 w-4 opacity-70" />
                </a>
              </Dialog.Close>
            ))}
          </div>

          <div className="mt-auto p-6 border-t border-slate-200">
            <Dialog.Close asChild>
              <a
                href="/rfq"
                className="block text-center px-6 py-3 text-sm font-semibold text-white bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg shadow-md transition-all"
              >
                Contact
              </a>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

