export default function LatestTrans() {
    return (
        <div className="w-[550px] h-[630px] bg-[#202020] rounded-xl">
            <div>
                <div className="ml-10 pt-9 flex justify-between">
                    <div className="text-xl font-semibold text-white">Latest Transaction</div>
                    <div className="mr-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#C4C4C4"/>
                            <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#C4C4C4"/>
                            <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#C4C4C4"/>
                        </svg>
                    </div>
                    
                </div>
                <div className="mt-4">
                    <div className="mx-11 h-[67px] flex items-center text-white">
                        <div className="rounded-sm border border-white w-5 h-5">
                        </div>
                        <div className="ml-12 w-20">Name ADS</div>
                        <div className="ml-[200px]">Total Spend</div>
                        <div className="ml-[76px]">Status</div>
                    </div>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
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
        <div className="mx-11 h-[67px] flex items-center text-white">
            <div className="rounded-sm border border-white w-5 h-5">
            </div>
            <div className="ml-12 w-[248px]">50% OFF Floor Lamp Get it Now!</div>
            <div className="ml-[71px] w-[65px]">$ 539.28</div>
            <div className="ml-[70px] w-[91px] h-[32px] border border-[#2BC155] flex items-center justify-center text-[#2BC155]">Paid</div>
        </div>
    );
}