
import Image from 'next/image'
function Block({title,desc,pic}){
 return(
   
        <div className="flex flex-row items-center "> 
            <Image
            src={`/${pic}.png`}
            alt="logo"
            width={50}
            height={50}
            className=" w-8 h-8 "></Image>
             <div className="flex flex-col items-center pt-10 pb-10 pr-10 pl-2">
        <h1 className="text-sm font-bold">{title}</h1>
        <p className="text-xs">{desc}</p>
        </div>
       
    </div>
 )
}
export default Block;
