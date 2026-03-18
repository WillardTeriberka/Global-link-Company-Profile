import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X } from 'lucide-react';
import { NAVIGATION, SERVICES } from '../../config/site';

export default function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 lg:hidden" />
        <Dialog.Content className="fixed top-0 left-0 right-0 bg-white border-b border-slate-200 z-50 lg:hidden max-h-[85vh] overflow-y-auto">
          <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>
          <Dialog.Description className="sr-only">Main navigation menu</Dialog.Description>
          <div className="container mx-auto px-4 py-6 space-y-2">
            {NAVIGATION.map((item) => {
              const isServices = item.name === 'Our services';
              if (isServices) {
                return (
                  <div key={item.href} className="pt-2">
                    <div className="px-4 py-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                      Our services
                    </div>
                    <div className="space-y-1">
                      {SERVICES.map((s) => (
                        <Dialog.Close asChild key={s.href}>
                          <a
                            href={s.href}
                            className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                          >
                            {s.name}
                          </a>
                        </Dialog.Close>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Dialog.Close asChild key={item.href}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                  >
                    {item.name}
                  </a>
                </Dialog.Close>
              );
            })}
            <div className="pt-4">
              <Dialog.Close asChild>
                <a
                  href="/rfq"
                  className="block text-center px-6 py-3 text-sm font-semibold text-white bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg shadow-md transition-all"
                >
                  Contact
                </a>
              </Dialog.Close>
            </div>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

