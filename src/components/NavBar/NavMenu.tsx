'use client'

import { useState } from 'react'
import { Dialog, Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { cn } from '@/utils/cn'
import Image from 'next/image'

export function NavMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      {mobileMenuOpen ? (
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-light-text dark:text-dark-text"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="sr-only">Close main menu</span>
          <XMarkIcon className="h-10 w-10" aria-hidden="true" />
        </button>
      ) : (
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-light-text dark:text-dark-text"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-10 w-10" aria-hidden="true" />
        </button>
      )}

      {/* <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}> */}
      <Dialog
        className="mt-navbar"
        as="div"
        open={mobileMenuOpen}
        onClose={() => {}}
      >
        {/* <div className="fixed inset-0 z-10" /> */}
        <Dialog.Panel className="fixed mt-navbar inset-y-0 right-0 z-10 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={cn(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        <Disclosure.Button
                          key={'Test'}
                          as="a"
                          href={''}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Test
                        </Disclosure.Button>
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>

              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}
