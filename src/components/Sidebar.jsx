export default function Sidebar() {
    return (
        <div className='w-1/5 -mt-[126px] bg-[#202020] '>
            <div className="h-32 flex justify-center items-center gap-2">
                <svg className="fill-[#2BC155]" xmlns="http://www.w3.org/2000/svg" width="41" height="35" viewBox="0 0 41 35" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.2728 5.46546C33.9676 3.78808 34.3252 1.99027 34.3252 0.174683H20.4998H6.67431C6.67431 1.99027 7.03191 3.78808 7.72671 5.46546C8.4215 7.14284 9.43988 8.66695 10.7237 9.95076C12.0075 11.2346 13.5316 12.253 15.209 12.9477C15.7609 13.1764 16.3259 13.3685 16.9003 13.5234L0 13.5234C0 16.2154 0.530243 18.8811 1.56046 21.3683C2.59067 23.8554 4.10067 26.1153 6.00426 28.0189C7.90784 29.9225 10.1677 31.4325 12.6549 32.4627C15.142 33.4929 17.8077 34.0232 20.4998 34.0232C23.1919 34.0232 25.8576 33.4929 28.3448 32.4627C30.8319 31.4325 33.0918 29.9225 34.9954 28.0189C36.899 26.1153 38.409 23.8554 39.4392 21.3683C40.4694 18.8811 40.9996 16.2154 40.9996 13.5234H24.0993C24.6736 13.3685 25.2386 13.1764 25.7905 12.9477C27.4679 12.253 28.992 11.2346 30.2758 9.95076C31.5597 8.66695 32.578 7.14284 33.2728 5.46546Z" fill="#2BC155"/>
                </svg>
                <div className="text-white text-4xl font-bold">Iklan.</div>
            </div>
            <div className="flex flex-col gap-10 mt-12 pb-12 ml-6 2xl:ml-12">
                <SidebarItem title="Dashboard" icon={
                    <svg className="w-[19px] h-[20px] " xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>} />
                <SidebarItem title="Campaign" icon={
                    <svg className="w-[19px] h-[20px]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2855 1H18.5521C19.9036 1 21 2.1059 21 3.47018V6.7641C21 8.12735 19.9036 9.23429 18.5521 9.23429H15.2855C13.933 9.23429 12.8366 8.12735 12.8366 6.7641V3.47018C12.8366 2.1059 13.933 1 15.2855 1Z" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.44892 1H6.71449C8.06703 1 9.16341 2.1059 9.16341 3.47018V6.7641C9.16341 8.12735 8.06703 9.23429 6.71449 9.23429H3.44892C2.09638 9.23429 1 8.12735 1 6.7641V3.47018C1 2.1059 2.09638 1 3.44892 1Z" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.44892 12.7657H6.71449C8.06703 12.7657 9.16341 13.8716 9.16341 15.2369V18.5298C9.16341 19.8941 8.06703 21 6.71449 21H3.44892C2.09638 21 1 19.8941 1 18.5298V15.2369C1 13.8716 2.09638 12.7657 3.44892 12.7657Z" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2855 12.7657H18.5521C19.9036 12.7657 21 13.8716 21 15.2369V18.5298C21 19.8941 19.9036 21 18.5521 21H15.2855C13.933 21 12.8366 19.8941 12.8366 18.5298V15.2369C12.8366 13.8716 13.933 12.7657 15.2855 12.7657Z" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>} />
                <SidebarItem title="Social Network" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.27002 13.9519L8.8627 8.8627L13.9519 7.27002L12.3593 12.3593L7.27002 13.9519Z" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="10.611" cy="10.611" r="9.61098" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>} />
                <SidebarItem title="Spending" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M6.24481 13.7815L9.23795 9.89131L12.6521 12.5732L15.5812 8.79291" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="18.9954" cy="3.20021" r="1.9222" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.9245 2.12012H6.65673C3.64529 2.12012 1.77802 4.25284 1.77802 7.26428V15.3467C1.77802 18.3581 3.60868 20.4817 6.65673 20.4817H15.2609C18.2723 20.4817 20.1396 18.3581 20.1396 15.3467V8.30776" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>} />
                <SidebarItem title="Analytics" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5241 8.75284C19.885 4.81944 16.544 1.89321 12.5607 1.77801C12.3713 1.77059 12.1867 1.83878 12.0477 1.96755C11.9086 2.09632 11.8264 2.27511 11.8193 2.46451V2.46451V2.52859L12.2678 9.23797C12.2972 9.68962 12.6855 10.0329 13.1374 10.0068L19.865 9.55833C20.0546 9.54432 20.2308 9.45528 20.3545 9.31096C20.4782 9.16663 20.5392 8.97894 20.5241 8.78946V8.75284Z" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.90163 5.76886C8.32959 5.66987 8.76753 5.88884 8.94511 6.2906C8.99163 6.38509 9.01959 6.48763 9.02749 6.59266C9.11902 7.89243 9.31124 10.7391 9.42108 12.2769C9.43984 12.5539 9.56821 12.812 9.77779 12.9941C9.98737 13.1762 10.2609 13.2672 10.5378 13.2471V13.2471L16.1854 12.8993C16.4375 12.8841 16.6847 12.9738 16.8684 13.1472C17.0522 13.3205 17.1561 13.562 17.1556 13.8146V13.8146C16.9268 17.225 14.4765 20.076 11.1393 20.815C7.80214 21.5541 4.3773 20.004 2.73001 17.0091C2.23826 16.1472 1.92684 15.1942 1.81467 14.2082C1.76672 13.9056 1.74833 13.5991 1.75975 13.2929C1.76947 9.65089 4.32726 6.51282 7.89248 5.76886" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>} />
                <SidebarItem title="Form Campaign" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M10.4923 1.789H6.7533C3.6783 1.789 1.75031 3.966 1.75031 7.048V15.362C1.75031 18.444 3.6693 20.621 6.7533 20.621H15.5773C18.6623 20.621 20.5813 18.444 20.5813 15.362V11.334" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.82782 9.9209L15.3008 2.4479C16.2318 1.5179 17.7408 1.5179 18.6718 2.4479L19.8888 3.6649C20.8198 4.5959 20.8198 6.1059 19.8888 7.0359L12.3798 14.5449C11.9728 14.9519 11.4208 15.1809 10.8448 15.1809H7.09882L7.19282 11.4009C7.20682 10.8449 7.43382 10.3149 7.82782 9.9209Z" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.1652 3.60251L18.7312 8.16851" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>} />
                <SidebarItem title="Notification" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.50083 12.7871V12.5681C1.53295 11.9202 1.7406 11.2925 2.10236 10.7496C2.7045 10.0975 3.1167 9.29831 3.29571 8.43598C3.29571 7.7695 3.29571 7.0935 3.35393 6.42703C3.65469 3.21842 6.82728 1 9.96106 1H10.0387C13.1725 1 16.345 3.21842 16.6555 6.42703C16.7137 7.0935 16.6555 7.7695 16.704 8.43598C16.8854 9.3003 17.2972 10.1019 17.8974 10.7591C18.2618 11.2972 18.4698 11.9227 18.4989 12.5681V12.7776C18.5206 13.648 18.2208 14.4968 17.6548 15.1674C16.907 15.9515 15.8921 16.4393 14.8024 16.5384C11.607 16.8812 8.38303 16.8812 5.18762 16.5384C4.09914 16.435 3.08576 15.9479 2.33521 15.1674C1.778 14.4963 1.48224 13.6526 1.50083 12.7871Z" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.55493 19.8518C8.05421 20.4784 8.78739 20.884 9.59222 20.9787C10.3971 21.0734 11.2072 20.8495 11.8433 20.3564C12.0389 20.2106 12.2149 20.041 12.3672 19.8518" stroke="#717579" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>} />
                <SidebarItemActive title="Payment" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                    <path d="M20.6389 12.3958H16.5906C15.1042 12.3949 13.8993 11.1909 13.8984 9.70449C13.8984 8.21804 15.1042 7.01413 16.5906 7.01321H20.6389" stroke="#2BC155" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.0486 9.64288H16.7369" stroke="#2BC155" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.74766 1H15.3911C18.2892 1 20.6388 3.34951 20.6388 6.24766V13.4247C20.6388 16.3229 18.2892 18.6724 15.3911 18.6724H6.74766C3.84951 18.6724 1.5 16.3229 1.5 13.4247V6.24766C1.5 3.34951 3.84951 1 6.74766 1Z" stroke="#2BC155" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.03558 5.53817H11.4345" stroke="#2BC155" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>} />
            </div>

        </div>
    );
}

function SidebarItem({ title, icon }) {
    return (
        <div className="flex items-center gap-7 h-10 mr-6">
            <div className="w-6 h-6 p-0.5 flex-shrink-0">
                {icon}
            </div>
            <div className="text-[#717579] text-lg font-medium">{title}</div>
        </div>
    );
}

function SidebarItemActive({ title, icon }) {
    return (
        <div className="flex items-center gap-7 h-10">
            <div className="w-6 h-6 p-0.5 flex-shrink-0">
                {icon}
            </div>
            <div className="text-[#2BC155] text-lg font-medium">{title}</div>
        </div>
    );
}