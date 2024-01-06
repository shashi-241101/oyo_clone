import Image from 'next/image'
import Block from './block.js'
function Header1() {
  return (
    <div className="flex justify-between hover:cursor-pointer ">
       <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className=" w-28 h-28"
      />
      <div className="h-full flex">
        <Block title="24*7:+1 8064255674" desc="Call to book or enquire" pic="contact"/>
        <Block title="OYO For Business" desc="Corporate booking solution" pic="business"/>
        <Block title="Login/Signup" desc="" pic="login"/>
        </div>
    </div>
  )
}

export default Header1;