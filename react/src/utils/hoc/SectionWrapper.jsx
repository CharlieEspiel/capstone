import { motion } from "framer-motion"
import { staggerContainer } from "../motion"


const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.30 }}
                exit={'hidden'}
                className="relative w-full z-0"
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        )
    }

export default SectionWrapper