

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen max-w-full rounded-xl my-10 bg-center bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/kygt643/banner.jpg)'}}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:w-[897px]">
                        <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">From mastering classic French cuisine to experimenting with exotic flavors from around the world, unleash your creativity in the kitchen and elevate your cooking skills to new heights.</p>
                        <div className="flex justify-center gap-4">
                        <button className="btn bg-[#0BE58A] rounded-full text-[#150B2B] font-semibold">Explore Now</button>
                        <button className="btn bg-transparent rounded-full text-white font-semibold">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;