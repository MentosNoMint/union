import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
    return (
        <div className={'w-full flex justify-center bg-[#F2F2F2]'}>
            <div className={'w-full flex flex-col items-center'}>
                <Header/>
                <HeroSection/>
                <AboutSection/>
            </div>
        </div>
    );
}
