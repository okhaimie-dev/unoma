import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/outline'
import { useRecoilState } from 'recoil'
import { profilemodalatom } from "../atoms/profilemodalAtom"
import { Web3Storage } from "web3.storage";

export default function ProfileModal() {

    {
        /**
         * name,bio and profile image information will be set by default with data
         * gotten back from thegraph protocol and modified data will be sent to the
         * smart contract along with unmodified data if any
         */
    }

  const [open, setOpen] = useRecoilState(profilemodalatom)
  const filePickerRef = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [fileName, setFileName] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const addImageToPost = (e) => {
    const reader = new FileReader()
    const file = e.target.files[0]
    if (file) {
        reader.readAsDataURL(file)
    }
    reader.onload = (readEvent) => {
        if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/webp") {
           document.getElementById("update").innerHTML = "Update"
           setSelectedFile(readEvent.target.result)
           setFileName(file.name)
           setDisabled(false)
        }
        else {
            document.getElementById("update").innerHTML = "Unsupported image type"
            setDisabled(true)
        }
    }
}
    const update = async () => {
        setLoading(true)
        const files = [new File([selectedFile], fileName)]
        const client = new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN })
        const cid = await client.put(files)
        cid != null && setLoading(false)
    }

  return (
    <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                onClose={() => setOpen(false)}
            >
            <div className="flex items-center justify-center
                min-h-[800px] sm:min-h-screen pt-4 pb-20
                text-center sm:block sm:p-0"
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay
                        className="fixed inset-0 bg-opacity-75
                        transition-opacity"
                    />
                </Transition.Child>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left
                        overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                            <div>
                                {
                                    selectedFile ? (
                                        <img
                                            src={selectedFile}
                                            className="w-full h-64 object-contain cursor-pointer"
                                            onClick={() => setSelectedFile(null)}
                                            alt="Upload image"
                                        />
                                    ) : (
                                        <div
                                            onClick={() => {
                                                setDisabled(false)
                                                filePickerRef.current.click()
                                            }}
                                            className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-secondary cursor-pointer"
                                        >
                                            <CameraIcon
                                                className="h-6 w-6 text-dark"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    )
                                }
                                <div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg leading-5 font-medium text-gray-900"
                                        >
                                            Change profile picture
                                        </Dialog.Title>
                                    </div>
                                    <div>
                                        <input
                                            ref={filePickerRef}
                                            type="file"
                                            hidden
                                            onChange={addImageToPost}
                                        />
                                    </div>
                                    <div className="mt-2 space-y-1">
                                      <div className='space-y-0.5'>
                                        <p className='font-semibold'>Change your name</p>
                                        <input type="text" placeholder="Enter your name" className="w-full p-2.5 outline-none border-zinc-300 border" />
                                      </div>
                                      <div className='space-y-0.5'>
                                        <p className='font-semibold'>Change your bio</p>
                                        <input type="text" placeholder="Enter your bio" className="w-full p-2.5 outline-none border-zinc-300 border" />
                                      </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6">
                                    <button
                                        type="button"
                                        id="update"
                                        disabled={disabled}
                                        onClick={update}
                                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium
                                            text-white hover:bg-secondary focus:outline-none focus:ring-offset-2 focus:ring-red-500
                                            sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                                    >
                                        {
                                            loading ? "Updating..." : "Update"
                                        }
                                    </button>
                                </div>
                            </div>
                    </div>
                </Transition.Child>
            </div>
        </Dialog>
    </Transition.Root>
  )
}