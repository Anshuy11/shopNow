import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";

import { XMarkIcon } from "@heroicons/react/20/solid";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MessageFunc = (props) => {
  
  return (
    <>
      <div
        aria-live="assertive"
        className="pointer-events-none mt-10  fixed inset-0 z-[10000] flex items-center px-4 py-6 sm:items-start sm:p-4 w-full justify-center"
      >
        <div className="flex w-full flex-col items-center space-y-4 ">
          <Transition
            show={props.messageOpen}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">

                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">
                      {props.message}
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      onClick={props.onClose}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};

export default MessageFunc;
