import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SliderSection from "@/components/SliderSection";
import FormBlock from "@/components/FormBlock";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";

export default function Home() {
    return (
        <div className={'w-full flex justify-center bg-[#F2F2F2]'}>
            <div className={'w-full flex flex-col items-center'}>
                <Header/>
                <HeroSection/>
                <AboutSection/>
                <SliderSection/>
                <FaqSection/>
                <FormBlock/>
                <Footer/>
            </div>
        </div>
    );
}
