export default function CurrentBalance() {
    return (
        <div className="w-[400px] h-[190px] bg-[#369DC9] flex justify-between rounded-xl">
            <div className="ml-10 mt-8 flex flex-col gap-5">
                <div className="text-xl text-white font-semibold">Current Balance</div>
                <div className="text-4xl text-white font-bold">$ 82,683.82</div>
                <div className="text-base text-white font-normal">1234 **** 9876</div>
            </div>
            <div className="mt-8 mr-12">
                <svg className="w-[83px] h-[51px]" xmlns="http://www.w3.org/2000/svg" width="83" height="51" viewBox="0 0 83 51" fill="none">
                    <circle opacity="0.15" cx="25.5" cy="25.5" r="25.5" fill="white"/>
                    <circle opacity="0.15" cx="57.5" cy="25.5" r="25.5" fill="white"/>
                </svg>
            </div>
        </div>
    )
}