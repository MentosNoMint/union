import InformationBlock from "@/components/InformationBlock";
import CompanySlider from "@/components/ui/sliderSection/CompanySlider";

const SliderSection = () => {
    return (
        <div className={'w-full flex justify-center bg-white pt-[15rem]'}>
            <div className={'w-full flex flex-col max-w-[91.25rem] items-center'}>
                <InformationBlock/>
                <CompanySlider/>
            </div>
        </div>
    )
}

export default SliderSection;