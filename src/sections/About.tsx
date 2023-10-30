import { motion as m } from "framer-motion";

const About = () => {
  return (
    <div className="h-[55vh] mt-10 flex flex-wrap justify-center items-center">
      <m.div
        className="w-4/5 bg-yellow-100 border border-gray-950 h-4/5 text-slate-900 flex flex-wrap justify-center items-center px-5 pb-5 pt-2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          delay: 0.03,
          duration: 0.4
        }}
      >
        <h2 className="text-left text-3xl w-full font-comfortaa">About AnotherStore</h2>
        <p className="p-4 font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies tincidunt porta. Cras blandit aliquet diam in tincidunt. Fusce ut tempus tortor. Nulla in turpis ac ligula faucibus gravida. Duis non lorem ex. Aliquam eget pretium arcu, vel finibus neque. Cras sed viverra mi. Duis nec justo velit. Quisque nunc tortor, malesuada at ultricies eu, commodo ut risus. Proin nec augue massa. Nulla congue augue sed quam fringilla, id elementum sapien venenatis.</p>
        <p className="p-4 font-montserrat">Suspendisse in neque at mauris tincidunt interdum et non odio. Nulla facilisi. Nunc hendrerit gravida libero, et tempor nisl rhoncus eu. Sed lacinia mauris sed ligula cursus egestas.</p>
      </m.div>
    </div>
  );
}
 
export default About;