import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon, MicrophoneIcon } from '@heroicons/react/outline'
import { useRecoilState } from 'recoil'
import { podcastmodal } from "../atoms/podcastmodal"
import { Web3Storage } from "web3.storage";

export default function PodcastModal() {

    {
        /**
         * the initial podcast name will be fetched by default from thegraph protocol
         * our smart contract will be updated with new name
         */
    }

  const [open, setOpen] = useRecoilState(podcastmodal)
  const [loading, setLoading] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [cid, setCid] = useState(null)
  const filePickerRef = useRef(null)
  const audioFilePickerRef = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [fileName, setFileName] = useState(null)
  const [audioFile, setAudioFile] = useState(null)
  const [audioName, setAudioName] = useState(null)
  const [name, setName] = useState(null)
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (name == null || audioFile == null || selectedFile == null) {
        setDisabled(true)
    }
    else {
        setDisabled(false)
    }
  }, [name, audioFile, selectedFile])

  const addImageToPost = (e) => {
    const reader = new FileReader()
    const file = e.target.files[0]
    if (file) {
        reader.readAsDataURL(file)
    }
    reader.onload = (readEvent) => {
        if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/webp") {
           document.getElementById("podcastuploader").innerHTML = "Upload"
           setSelectedFile(readEvent.target.result) 
           setFileName(file.name)
        }
        else {
            document.getElementById("podcastuploader").innerHTML = "Unsupported image type"
        }
    }
}

const addAudioToPost = (e) => {
    const reader = new FileReader()
    const file = e.target.files[0]
    if (file) {
        reader.readAsDataURL(file)
    }
    reader.onload = (readEvent) => {
        if (file.type == "audio/mpeg") {
            document.getElementById("podcastuploader").innerHTML = "Upload"
            setAudioFile(readEvent.target.result)
            setAudioName(file.name)
        }
        else {
            document.getElementById("podcastuploader").innerHTML = "Unsupported audio type"
        }
    }
}
    const update = () => {}

    const upload =  async () => {
        setUploaded(true)
        setCid(null)
        const files = [new File([selectedFile], fileName), new File([audioFile], audioName)]
        const client = new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN })
        const cid = await client.put(files)
        cid != null && setUploaded(false)
        setCid(cid)
    }

  return (
    <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                onClose={() => setOpen(false)}
            >
            <div className="flex items-end justify-center
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
                        overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 space-y-2.5">
                            <div className='border border-gray-300 p-2'>
                                <div>
                                    <div className="mt-2">
                                      <div className='space-y-0.5'>
                                        <p className='font-semibold'>Change your podcast name</p>
                                        <input type="text" placeholder="Enter your podcast name" className="w-full p-2.5 outline-none border-zinc-300 border" />
                                      </div>
                                    </div>
                                </div>
                                <div className="mt-2.5 sm:mt-3">
                                    <button
                                        type="button"
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
                            <div className='border border-gray-300 p-2'>
                                <div>
                                    {
                                        //thumbnail selector
                                    }
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
                                                        filePickerRef.current.click()
                                                        setCid(null)
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
                                                Post thumbnail
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
                                    </div>
                                    {
                                        //audio selector
                                    }
                                    {
                                        audioFile ? (
                                            <div
                                                onClick={() => setAudioFile(null)}
                                                className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-500 cursor-pointer mt-2"
                                            >
                                                <MicrophoneIcon
                                                    className="h-6 w-6 text-dark"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        ) : (
                                            <div
                                            onClick={() => {
                                                audioFilePickerRef.current.click()
                                                setCid(null)
                                            }}
                                                className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-secondary cursor-pointer mt-2"
                                            >
                                                <MicrophoneIcon
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
                                                Audio
                                            </Dialog.Title>
                                        </div>
                                        <div>
                                            <input
                                                ref={audioFilePickerRef}
                                                type="file"
                                                hidden
                                                onChange={addAudioToPost}
                                            />
                                        </div>
                                    </div>
                                </div>
                                    <div className="mt-2">
                                        <div className='space-y-0.5'>
                                            <p className='font-semibold'>Enter audio name</p>
                                            <input
                                                type="text"
                                                id='audioname'
                                                placeholder="Enter audio name"
                                                className="w-full p-2.5 outline-none border-zinc-300 border"
                                                onChange={
                                                    () => {
                                                        if (document.getElementById("audioname").value != "") {
                                                            setName(document.getElementById("audioname").value)
                                                        }
                                                        else {
                                                            setName(null)
                                                        }
                                                    }
                                                }/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2.5 sm:mt-3">
                                    <button
                                        type="button"
                                        disabled={disabled}
                                        onClick={upload}
                                        id="podcastuploader"
                                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium
                                            text-white hover:bg-secondary focus:outline-none focus:ring-offset-2 focus:ring-red-500
                                            sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                                    >
                                        {
                                            uploaded ? "Uploading..." : cid ? "Uploaded" : "Upload"
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