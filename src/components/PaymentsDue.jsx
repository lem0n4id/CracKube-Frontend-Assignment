export default function PaymentsDue() {
    return (
        <div className="w-[400px] h-[400px] 2xl:w-[761px] 2xl:h-[340px] bg-[#202020] rounded-xl">
            <div>
                <div className="ml-10 mt-4 flex justify-between">
                    <div className="text-xl font-semibold text-white">Payment Due</div>
                    <div className="mr-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#C4C4C4"/>
                            <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#C4C4C4"/>
                            <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#C4C4C4"/>
                        </svg>
                    </div>
                    
                </div>
                <div>
                    <div className="mx-12 h-[67px] flex items-center text-white">
                        <div className="rounded-sm border border-white w-5 h-5">
                        </div>
                        <div className="2xl:ml-12">Ads ID</div>
                        <div className="2xl:ml-[107px]">Social Network</div>
                        <div className="2xl:ml-10">Total Spend</div>
                        <div className="2xl:ml-[55px]">Status</div>
                    </div>
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>       
        </div>
    )
}
function Item() {
    return (
        <div className="mx-12 h-[67px] flex items-center text-white">
            <div className="rounded-sm border border-white w-5 h-5">
            </div>
            <div className="ml-12">#AD-001234</div>
            <div className="ml-[107px]">Instagram</div>
            <div className="ml-10">$ 539.28</div>
            <div className="ml-[55px] w-[91px] h-[32px] border border-[#FD6162] flex items-center justify-center text-[#FD6162]">Unpaid</div>
            <div className="ml-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#C4C4C4"/>
                    <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#C4C4C4"/>
                    <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#C4C4C4"/>
                </svg>
            </div>
        </div>
    );
}