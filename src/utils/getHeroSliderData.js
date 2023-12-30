
const getHeroSliderData = async () => {
    try {
        const res = await fetch("../Data/sliderData.js");
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default getHeroSliderData;