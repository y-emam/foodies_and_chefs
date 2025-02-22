import { useTranslation } from "react-i18next";
import "./styles.css";
import { useEffect, useState } from "react";
import ProfileTempImg from "../../assets/images/profileTemp.webp";

 
import checkSignIn from "../../utils/checkSignIn";

function Chat( ) {
  const { t } = useTranslation();

  
  useEffect(() => {
    checkSignIn();
  });

  

  return (
    <div className="bg-[#121212]  overflow-auto min-h-screen pt-4 box-border inter">
      <main className="min-h-[80dvh] md:flex   mt-0    mx-9 " id="overlay">
        {/* Left Side Chat */}
       <section className="w-1/4 hidden md:flex flex-col gap-3 p-3 ">
        <div className="flex gap-2 justify-ceneter items-center text-main-color">
          <span>
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_9466_621)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.075 4.6239C24.8098 4.6239 26.4736 5.31307 27.7003 6.53979C28.9271 7.76652 29.6162 9.43031 29.6162 11.1652V21.6312C29.6162 23.366 28.9271 25.0298 27.7003 26.2566C26.4736 27.4833 24.8098 28.1724 23.075 28.1724H4.75942C4.41245 28.1724 4.0797 28.0346 3.83435 27.7893C3.58901 27.5439 3.45117 27.2112 3.45117 26.8642V11.1652C3.45117 9.43031 4.14034 7.76652 5.36706 6.53979C6.59379 5.31307 8.25758 4.6239 9.99243 4.6239H23.075ZM12.6089 13.7817C12.2885 13.7817 11.9792 13.8994 11.7398 14.1123C11.5003 14.3252 11.3473 14.6186 11.3098 14.9369L11.3007 15.0899V17.7064C11.3011 18.0399 11.4287 18.3606 11.6576 18.6031C11.8865 18.8455 12.1994 18.9914 12.5323 19.011C12.8651 19.0305 13.1929 18.9222 13.4486 18.7082C13.7043 18.4942 13.8687 18.1906 13.908 17.8595L13.9172 17.7064V15.0899C13.9172 14.743 13.7794 14.4102 13.534 14.1648C13.2887 13.9195 12.9559 13.7817 12.6089 13.7817ZM20.4585 13.7817C20.1115 13.7817 19.7787 13.9195 19.5334 14.1648C19.288 14.4102 19.1502 14.743 19.1502 15.0899V17.7064C19.1502 18.0534 19.288 18.3862 19.5334 18.6315C19.7787 18.8768 20.1115 19.0147 20.4585 19.0147C20.8054 19.0147 21.1382 18.8768 21.3835 18.6315C21.6289 18.3862 21.7667 18.0534 21.7667 17.7064V15.0899C21.7667 14.743 21.6289 14.4102 21.3835 14.1648C21.1382 13.9195 20.8054 13.7817 20.4585 13.7817Z" fill="#FA8836"/>
              </g>
              <defs>
              <clipPath id="clip0_9466_621">
              <rect width="31.3981" height="31.3981" fill="white" transform="translate(0.839844 0.698975)"/>
              </clipPath>
              </defs>
              </svg>
          </span>
            <span className="font-bold">inbox</span>
        </div>
        <div className="flex   flex-wrap space-y-5  ">
            <div className="flex w-full  justify-end md:justify-start">
              <div className="flex ltr:flex-row rtl:flex-row-reverse">
                <div className="border-y-2 border-l-2 border-[#CCCFD04D] rounded-l-lg text-l px-2 py-1 h-9 bg-transparent flex items-center">
                  <i className="fa-solid fa-magnifying-glass text-[#ABAFB199] text-lg"></i>
                </div>
                <input
                  placeholder={t("meetOurChefs.searchPlaceholder")}
                  className="w-full placeholder-[#ABAFB199] bg-transparent text-main-color border-2 border-[#CCCFD04D] border-l-0 rounded-e-lg rounded-s-none h-9 flex-grow px-3 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <p className="text-start text-sm flex gap-2 items-center text-[#BCBCBC]">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_9466_699)">
                <mask id="mask0_9466_699"   maskUnits="userSpaceOnUse" x="1" y="0" width="14" height="14">
                <path d="M13.7879 7.43987C13.7879 10.6913 11.1523 13.327 7.90081 13.327H2.01367V7.43987C2.01367 4.18841 4.64934 1.55273 7.90081 1.55273C11.1523 1.55273 13.7879 4.18841 13.7879 7.43987Z" fill="white" stroke="white" stroke-width="1.30823" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.95898 5.67383H10.2574M4.95898 8.02868H10.2574M4.95898 10.3835H7.90255" stroke="black" stroke-width="1.30823" stroke-linecap="round" stroke-linejoin="round"/>
                </mask>
                <g mask="url(#mask0_9466_699)">
                <path d="M0.837891 0.375244H14.967V14.5044H0.837891V0.375244Z" fill="#BCBCBC"/>
                </g>
                </g>
                <defs>
                <clipPath id="clip0_9466_699">
                <rect width="14.1291" height="14.1291" fill="white" transform="translate(0.839844 0.375366)"/>
                </clipPath>
                </defs>
                </svg>

                All Message
            </p>
            <div className="flex flex-col   max-h-[80vh] overflow-y-auto   " id="chats">
              {/* chat section */}
              <div className="flex gap-1 hover:bg-[#FFB37E42] p-3">
                <img
                      className="icon rounded-full w-12 h-12 object-cover"
                      src="https://s3-alpha-sig.figma.com/img/d649/4146/b06fe484bb699544e290949b0e0abefa?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RCtx8BfYPNPO8RgZKuqWobbjPiODSAkdt~JVFlNzo0cHmKl9vWc9T-d4wGmdDMLcwhJQ1lqeRrpAcdJ7JgYh~dyqOMMLxXHhOxU6rYbJKrE3RkgO33QDPPn0u7YzA3qml7TzfH9yzQVV2c0YQScGCrO89hKdaKmtG16zArvZhz2Rxx2MtRXPZlMCPQutauBr7D7H5276yxT2mst9vtPnxco4rklmdjl1hH3g9ggs~bN7UW3utluP19QAFgf-j5OzR~hepqYk8Qe8rVXEsMWRFPE17EAGbUzvOkE-pwjw~fePMZ2o2eldh8T5EyVy8AINqKVAUidAe96t1MSPl~4nGw__"
                      alt="profileImage"
                    />
                  <div className="flex flex-col items-start w-2/3 gap-1">
                    <span className="text-[14.13px] font-bold text-[#F0F0F0] ">Eslam Mohamed</span>
                    <p className="text-[10.99px] text-[#E0E0E0] truncate w-full">The dsadsdfds sad longest word in any of the major...</p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-end">
                    <span className="text-[10.99px] text-[#E0E0E0] font-normal">10:25 AM</span>
                    <span className="text-[9.42px] rounded-full w-4 h-4 bg-main-color text-center">1</span>
                  </div>
              </div>
              {/* End chat section */}
               {/* chat section */}
               <div className="flex gap-1 hover:bg-[#FFB37E42] p-3">
                <img
                      className="icon rounded-full w-12 h-12 object-cover"
                      src="https://s3-alpha-sig.figma.com/img/6a1a/1faa/368db3fdcdc66600a34644227e46a76b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FlPo-Of0KUFRgi-PC4Q72j9XkkDS9t1JLMnYseOgLPGG1CEF~rzszdcrf1z4o76KxR~vlPSFvHmDAu3oc5Rp2HdeJKkPXSN~63ZvdhG-Fcf9heRSeCCxdsdWC1QoU3v1xtCZ-QqgJEwVwrZ76W385UT86Rf3YYix2xvzZId2Nln6gZVQK~fkm239kbYkVa2SpFDzuq7s6pkmAxG2TUTlp0JfS4RxKDb7AsYVLUx8t66cOJ37l6dBYW0jNUAwsLU6peLVkGMLKckbmuvOeMlh2np3pdOZbt59yfVHMNK6Emi0EOvBONz-ABCkIuhs7GtV5w-mAvXUT4xkP2bELwHu4Q__"
                      alt="profileImage"
                    />
                  <div className="flex flex-col items-start w-2/3 gap-1">
                    <span className="text-[14.13px] font-bold text-[#F0F0F0] ">Eslam Mohamed</span>
                    <p className="text-[10.99px] text-[#E0E0E0] truncate w-full">The dsadsdfds sad longest word in any of the major...</p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-end">
                    <span className="text-[10.99px] text-[#E0E0E0]">10:25 AM</span>
                    <span className="text-[9.42px] rounded-full w-4 h-4 bg-main-color text-center">1</span>
                  </div>
              </div>
              {/* End chat section */}
               {/* chat section */}
               <div className="flex gap-1 hover:bg-[#FFB37E42] p-3">
                <img
                      className="icon rounded-full w-12 h-12 object-cover"
                      src="https://s3-alpha-sig.figma.com/img/6a1a/1faa/368db3fdcdc66600a34644227e46a76b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FlPo-Of0KUFRgi-PC4Q72j9XkkDS9t1JLMnYseOgLPGG1CEF~rzszdcrf1z4o76KxR~vlPSFvHmDAu3oc5Rp2HdeJKkPXSN~63ZvdhG-Fcf9heRSeCCxdsdWC1QoU3v1xtCZ-QqgJEwVwrZ76W385UT86Rf3YYix2xvzZId2Nln6gZVQK~fkm239kbYkVa2SpFDzuq7s6pkmAxG2TUTlp0JfS4RxKDb7AsYVLUx8t66cOJ37l6dBYW0jNUAwsLU6peLVkGMLKckbmuvOeMlh2np3pdOZbt59yfVHMNK6Emi0EOvBONz-ABCkIuhs7GtV5w-mAvXUT4xkP2bELwHu4Q__"
                      alt="profileImage"
                    />
                  <div className="flex flex-col items-start w-2/3 gap-1">
                    <span className="text-[14.13px] font-bold text-[#F0F0F0] ">Eslam Mohamed</span>
                    <p className="text-[10.99px] text-[#E0E0E0] truncate w-full">The dsadsdfds sad longest word in any of the major...</p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-end">
                    <span className="text-[10.99px] text-[#E0E0E0]">10:25 AM</span>
                    <span className="text-[9.42px] rounded-full w-4 h-4 bg-main-color text-center">1</span>
                  </div>
              </div>
              {/* End chat section */}
               {/* chat section */}
               <div className="flex gap-1 hover:bg-[#FFB37E42] p-3">
                <img
                      className="icon rounded-full w-12 h-12 object-cover"
                      src="https://s3-alpha-sig.figma.com/img/43d2/e6cb/b23b76dc7e8a51d5745131fa8cd55999?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A27pGJETa-lMdPdy~YTPr8YeqTCPUoyHM8~qe~o2malTPQrikVmk3VB2ABs2BLYN0vBMyRxr7OxJo8pw~PskjWt7QwiVibasoTyvxKWX-hc5hzhzIWQhWL9Kr5-UXUinyHcU1TaDVH5uC5wLJqWRWAIN7OfOdFpQcq2~08GaeDNOFl~C6XUnOl3ZVLDfflej50AQOzn8jRfEK0j6NL5vizr5RfqyMiOKMjlAzf3WeEeNokYdKofLnmMah7oI4wiEbBqmqfybiVsOHWoi5pHRnHTxviJVFOCRSv2N6C4neinfvC21Rr~suF1YzSUZI4er-N1M~bjBHmYmT28ZhFMPMA__"
                      alt="profileImage"
                    />
                  <div className="flex flex-col items-start w-2/3 gap-1">
                    <span className="text-[14.13px] font-bold text-[#F0F0F0] ">Eslam Mohamed</span>
                    <p className="text-[10.99px] text-[#E0E0E0] truncate w-full">The dsadsdfds sad longest word in any of the major...</p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-end">
                    <span className="text-[10.99px] text-[#E0E0E0]">10:25 AM</span>
                    <span className="text-[9.42px] rounded-full w-4 h-4 bg-main-color text-center">1</span>
                  </div>
              </div>
              {/* End chat section */}
               {/* chat section */}
               <div className="flex gap-1 hover:bg-[#FFB37E42] p-3">
                <img
                      className="icon rounded-full w-12 h-12 object-cover"
                      src="https://s3-alpha-sig.figma.com/img/a6fe/eb68/95f29e395de77bcf4629e8cb90eff03b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RTvtmhNlOf02YSASrJ~6A0SVBMj91klpDWNQXCJZRbzJaRdK-R2qBMuitTHuJT177eLaLNyjWJntGp4bSgXR1eF6aw5vdOyVU4~c6gYD9UI7qc2wgf0yARTXioGfZJG3sznP~Zh5K3M8iy0tNICFZgzSoigPkddtOw40jjkid5DdzmsKqQHML832wlDJvyohjUORwt5gD2RwCx9qoPZlRySbhHBiiWOahQbumAU3YKAtp07vbz84eZunTcZqJ6-81HA2SDEkXt8MIHLZUZiAfMJwznSB65m3ZYla1OFFLLSutynEGFoSf7GYHBrGpJc50Gh0ukFpPuU~P7qJD0-Pdg__"
                      alt="profileImage"
                    />
                  <div className="flex flex-col items-start w-2/3 gap-1">
                    <span className="text-[14.13px] font-bold text-[#F0F0F0] ">Eslam Mohamed</span>
                    <p className="text-[10.99px] text-[#E0E0E0] truncate w-full">The dsadsdfds sad longest word in any of the major...</p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-end">
                    <span className="text-[10.99px] text-[#E0E0E0]">10:25 AM</span>
                    <span className="text-[9.42px] rounded-full w-4 h-4 bg-main-color text-center">1</span>
                  </div>
              </div>
              {/* End chat section */}
                {/* chat section */}
                <div className="flex gap-1 hover:bg-[#FFB37E42] p-3">
                <img
                      className="icon rounded-full w-12 h-12 object-cover"
                      src="https://s3-alpha-sig.figma.com/img/a6fe/eb68/95f29e395de77bcf4629e8cb90eff03b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RTvtmhNlOf02YSASrJ~6A0SVBMj91klpDWNQXCJZRbzJaRdK-R2qBMuitTHuJT177eLaLNyjWJntGp4bSgXR1eF6aw5vdOyVU4~c6gYD9UI7qc2wgf0yARTXioGfZJG3sznP~Zh5K3M8iy0tNICFZgzSoigPkddtOw40jjkid5DdzmsKqQHML832wlDJvyohjUORwt5gD2RwCx9qoPZlRySbhHBiiWOahQbumAU3YKAtp07vbz84eZunTcZqJ6-81HA2SDEkXt8MIHLZUZiAfMJwznSB65m3ZYla1OFFLLSutynEGFoSf7GYHBrGpJc50Gh0ukFpPuU~P7qJD0-Pdg__"
                      alt="profileImage"
                    />
                  <div className="flex flex-col items-start w-2/3 gap-1">
                    <span className="text-[14.13px] font-bold text-[#F0F0F0] ">Eslam Mohamed</span>
                    <p className="text-[10.99px] text-[#E0E0E0] truncate w-full">The dsadsdfds sad longest word in any of the major...</p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-end">
                    <span className="text-[10.99px] text-[#E0E0E0]">10:25 AM</span>
                    <span className="text-[9.42px] rounded-full w-4 h-4 bg-main-color text-center">1</span>
                  </div>
              </div>
              {/* End chat section */}
                {/* chat section */}
                <div className="flex gap-1 hover:bg-[#FFB37E42] p-3">
                <img
                      className="icon rounded-full w-12 h-12 object-cover"
                      src="https://s3-alpha-sig.figma.com/img/a6fe/eb68/95f29e395de77bcf4629e8cb90eff03b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RTvtmhNlOf02YSASrJ~6A0SVBMj91klpDWNQXCJZRbzJaRdK-R2qBMuitTHuJT177eLaLNyjWJntGp4bSgXR1eF6aw5vdOyVU4~c6gYD9UI7qc2wgf0yARTXioGfZJG3sznP~Zh5K3M8iy0tNICFZgzSoigPkddtOw40jjkid5DdzmsKqQHML832wlDJvyohjUORwt5gD2RwCx9qoPZlRySbhHBiiWOahQbumAU3YKAtp07vbz84eZunTcZqJ6-81HA2SDEkXt8MIHLZUZiAfMJwznSB65m3ZYla1OFFLLSutynEGFoSf7GYHBrGpJc50Gh0ukFpPuU~P7qJD0-Pdg__"
                      alt="profileImage"
                    />
                  <div className="flex flex-col items-start w-2/3 gap-1">
                    <span className="text-[14.13px] font-bold text-[#F0F0F0] ">Eslam Mohamed</span>
                    <p className="text-[10.99px] text-[#E0E0E0] truncate w-full">The dsadsdfds sad longest word in any of the major...</p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-end">
                    <span className="text-[10.99px] text-[#E0E0E0]">10:25 AM</span>
                    <span className="text-[9.42px] rounded-full w-4 h-4 bg-main-color text-center">1</span>
                  </div>
              </div>
              {/* End chat section */}
                {/* chat section */}
                <div className="flex gap-1 hover:bg-[#FFB37E42] p-3">
                <img
                      className="icon rounded-full w-12 h-12 object-cover"
                      src="https://s3-alpha-sig.figma.com/img/a6fe/eb68/95f29e395de77bcf4629e8cb90eff03b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RTvtmhNlOf02YSASrJ~6A0SVBMj91klpDWNQXCJZRbzJaRdK-R2qBMuitTHuJT177eLaLNyjWJntGp4bSgXR1eF6aw5vdOyVU4~c6gYD9UI7qc2wgf0yARTXioGfZJG3sznP~Zh5K3M8iy0tNICFZgzSoigPkddtOw40jjkid5DdzmsKqQHML832wlDJvyohjUORwt5gD2RwCx9qoPZlRySbhHBiiWOahQbumAU3YKAtp07vbz84eZunTcZqJ6-81HA2SDEkXt8MIHLZUZiAfMJwznSB65m3ZYla1OFFLLSutynEGFoSf7GYHBrGpJc50Gh0ukFpPuU~P7qJD0-Pdg__"
                      alt="profileImage"
                    />
                  <div className="flex flex-col items-start w-2/3 gap-1">
                    <span className="text-[14.13px] font-bold text-[#F0F0F0] ">Eslam Mohamed</span>
                    <p className="text-[10.99px] text-[#E0E0E0] truncate w-full">The dsadsdfds sad longest word in any of the major...</p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-end">
                    <span className="text-[10.99px] text-[#E0E0E0]">10:25 AM</span>
                    <span className="text-[9.42px] rounded-full w-4 h-4 bg-main-color text-center">1</span>
                  </div>
              </div>
              {/* End chat section */}
                {/* chat section */}
                <div className="flex gap-1 hover:bg-[#FFB37E42] p-3">
                <img
                      className="icon rounded-full w-12 h-12 object-cover"
                      src="https://s3-alpha-sig.figma.com/img/a6fe/eb68/95f29e395de77bcf4629e8cb90eff03b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RTvtmhNlOf02YSASrJ~6A0SVBMj91klpDWNQXCJZRbzJaRdK-R2qBMuitTHuJT177eLaLNyjWJntGp4bSgXR1eF6aw5vdOyVU4~c6gYD9UI7qc2wgf0yARTXioGfZJG3sznP~Zh5K3M8iy0tNICFZgzSoigPkddtOw40jjkid5DdzmsKqQHML832wlDJvyohjUORwt5gD2RwCx9qoPZlRySbhHBiiWOahQbumAU3YKAtp07vbz84eZunTcZqJ6-81HA2SDEkXt8MIHLZUZiAfMJwznSB65m3ZYla1OFFLLSutynEGFoSf7GYHBrGpJc50Gh0ukFpPuU~P7qJD0-Pdg__"
                      alt="profileImage"
                    />
                  <div className="flex flex-col items-start w-2/3 gap-1">
                    <span className="text-[14.13px] font-bold text-[#F0F0F0] ">Eslam Mohamed</span>
                    <p className="text-[10.99px] text-[#E0E0E0] truncate w-full">The dsadsdfds sad longest word in any of the major...</p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-end">
                    <span className="text-[10.99px] text-[#E0E0E0]">10:25 AM</span>
                    <span className="text-[9.42px] rounded-full w-4 h-4 bg-main-color text-center">1</span>
                  </div>
              </div>
              {/* End chat section */}
                {/* chat section */}
                <div className="flex gap-1 hover:bg-[#FFB37E42] p-3">
                <img
                      className="icon rounded-full w-12 h-12 object-cover"
                      src="https://s3-alpha-sig.figma.com/img/a6fe/eb68/95f29e395de77bcf4629e8cb90eff03b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RTvtmhNlOf02YSASrJ~6A0SVBMj91klpDWNQXCJZRbzJaRdK-R2qBMuitTHuJT177eLaLNyjWJntGp4bSgXR1eF6aw5vdOyVU4~c6gYD9UI7qc2wgf0yARTXioGfZJG3sznP~Zh5K3M8iy0tNICFZgzSoigPkddtOw40jjkid5DdzmsKqQHML832wlDJvyohjUORwt5gD2RwCx9qoPZlRySbhHBiiWOahQbumAU3YKAtp07vbz84eZunTcZqJ6-81HA2SDEkXt8MIHLZUZiAfMJwznSB65m3ZYla1OFFLLSutynEGFoSf7GYHBrGpJc50Gh0ukFpPuU~P7qJD0-Pdg__"
                      alt="profileImage"
                    />
                  <div className="flex flex-col items-start w-2/3 gap-1">
                    <span className="text-[14.13px] font-bold text-[#F0F0F0] ">Eslam Mohamed</span>
                    <p className="text-[10.99px] text-[#E0E0E0] truncate w-full">The dsadsdfds sad longest word in any of the major...</p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-end">
                    <span className="text-[10.99px] text-[#E0E0E0]">10:25 AM</span>
                    <span className="text-[9.42px] rounded-full w-4 h-4 bg-main-color text-center">1</span>
                  </div>
              </div>
              {/* End chat section */}
            </div>
       </section>
         {/*End Left Side Chat */}
           {/* Right Side Chat */}
       <section className="w-3/4  p-3">
          {/* when not select Chat */}
              <div className="hidden flex w-full h-full justify-center items-center">
                  <p className="  text-white text-[14.54px] text-bold rounded-md p-2 bg-[#4F3C2E]">Select a chat to start messaging</p>
              </div>
          {/*end  when not select Chat */}
          {/* Chat Message */}
          <div className="flex flex-col">
            <header className="w-full flex justify-between  p-3">
            <div className="flex gap-2 items-center w-1/2">
                  <div className="relative">
                        <img
                                className="icon rounded-full w-12 h-12 object-cover"
                                src="https://s3-alpha-sig.figma.com/img/d649/4146/b06fe484bb699544e290949b0e0abefa?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RCtx8BfYPNPO8RgZKuqWobbjPiODSAkdt~JVFlNzo0cHmKl9vWc9T-d4wGmdDMLcwhJQ1lqeRrpAcdJ7JgYh~dyqOMMLxXHhOxU6rYbJKrE3RkgO33QDPPn0u7YzA3qml7TzfH9yzQVV2c0YQScGCrO89hKdaKmtG16zArvZhz2Rxx2MtRXPZlMCPQutauBr7D7H5276yxT2mst9vtPnxco4rklmdjl1hH3g9ggs~bN7UW3utluP19QAFgf-j5OzR~hepqYk8Qe8rVXEsMWRFPE17EAGbUzvOkE-pwjw~fePMZ2o2eldh8T5EyVy8AINqKVAUidAe96t1MSPl~4nGw__"
                                alt="profileImage"
                            />
                      <span className="absolute end-0 bottom-0 bg-[#56DE00] w-3 h-3 rounded-full"></span>
                  </div>
                  
                   <div className="flex flex-col items-start w-2/3 gap-1">
                    <span className="text-[14.13px] font-bold text-[#F0F0F0] ">Eslam Mohamed</span>
                    <p className="text-[10.99px] text-[#56DE00] ">online</p>
                  </div>
            </div>
            <div>
               <i class="fas fa-ellipsis-v"></i>
            </div>
            </header>
            {/* chat Body */}
              <div className="max-h-[80vh] overflow-y-auto bg-black px-3 py-4 flex flex-col gap-5 " id="message">
                {/* Recever section */}
                  <div className="flex w-full gap-3 items-start">
                      <img
                                    className="icon rounded-full w-14 h-14 object-cover"
                                    src="https://s3-alpha-sig.figma.com/img/d649/4146/b06fe484bb699544e290949b0e0abefa?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RCtx8BfYPNPO8RgZKuqWobbjPiODSAkdt~JVFlNzo0cHmKl9vWc9T-d4wGmdDMLcwhJQ1lqeRrpAcdJ7JgYh~dyqOMMLxXHhOxU6rYbJKrE3RkgO33QDPPn0u7YzA3qml7TzfH9yzQVV2c0YQScGCrO89hKdaKmtG16zArvZhz2Rxx2MtRXPZlMCPQutauBr7D7H5276yxT2mst9vtPnxco4rklmdjl1hH3g9ggs~bN7UW3utluP19QAFgf-j5OzR~hepqYk8Qe8rVXEsMWRFPE17EAGbUzvOkE-pwjw~fePMZ2o2eldh8T5EyVy8AINqKVAUidAe96t1MSPl~4nGw__"
                                    alt="profileImage"
                        />
                        <div className="flex flex-col gap-3 w-2/3 items-start">
                          {/* info part */}
                          <div className="flex gap-3">
                            <span className="text-[11.66px] text-[#DADADA]">Eslam Mohamed Amir</span>
                            <span className="text-[8.74px] text-[#A0A0A0]">10:30</span>
                          </div>
                           {/*end info part */}
                           {/* message part */}
                           <p className="bg-[#292929] p-3 rounded-2xl text-start text-[13.11px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam eveniet amet voluptatem praesentium enim earum dicta. Cupiditate
                           </p>
                           {/*end  message part */}

                        </div>
                  </div>
                {/*End Recever section */}

                 {/* sender section */}
                 <div className="flex w-full gap-3 items-start" dir="rtl">
                      <img
                                    className="icon rounded-full w-14 h-14 object-cover"
                                    src="https://s3-alpha-sig.figma.com/img/d649/4146/b06fe484bb699544e290949b0e0abefa?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RCtx8BfYPNPO8RgZKuqWobbjPiODSAkdt~JVFlNzo0cHmKl9vWc9T-d4wGmdDMLcwhJQ1lqeRrpAcdJ7JgYh~dyqOMMLxXHhOxU6rYbJKrE3RkgO33QDPPn0u7YzA3qml7TzfH9yzQVV2c0YQScGCrO89hKdaKmtG16zArvZhz2Rxx2MtRXPZlMCPQutauBr7D7H5276yxT2mst9vtPnxco4rklmdjl1hH3g9ggs~bN7UW3utluP19QAFgf-j5OzR~hepqYk8Qe8rVXEsMWRFPE17EAGbUzvOkE-pwjw~fePMZ2o2eldh8T5EyVy8AINqKVAUidAe96t1MSPl~4nGw__"
                                    alt="profileImage"
                        />
                        <div className="flex flex-col gap-3 w-2/3 items-start">
                          {/* info part */}
                          <div className="flex gap-3">
                            <span className="text-[11.66px] text-[#DADADA]">Eslam Mohamed Amir</span>
                            <span className="text-[8.74px] text-[#A0A0A0]">10:30</span>
                          </div>
                           {/*end info part */}
                           {/* message part */}
                           <p className="bg-[#FA8836] p-3 rounded-2xl text-start text-[13.11px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam eveniet amet voluptatem praesentium enim earum dicta. Cupiditate
                           </p>
                           {/*end  message part */}

                        </div>
                  </div>
                {/*End sender section */}

                 {/* Recever section */}
                 <div className="flex w-full gap-3 items-start">
                      <img
                                    className="icon rounded-full w-14 h-14 object-cover"
                                    src="https://s3-alpha-sig.figma.com/img/d649/4146/b06fe484bb699544e290949b0e0abefa?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RCtx8BfYPNPO8RgZKuqWobbjPiODSAkdt~JVFlNzo0cHmKl9vWc9T-d4wGmdDMLcwhJQ1lqeRrpAcdJ7JgYh~dyqOMMLxXHhOxU6rYbJKrE3RkgO33QDPPn0u7YzA3qml7TzfH9yzQVV2c0YQScGCrO89hKdaKmtG16zArvZhz2Rxx2MtRXPZlMCPQutauBr7D7H5276yxT2mst9vtPnxco4rklmdjl1hH3g9ggs~bN7UW3utluP19QAFgf-j5OzR~hepqYk8Qe8rVXEsMWRFPE17EAGbUzvOkE-pwjw~fePMZ2o2eldh8T5EyVy8AINqKVAUidAe96t1MSPl~4nGw__"
                                    alt="profileImage"
                        />
                        <div className="flex flex-col gap-3 w-2/3 items-start">
                          {/* info part */}
                          <div className="flex gap-3">
                            <span className="text-[11.66px] text-[#DADADA]">Eslam Mohamed Amir</span>
                            <span className="text-[8.74px] text-[#A0A0A0]">10:30</span>
                          </div>
                           {/*end info part */}
                           {/* message part */}
                           <p className="bg-[#292929] p-3 rounded-2xl text-start text-[13.11px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam eveniet amet voluptatem praesentium enim earum dicta. Cupiditate
                           </p>
                           {/*end  message part */}

                        </div>
                  </div>
                {/*End Recever section */}

                 {/* sender section */}
                 <div className="flex w-full gap-3 items-start" dir="rtl">
                      <img
                                    className="icon rounded-full w-14 h-14 object-cover"
                                    src="https://s3-alpha-sig.figma.com/img/d649/4146/b06fe484bb699544e290949b0e0abefa?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RCtx8BfYPNPO8RgZKuqWobbjPiODSAkdt~JVFlNzo0cHmKl9vWc9T-d4wGmdDMLcwhJQ1lqeRrpAcdJ7JgYh~dyqOMMLxXHhOxU6rYbJKrE3RkgO33QDPPn0u7YzA3qml7TzfH9yzQVV2c0YQScGCrO89hKdaKmtG16zArvZhz2Rxx2MtRXPZlMCPQutauBr7D7H5276yxT2mst9vtPnxco4rklmdjl1hH3g9ggs~bN7UW3utluP19QAFgf-j5OzR~hepqYk8Qe8rVXEsMWRFPE17EAGbUzvOkE-pwjw~fePMZ2o2eldh8T5EyVy8AINqKVAUidAe96t1MSPl~4nGw__"
                                    alt="profileImage"
                        />
                        <div className="flex flex-col gap-3 w-2/3 items-start">
                          {/* info part */}
                          <div className="flex gap-3">
                            <span className="text-[11.66px] text-[#DADADA]">Eslam Mohamed Amir</span>
                            <span className="text-[8.74px] text-[#A0A0A0]">10:30</span>
                          </div>
                           {/*end info part */}
                           {/* message part */}
                           <p className="bg-[#FA8836] p-3 rounded-2xl text-start text-[13.11px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam eveniet amet voluptatem praesentium enim earum dicta. Cupiditate
                           </p>
                           {/*end  message part */}

                        </div>
                  </div>
                {/*End sender section */}


                 {/* Recever section */}
                 <div className="flex w-full gap-3 items-start">
                      <img
                                    className="icon rounded-full w-14 h-14 object-cover"
                                    src="https://s3-alpha-sig.figma.com/img/d649/4146/b06fe484bb699544e290949b0e0abefa?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RCtx8BfYPNPO8RgZKuqWobbjPiODSAkdt~JVFlNzo0cHmKl9vWc9T-d4wGmdDMLcwhJQ1lqeRrpAcdJ7JgYh~dyqOMMLxXHhOxU6rYbJKrE3RkgO33QDPPn0u7YzA3qml7TzfH9yzQVV2c0YQScGCrO89hKdaKmtG16zArvZhz2Rxx2MtRXPZlMCPQutauBr7D7H5276yxT2mst9vtPnxco4rklmdjl1hH3g9ggs~bN7UW3utluP19QAFgf-j5OzR~hepqYk8Qe8rVXEsMWRFPE17EAGbUzvOkE-pwjw~fePMZ2o2eldh8T5EyVy8AINqKVAUidAe96t1MSPl~4nGw__"
                                    alt="profileImage"
                        />
                        <div className="flex flex-col gap-3 w-2/3 items-start">
                          {/* info part */}
                          <div className="flex gap-3">
                            <span className="text-[11.66px] text-[#DADADA]">Eslam Mohamed Amir</span>
                            <span className="text-[8.74px] text-[#A0A0A0]">10:30</span>
                          </div>
                           {/*end info part */}
                           {/* message part */}
                           <p className="bg-[#292929] p-3 rounded-2xl text-start text-[13.11px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam eveniet amet voluptatem praesentium enim earum dicta. Cupiditate
                           </p>
                           {/*end  message part */}

                        </div>
                  </div>
                {/*End Recever section */}

                 {/* sender section */}
                 <div className="flex w-full gap-3 items-start" dir="rtl">
                      <img
                                    className="icon rounded-full w-14 h-14 object-cover"
                                    src="https://s3-alpha-sig.figma.com/img/d649/4146/b06fe484bb699544e290949b0e0abefa?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RCtx8BfYPNPO8RgZKuqWobbjPiODSAkdt~JVFlNzo0cHmKl9vWc9T-d4wGmdDMLcwhJQ1lqeRrpAcdJ7JgYh~dyqOMMLxXHhOxU6rYbJKrE3RkgO33QDPPn0u7YzA3qml7TzfH9yzQVV2c0YQScGCrO89hKdaKmtG16zArvZhz2Rxx2MtRXPZlMCPQutauBr7D7H5276yxT2mst9vtPnxco4rklmdjl1hH3g9ggs~bN7UW3utluP19QAFgf-j5OzR~hepqYk8Qe8rVXEsMWRFPE17EAGbUzvOkE-pwjw~fePMZ2o2eldh8T5EyVy8AINqKVAUidAe96t1MSPl~4nGw__"
                                    alt="profileImage"
                        />
                        <div className="flex flex-col gap-3 w-2/3 items-start">
                          {/* info part */}
                          <div className="flex gap-3">
                            <span className="text-[11.66px] text-[#DADADA]">Eslam Mohamed Amir</span>
                            <span className="text-[8.74px] text-[#A0A0A0]">10:30</span>
                          </div>
                           {/*end info part */}
                           {/* message part */}
                           <p className="bg-[#FA8836] p-3 rounded-2xl text-start text-[13.11px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam eveniet amet voluptatem praesentium enim earum dicta. Cupiditate
                           </p>
                           {/*end  message part */}

                        </div>
                  </div>
                {/*End sender section */}


                 {/* Recever section */}
                 <div className="flex w-full gap-3 items-start">
                      <img
                                    className="icon rounded-full w-14 h-14 object-cover"
                                    src="https://s3-alpha-sig.figma.com/img/d649/4146/b06fe484bb699544e290949b0e0abefa?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RCtx8BfYPNPO8RgZKuqWobbjPiODSAkdt~JVFlNzo0cHmKl9vWc9T-d4wGmdDMLcwhJQ1lqeRrpAcdJ7JgYh~dyqOMMLxXHhOxU6rYbJKrE3RkgO33QDPPn0u7YzA3qml7TzfH9yzQVV2c0YQScGCrO89hKdaKmtG16zArvZhz2Rxx2MtRXPZlMCPQutauBr7D7H5276yxT2mst9vtPnxco4rklmdjl1hH3g9ggs~bN7UW3utluP19QAFgf-j5OzR~hepqYk8Qe8rVXEsMWRFPE17EAGbUzvOkE-pwjw~fePMZ2o2eldh8T5EyVy8AINqKVAUidAe96t1MSPl~4nGw__"
                                    alt="profileImage"
                        />
                        <div className="flex flex-col gap-3 w-2/3 items-start">
                          {/* info part */}
                          <div className="flex gap-3">
                            <span className="text-[11.66px] text-[#DADADA]">Eslam Mohamed Amir</span>
                            <span className="text-[8.74px] text-[#A0A0A0]">10:30</span>
                          </div>
                           {/*end info part */}
                           {/* message part */}
                           <p className="bg-[#292929] p-3 rounded-2xl text-start text-[13.11px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam eveniet amet voluptatem praesentium enim earum dicta. Cupiditate
                           </p>
                           {/*end  message part */}

                        </div>
                  </div>
                {/*End Recever section */}

                 {/* sender section */}
                 <div className="flex w-full gap-3 items-start" dir="rtl">
                      <img
                                    className="icon rounded-full w-14 h-14 object-cover"
                                    src="https://s3-alpha-sig.figma.com/img/d649/4146/b06fe484bb699544e290949b0e0abefa?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RCtx8BfYPNPO8RgZKuqWobbjPiODSAkdt~JVFlNzo0cHmKl9vWc9T-d4wGmdDMLcwhJQ1lqeRrpAcdJ7JgYh~dyqOMMLxXHhOxU6rYbJKrE3RkgO33QDPPn0u7YzA3qml7TzfH9yzQVV2c0YQScGCrO89hKdaKmtG16zArvZhz2Rxx2MtRXPZlMCPQutauBr7D7H5276yxT2mst9vtPnxco4rklmdjl1hH3g9ggs~bN7UW3utluP19QAFgf-j5OzR~hepqYk8Qe8rVXEsMWRFPE17EAGbUzvOkE-pwjw~fePMZ2o2eldh8T5EyVy8AINqKVAUidAe96t1MSPl~4nGw__"
                                    alt="profileImage"
                        />
                        <div className="flex flex-col gap-3 w-2/3 items-start">
                          {/* info part */}
                          <div className="flex gap-3">
                            <span className="text-[11.66px] text-[#DADADA]">Eslam Mohamed Amir</span>
                            <span className="text-[8.74px] text-[#A0A0A0]">10:30</span>
                          </div>
                           {/*end info part */}
                           {/* message part */}
                           <p className="bg-[#FA8836] p-3 rounded-2xl text-start text-[13.11px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam eveniet amet voluptatem praesentium enim earum dicta. Cupiditate
                           </p>
                           {/*end  message part */}

                        </div>
                  </div>
                {/*End sender section */}

                 {/* Recever section */}
                 <div className="flex w-full gap-3 items-start">
                      <img
                                    className="icon rounded-full w-14 h-14 object-cover"
                                    src="https://s3-alpha-sig.figma.com/img/d649/4146/b06fe484bb699544e290949b0e0abefa?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RCtx8BfYPNPO8RgZKuqWobbjPiODSAkdt~JVFlNzo0cHmKl9vWc9T-d4wGmdDMLcwhJQ1lqeRrpAcdJ7JgYh~dyqOMMLxXHhOxU6rYbJKrE3RkgO33QDPPn0u7YzA3qml7TzfH9yzQVV2c0YQScGCrO89hKdaKmtG16zArvZhz2Rxx2MtRXPZlMCPQutauBr7D7H5276yxT2mst9vtPnxco4rklmdjl1hH3g9ggs~bN7UW3utluP19QAFgf-j5OzR~hepqYk8Qe8rVXEsMWRFPE17EAGbUzvOkE-pwjw~fePMZ2o2eldh8T5EyVy8AINqKVAUidAe96t1MSPl~4nGw__"
                                    alt="profileImage"
                        />
                        <div className="flex flex-col gap-3 w-2/3 items-start">
                          {/* info part */}
                          <div className="flex gap-3">
                            <span className="text-[11.66px] text-[#DADADA]">Eslam Mohamed Amir</span>
                            <span className="text-[8.74px] text-[#A0A0A0]">10:30</span>
                          </div>
                           {/*end info part */}
                           {/* message part */}
                           <p className="bg-[#292929] p-3 rounded-2xl text-start text-[13.11px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam eveniet amet voluptatem praesentium enim earum dicta. Cupiditate
                           </p>
                           {/*end  message part */}

                        </div>
                  </div>
                {/*End Recever section */}

                 {/* sender section */}
                 <div className="flex w-full gap-3 items-start" dir="rtl">
                      <img
                                    className="icon rounded-full w-14 h-14 object-cover"
                                    src="https://s3-alpha-sig.figma.com/img/d649/4146/b06fe484bb699544e290949b0e0abefa?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RCtx8BfYPNPO8RgZKuqWobbjPiODSAkdt~JVFlNzo0cHmKl9vWc9T-d4wGmdDMLcwhJQ1lqeRrpAcdJ7JgYh~dyqOMMLxXHhOxU6rYbJKrE3RkgO33QDPPn0u7YzA3qml7TzfH9yzQVV2c0YQScGCrO89hKdaKmtG16zArvZhz2Rxx2MtRXPZlMCPQutauBr7D7H5276yxT2mst9vtPnxco4rklmdjl1hH3g9ggs~bN7UW3utluP19QAFgf-j5OzR~hepqYk8Qe8rVXEsMWRFPE17EAGbUzvOkE-pwjw~fePMZ2o2eldh8T5EyVy8AINqKVAUidAe96t1MSPl~4nGw__"
                                    alt="profileImage"
                        />
                        <div className="flex flex-col gap-3 w-2/3 items-start">
                          {/* info part */}
                          <div className="flex gap-3">
                            <span className="text-[11.66px] text-[#DADADA]">Eslam Mohamed Amir</span>
                            <span className="text-[8.74px] text-[#A0A0A0]">10:30</span>
                          </div>
                           {/*end info part */}
                           {/* message part */}
                           <p className="bg-[#FA8836] p-3 rounded-2xl text-start text-[13.11px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam eveniet amet voluptatem praesentium enim earum dicta. Cupiditate
                           </p>
                           {/*end  message part */}

                        </div>
                  </div>
                {/*End sender section */}
              </div>
            {/*End chat Body */}
          </div>
          {/* end Chat Message */}
        {/* Message controller */}
        <div className="w-full flex p-3 items-center">
          {/* Input Section */}
          <div className="w-3/4 flex items-center gap-2">
            <button className="p-2 bg-transparent">
              <i className="fa-regular fa-face-smile text-gray-500 text-lg"></i>
            </button>
            <input
              className="p-2 bg-transparent w-full focus:outline-none"
              type="text"
              placeholder="Type message..."
            />
          </div>

          {/* Actions Section */}
          <div className="w-1/4 flex justify-end gap-2">
            <button className="p-2 bg-transparent">
              <i class="fa-solid fa-paperclip text-gray-500 text-lg"></i>
            </button>
            <button className="p-2 bg-transparent">
              <i class="fa-solid fa-microphone text-gray-500 text-lg"></i>
               
            </button>
            <button className="p-2 bg-[#9A9A9A] text-white rounded-lg">
              Send <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
        {/* End Message Controller */}


       </section>
         {/* End Right Side Chat */}
      
      </main>
    </div>
  );
}

export default Chat;
