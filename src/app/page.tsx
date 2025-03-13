import Header from "@/components/Header";
import HeroBlock from "@/components/HeroBlock";

export default function Home() {
    return (
        <div className={'w-full flex justify-center bg-[#F2F2F2]'}>
            <div className={'w-full flex flex-col items-center'}>
                <Header/>
                <HeroBlock/>
            </div>
        </div>
    );
}
