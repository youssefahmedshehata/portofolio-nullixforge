import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface Props {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}

export function SectionHeader({ eyebrow, title, children }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className="mb-[64px] max-w-[800px]"
    >
      <span className="block font-mono text-[14px] leading-[20px] tracking-[1.4px] text-white uppercase mb-[16px]">
        {eyebrow}
      </span>
      <h2 className="text-[48px] leading-[48px] font-normal tracking-[-1.2px] text-white mb-[24px]">
        {title}
      </h2>
      {children && (
        <div className="text-[18px] leading-[28px] text-[#dadbdf] font-normal m-0">
          {children}
        </div>
      )}
    </motion.div>
  );
}
